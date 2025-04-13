"use client";

import React, { useState } from "react";
import axios from "axios";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            const response = await axios.post("/api/login", {
                email,
                password,
            });
            setSuccess("Login successful!");
            console.log("Token:", response.data.token);
        } catch (err) {
            setError((err as any).response?.data?.message || "Login failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}
            <label htmlFor="email">Email:</label>
            <br />
            <input
                id="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
                id="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <button type="submit">Login</button>
        </form>
    );
}
