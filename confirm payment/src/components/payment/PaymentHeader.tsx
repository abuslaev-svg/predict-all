import React from 'react';
import { CloseIcon } from '../icons/CloseIcon';

interface PaymentHeaderProps {
  title: string;
  onClose?: () => void;
}

export const PaymentHeader: React.FC<PaymentHeaderProps> = ({ title, onClose }) => {
  return (
    <header className="flex items-start self-stretch relative">
      <div className="flex items-start self-stretch relative w-full">
        <h1 className="flex-[1_0_0] text-[#ECF9F9] text-[21px] font-normal leading-7 relative max-md:text-[19px] max-md:leading-[26px] max-sm:text-lg max-sm:leading-6">
          {title}
        </h1>
        <CloseIcon onClick={onClose} />
      </div>
    </header>
  );
};
