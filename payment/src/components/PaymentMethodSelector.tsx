import React, { useState } from 'react';
import { PaymentHeader } from './PaymentHeader';
import { AmountInput } from './AmountInput';
import { TradingConditions } from './TradingConditions';
import { PaymentMethodList } from './PaymentMethodList';

export const PaymentMethodSelector: React.FC = () => {
  const [amount, setAmount] = useState(100);
  const coefficient = 9.12;

  const handleClose = () => {
    console.log('Payment method selector closed');
  };

  const handleAmountChange = (newAmount: number) => {
    setAmount(newAmount);
  };

  const handlePaymentMethodSelect = (methodId: string) => {
    console.log('Selected payment method:', methodId);
  };

  return (
    <main className="flex w-[390px] h-[732px] flex-col items-start shrink-0 bg-[#141414] rounded-2xl max-md:w-full max-md:max-w-[600px] max-md:mx-auto max-md:my-0 max-sm:w-full max-sm:max-w-[390px] max-sm:mx-auto max-sm:my-0">
      <section className="flex flex-col items-start gap-6 self-stretch bg-[#141414] p-6">
        <PaymentHeader onClose={handleClose} />
        
        <form onSubmit={(e) => e.preventDefault()}>
          <AmountInput value={amount} onChange={handleAmountChange} />
        </form>
        
        <TradingConditions coefficient={coefficient} amount={amount} />
      </section>
      
      <section className="flex flex-col items-center gap-2 self-stretch">
        <PaymentMethodList onPaymentMethodSelect={handlePaymentMethodSelect} />
      </section>
    </main>
  );
};
