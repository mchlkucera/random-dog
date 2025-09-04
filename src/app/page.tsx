'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [dogImage, setDogImage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const generateDogPicture = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      
      if (data.status === 'success') {
        setDogImage(data.message);
      } else {
        setError('Failed to fetch dog picture');
      }
    } catch (err) {
      setError('Error fetching dog picture');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">
          🐕 Random Dog Generator
        </h1>
        
        <div className="mb-8">
          {dogImage ? (
            <div className="relative w-full h-64 mb-4 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={dogImage}
                alt="Random dog"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          ) : (
            <div className="w-full h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
              <div className="text-gray-500 dark:text-gray-400 text-center">
                <div className="text-4xl mb-2">🐾</div>
                <p>Click the button to generate a random dog picture!</p>
              </div>
            </div>
          )}
          
          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
        </div>

        <button
          onClick={generateDogPicture}
          disabled={isLoading}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              Loading...
            </>
          ) : (
            <>
              🎲 Generate Dog Picture
            </>
          )}
        </button>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mt-4">
          Powered by Dog CEO API
        </p>
      </div>
    </div>
  );
}
