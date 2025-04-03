import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
const router = express.Router();
import bcrypt from "bcrypt";

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const errorMessage = "Invalid username or password";

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).json({ message: errorMessage });
  }

  const validPassword = await bcrypt.password(password, user.password);

  if (!validPassword) {
    return res.status(400).json({ message: errorMessage });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.send({ token });
});


router.post("/register", async (req, res) => {
    try {
        const { username, password } = req.body;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = new User({
            username,
            password: hashedPassword,
        });

        const savedUser = await user.save();
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