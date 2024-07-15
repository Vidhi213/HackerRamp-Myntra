const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const Recommendation = require("./models/Recommendation");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://vidhi2108:Ap8WI1B9XJXBBbqx@cluster0.oykzhey.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB database with proper error handling
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the application on connection failure
  });

  const Recommendation = require("./models/Recommendation"); // Adjust the path as per your project structure

  // Endpoint to fetch recommendations
  app.get("/api/recommendations", async (req, res) => {
    try {
      const recommendations = await Recommendation.find();
      res.json(recommendations);
    } catch (err) {
      console.error("Error fetching recommendations:", err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

// Mongoose Schema for Points
const pointsSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
});

const Points = mongoose.model("Points", pointsSchema);

// API Endpoints
app.get("/api/get-points/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const points = await Points.findOne({ userId });
    if (!points) return res.status(404).json({ message: "No points found" });
    res.json(points);
  } catch (error) {
    console.error("Error fetching points:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/store-points", async (req, res) => {
  const { userId, points } = req.body;
  if (!userId || points === undefined)
    return res.status(400).json({ message: "User ID or points data missing" });

  try {
    let newPoints = await Points.findOneAndUpdate(
      { userId },
      { points },
      { new: true, upsert: true }
    );
    res.json({ message: "Points stored successfully", points: newPoints });
  } catch (error) {
    console.error("Error storing points:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Mongoose Schema for Outfit
const outfitSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  timeAgo: String,
  imageUrl: String,
  item1: String,
  item2: String,
  item3: String,
  description: String,
});

const Outfit = mongoose.model("Outfit", outfitSchema);

// API Endpoint to fetch outfits
app.get("/api/get-outfits", async (req, res) => {
  try {
    const outfits = await Outfit.find();
    res.json(outfits);
  } catch (error) {
    console.error("Error fetching outfits:", error);
    res.status(500).json({ message: "Server error" });
  }
});
const userSchema = new mongoose.Schema({
  userId: String,
  userName: String,
  items: [String],
});

const User = mongoose.model("User", userSchema);

app.post("/api/save-user-details", async (req, res) => {
  const { userId, userName, items } = req.body;
  if (!userId || !userName || !items) {
    return res.status(400).json({ message: "User data missing" });
  }

  try {
    const user = await User.findOneAndUpdate(
      { userId },
      { userId, userName, items },
      { new: true, upsert: true }
    );
    res.json({ message: "User details saved successfully", user });
  } catch (error) {
    console.error("Error saving user details:", error);
    res.status(500).json({ message: "Server error" });
  }
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
