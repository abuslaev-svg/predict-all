import React, { useState } from 'react';

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
}

export const AmountInput: React.FC<AmountInputProps> = ({ value, onChange }) => {
  const [inputValue, setInputValue] = useState(value.toString());

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    
    const numericValue = parseFloat(newValue);
    if (!isNaN(numericValue)) {
      onChange(numericValue);
    }
  };

  return (
    <div className="flex h-14 flex-col justify-center items-start self-stretch p-0">
      <div className="flex items-center gap-3 self-stretch border bg-[rgba(242,242,242,0.04)] px-4 py-2 rounded-xl border-solid border-[rgba(242,242,242,0.10)]">
        <div className="flex h-10 flex-col justify-center items-start gap-1 flex-[1_0_0] p-0">
          <label
            htmlFor="amount-input"
            className="text-[rgba(229,255,255,0.56)] text-[13px] font-normal leading-4 tracking-[0.13px]"
          >
            Amount, $
          </label>
          <div className="flex items-start self-stretch p-0">
            <input
              id="amount-input"
              type="number"
              value={inputValue}
              onChange={handleInputChange}
              className="text-[#ECF9F9] text-base font-normal leading-5 tracking-[0.16px] bg-transparent border-none outline-none w-full"
              min="0"
              step="0.01"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
