import React, { useState } from 'react';
import { AuthModal } from '@/components/auth';

const Index = () => {
  const [showModal, setShowModal] = useState(true);

  const handleAuthSubmit = async (data: { email: string; password: string; mode: 'registration' | 'login' }) => {
    console.log('Authentication data:', data);
    // Here you would typically make an API call to your authentication service
    // For demo purposes, we'll just log the data and close the modal
    setTimeout(() => {
      setShowModal(false);
    }, 1000);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black p-4">
      {showModal ? (
        <main role="main" aria-label="Authentication modal">
          <AuthModal onClose={handleCloseModal} onSubmit={handleAuthSubmit} />
        </main>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">Welcome!</h1>
          <p className="text-xl text-gray-300 mb-8">You have successfully authenticated.</p>
          <button
            onClick={handleShowModal}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Show Auth Modal Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Index;
