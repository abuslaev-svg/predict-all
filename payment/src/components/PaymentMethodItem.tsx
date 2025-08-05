import React from 'react';

interface PaymentMethodItemProps {
  icon?: React.ReactNode;
  title: string;
  onClick?: () => void;
}

export const PaymentMethodItem: React.FC<PaymentMethodItemProps> = ({ icon, title, onClick }) => {
  return (
    <button
      className="flex h-12 items-center self-stretch pl-4 pr-[115px] py-3 bg-transparent border-none cursor-pointer hover:bg-[rgba(242,242,242,0.04)] transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-3 w-full">
        {icon && (
          <div className="flex-shrink-0">
            {icon}
          </div>
        )}
        <span className="text-[#ECF9F9] text-base font-normal leading-5 text-left">
          {title}
        </span>
      </div>
    </button>
  );
};
