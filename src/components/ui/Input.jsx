import React from 'react';

/**
 * Standardized Input component with label and error state support.
 * @param {Object} props
 * @param {string} props.label - Field label
 * @param {string} props.error - Error message
 * @param {React.ReactNode} props.leftIcon - Icon on the left
 */
export default function Input({
    label,
    error,
    leftIcon,
    className = '',
    containerClassName = '',
    ...props
}) {
    return (
        <div className={`d-flex flex-column gap-1 ${containerClassName}`}>
            {label && (
                <label className="fs-body-sm fw-medium text-gray-700 ms-1">
                    {label}
                </label>
            )}

            <div className="position-relative d-flex align-items-center">
                {leftIcon && (
                    <div className="position-absolute start-0 ms-3 text-gray-400">
                        {leftIcon}
                    </div>
                )}

                <input
                    className={`
            w-100 fs-body py-2 px-3 rounded-md border transition-all outline-none
            ${leftIcon ? 'ps-5' : 'ps-3'}
            ${error ? 'border-error-500 focus:shadow-[0_0_0_4px_rgba(240,68,56,0.1)]' : 'border-gray-200 focus:border-primary-500 focus:shadow-[0_0_0_4px_rgba(0,102,255,0.1)]'}
            ${className}
          `}
                    {...props}
                />
            </div>

            {error && (
                <span className="fs-body-xs text-error-500 ms-1 mt-0-5">
                    {error}
                </span>
            )}
        </div>
    );
}
