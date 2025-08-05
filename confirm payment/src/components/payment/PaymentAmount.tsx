import React from 'react';
import { UpiIcon } from '../icons/UpiIcon';

interface PaymentAmountProps {
  amount: string;
  title?: string;
}

export const PaymentAmount: React.FC<PaymentAmountProps> = ({ 
  amount, 
  title = "Payment amount" 
}) => {
  return (
    <section 
      className="flex flex-col items-center gap-2 self-stretch relative"
      aria-labelledby="payment-amount-title"
    >
      <div className="flex flex-col items-center gap-3 self-stretch relative">
        <UpiIcon />
        <p 
          id="payment-amount-title"
          className="self-stretch text-[rgba(229,255,255,0.56)] text-center text-base font-normal leading-6 relative max-md:text-[15px] max-md:leading-[22px] max-sm:text-sm max-sm:leading-5"
        >
          {title}
        </p>
      </div>
      <div 
        className="self-stretch text-[#ECF9F9] text-center text-[27px] font-bold leading-9 relative max-md:text-2xl max-md:leading-8 max-sm:text-[22px] max-sm:leading-[30px]"
        aria-label={`Payment amount: ${amount}`}
      >
        {amount}
      </div>
    </section>
  );
};
