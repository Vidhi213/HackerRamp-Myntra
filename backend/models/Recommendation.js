// models/Recommendation.js
const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
  itemID: { type: Number, required: true },
});

const Recommendation = mongoose.model("Recommendation", recommendationSchema);

module.exports = Recommendation;