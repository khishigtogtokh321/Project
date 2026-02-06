import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';
import { useBookingStore } from '../../store/BookingStore';

/**
 * TimeSlotModal - Zocdoc-style detailed availability selector
 */
export default function TimeSlotModal() {
    const {
        isTimeSlotModalOpen,
        closeTimeSlotModal,
        selectedDoctor,
        selectedTimeSlot,
        selectTimeSlot,
        initialScrollDate
    } = useBookingStore();

    const dateRefs = useRef({});

    // Extended mock data for the modal to show "More availability"
    // In a real app, this would come from an API
    const availabilityData = [
        {
            day: 'Өнөөдөр, 2-р сарын 5',
            slots: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00']
        },
        {
            day: 'Даваа, 2-р сарын 6',
            slots: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00'],
        },
        {
            day: 'Даваа, 2-р сарын 16',
            slots: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00']
        },
        {
            day: 'Мягмар, 2-р сарын 17',
            slots: ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '13:30', '14:00', '14:30', '15:00']
        },
        {
            day: 'Лхагва, 2-р сарын 18',
            slots: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '14:00', '14:30', '15:00']
        },
        {
            day: 'Пүрэв, 2-р сарын 19 - Ням, 2-р сарын 22',
            slots: [],
            noAppts: true
        }
    ];

    const categorizeSlots = (slots) => {
        const groups = { morning: [], afternoon: [], evening: [] };
        slots.forEach(time => {
            const hour = parseInt(time.split(':')[0]);
            if (hour < 12 && !time.includes('12:')) {
                groups.morning.push(time);
            } else if (hour >= 12 && hour < 17) {
                groups.afternoon.push(time);
            } else {
                groups.evening.push(time);
            }
        });
        return groups;
    };

    const scrollToDate = (day) => {
        const element = dateRefs.current[day];
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // Effect to handle initial scroll when modal opens from DoctorSelector
    useEffect(() => {
        if (isTimeSlotModalOpen && initialScrollDate) {
            const timer = setTimeout(() => {
                const dateNum = initialScrollDate.match(/\d+/)?.[0];
                if (dateNum) {
                    const targetSection = availabilityData.find(d => d.day.includes(`сарын ${dateNum}`));
                    if (targetSection) {
                        scrollToDate(targetSection.day);
                    }
                }
            }, 300); // Slightly longer for the modal animation to settle
            return () => clearTimeout(timer);
        }
    }, [isTimeSlotModalOpen, initialScrollDate]);

    if (!selectedDoctor) return null;

    return (
        <AnimatePresence>
            {isTimeSlotModalOpen && (
                <div className="fixed inset-0 z-[9999]">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeTimeSlotModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"
                    />

                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 220 }}
                        className="absolute inset-x-0 bottom-0 top-0 bg-white shadow-2xl flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="px-8 py-2 border-b border-gray-50 flex items-center bg-white z-20">
                            <button
                                onClick={closeTimeSlotModal}
                                className="p-2 -ml-2 text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <FiX className="w-7 h-7" />
                            </button>
                            <h2 className="text-xl  font-bold text-gray-700 ml-4">Цаг захиалах</h2>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto no-scrollbar  scroll-smooth">
                            <div className="max-w-2xl mx-auto py-6">
                                <div className="space-y-20">
                                    {availabilityData.map((section, idx) => {
                                        const groups = categorizeSlots(section.slots);

                                        return (
                                            <div
                                                key={idx}
                                                ref={el => dateRefs.current[section.day] = el}
                                                className="relative px-10 scroll-mt-4"
                                            >
                                                {/* Date Label */}
                                                <div className="sticky top-0 bg-white py-1 z-10 mb-1 border-b border-gray-50">
                                                    <h4 className="text-[13px] text-gray-600 tracking-tight">
                                                        {section.day}
                                                    </h4>
                                                </div>

                                                {section.noAppts ? (
                                                    <div className="py-8 border border-dashed border-gray-100 rounded-3xl bg-gray-50/20 flex flex-col items-center justify-center opacity-60">
                                                        <p className="text-[14px] text-gray-400 font-medium italic">Боломжит цаг байхгүй</p>
                                                    </div>
                                                ) : (
                                                    <div className="pl-2 space-y-3">
                                                        {groups.morning.length > 0 && (
                                                            <div className="space-y-1.5">
                                                                <div className="flex items-center gap-2 opacity-30">
                                                                    <span className="text-[8px] font-bold tracking-widest uppercase">Өглөө</span>
                                                                    <div className="h-px bg-gray-100 flex-1" />
                                                                </div>
                                                                <div className="grid grid-cols-4 gap-2">
                                                                    {groups.morning.map((time, sIdx) => (
                                                                        <TimeButton key={sIdx} time={time} day={section.day} isSelected={selectedTimeSlot?.time === time && selectedTimeSlot?.date === section.day} selectTimeSlot={selectTimeSlot} />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {groups.afternoon.length > 0 && (
                                                            <div className="space-y-1.5">
                                                                <div className="flex items-center gap-2 opacity-30">
                                                                    <span className="text-[8px] font-bold tracking-widest uppercase">Өдөр</span>
                                                                    <div className="h-px bg-gray-100 flex-1" />
                                                                </div>
                                                                <div className="grid grid-cols-4 gap-2">
                                                                    {groups.afternoon.map((time, sIdx) => (
                                                                        <TimeButton key={sIdx} time={time} day={section.day} isSelected={selectedTimeSlot?.time === time && selectedTimeSlot?.date === section.day} selectTimeSlot={selectTimeSlot} />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        {groups.evening.length > 0 && (
                                                            <div className="space-y-1.5">
                                                                <div className="flex items-center gap-2 opacity-30">
                                                                    <span className="text-[8px] font-bold tracking-widest uppercase">Орой</span>
                                                                    <div className="h-px bg-gray-100 flex-1" />
                                                                </div>
                                                                <div className="grid grid-cols-4 gap-2">
                                                                    {groups.evening.map((time, sIdx) => (
                                                                        <TimeButton key={sIdx} time={time} day={section.day} isSelected={selectedTimeSlot?.time === time && selectedTimeSlot?.date === section.day} selectTimeSlot={selectTimeSlot} />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="h-24" />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

function TimeButton({ time, day, isSelected, selectTimeSlot }) {
    return (
        <button
            onClick={() => selectTimeSlot({ time, date: day })}
            className={`
                py-3.5 text-[15px] font-bold rounded-xl transition-all duration-300
                ${isSelected
                    ? 'bg-gray-900 text-white shadow-xl scale-[1.08] z-10'
                    : 'bg-[#FFF200] text-gray-900 hover:brightness-95 active:scale-95 shadow-sm border border-black/5'}
            `}
        >
            {time}
        </button>
    );
}
