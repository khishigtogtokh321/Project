import React from 'react';

/**
 * Standardized Badge/Tag component for status indicators and labels.
 * @param {Object} props
 * @param {'primary' | 'success' | 'error' | 'warning' | 'gray'} props.variant - Color variant
 * @param {'sm' | 'md'} props.size - Badge size
 * @param {boolean} props.pill - Fully rounded corners
 */
export default function Badge({
    variant = 'primary',
    size = 'md',
    pill = true,
    className = '',
    children,
    ...props
}) {
    const baseClasses = 'inline-flex align-items-center fw-bold transition-all';

    const variants = {
        primary: 'bg-primary-50 text-primary-500',
        success: 'bg-primary-50 text-success-500', // Adjusted to success if needed, but using primary-50 for consistency with existing design
        error: 'bg-primary-50 text-error-500',
        warning: 'bg-primary-50 text-warning-500',
        gray: 'bg-gray-100 text-gray-600',
    };

    // Custom overrides for specific semantic colors if they need their own background
    if (variant === 'success') variants.success = 'bg-success-500 bg-opacity-10 text-success-500';
    if (variant === 'error') variants.error = 'bg-error-500 bg-opacity-10 text-error-500';
    if (variant === 'warning') variants.warning = 'bg-warning-500 bg-opacity-10 text-warning-500';

    const sizes = {
        sm: 'px-2 py-0-5 fs-body-xs',
        md: 'px-3 py-1 fs-body-xs',
    };

    const selectedVariant = variants[variant] || variants.primary;
    const selectedSize = sizes[size] || sizes.md;

    return (
        <span
            className={`
        ${baseClasses} 
        ${selectedVariant} 
        ${selectedSize} 
        ${pill ? 'rounded-full' : 'rounded-sm'} 
        ${className}
      `}
            {...props}
        >
            {children}
        </span>
    );
}
