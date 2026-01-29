import React from 'react';

/**
 * Standardized Button component with multiple variants and loading states.
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'} props.variant - Visual style
 * @param {'sm' | 'md' | 'lg'} props.size - Button size
 * @param {boolean} props.loading - Loading state
 * @param {React.ReactNode} props.leftIcon - Icon on the left
 * @param {React.ReactNode} props.rightIcon - Icon on the right
 */
export default function Button({
    variant = 'primary',
    size = 'md',
    loading = false,
    className = '',
    leftIcon,
    rightIcon,
    children,
    ...props
}) {
    const baseClasses = 'inline-flex align-items-center justify-content-center fw-bold rounded-pill transition-all cursor-pointer border-0';

    const variants = {
        primary: 'bg-primary-500 text-white hover:bg-primary-600 shadow-sm',
        secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
        outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
        ghost: 'bg-transparent text-gray-600 hover:bg-gray-100',
        danger: 'bg-error-500 text-white hover:bg-error-600',
    };

    const sizes = {
        sm: 'px-3 py-1-5 fs-body-xs',
        md: 'px-4 py-2 fs-body-sm',
        lg: 'px-6 py-3 fs-body',
    };

    const selectedVariant = variants[variant] || variants.primary;
    const selectedSize = sizes[size] || sizes.md;

    return (
        <button
            className={`${baseClasses} ${selectedVariant} ${selectedSize} ${className} ${loading ? 'opacity-70 pointer-events-none' : ''}`}
            disabled={loading}
            {...props}
        >
            {loading && (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            )}
            {!loading && leftIcon && <span className="me-2">{leftIcon}</span>}
            {children}
            {!loading && rightIcon && <span className="ms-2">{rightIcon}</span>}
        </button>
    );
}
