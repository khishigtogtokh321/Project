/**
 * ClinicProfile - Zocdoc-style Clinic Info Component
 * 
 * Displays clinic branding, description with "show more" link, and tab navigation.
 * Based on exact Zocdoc design reference.
 */

import { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import DrAngelLogo from '../../assets/DrAngel.jpg';

// Mock data - replace with props or API data
const defaultClinicData = {
    id: 1,
    name: 'Dr.Angel Dental Clinic',
    type: 'Dental Practice',
    logo: DrAngelLogo,
    address: 'Улаанбаатар, Сүхбаатар дүүрэг, 1-р хороо',
    description: `Welcome to Dr.Angel Dental Clinic, a premier dental practice in Ulaanbaatar with an outstanding reputation. Our team is passionate about helping patients achieve beautiful, healthy smiles in a comfortable and modern environment. We provide a wide range of services including general dentistry, orthodontics, and cosmetic treatments. Our clinic is equipped with the latest technology to ensure the best possible care for you and your family.`,
};


const tabs = [
    { id: 'salbar', label: 'Салбар' },
    { id: 'service', label: 'Үйлчилгээ' },
    { id: 'doctor', label: 'Эмч' },
    { id: 'location', label: 'Хаяг' },
];

export default function ClinicProfile({ clinic = defaultClinicData, activeTab = 'book', onTabChange }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxChars = 140;
    const shouldTruncate = clinic.description.length > maxChars;

    return (
        <div className="bg-white">
            {/* ===== Profile Header Section ===== */}
            <div className="px-2 py-6 mt-4 pb-0 md:px-6 lg:px-8">
                {/* Logo + Name Row */}
                <div className="flex items-start gap-4">
                    {/* Circular Logo */}
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
                            <img
                                src={clinic.logo}
                                alt={`${clinic.name} logo`}
                                className="w-full h-full object-contain p-1"
                            />
                        </div>
                    </div>

                    {/* Clinic Info */}
                    <div className="flex-1 min-w-0 pt-1">
                        {/* Clinic Name - Large Bold */}
                        <h1 className="text-xl md:text-xl text-[16px] font-bold text-gray-800 leading-tight">
                            {clinic.name}
                        </h1>

                    </div>
                </div>

                {/* ===== Description with "show more" ===== */}
                <div className="mt-6">
                    <p className="text-base text-gray-700 leading-relaxed">
                        {isExpanded || !shouldTruncate ? (
                            clinic.description
                        ) : (
                            <>
                                {clinic.description.slice(0, maxChars)}
                                <button
                                    onClick={() => setIsExpanded(true)}
                                    className="text-gray-400 hover:text-gray-600 transition-colors mx-0.5"
                                >
                                    ...
                                </button>
                            </>
                        )}
                        {' '}
                        {shouldTruncate && (
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-gray-900 font-medium underline underline-offset-2 hover:text-gray-700"
                            >
                                {isExpanded ? 'show less' : 'show more'}
                            </button>
                        )}
                    </p>
                </div>
            </div>

            {/* ===== Tab Navigation (Horizontal Scrollable) ===== */}
            <div className="border-t border-gray-200  bg-white  z-20 ">
                <nav className="flex px-2 md:px-4 overflow-x-auto no-scrollbar flex-nowrap gap-x-1" aria-label="Tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => {
                                onTabChange?.(tab.id);
                                // Scroll to section if it exists
                                const element = document.getElementById(tab.id);
                                if (element) {
                                    const offset = 80; // Adjust for sticky header
                                    const bodyRect = document.body.getBoundingClientRect().top;
                                    const elementRect = element.getBoundingClientRect().top;
                                    const elementPosition = elementRect - bodyRect;
                                    const offsetPosition = elementPosition - offset;

                                    window.scrollTo({
                                        top: offsetPosition,
                                        behavior: 'smooth'
                                    });
                                }
                            }}
                            className={`
                                py-4 px-3 text-base font-medium border-b-2 transition-colors flex-shrink-0 whitespace-nowrap
                                ${activeTab === tab.id
                                    ? 'border-gray-900 text-gray-900'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }
                            `}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}
