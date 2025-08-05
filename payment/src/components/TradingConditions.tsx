import React from 'react';

interface TradingConditionsProps {
  coefficient: number;
  amount: number;
}

export const TradingConditions: React.FC<TradingConditionsProps> = ({ coefficient, amount }) => {
  const potentialIncome = amount * coefficient;

  return (
    <section className="flex flex-col items-start gap-2 self-stretch opacity-80">
      <div className="flex justify-between items-center self-stretch p-0">
        <span className="text-[rgba(229,255,255,0.56)] text-center text-base font-normal leading-5">
          Coefficient:
        </span>
        <span className="text-[rgba(229,255,255,0.56)] text-center text-base font-normal leading-5">
          x{coefficient.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between items-center self-stretch p-0">
        <span className="text-[#ECF9F9] text-center text-base font-normal leading-5">
          Potential income:
        </span>
        <span className="text-[#ECF9F9] text-center text-base font-normal leading-5">
          ${potentialIncome.toFixed(2)}
        </span>
      </div>
    </section>
  );
};
