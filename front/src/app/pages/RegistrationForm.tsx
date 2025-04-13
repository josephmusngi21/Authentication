import React, { useState } from 'react';
import { registerUser } from '../../api/apiService.js';

export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await registerUser(email, password);
            setSuccess('User registered successfully!');
            console.log('Registration successful:', response);
        } catch (err) {
            setError((err instanceof Error ? err.message : 'An error occurred during registration.'));
            console.error('Error during registration:', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1> Register </h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <label htmlFor='username'>Username:</label>
            <br />
            <input 
                id='username' 
                type='text' 
                placeholder='Enter Username' 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <br />
            <label htmlFor='email'>Email:</label>
            <br />
            <input 
                id='email' 
                type='email' 
                placeholder='Enter Email' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <br />
            <label htmlFor='password'>Password:</label>
            <br />
            <input 
                id='password' 
                type='password' 
                placeholder='Enter Password' 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <br />
            <button type='submit'>Register</button>
        </form>
    );
}