'use client';

import { useState } from 'react';
// import Login from './pages/LoginForm.tsx';
// import Register from './pages/RegistrationForm.tsx';
import Login from './pages/LoginForm';
import Register from './pages/RegistrationForm';


export default function Page() {
  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? (
      <Login/>
      ) : (
      <Register/>
      )}
      <button onClick={() => setLogin(!login)}>
      {login ? 'Switch to Register' : 'Switch to Login'}
      </button>
    </>
  )
}