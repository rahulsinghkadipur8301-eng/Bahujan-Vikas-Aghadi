import React from 'react';

interface BvaEmblemProps {
  className?: string;
  size?: number;
  variant?: 'navbar' | 'badge' | 'full' | 'hero';
  alt?: string;
  priority?: boolean;
}

/**
 * Official BVA Emblem Component using the authentic party logo uploaded by the user
 * (/bva_logo.png - Bahujan Vikas Aghadhi Emblem)
 * 
 * Features:
 * - High resolution rendering
 * - Distinctive brand yellow & royal blue framing
 * - Supports large desktop navbar height (80-95px) and mobile navbar (52-65px)
 */
export const BvaEmblem: React.FC<BvaEmblemProps> = ({
  className = '',
  size = 56,
  variant = 'badge',
  alt = 'Bahujan Vikas Aaghadi Official Emblem',
  priority = false
}) => {
  // Navbar variant: generously sized, clear white and yellow border, crisp presentation
  if (variant === 'navbar') {
    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 rounded-xl overflow-hidden border-2 border-[#FDF219] shadow-sm bg-white transition-all duration-300 hover:shadow-md hover:border-[#0220A8] ${className}`}
        style={{
          height: `${size}px`,
          width: `${Math.round(size * 1.85)}px`
        }}
      >
        <img
          src="/bva_logo.png"
          alt={alt}
          className="w-full h-full object-contain p-0.5"
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
    );
  }

  // Hero variant: monumental, rich yellow accent
  if (variant === 'hero') {
    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 rounded-2xl overflow-hidden border-2 border-[#FDF219] shadow-md bg-white p-1 ${className}`}
        style={{
          height: `${size}px`,
          width: `${Math.round(size * 1.9)}px`
        }}
      >
        <img
          src="/bva_logo.png"
          alt={alt}
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
    );
  }

  // Standard badge variant
  if (variant === 'badge') {
    return (
      <div
        className={`inline-flex items-center justify-center shrink-0 rounded-lg overflow-hidden border border-[#FDF219]/80 shadow-xs bg-[#FDF219] ${className}`}
        style={{
          height: `${size}px`,
          width: `${Math.round(size * 1.8)}px`
        }}
      >
        <img
          src="/bva_logo.png"
          alt={alt}
          className="w-full h-full object-contain"
          loading={priority ? 'eager' : 'lazy'}
        />
      </div>
    );
  }

  // Full banner / emblem
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{
        height: `${size}px`,
        width: `${Math.round(size * 2.1)}px`
      }}
    >
      <img
        src="/bva_logo.png"
        alt={alt}
        className="w-full h-full object-contain rounded-md"
        loading={priority ? 'eager' : 'lazy'}
      />
    </div>
  );
};
