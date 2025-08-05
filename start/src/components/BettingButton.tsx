import React, { useState } from 'react';

interface BettingButtonProps {
  type: 'yes' | 'no';
  percentage: number;
  disabled?: boolean;
}

export const BettingButton: React.FC<BettingButtonProps> = ({ 
  type, 
  percentage, 
  disabled = false 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const isYes = type === 'yes';
  const color = isYes ? '#38D67A' : '#FF5765';
  const label = isYes ? 'Yes' : 'No';

  const handleClick = () => {
    if (!disabled) {
      // Handle betting logic here
      console.log(`Betting ${type} with ${percentage}%`);
    }
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={disabled}
      className={`min-w-[104px] items-center border shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_1px_1px_0_rgba(0,0,0,0.12),0_1px_1px_0_rgba(0,0,0,0.24)] backdrop-blur-[calc(12px_/_2] flex min-h-10 gap-3 flex-1 shrink basis-[0%] bg-[rgba(242,242,242,0.08)] p-4 rounded-xl border-solid border-[rgba(242,242,242,0.00)] transition-all duration-200 ${
        isHovered && !disabled ? 'bg-[rgba(242,242,242,0.12)] transform scale-105' : ''
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      style={{ color }}
      aria-label={`Bet ${label} at ${percentage}%`}
    >
      <div className="self-stretch flex w-full flex-col overflow-hidden flex-1 shrink basis-[0%] gap-1 my-auto p-0">
        <div className="text-base font-bold leading-5" style={{ color }}>
          {label} · {percentage}%
        </div>
      </div>
    </button>
  );
};
