# Authentication


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