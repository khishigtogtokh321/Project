import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from "@react-google-maps/api";
import { FiX, FiMapPin, FiNavigation, FiSearch, FiLayers, FiCompass, FiPhone, FiClock, FiInfo, FiChevronRight, FiStar } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { hospitals } from "../data/hospitals";
import { useNavigate } from "react-router-dom";

// 🍏 Apple Maps Aesthetic Styling (Clean, minimalist, high contrast labels)
const appleMapStyles = [
    {
        featureType: "all",
        elementType: "labels.text.fill",
        stylers: [{ color: "#616161" }],
    },
    {
        featureType: "all",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }],
    },
    {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ color: "#f5f5f5" }],
    },
    {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#eeeeee" }],
    },
    {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#ffffff" }],
    },
    {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#c9e2ff" }],
    },
    {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
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
    const [map, setMap] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [showSearchAreaBtn, setShowSearchAreaBtn] = useState(false);
    const [userLocation, setUserLocation] = useState(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "", // Dev mode
    });

    useEffect(() => {
        if (isOpen) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    const onMapLoad = (mapInstance) => {
        setMap(mapInstance);
    };

    const handleMarkerClick = (hospital) => {
        setSelectedHospital(hospital);
        if (map) {
            map.panTo(hospital.geo);
            map.setZoom(15);
        }
    };

    const handleMyLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    setUserLocation(pos);
                    if (map) {
                        map.panTo(pos);
                        map.setZoom(15);
                    }
                },
                () => {
                    alert("Байршил тогтооход алдаа гарлаа.");
                }
            );
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex flex-col"
        >
            {/* 🍏 Top Integrated Search Bar (Elegant Minimalist) */}
            <div className="absolute top-6 left-4 right-4 z-[1000] flex gap-3 items-center">
                <div className="flex-1 bg-white/90 backdrop-blur-2xl shadow-sm rounded-full flex items-center px-6 py-2 gap-4 left-4 border-none">
                    <FiSearch className="text-gray-400 " size={20} style={{ position: 'relative', left: '15px' }} />
                    <input
                        type="text"
                        placeholder="Эмнэлэг хайх..."
                        className="bg-transparent border-none outline-none w-full text-navy-900 font-medium placeholder:text-gray-400 text-[15px]"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="w-11 h-11 rounded-full overflow-hidden shadow-sm bg-white/90 backdrop-blur-2xl">
                    <button
                        onClick={onClose}
                        className="w-full h-full flex items-center justify-center text-gray-800 hover:bg-white/20 transition-all transform active:scale-90 border-none outline-none"
                    >
                        <FiX size={20} />
                    </button>
                </div>
            </div>


            {/* Map Canvas */}
            <div className="flex-1 relative overflow-hidden">
                {isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={defaultCenter}
                        zoom={13}
                        onLoad={onMapLoad}
                        options={{
                            disableDefaultUI: true,
                            styles: appleMapStyles,
                            clickableIcons: false,
                        }}
                        onCenterChanged={() => {
                            if (map && !showSearchAreaBtn) setShowSearchAreaBtn(true);
                        }}
                        onClick={() => setSelectedHospital(null)}
                    >

                        {/* 🍏 My Location FAB (Circular Pin Style) */}
                        <div className="absolute bottom-10 right-4 z-[1000] w-14 h-14 rounded-full overflow-hidden shadow-sm bg-white/90 backdrop-blur-2xl">
                            <button
                                onClick={handleMyLocation}
                                className="w-full h-full flex items-center justify-center text-navy-900 hover:bg-gray-50/50 transition-all active:scale-90 border-none outline-none"
                            >
                                <FiMapPin size={24} />
                            </button>
                        </div>
                        {userLocation && (
                            <Marker
                                position={userLocation}
                                icon={{
                                    path: window.google?.maps?.SymbolPath?.CIRCLE,
                                    fillColor: "#007AFF", // Apple Blue
                                    fillOpacity: 1,
                                    strokeWeight: 3,
                                    strokeColor: "#FFFFFF",
                                    scale: 8,
                                }}
                            />
                        )}

                        {hospitals
                            .filter(h => h.name.toLowerCase().includes(searchQuery.toLowerCase()))
                            .map((hospital) => (
                                <Marker
                                    key={hospital.id}
                                    position={hospital.geo}
                                    onClick={() => handleMarkerClick(hospital)}
                                    icon={{
                                        path: window.google?.maps?.SymbolPath?.CIRCLE,
                                        fillColor: "#007AFF", // Apple Blue
                                        fillOpacity: 1,
                                        strokeWeight: 3,
                                        strokeColor: "#FFFFFF",
                                        scale: 10,
                                    }}
                                />
                            ))}
                    </GoogleMap>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full gap-4">
                        <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-500 rounded-full animate-spin"></div>
                        <p className="text-gray-400 font-medium animate-pulse">Газрын зураг ачаалж байна...</p>
                    </div>
                )}
            </div>

            {/* 🍏 Native-Style Bottom Detail Sheet (Ultra-Minimalist) */}
            <AnimatePresence>
                {selectedHospital && (
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="hospital-details-modal"
                    >
                        <div className="hospital-details-card">
                            {/* Header Section */}
                            <div className="hospital-details-header">
                                <div className="hospital-header-content">
                                    <span className="hospital-type-badge">
                                        {selectedHospital.type}
                                    </span>
                                    <h3 className="hospital-name-title">
                                        {selectedHospital.name}
                                    </h3>
                                </div>
                                <div className="hospital-logo-container">
                                    {selectedHospital.logo}
                                </div>
                            </div>

                            {/* Info Section */}
                            <div className="hospital-info-section">
                                <div className="hospital-info-item">
                                    <FiMapPin className="hospital-info-icon" size={18} />
                                    <p className="hospital-info-text">
                                        {selectedHospital.address}
                                    </p>
                                </div>

                                <div className="hospital-info-item">
                                    <FiClock className="hospital-info-icon" size={18} />
                                    <p className="hospital-info-text">
                                        {selectedHospital.hours}
                                    </p>
                                </div>

                                <div className="hospital-info-item">
                                    <FiPhone className="hospital-info-icon" size={18} />
                                    <p className="hospital-info-text hospital-info-phone">
                                        {selectedHospital.phone}
                                    </p>
                                </div>
                            </div>

                            {/* Actions bar */}
                            <div className="hospital-actions-bar">
                                <button
                                    onClick={() => {
                                        onClose();
                                        navigate("/emch-songoh", { state: { hospital: selectedHospital } });
                                    }}
                                    className="hospital-btn-book"
                                >
                                    Цаг захиалах
                                </button>
                                <button className="hospital-btn-nav">
                                    <FiNavigation size={18} />
                                    Чиглэл
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>,
        document.body
    );
};

export default MapDiscoveryModal;
