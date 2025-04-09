"use client";

import react, { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ email, password });
        console.log(data);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const data = { email, password };
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1> Login </h1>
            <label htmlFor='email'>Email:</label>
            <br/>
            <input id='email' type='email' placeholder='Enter Email: '/>
            <br/>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='password' placeholder='Enter Password: '/>
            <button type='submit' onClick={handleClick}>Login</button>
        </form>
    )

};

