'use client';

import React, { useState } from 'react';
import { API_BASE_URL } from '../../api-config';

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const fetchMessage = () => {
    fetch(`${API_BASE_URL}/hello`)
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data: ', error));
  };

  return (
    <main className='p-4'>
      <h1 className='mb-4 text-lg text-blue-600'>Rails API Test</h1>
      <button 
        onClick={fetchMessage} 
        className='rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'
      >
        Fetch Message from Rails
      </button>
      {message && (
        <p className='mt-3 text-green-500'>{message}</p>
      )}
    </main>
  );
}

export default Home;
