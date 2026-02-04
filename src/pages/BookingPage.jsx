/**
 * BookingPage - Demo page showcasing the booking flow
 * 
 * This page demonstrates Phase 2 components:
 * - ClinicProfile
 * - BranchSelector
 */

import { ClinicProfile, BranchSelector, DoctorSelector } from '../components/booking';
import { useBookingStore } from '../store/BookingStore';

export default function BookingPage() {
    const { selectedBranch } = useBookingStore();

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Clinic Profile Section */}
            <ClinicProfile />

            {/* Divider */}
            <div className="h-2 bg-gray-50" />

            {/* Branch Selection Section */}
            <BranchSelector />

            {/* Phase 3: Doctor Selection Section - Conditionally Rendered */}
            {selectedBranch && (
                <>
                    <div className="h-2 bg-gray-50" />
                    <DoctorSelector />
                </>
            )}

            {/* Placeholder for next phases */}
            {!selectedBranch && (
                <div className="p-4 md:p-6">
                    <div className="bg-white rounded-xl p-6 border border-dashed border-gray-300 text-center">
                        <p className="text-sm text-gray-500">
                            Эмч нарын жагсаалтыг харахын тулд салбараа сонгоно уу...
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
