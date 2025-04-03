import jwt from "jsonwebtoken"; // jwt is a library for creating and verifying JSON Web Tokens
import dotenv from "dotenv";    //dotenv lets me import variables from .env files
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;


const generateToken = (user) => {
    //This will generate a token for the user, it will take the user id and email and sign it with the JWT_SECRET, and set the expiration time to 1 hour
  return jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
    expiresIn: "1h",
  });
};

const verifyToken = (token) => {
    // This will verify the token, it will take the token and check with the JWT_SECRET, if it is valid it will return the decoded token, if not it will return null
    return jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return null;
        }
        return decoded;
    });
};

module.exports = { generateToken, verifyToken };