import React from 'react';

interface PaymentButtonProps {
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}

export const PaymentButton: React.FC<PaymentButtonProps> = ({ 
  text, 
  onClick, 
  disabled = false,
  loading = false 
}) => {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch relative">
      <button
        type="button"
        onClick={onClick}
        disabled={disabled || loading}
        className="flex items-center gap-3 self-stretch shadow-[0_1px_0_0_rgba(255,255,255,0.63)_inset,0_1px_1px_0_rgba(0,0,0,0.36),0_1px_1px_0_rgba(0,0,0,0.72)] backdrop-blur-[6px] relative cursor-pointer px-4 py-3 rounded-xl border-[none] max-sm:px-4 max-sm:py-3.5 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity"
        aria-label={loading ? 'Processing payment...' : text}
      >
        <div className="flex flex-col items-start gap-1 flex-[1_0_0] relative px-0 py-0.5">
          <span className="self-stretch text-black text-center text-base font-bold leading-5 relative max-sm:text-[15px] max-sm:leading-[18px]">
            {loading ? 'Processing...' : text}
          </span>
        </div>
      </button>
    </div>
  );
};
