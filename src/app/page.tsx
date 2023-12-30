'use client';

import React, { useState } from 'react';

const Home: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const fetchMessage = () => {
    fetch('http://localhost:3000/hello')
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data: ', error));
  };

  return (
    <main className='p-4'>
      <h1 className='text-lg text-blue-600 mb-4'>Rails API Test</h1>
      <button 
        onClick={fetchMessage} 
        className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
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
