import React, { useState } from 'react';
import { PaymentConfirmation } from '@/components/payment/PaymentConfirmation';

const Index = () => {
  const [showPayment, setShowPayment] = useState(true);
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  const handlePaymentConfirm = () => {
    setPaymentCompleted(true);
    setShowPayment(false);
    
    // Show success message for 3 seconds then reset
    setTimeout(() => {
      setPaymentCompleted(false);
      setShowPayment(true);
    }, 3000);
  };

  const handlePaymentClose = () => {
    setShowPayment(false);
    
    // Show payment again after 2 seconds for demo purposes
    setTimeout(() => {
      setShowPayment(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
      {showPayment && (
        <PaymentConfirmation
          amount="$100.00"
          paymentMethod="UPI"
          account="johndoe****@gmail.com"
          currency="USD"
          onConfirm={handlePaymentConfirm}
          onClose={handlePaymentClose}
        />
      )}
      
      {paymentCompleted && (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-green-600 text-white p-6 rounded-2xl max-w-md">
            <h2 className="text-2xl font-bold mb-2">Payment Successful!</h2>
            <p className="text-green-100">Your payment of $100.00 has been processed successfully.</p>
          </div>
        </div>
      )}
      
      {!showPayment && !paymentCompleted && (
        <div className="flex flex-col items-center justify-center text-center">
          <div className="bg-gray-800 text-white p-6 rounded-2xl max-w-md">
            <h2 className="text-xl font-bold mb-2">Payment Cancelled</h2>
            <p className="text-gray-300">The payment confirmation will appear again shortly...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
