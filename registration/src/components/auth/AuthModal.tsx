import React, { useState } from 'react';
import { AuthToggle } from './AuthToggle';
import { AuthInput } from './AuthInput';
import { AuthButton } from './AuthButton';

interface AuthModalProps {
  onClose?: () => void;
  onSubmit?: (data: { email: string; password: string; mode: 'registration' | 'login' }) => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ onClose, onSubmit }) => {
  const [mode, setMode] = useState<'registration' | 'login'>('registration');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      return;
    }

    setIsLoading(true);
    
    try {
      if (onSubmit) {
        await onSubmit({ email, password, mode });
      } else {
        // Default behavior - simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(`${mode} attempt:`, { email, password });
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="flex flex-col items-start gap-6 self-stretch relative max-w-[600px] bg-[#141414] mx-auto my-0 pt-6 pb-10 px-6 rounded-2xl max-md:gap-5 max-md:max-w-[500px] max-md:pt-5 max-md:pb-8 max-md:px-5 max-sm:gap-4 max-sm:max-w-full max-sm:m-4 max-sm:pt-4 max-sm:pb-6 max-sm:px-4">
      <header className="flex items-start gap-6 self-stretch relative">
        <h1 className="flex-[1_0_0] text-[#ECF9F9] text-[21px] font-normal leading-7 relative max-md:text-[19px] max-md:leading-[26px] max-sm:text-lg max-sm:leading-6">
          Authorize to continue
        </h1>
        <button
          type="button"
          onClick={handleClose}
          className="flex items-center justify-center"
          aria-label="Close modal"
        >
          <div
            dangerouslySetInnerHTML={{
              __html:
                `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="close-icon" style="width: 24px; height: 24px; position: relative; cursor: pointer"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L12 10.5858L18.2929 4.29289C18.6834 3.90237 19.3166 3.90237 19.7071 4.29289C20.0976 4.68342 20.0976 5.31658 19.7071 5.70711L13.4142 12L19.7071 18.2929C20.0976 18.6834 20.0976 19.3166 19.7071 19.7071C19.3166 20.0976 18.6834 20.0976 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0976 4.68342 20.0976 4.29289 19.7071C3.90237 19.3166 3.90237 18.6834 4.29289 18.2929L10.5858 12L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#E6FFFF" fill-opacity="0.56"></path> </svg>`,
            }}
          />
        </button>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 self-stretch relative">
        <AuthToggle activeMode={mode} onModeChange={setMode} />
        
        <fieldset className="flex flex-col items-start gap-4 self-stretch relative border-0 p-0 m-0">
          <legend className="sr-only">
            {mode === 'registration' ? 'Registration' : 'Login'} form
          </legend>
          
          <AuthInput
            label="Email"
            type="email"
            value={email}
            onChange={setEmail}
            required
          />
          
          <AuthInput
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            required
          />
        </fieldset>

        <div className="flex flex-col items-start gap-2 self-stretch relative">
          <AuthButton type="submit" disabled={!email || !password} loading={isLoading}>
            {mode === 'registration' ? 'Register' : 'Login'}
          </AuthButton>
        </div>
      </form>
    </div>
  );
};
