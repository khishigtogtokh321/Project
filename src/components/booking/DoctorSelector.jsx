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
import TimeSlotModal from './TimeSlotModal';

// Mock data reflecting the Zocdoc structure
const defaultDoctors = [
    {
        id: 1,
        name: 'Д.Анхбаяр',
        specialty: 'Ерөнхий шүдний эмч',
        branchIds: [1, 2], // Сүхбаатар, Баянзүрх
        bio: 'Д.Анхбаяр эмч нь шүдний ерөнхий эмчилгээний чиглэлээр 12 жил ажиллаж буй туршлагатай мэргэжилтэн юм. Тэрээр орчин үеийн шүдний эмчилгээний технологийг өдөр тутмын практикт нэвтрүүлж, өвчтөн бүрт тохирсон эмчилгээний төлөвлөгөө боловсруулдаг.',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&h=200&auto=format&fit=crop',
        availability: [
            { day: 'Өнөөдөр', date: 'Feb 5', appts: 4 },
            { day: 'Маргааш', date: 'Feb 6', appts: 5 },
            { day: 'Баасан', date: 'Feb 7', appts: 7 },
            { day: 'Бямба', date: 'Feb 8', appts: 12 },
        ]
    },
    {
        id: 2,
        name: 'Б.Лхагвасүрэн',
        specialty: 'Амны хөндийн мэс засалч',
        branchIds: [1, 3], // Сүхбаатар, Хан-Уул
        bio: 'Б.Лхагвасүрэн эмч нь эрүү нүүрний мэс засал, шүд авалт болон бусад мэс ажилбаруудаар дагнасан 15 жилийн туршлагатай. Тэрээр өвчтөний аюулгүй байдал, өвдөлтгүй эмчилгээг нэгт тавьдаг.',
        image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=200&h=200&auto=format&fit=crop',
        availability: [
            { day: 'Өнөөдөр', date: 'Feb 5', appts: 0 },
            { day: 'Маргааш', date: 'Feb 6', appts: 2 },
            { day: 'Баасан', date: 'Feb 7', appts: 4 },
            { day: 'Бямба', date: 'Feb 8', appts: 8 },
        ]
    },
    {
        id: 3,
        name: 'Г.Оюунбилэг',
        specialty: 'Гажиг засалч',
        branchIds: [2, 4], // Баянзүрх, Чингэлтэй
        bio: 'Г.Оюунбилэг эмч нь шүдний гажиг засах чиглэлээр Японд мэргэжил дээшлүүлсэн. Тэрээр аппаратын болон инвизалайн эмчилгээний арвин туршлагатай бөгөөд хүүхэд, насанд хүрэгчдэд зориулсан оновчтой шийдлийг санал болгодог.',
        image: 'https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=200&h=200&auto=format&fit=crop',
        availability: [
            { day: 'Өнөөдөр', date: 'Feb 5', appts: 6 },
            { day: 'Маргааш', date: 'Feb 6', appts: 8 },
            { day: 'Баасан', date: 'Feb 7', appts: 2 },
            { day: 'Бямба', date: 'Feb 8', appts: 5 },
        ]
    },
    {
        id: 4,
        name: 'С.Тэмүүлэн',
        specialty: 'Хүүхдийн шүдний эмч',
        branchIds: [4, 5], // Чингэлтэй, Сонгинохайрхан
        bio: 'С.Тэмүүлэн эмч хүүхдийн шүдний эмчилгээгээр мэргэшсэн бөгөөд хүүхдүүдтэй ажиллахдаа маш эвтэйхэн, тэднийг айлгахгүйгээр эмчилж чаддаг. Хүүхдийн сүүн шүдний арчилгаа, хамгаалалтад онцгой анхаарал хандуулдаг.',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&h=200&auto=format&fit=crop',
        availability: [
            { day: 'Өнөөдөр', date: 'Feb 5', appts: 3 },
            { day: 'Маргааш', date: 'Feb 6', appts: 0 },
            { day: 'Баасан', date: 'Feb 7', appts: 5 },
            { day: 'Бямба', date: 'Feb 8', appts: 9 },
        ]
    },
    {
        id: 5,
        name: 'Э.Мишээл',
        specialty: 'Гоо сайхны шүдний эмч',
        branchIds: [2, 5], // Баянзүрх, Сонгинохайрхан
        bio: 'Э.Мишээл эмч нь шүд цайруулах, винир болон бүх төрлийн гоо сайхны нөхөн сэргээх эмчилгээг чанарын өндөр түвшинд хийдэг. Таны инээмсэглэлийг төгс болгох нь түүний гол зорилго юм.',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=200&h=200&auto=format&fit=crop',
        availability: [
            { day: 'Өнөөдөр', date: 'Feb 5', appts: 5 },
            { day: 'Маргааш', date: 'Feb 6', appts: 3 },
            { day: 'Баасан', date: 'Feb 7', appts: 10 },
            { day: 'Бямба', date: 'Feb 8', appts: 4 },
        ]
    },
    {
        id: 6,
        name: 'Т.Бат-Эрдэнэ',
        specialty: 'Имплант судлаач',
        branchIds: [1, 3, 5], // Сүхбаатар, Хан-Уул, Сонгинохайрхан
        bio: 'Т.Бат-Эрдэнэ эмч нь шүдний имплант суулгах, эрүүний ясны нөхөн сэргээх эмчилгээгээр Солонгос улсад мэргэжил дээшлүүлсэн. Тэрээр нарийн төвөгтэй имплант суулгах мэс ажилбаруудыг амжилттай гүйцэтгэдэг.',
        image: 'https://images.unsplash.com/photo-1612531388300-472d733e144a?q=80&w=200&h=200&auto=format&fit=crop',
        availability: [
            { day: 'Өнөөдөр', date: 'Feb 5', appts: 2 },
            { day: 'Маргааш', date: 'Feb 6', appts: 4 },
            { day: 'Баасан', date: 'Feb 7', appts: 6 },
            { day: 'Бямба', date: 'Feb 8', appts: 3 },
        ]
    }
];

export default function DoctorSelector({ doctors = defaultDoctors }) {
    const {
        selectedDoctor,
        selectDoctor,
        selectedBranch,
        selectedTimeSlot,
        selectTimeSlot,
        openTimeSlotModal
    } = useBookingStore();
    const [expandedBios, setExpandedBios] = useState({});

    // Filtering logic based on selected branch
    const filteredDoctors = selectedBranch
        ? doctors.filter(doc => doc.branchIds?.includes(selectedBranch.id))
        : doctors;

    const toggleBio = (id) => {
        setExpandedBios(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <div className="bg-white">
            {/* Header with count */}
            <div className="px-4 md:px-6 pt-4 pb-2">
                <h2 className="text-base font-semibold text-gray-800">
                    {selectedBranch
                        ? `${selectedBranch.name}-н эмч нар (${filteredDoctors.length})`
                        : `Бүх эмч нар (${filteredDoctors.length})`}
                </h2>
            </div>

            <div className="divide-y divide-gray-100">
                {filteredDoctors.map((doctor) => {
                    const isSelected = selectedDoctor?.id === doctor.id;
                    const isBioExpanded = expandedBios[doctor.id];

                    return (
                        <div key={doctor.id} className="p-4 md:p-6 transition-colors hover:bg-gray-50/20">
                            {/* --- Header: Avatar + Info --- */}
                            <div className="flex gap-3">
                                {/* Avatar: Square with rounded corners */}
                                <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0">
                                    <div className="w-full h-full rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                                        <img
                                            src={doctor.image}
                                            alt={doctor.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Doc Info */}
                                <div className="flex-1 min-w-0 flex flex-col ">
                                    <h3 className="text-base md:text-[17px] font-bold text-gray-900 leading-tight">
                                        {doctor.name}
                                    </h3>
                                    <p className="text-[13px] text-gray-500 leading-tight">{doctor.specialty}</p>

                                    {/* Collapsible Bio */}
                                    <div className="mt-0.5">
                                        <div
                                            className="relative group/bio"
                                            onClick={(e) => { if (!isBioExpanded) { e.stopPropagation(); toggleBio(doctor.id); } }}
                                        >
                                            <p
                                                className={`text-[13px] text-gray-600 leading-normal ${!isBioExpanded ? 'line-clamp-2' : ''}`}
                                            >
                                                {doctor.bio}
                                                {isBioExpanded && (
                                                    <button
                                                        type="button"

                                                        onClick={(e) => { e.stopPropagation(); toggleBio(doctor.id); }}
                                                        className="text-[12px] text-amber-600 hover:text-amber-700 font-bold ml-1.5 inline-block align-baseline transition-colors"
                                                    >
                                                        хураах
                                                    </button>
                                                )}
                                            </p>
                                            {!isBioExpanded && (
                                                <button
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); toggleBio(doctor.id); }}
                                                    className="absolute bottom-0 right-0 z-40 bg-gradient-to-l from-white via-white to-transparent pl-10 pr-0.5 text-gray-500 font-bold hover:text-amber-600 transition-colors text-[13px] leading-normal h-[1.2rem] flex items-center cursor-pointer"
                                                >

                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --- Availability Section (New Image-based Design) --- */}
                            <div className="mt-2">
                                <div className="flex items-center justify-between mb-3 px-1">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        <span className="text-[14px] font-bold text-gray-700">Боломжит цаг</span>
                                    </div>
                                    <button
                                        onClick={() => openTimeSlotModal()}
                                        className="text-[13px] font-semibold text-gray-800 hover:text-amber-600"
                                    >
                                        See all
                                    </button>
                                </div>

                                <div className="flex gap-2.5 overflow-x-auto no-scrollbar snap-x pb-1 px-1">
                                    {doctor.availability.map((slot, idx) => {
                                        const isDisabled = slot.appts === 0;
                                        const isSlotSelected = selectedDoctor?.id === doctor.id &&
                                            selectedTimeSlot?.date === slot.date &&
                                            selectedTimeSlot?.day === slot.day;

                                        return (
                                            <button
                                                key={idx}
                                                disabled={isDisabled}
                                                onClick={() => {
                                                    selectDoctor(doctor);
                                                    openTimeSlotModal(slot.date); // Show modal and scroll to this date
                                                }}
                                                className={`
                                                    snap-start flex flex-col items-center justify-center min-w-[105px] h-[95px] rounded-lg transition-all
                                                    ${isDisabled
                                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                                        : isSlotSelected
                                                            ? 'bg-[#FFFFFF] border-2 border-gray-900 shadow-md transform scale-[1.02]'
                                                            : 'bg-[#FFFFFF] hover:bg-gray-50 text-gray-900 shadow-sm'}
                                                `}
                                            >
                                                <span className="text-[14px] font-semibold leading-tight">
                                                    {slot.day}
                                                </span>
                                                <span className="text-[13px] opacity-80 mt-0.5">
                                                    {slot.date}
                                                </span>
                                                <span className="text-[13px] text-amber-500 font-bold mt-1.5">
                                                    {slot.appts > 0 ? `${slot.appts} цаг` : 'Байхгүй'}
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Detailed Time Slot Selection Modal */}
            <TimeSlotModal />
        </div >
    );
}
