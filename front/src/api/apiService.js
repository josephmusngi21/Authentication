// This file will connect to mongodb and create a user model, this will be used to create a new user and save it to the database
// It will also check if the user already exists and if the password is correct, if not it will return a error
// It will also create a token for the user, it will take the user id and sign it with the JWT_SECRET, and set the expiration time to 1 hour

const { MongoClient, SErverApiVersion} = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();

const uri = process.env.MONGO_URL;

const client = new MongoClient(uri, {
  severApi: {
    version: SErverApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// This connects to database and creates a user model, this will be used to create a new user and save it to the database
async function connect() {
    try {
        await client.connect();

        await client.db("admin").command({ ping: 1 });
        console.log("Connected to MongoDB successfully");
    } finally {
        await client.close();
    }
}

// This is a method that checks if the user email already exists 
async function checkLogin(email, password) {
  try {
    await client.connect();
    const database = client.db("yourDatabaseName");
    const users = database.collection("users");

    const user = await users.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { token, user };
  } catch (error) {
    console.error("Error during login:", error);
    throw error;
  } finally {
    await client.close();
  }
}


// This is a method that creates a new user and saves it to the database

connect().catch(console.error);