import React from 'react';
import { FaHome, FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

/**
 * Bottom Navigation bar for mobile-first user experience.
 * Only visible on mobile viewports.
 */
export default function BottomNav() {
    const navItems = [
        { icon: <FaHome size={20} />, label: 'Нүүр', active: true },
        { icon: <FaSearch size={20} />, label: 'Хайлт' },
        { icon: <FaCalendarAlt size={20} />, label: 'Захиалга' },
        { icon: <FaUser size={20} />, label: 'Профайл' },
    ];

    return (
        <div className="d-md-none fixed-bottom bg-white border-top py-2 px-4 shadow-lg z-3">
            <div className="d-flex justify-content-between align-items-center">
                {navItems.map((item, index) => (
                    <motion.div
                        key={index}
                        className={`d-flex flex-column align-items-center gap-1 ${item.active ? 'text-primary-500' : 'text-gray-400'}`}
                        whileTap={{ scale: 0.9 }}
                    >
                        {item.icon}
                        <span className="text-body-xs fw-bold" style={{ fontSize: '0.65rem' }}>{item.label}</span>
                        {item.active && (
                            <motion.div
                                layoutId="activeTab"
                                className="position-absolute bg-primary-500 rounded-pill"
                                style={{ height: '3px', width: '20px', bottom: '-8px' }}
                            />
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
