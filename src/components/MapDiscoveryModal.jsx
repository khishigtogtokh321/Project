import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { FiX, FiMapPin, FiNavigation } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { hospitals } from "../data/hospitals";
import { useNavigate } from "react-router-dom";

// Dark Mode Map Style (Hides some POIs to reduce clutter and emphasizes our markers)
const mapStyles = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ lightness: 100 }, { visibility: "simplified" }],
    },
];

const containerStyle = {
    width: "100%",
    height: "100%",
};

const defaultCenter = {
    lat: 47.918,
    lng: 106.917,
};

const MapDiscoveryModal = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    const [selectedHospital, setSelectedHospital] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "", // Dev mode: leave empty or use a placeholder if needed, but for 'dev mode' w/o billing, it works without key or with any key
    });

    // Prevent background scrolling
    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm pointer-events-auto" onClick={onClose}></div>

            {/* Map Card */}
            <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="pointer-events-auto w-[90%] h-[60vh] md:w-[800px] md:h-[500px] bg-white rounded-3xl shadow-2xl overflow-hidden relative flex flex-col"
            >
                {/* Header */}
                <div className="absolute top-4 right-4 z-[1000]">
                    <button
                        onClick={onClose}
                        className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                    >
                        <FiX size={20} className="text-gray-800" />
                    </button>
                </div>

                {/* Map */}
                <div className="w-full h-full bg-gray-100">
                    {isLoaded ? (
                        <GoogleMap
                            mapContainerStyle={containerStyle}
                            center={defaultCenter}
                            zoom={13}
                            options={{
                                disableDefaultUI: false,
                                zoomControl: true,
                                styles: mapStyles,
                                clickableIcons: false, // Turn off default clickable POIs
                            }}
                            onClick={() => setSelectedHospital(null)}
                        >
                            {hospitals.map((hospital) => (
                                <Marker
                                    key={hospital.id}
                                    position={hospital.geo}
                                    onClick={() => setSelectedHospital(hospital)}
                                    animation={window.google?.maps?.Animation?.DROP}
                                />
                            ))}
                        </GoogleMap>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                        </div>
                    )}
                </div>

                {/* Bottom Sheet / Card */}
                <AnimatePresence>
                    {selectedHospital && (
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute bottom-0 left-0 right-0 p-4 z-[1000] md:left-auto md:right-4 md:bottom-4 md:w-96"
                        >
                            <div className="bg-white rounded-3xl shadow-2xl p-4 border border-gray-100">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-3xl">
                                        {selectedHospital.logo}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg text-navy-900">{selectedHospital.name}</h3>
                                        <p className="text-gray-500 text-sm flex items-center gap-1 mt-1">
                                            <FiMapPin size={14} />
                                            {selectedHospital.district}, {selectedHospital.city}
                                        </p>
                                        <div className="mt-2 flex items-center gap-2">
                                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                                                {selectedHospital.meta.openStatus}
                                            </span>
                                            <span className="text-yellow-500 text-sm font-bold">★ {selectedHospital.meta.rating}</span>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        onClose();
                                        navigate("/emch-songoh", { state: { hospital: selectedHospital } });
                                    }}
                                    className="w-full mt-4 bg-primary text-white py-3 rounded-xl font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                                >
                                    <FiNavigation />
                                    Захиалах
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>,
        document.body
    );
};

export default MapDiscoveryModal;
