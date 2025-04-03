# Authentication System

This project is a full-stack authentication system built with Node.js, Express, MongoDB, and React. It includes features like user registration, login, and session management.

## Features

- User registration and login
- JWT-based authentication
- Secure password hashing
- Protected routes
- Responsive frontend

## Prerequisites

- Node.js (v18 or higher)
- MongoDB
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/josephmusngi21/Authentication.git
   cd authentication
   ```

2. Install server dependencies:
   ```bash
   cd server
   npm install
   ```

3. Install client dependencies:
   ```bash
   cd ../client
   npm install
   ```

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

1. Start the server:
   ```bash
   cd server
   npm start
   ```

2. Start the client:
   ```bash
   cd ../client
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Folder Structure

```
authentication/
├── client/       # Frontend code
├── server/       # Backend code
└── README.md     # Project documentation
```

### Authentication Flow Using React and Next.js

![Authentication Overview](authentication-overview.avif)

Source: [Next.js Authentication Documentation](https://nextjs.org/docs/pages/building-your-application/authentication)

---

## Steps to Implement Authentication

1. User completes the login form.
2. The app sends a request to the server.
3. The server creates a refresh token with an expiration date.
4. Along with the refresh token, the server also creates an access token.
5. The server sends the access token back to the app.
6. The app stores the access token in memory (e.g., using `useState` or similar state management).
7. Use the access token for subsequent authenticated requests.