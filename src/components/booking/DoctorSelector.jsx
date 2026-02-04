/**
 * DoctorSelector - Authentic Zocdoc Style Doctor List
 * 
 * High-fidelity implementation featuring:
 * - Square-ish avatars with subtle rounded corners
 * - Compact bio with "see more" expansion
 * - Signature Zocdoc yellow availability blocks
 * - Clean typography without unnecessary metadata
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBookingStore } from '../../store/BookingStore';

// Mock data reflecting the Zocdoc structure
const defaultDoctors = [
    {
        id: 1,
        name: 'Dr. Alice Leroy, DO',
        specialty: 'Dermatologist',
        bio: 'Doctor Alice Leroy, dermatologist, graduated in medicine from the Catholic University of Leuven in 2015. She specializes in skin health, advanced cosmetic treatments, and preventative dermatological care. Her approach focuses on patient comfort and evidence-based results.',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop',
        availability: [
            { day: 'Today', date: 'Feb 3', appts: 2 },
            { day: 'Tomorrow', date: 'Feb 4', appts: 10 },
            { day: 'Thu', date: 'Feb 5', appts: 13 },
            { day: 'Fri', date: 'Feb 6', appts: 8 },
        ]
    },
    {
        id: 2,
        name: 'Д.Анхбаяр',
        specialty: 'Ерөнхий шүдний эмч',
        bio: 'Д.Анхбаяр эмч нь шүдний ерөнхий эмчилгээний чиглэлээр 12 жил ажиллаж буй туршлагатай мэргэжилтэн юм. Тэрээр орчин үеийн шүдний эмчилгээний технологийг өдөр тутмын практикт нэвтрүүлж, өвчтөн бүрт тохирсон эмчилгээний төлөвлөгөө боловсруулдаг.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop',
        availability: [
            { day: 'Today', date: 'Feb 3', appts: 0 },
            { day: 'Tomorrow', date: 'Feb 4', appts: 5 },
            { day: 'Thu', date: 'Feb 5', appts: 7 },
            { day: 'Fri', date: 'Feb 6', appts: 12 },
        ]
    }
];

export default function DoctorSelector({ doctors = defaultDoctors }) {
    const { selectedDoctor, selectDoctor } = useBookingStore();
    const [expandedBios, setExpandedBios] = useState({});

    const toggleBio = (id) => {
        setExpandedBios(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="bg-white">
            <div className="divide-y divide-gray-100">
                {doctors.map((doctor) => {
                    const isSelected = selectedDoctor?.id === doctor.id;
                    const isBioExpanded = expandedBios[doctor.id];

                    return (
                        <div key={doctor.id} className="p-4 md:p-6 transition-colors hover:bg-gray-50/30">
                            {/* --- Header: Avatar + Info --- */}
                            <div className="flex gap-4">
                                {/* Avatar: Square with rounded corners */}
                                <div className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0">
                                    <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Doc Info */}
                                <div className="flex-1 min-w-0 pt-0.5">
                                    <h3 className="text-[17px] md:text-lg font-bold text-gray-900 leading-tight">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-0.5">{doctor.specialty}</p>

                                    {/* Collapsible Bio */}
                                    <div className="mt-3">
                                        <p className={`text-sm text-gray-700 leading-relaxed ${!isBioExpanded ? 'line-clamp-2' : ''}`}>
                                            {doctor.bio}
                                        </p>
                                        <button
                                            onClick={() => toggleBio(doctor.id)}
                                            className="text-sm font-bold text-blue-600 hover:text-blue-700 mt-1 transition-colors underline-offset-2 hover:underline"
                                        >
                                            {isBioExpanded ? 'see less' : 'see more'}
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* --- Availability Section --- */}
                            <div className="mt-6 flex gap-3 overflow-x-auto no-scrollbar snap-x">
                                {doctor.availability.map((slot, idx) => {
                                    const isDisabled = slot.appts === 0;
                                    return (
                                        <button
                                            key={idx}
                                            disabled={isDisabled}
                                            onClick={() => selectDoctor(doctor)}
                                            className={`
                                                snap-start flex flex-col items-center justify-center min-w-[90px] md:min-w-[105px] h-[100px] rounded-xl transition-all
                                                ${isDisabled
                                                    ? 'bg-gray-50 opacity-40 cursor-not-allowed'
                                                    : 'bg-[#FFF248] hover:bg-[#FFE500] active:scale-95 text-gray-900 border border-transparent'}
                                                ${isSelected && !isDisabled ? 'ring-2 ring-gray-900 ring-offset-2' : ''}
                                            `}
                                        >
                                            <span className="text-[13px] font-bold">{slot.day}</span>
                                            <span className="text-[13px] font-medium mt-0.5">{slot.date}</span>
                                            <span className="text-[13px] font-bold mt-2">
                                                {slot.appts > 0 ? `${slot.appts} appts` : 'No appts'}
                                            </span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
