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

            <div className="h-2 bg-gray-50" />
            <DoctorSelector />
        </div>
    );
}
