import express from "express"; 
const mongoose = require("mongoose"); 
const authRoutes = require("./routes/auth"); 
const cors = require("cors");

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