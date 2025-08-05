import React from 'react';

interface AuthButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  loading?: boolean;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  onClick,
  type = 'submit',
  disabled = false,
  loading = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="flex h-12 items-center gap-3 self-stretch shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_1px_1px_0_rgba(0,0,0,0.12),0_1px_1px_0_rgba(0,0,0,0.24)] backdrop-blur-[6px] relative cursor-pointer p-4 rounded-xl max-md:h-11 max-md:p-3.5 max-sm:h-10 max-sm:p-3 bg-gradient-to-b from-[rgba(255,255,255,0.9)] to-[rgba(255,255,255,0.8)] hover:from-[rgba(255,255,255,0.95)] hover:to-[rgba(255,255,255,0.85)] active:from-[rgba(255,255,255,0.8)] active:to-[rgba(255,255,255,0.7)] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={loading ? 'Processing...' : undefined}
    >
      <div className="flex flex-col items-start gap-1 flex-[1_0_0] relative p-0">
        <span className="self-stretch text-black text-center text-base font-bold leading-5 relative max-md:text-[15px] max-md:leading-[18px] max-sm:text-sm max-sm:leading-4">
          {loading ? 'Processing...' : children}
        </span>
      </div>
    </button>
  );
};
