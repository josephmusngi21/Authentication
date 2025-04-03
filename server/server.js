import express from "express";  // express helps Node.js connect to the database and create a server
const mongoose = require("mongoose"); // database
const authRoutes = require("./routes/auth");  // this imports the auth routes that we made in /routes/auth.js
const cors = require("cors"); // cors allows us to connect to database and create a server



const app = express();
const PORT = 3001;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


  app.use(cors());
  app.use(express.json());
  app.use("/api/auth", authRoutes); 

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });