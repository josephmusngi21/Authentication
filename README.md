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

1. **Frontend (React/Next.js)**:
   - The user interacts with the login or register pages (`client/src/app/pages/login.tsx` and `client/src/app/pages/register.tsx`).
   - The `AuthProvider` component (`client/src/components/AuthProvider.jsx`) manages authentication state and provides context to the app.
   - API requests are made using helper functions in `client/src/api/helper.js`.

2. **Backend (Node.js/Express)**:
   - The server handles authentication routes in `server/routes/auth.js`.
   - JWT tokens are generated and verified using utility functions in `server/utils/jwtHelper.js`.
   - User data is stored and managed using the `server/models/user.js` schema.

3. **API Endpoints**:
   - The client communicates with the backend via API routes defined in `client/src/app/pages/api/` (e.g., `login.ts`, `create-session.ts`, `auth/login.ts`).

4. **Authentication Process**:
   - The user submits login or registration data.
   - The backend validates the data and generates a JWT access token and a refresh token.
   - The tokens are sent back to the client and stored securely (e.g., in memory or cookies).
   - The client uses the access token for authenticated requests, refreshing it as needed using the refresh token.

5. **Configuration**:
   - The `next.config.ts` file in the client directory contains Next.js configuration.
   - The `eslint.config.mjs` file ensures code quality and adherence to best practices.

6. **Styling**:
   - Global styles are managed in `client/src/app/globals.css`.
   - Tailwind CSS is configured in `client/postcss.config.mjs`.

7. **Environment Variables**:
   - Ensure `.env` files are properly configured for both the client and server to manage sensitive data like API keys and database URIs.