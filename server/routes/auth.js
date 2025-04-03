import express from "express"; // express web framework for node.js
import jwt from "jsonwebtoken"; // jsonwebtoken is a library that helps us create and verify JSON Web Tokens
import User from "../models/user.js"; // this imports the user model that was made in /models/user.js
const router = express.Router(); // this creates a new router object that we can use to define our routes
import bcrypt from "bcrypt"; // bcrypt is a library that helps us hash and compare passwords

router.post("/login", async (req, res) => {
    // This will take the username and password from the request body and check if the user exists in the database, if it does, it will check if the password is correct, if it is, it will create a token and send it back to the client
  const { username, password } = req.body;

  const errorMessage = "Invalid username or password";

  const user = await User.findOne({ username });
  // 
  // This will check the database and see if the user already exists if it doesn't it will return a error
  if (!user) {
    return res.status(400).json({ message: errorMessage });
  }

  const validPassword = await bcrypt.password(password, user.password);
  // This will decrypt the password and check if its correct, if not it will return a error

  if (!validPassword) {
    return res.status(400).json({ message: errorMessage });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  // This will create a token for the user, it will take the user id and sign it with the JWT_SECRET, and set the expiration time to 1 hour
  res.send({ token });
});


router.post("/register", async (req, res) => {
    // This will take the username and password from the request body and check if the user exists in the database, if it does, it will return a error, if not it will create a new user and save it to the database
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ username });
        // This will check the database and see if the user already exists 
        if (existingUser) {
            // If it exists it will return a error
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10); // generate a salt for the password
        // salt is a random string that is used to hash the password, it makes it more secure
        const hashedPassword = await bcrypt.hash(password, salt);
        // This will hash the password and save it to the database

        // This will create a new user and save it to the database
        const user = new User({
            username,
            password: hashedPassword,
        });
        

        const savedUser = await user.save();
        // res is like console.log where it will just print the data to the console, but in this case it will save the user to the database
        res.json({ 
            message: "User registered successfully",
            userId: savedUser._id,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server error" });
    }        
});

module.exports = router;