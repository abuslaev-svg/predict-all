import React, { useState } from 'react';

const TradingPanel: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<'yes' | 'no'>('yes');
  const [amount, setAmount] = useState<string>('100');

  const coefficient = 9.12;
  const potentialIncome = parseFloat(amount) * coefficient;

  return (
    <aside className="flex w-[390px] flex-col items-center gap-6 absolute h-[336px] left-[1060px] top-[152px]">
      <div className="flex flex-col items-start gap-6 self-stretch relative bg-[#141414] p-6 rounded-2xl">
        <div className="flex flex-col items-start gap-4 self-stretch relative">
          {/* Toggle button */}
          <div className="flex h-10 items-start gap-1 self-stretch backdrop-blur-sm relative bg-[rgba(242,242,242,0.07)] p-1 rounded-xl">
            <button
              onClick={() => setSelectedOption('yes')}
              className={`flex justify-center items-start gap-0.5 flex-[1_0_0] self-stretch border backdrop-blur-[3px] relative px-3 py-1 rounded-lg border-solid border-[rgba(242,242,242,0.00)] ${
                selectedOption === 'yes' ? 'bg-[#141414]' : ''
              }`}
              aria-pressed={selectedOption === 'yes'}
            >
              <div className={`flex-[1_0_0] self-stretch text-center text-base font-normal leading-5 relative ${
                selectedOption === 'yes' ? 'text-[#ECF9F9]' : 'text-[rgba(229,255,255,0.56)]'
              }`}>
                Yes · 18%
              </div>
            </button>
            <button
              onClick={() => setSelectedOption('no')}
              className={`flex justify-center items-start gap-0.5 flex-[1_0_0] self-stretch rounded relative px-3 py-1 ${
                selectedOption === 'no' ? 'bg-[#141414]' : ''
              }`}
              aria-pressed={selectedOption === 'no'}
            >
              <div className={`flex-[1_0_0] self-stretch text-center text-base font-normal leading-5 relative ${
                selectedOption === 'no' ? 'text-[#ECF9F9]' : 'text-[rgba(229,255,255,0.56)]'
              }`}>
                No · 82%
              </div>
            </button>
          </div>
          
          {/* Amount input */}
          <div className="flex h-14 flex-col justify-center items-start self-stretch relative p-0">
            <div className="flex items-center gap-3 self-stretch border relative bg-[rgba(242,242,242,0.04)] px-4 py-2 rounded-xl border-solid border-[rgba(242,242,242,0.10)]">
              <div className="flex h-10 flex-col justify-center items-start gap-1 flex-[1_0_0] relative p-0">
                <label className="text-[rgba(229,255,255,0.56)] text-[13px] font-normal leading-4 tracking-[0.13px] relative">
                  Amount, $
                </label>
                <div className="flex items-start self-stretch relative p-0">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="text-[#ECF9F9] text-base font-normal leading-5 tracking-[0.16px] relative bg-transparent border-none outline-none w-full"
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Trading conditions */}
          <div className="flex flex-col items-start gap-2 self-stretch opacity-80 relative">
            <div className="flex justify-between items-center self-stretch relative p-0">
              <div className="text-[rgba(229,255,255,0.56)] text-center text-base font-normal leading-5 relative">
                Coefficient:
              </div>
              <div className="text-[rgba(229,255,255,0.56)] text-center text-base font-normal leading-5 relative">
                x{coefficient.toFixed(2)}
              </div>
            </div>
            <div className="flex justify-between items-center self-stretch relative p-0">
              <div className="text-[#ECF9F9] text-center text-base font-normal leading-5 relative">
                Potential income:
              </div>
              <div className="text-[#ECF9F9] text-center text-base font-normal leading-5 relative">
                ${potentialIncome.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
        
        {/* Open Trade button */}
        <button className="flex h-12 items-center gap-3 self-stretch shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_1px_1px_0_rgba(0,0,0,0.12),0_1px_1px_0_rgba(0,0,0,0.24)] backdrop-blur-[6px] relative p-4 rounded-xl bg-gradient-to-b from-white to-gray-200 hover:from-gray-100 hover:to-gray-300 transition-colors">
          <div className="flex flex-col items-start gap-1 flex-[1_0_0] relative p-0">
            <div className="self-stretch text-black text-center text-base font-bold leading-5 relative">
              Open Trade
            </div>
          </div>
        </button>
      </div>
      
      {/* Terms of use */}
      <div className="self-stretch text-[rgba(229,255,255,0.56)] text-center text-[13px] font-normal leading-4 underline decoration-solid decoration-auto underline-offset-auto relative">
        By trading, you agree to the{' '}
        <span className="underline cursor-pointer hover:text-[#ECF9F9] transition-colors">
          Terms of Use
        </span>
      </div>
    </aside>
  );
};

export default TradingPanel;
