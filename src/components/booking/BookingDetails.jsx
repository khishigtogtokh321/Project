import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowLeft, FiMapPin, FiClock, FiCheck } from 'react-icons/fi';
import { useBookingStore } from '../../store/BookingStore';

/**
 * BookingDetails - Service selection and patient info overlay
 * Opens after user selects a time slot
 * Two-step flow: 1) Service Selection 2) Patient Info Form
 */
export default function BookingDetails() {
    const {
        isBookingDetailsOpen,
        closeBookingDetails,
        selectedBranch,
        selectedTimeSlot,
        selectedService,
        selectService,
        patientInfo,
        setPatientInfo,
    } = useBookingStore();

    // Local state for current step
    const [step, setStep] = useState(1); // 1: Service, 2: Patient Info

    const services = [
        { id: 'lombo', name: 'Ломбо', description: 'Шүд цэвэрлэгээ, оношлогоо' },
        { id: 'shud-awah', name: 'Шүд авахуулах', description: 'Шүд авах эмчилгээ' },
    ];

    // Validation
    const isPhoneValid = patientInfo.phone && /^[0-9]{8}$/.test(patientInfo.phone);
    const canSubmit = patientInfo.firstName && patientInfo.lastName && isPhoneValid;

    const handleBack = () => {
        if (step === 2) {
            setStep(1);
        } else {
            closeBookingDetails();
            setStep(1);
        }
    };

    const handleServiceSelect = (service) => {
        selectService(service);
    };

    const handleContinue = () => {
        if (step === 1 && selectedService) {
            setStep(2);
        } else if (step === 2 && canSubmit) {
            // Final submission
            console.log('Booking submitted:', { selectedService, patientInfo });
            alert('Захиалга амжилттай илгээгдлээ!');
            closeBookingDetails();
            setStep(1);
        }
    };

    const handleInputChange = (field, value) => {
        // Phone number: only allow digits, max 8 chars
        if (field === 'phone') {
            value = value.replace(/\D/g, '').slice(0, 8);
        }
        setPatientInfo({ [field]: value });
    };

    if (!isBookingDetailsOpen) return null;

    // Animation variants for step transitions (Vertical: Top to Bottom)
    const slideVariants = {
        enter: { opacity: 0, y: -30 },
        center: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 30 },
    };

    return (
        <AnimatePresence>
            {isBookingDetailsOpen && (
                <div className="fixed inset-0 z-[9999]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"
                    />

                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 220 }}
                        className="absolute inset-x-0 bottom-0 top-0 bg-white flex flex-col overflow-hidden"
                    >
                        {/* ===== STICKY HEADER (Compact) ===== */}
                        <div className="sticky top-0 z-30 bg-white border-b border-gray-100 px-4 py-3 flex items-center gap-3">
                            <h2 className="flex-1 text-center text-base font-semibold text-gray-800 pr-8">
                                Эмнэлгийн нэр
                            </h2>
                        </div>

                        {/* ===== SCROLLABLE CENTER ===== */}
                        <div className="flex-1 overflow-y-auto px-4 py-6">
                            <div className="max-w-md mx-auto">
                                <AnimatePresence mode="wait">
                                    {step === 1 && (
                                        <motion.div
                                            key="step1"
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.2 }}
                                            className="space-y-6"
                                        >
                                            {/* Service Selection */}
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-500 mb-3">Үйлчилгээ сонгох</h3>
                                                <div className="space-y-3">
                                                    {services.map((service) => (
                                                        <button
                                                            key={service.id}
                                                            onClick={() => handleServiceSelect(service)}
                                                            className={`
                                                                w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center justify-between
                                                                ${selectedService?.id === service.id
                                                                    ? 'border-gray-900 bg-gray-50 shadow-sm'
                                                                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}
                                                            `}
                                                        >
                                                            <div>
                                                                <span className="block text-base font-semibold text-gray-900">
                                                                    {service.name}
                                                                </span>
                                                                <span className="block text-sm text-gray-500 mt-1">
                                                                    {service.description}
                                                                </span>
                                                            </div>
                                                            {selectedService?.id === service.id && (
                                                                <FiCheck className="w-5 h-5 text-gray-900" />
                                                            )}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {step === 2 && (
                                        <motion.div
                                            key="step2"
                                            variants={slideVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{ duration: 0.2 }}
                                            className="space-y-5"
                                        >
                                            {/* Patient Info Form */}
                                            <h3 className="text-sm font-medium text-gray-500 mb-3">Хувийн мэдээлэл</h3>

                                            {/* LastName */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Овог <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={patientInfo.lastName || ''}
                                                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                                                    placeholder="Овог"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                                />
                                            </div>

                                            {/* FirstName */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Нэр <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    value={patientInfo.firstName || ''}
                                                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                                                    placeholder="Нэр"
                                                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                                />
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Утасны дугаар <span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    value={patientInfo.phone || ''}
                                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                                    placeholder="8 оронтой дугаар"
                                                    className={`
                                                        w-full px-4 py-3 border rounded-sm focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all
                                                        ${patientInfo.phone && !isPhoneValid ? 'border-red-400' : 'border-gray-300'}
                                                    `}
                                                />
                                                {patientInfo.phone && !isPhoneValid && (
                                                    <p className="text-xs text-red-500 mt-1">8 оронтой дугаар оруулна уу</p>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* ===== STICKY FOOTER (Condensed) ===== */}
                        <div className="sticky bottom-0 z-30 bg-white border-t border-gray-100 px-4 py-3">
                            {/* Context info row */}
                            <div className="flex items-center justify-center gap-4 text-xs text-gray-500 mb-3">
                                <div className="flex items-center gap-1">
                                    <FiMapPin className="w-3.5 h-3.5" />
                                    <span>{selectedBranch?.name || 'Салбар'}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <FiClock className="w-3.5 h-3.5" />
                                    <span>{selectedTimeSlot?.date || 'Огноо'} • {selectedTimeSlot?.time || 'Цаг'}</span>
                                </div>
                            </div>
                            {/* Action buttons */}
                            <div className="flex gap-3">
                                <button
                                    onClick={handleBack}
                                    className="flex-1 py-3 px-4 rounded-xl border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                                >
                                    Буцах
                                </button>
                                <button
                                    onClick={handleContinue}
                                    disabled={step === 1 ? !selectedService : !canSubmit}
                                    className={`
                                        flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-200
                                        ${(step === 1 ? selectedService : canSubmit)
                                            ? 'bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.98]'
                                            : 'bg-gray-200 text-gray-400 cursor-not-allowed'}
                                    `}
                                >
                                    {step === 1 ? 'Үргэлжлүүлэх' : 'Захиалах'}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
