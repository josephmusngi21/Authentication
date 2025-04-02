// Helper functions for AuthProvider.jsx

/**
 * Save the authentication token to local storage.
 * @param {string} token - The authentication token.
 */
export const saveAuthToken = (token) => {
    localStorage.setItem('authToken', token);
};

/**
 * Retrieve the authentication token from local storage.
 * @returns {string|null} - The authentication token or null if not found.
 */
export const getAuthToken = () => {
    return localStorage.getItem('authToken');
};

/**
 * Remove the authentication token from local storage.
 */
export const clearAuthToken = () => {
    localStorage.removeItem('authToken');
};

/**
 * Check if the user is authenticated based on the presence of a token.
 * @returns {boolean} - True if authenticated, false otherwise.
 */
export const isAuthenticated = () => {
    return !!getAuthToken();
};