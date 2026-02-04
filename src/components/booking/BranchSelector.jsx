/**
 * BranchSelector - Horizontal Scrollable Branch List
 * 
 * Mobile-first design with horizontal carousel for selecting clinic branches.
 * Selected branch is stored in BookingStore.
 */

import { motion } from 'framer-motion';
import { FiMapPin, FiCheck } from 'react-icons/fi';
import { useBookingStore } from '../../store/BookingStore';

// Mock data - replace with props or API data
const defaultBranches = [
    {
        id: 1,
        name: 'Сүхбаатар салбар',
        address: '1-р хороо, Энхтайвны өргөн чөлөө',
        distance: '0.5 км',
        isOpen: true,
    },
    {
        id: 2,
        name: 'Баянзүрх салбар',
        address: '3-р хороо, Зайсангийн гудамж',
        distance: '2.1 км',
        isOpen: true,
    },
    {
        id: 3,
        name: 'Хан-Уул салбар',
        address: '15-р хороо, Яармагийн зам',
        distance: '4.3 км',
        isOpen: false,
    },
    {
        id: 4,
        name: 'Чингэлтэй салбар',
        address: '2-р хороо, Московийн гудамж',
        distance: '3.2 км',
        isOpen: true,
    },
    {
        id: 5,
        name: 'Сонгинохайрхан салбар',
        address: '10-р хороо, Баруун 4-н зам',
        distance: '7.8 км',
        isOpen: true,
    },
];

export default function BranchSelector({ branches = defaultBranches }) {
    const { selectedBranch, selectBranch } = useBookingStore();

    return (
        <div className="bg-gray-50 py-4">
            {/* Section Header */}
            <div className="px-4 md:px-6 mb-3">
                <h2 className="text-base font-semibold text-gray-800">Салбар сонгох</h2>
                <p className="text-xs text-gray-500 mt-0.5">Өөрт ойр салбараа сонгоно уу</p>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                className="flex gap-3 overflow-x-auto px-4 md:px-6 pb-2 no-scrollbar snap-x snap-mandatory"
                style={{ scrollPaddingLeft: '1rem' }}
            >
                {branches.map((branch) => {
                    const isSelected = selectedBranch?.id === branch.id;

                    return (
                        <motion.button
                            key={branch.id}
                            onClick={() => selectBranch(branch)}
                            whileTap={{ scale: 0.97 }}
                            className={`
                branch-card min-w-[200px] md:min-w-[240px] text-left
                ${isSelected ? 'selected' : ''}
                ${!branch.isOpen ? 'opacity-60' : ''}
              `}
                            disabled={!branch.isOpen}
                        >
                            {/* Branch Name + Selected Indicator */}
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                                    {branch.name}
                                </h3>
                                {isSelected && (
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="flex-shrink-0 w-5 h-5 rounded-full bg-trust-green flex items-center justify-center"
                                    >
                                        <FiCheck className="w-3 h-3 text-white" />
                                    </motion.div>
                                )}
                            </div>

                            {/* Address */}
                            <div className="flex items-start gap-1.5 mt-2">
                                <FiMapPin className="w-3.5 h-3.5 text-gray-400 flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-500 line-clamp-2">{branch.address}</span>
                            </div>

                            {/* Distance & Status */}
                            <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                                <span className="text-xs font-medium text-brand-600">{branch.distance}</span>
                                {branch.isOpen ? (
                                    <span className="text-xs text-trust-green font-medium">• Нээлттэй</span>
                                ) : (
                                    <span className="text-xs text-gray-400">• Хаалттай</span>
                                )}
                            </div>
                        </motion.button>
                    );
                })}
            </div>

            {/* Selected Branch Summary (Mobile Bottom Bar) */}
            {selectedBranch && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mx-4 md:mx-6 mt-3 p-3 bg-brand-100/30 border border-brand-500/30 rounded-xl"
                >
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500">Сонгосон салбар</p>
                            <p className="text-sm font-semibold text-gray-800">{selectedBranch.name}</p>
                        </div>
                        <button
                            onClick={() => selectBranch(null)}
                            className="text-xs text-gray-500 hover:text-gray-700 underline"
                        >
                            Цуцлах
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
}
