import React, { useState } from 'react';

interface AuthInputProps {
  label: string;
  type: 'email' | 'password' | 'text';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  required = false
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className="flex flex-col justify-center items-start self-stretch relative p-0">
      <div className="flex items-center gap-3 self-stretch border relative bg-[rgba(242,242,242,0.04)] px-4 py-2 rounded-xl border-solid border-[rgba(242,242,242,0.10)] max-md:px-3.5 max-md:py-[7px] max-sm:px-3 max-sm:py-1.5">
        <div className="flex h-10 flex-col justify-center items-start gap-1 flex-[1_0_0] relative p-0 max-sm:h-9">
          {!isFocused && !value ? (
            <label
              className="text-[rgba(229,255,255,0.56)] text-base font-normal leading-5 relative cursor-text max-md:text-[15px] max-md:leading-[18px] max-sm:text-sm max-sm:leading-4"
              onClick={() => setIsFocused(true)}
            >
              {label}
            </label>
          ) : (
            <input
              type={inputType}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder || label}
              required={required}
              className="w-full bg-transparent text-[#ECF9F9] text-base font-normal leading-5 outline-none placeholder:text-[rgba(229,255,255,0.56)] max-md:text-[15px] max-md:leading-[18px] max-sm:text-sm max-sm:leading-4"
              autoComplete={type === 'email' ? 'email' : type === 'password' ? 'current-password' : 'off'}
            />
          )}
        </div>
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="flex items-center justify-center"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: showPassword
                  ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="visibility-icon" style="width: 24px; height: 24px; position: relative; cursor: pointer"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.5C7.30558 4.5 3.45062 7.74248 2.18164 12C3.45062 16.2575 7.30558 19.5 12 19.5C16.6944 19.5 20.5494 16.2575 21.8184 12C20.5494 7.74248 16.6944 4.5 12 4.5ZM12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="#E6FFFF" fill-opacity="0.56"></path> </svg>`
                  : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="visibility-icon" style="width: 24px; height: 24px; position: relative; cursor: pointer"> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8492 4.15032C20.2398 4.54084 20.2398 5.174 19.8492 5.56453L18.0432 7.3706C18.1084 7.42343 18.1729 7.47658 18.2367 7.52999C19.6988 8.75536 20.8345 10.1844 21.5783 11.1205C21.6494 11.21 21.717 11.295 21.7809 11.3749C22.073 11.7401 22.073 12.259 21.7809 12.6243C21.717 12.7041 21.6494 12.7891 21.5783 12.8787C20.8345 13.8147 19.6988 15.2438 18.2367 16.4691C16.6303 17.8153 14.5342 18.9996 12 18.9996C10.3547 18.9996 8.89394 18.5003 7.63206 17.7817L5.70711 19.7067C5.31658 20.0972 4.68342 20.0972 4.29289 19.7067C3.90237 19.3161 3.90237 18.683 4.29289 18.2925L5.95683 16.6285C5.89156 16.5757 5.82706 16.5225 5.76333 16.4691C4.30115 15.2438 3.16553 13.8147 2.42172 12.8787C2.35059 12.7891 2.28304 12.7041 2.21913 12.6243C1.92696 12.259 1.92696 11.7401 2.21913 11.3749C2.28304 11.295 2.35059 11.21 2.42172 11.1205C3.16553 10.1844 4.30115 8.75536 5.76333 7.52999C7.36967 6.18381 9.46583 4.99956 12 4.99956C13.6453 4.99956 15.1061 5.49877 16.3679 6.2174L18.435 4.15032C18.8256 3.75979 19.4587 3.75979 19.8492 4.15032ZM14.8886 7.69679C13.9959 7.26332 13.0325 6.99956 12 6.99956C10.1159 6.99956 8.46205 7.8778 7.04796 9.06288C5.91317 10.0139 4.99444 11.1084 4.27922 11.9996C4.99444 12.8907 5.91317 13.9852 7.04796 14.9362C7.15724 15.0278 7.26796 15.1176 7.38011 15.2052L14.8886 7.69679ZM9.11144 16.3023C10.0041 16.7358 10.9675 16.9996 12 16.9996C13.8841 16.9996 15.5379 16.1213 16.952 14.9362C18.0868 13.9852 19.0056 12.8907 19.7208 11.9996C19.0056 11.1084 18.0868 10.0139 16.952 9.06288C16.8428 8.97129 16.732 8.88154 16.6199 8.79388L9.11144 16.3023Z" fill="#E6FFFF" fill-opacity="0.56"></path> </svg>`
              }}
            />
          </button>
        )}
      </div>
    </div>
  );
};
