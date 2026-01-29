import React from 'react';
import { 运动 } from 'framer-motion';

/**
 * Standardized Card component with support for various styles and interactions.
 * @param {Object} props
 * @param {'glass' | 'outline' | 'elevated' | 'default'} props.variant - Visual style variant
 * @param {boolean} props.hover - Enable hover animations
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Card content
 */
export default function Card({
    variant = 'default',
    hover = true,
    className = '',
    children,
    ...props
}) {
    const baseClasses = 'rounded-xl overflow-hidden transition-all duration-300';

    const variants = {
        default: 'bg-white border border-gray-100 shadow-sm',
        glass: 'hp-glass',
        outline: 'bg-transparent border border-gray-200',
        elevated: 'bg-white shadow-md hover:shadow-lg',
    };

    const selectedVariant = variants[variant] || variants.default;

    return (
        <div
            className={`${baseClasses} ${selectedVariant} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

Card.Header = ({ children, className = '' }) => (
    <div className={`p-4 border-b border-gray-100 ${className}`}>
        {children}
    </div>
);

Card.Body = ({ children, className = '' }) => (
    <div className={`p-4 ${className}`}>
        {children}
    </div>
);

Card.Footer = ({ children, className = '' }) => (
    <div className={`p-4 border-t border-gray-100 bg-gray-25/50 ${className}`}>
        {children}
    </div>
);
