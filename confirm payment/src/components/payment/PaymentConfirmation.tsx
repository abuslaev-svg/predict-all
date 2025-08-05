import React, { useState } from 'react';
import { PaymentHeader } from './PaymentHeader';
import { PaymentAmount } from './PaymentAmount';
import { PaymentDetails } from './PaymentDetails';
import { PaymentButton } from './PaymentButton';

interface PaymentConfirmationProps {
  amount?: string;
  paymentMethod?: string;
  account?: string;
  currency?: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

export const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  amount = "$100.00",
  paymentMethod = "UPI",
  account = "johndoe****@gmail.com",
  currency = "USD",
  onConfirm,
  onClose
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentDetails = [
    { key: "Payment Metod", value: paymentMethod },
    { key: "Deposit to Account", value: account },
    { key: "Currency", value: currency }
  ];

  const handleConfirmPayment = async () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      if (onConfirm) {
        onConfirm();
      }
    }, 2000);
  };

  const handleClose = () => {
    if (!isProcessing && onClose) {
      onClose();
    }
  };

  return (
    <main className="flex flex-col items-start self-stretch relative max-w-[400px] bg-[#141414] mx-auto my-0 rounded-2xl max-md:max-w-[90%] max-md:mx-auto max-md:my-5 max-sm:max-w-[95%] max-sm:mx-auto max-sm:my-2.5 max-sm:rounded-xl">
      <div className="flex flex-col items-start gap-2.5 self-stretch relative p-6 max-md:p-5 max-sm:p-4">
        <PaymentHeader 
          title="Confirm payment" 
          onClose={handleClose}
        />
        
        <div className="flex flex-col items-start gap-6 self-stretch relative bg-[#141414] p-6 max-md:p-5 max-sm:p-4">
          <div className="flex flex-col items-start gap-6 self-stretch relative max-sm:gap-5">
            <article className="flex flex-col items-center gap-6 self-stretch relative max-sm:gap-5">
              <PaymentAmount amount={amount} />
              
              <PaymentDetails details={paymentDetails} />
              
              <div className="flex flex-col items-start gap-4 self-stretch relative">
                <PaymentButton
                  text="Confirm payment"
                  onClick={handleConfirmPayment}
                  disabled={isProcessing}
                  loading={isProcessing}
                />
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
};
