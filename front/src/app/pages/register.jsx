import React, { useState } from 'react';

"use client";


export default function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ username, email, password });
        console.log(data);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const data = { username, email, password };
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1> Register </h1>
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
            <button type='submit' onClick={handleClick}>Register</button>
        </form>
    );
}