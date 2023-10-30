'use client';

import React, { useState } from 'react';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    username: 'test user',
    email: 'testuser@mail.com',
    password: 'password',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async () => {
    setIsLoading(true);
    const res = await fetch('http://localhost:3333/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
      credentials: 'include',
    });
    const data = await res.json();
    if (res.ok) {
      console.log('data is ok! ',data);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div>Login</div>
      <form onSubmit={onSubmit} className='text-black'>
        <input name='username' type='text' placeholder='Username' value={formData.username} onChange={handleChange} />
        <input name='email' type='email' placeholder='Email' value={formData.email} onChange={handleChange} />
        <input name='password' type='password' placeholder='Password' value={formData.password} onChange={handleChange} />
        <button type='submit' disabled={isLoading} className='border-2 rounded bg-slate-700 text-white px-4 py-2'>
          Login
        </button>
      </form>
    </>
  );
}
