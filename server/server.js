import express from "express";  // express helps Node.js connect to the database and create a server
const mongoose = require("mongoose"); // database
const authRoutes = require("./routes/auth");  // this imports the auth routes that we made in /routes/auth.js
const cors = require("cors"); // cors allows us to connect to database and create a server



const app = express();
const PORT = 3001;

mongoose
  .connect(process.env.MONGODB_URI, { //this connects to mongo database
    useNewUrlParser: true,    // this lets us use the new URL parser for MongoDB
    useUnifiedTopology: true, // this lets us use the new topology engine for MongoDB
  })    // then and catch to check connection status on database
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


  app.use(cors()); // this allows us to connect to the database and create a server
  app.use(express.json()); // this allows us to parse JSON data from the request body
  app.use("/api/auth", authRoutes);  // this uses the auth routes that we made in /routes/auth.js


  // this allows the user to know if the connection was successful or not
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });