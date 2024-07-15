import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  const [points, setPoints] = useState(0);
  const userId = "01";
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    fetchOutfits();
  }, []);

  const fetchOutfits = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/get-outfits");
      setOutfits(response.data);
    } catch (error) {
      console.error("Error fetching outfits:", error);
    }
  };

  const handleSwipe = async (direction, outfit) => {
    if (direction === "right") {
      setPoints(points + 10);
      // Save user details to MongoDB when swiped right
      try {
        await axios.post("http://localhost:3001/api/save-user-details", {
          userId: outfit.userId,
          userName: outfit.userName,
          items: [outfit.item1, outfit.item2, outfit.item3].filter(Boolean),
        });
      } catch (error) {
        console.error("Error saving user details:", error);
      }
    } else if (direction === "left") {
      setPoints(points - 10);
    }
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://myntra.youthbeat.in/new-tinder-app/img/fwd-logo-black.png"
            alt="Myntra Logo"
          />
          <span>SwipeIT</span>
        </div>
        <div className="points-container">
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Favorites</a>
            <a href="#">Profile</a>
          </div>
          <div className="points">Points: {points}</div>
        </div>
      </nav>
      <div className="card-container">
        {outfits.map((outfit, index) => (
          <Card
          key={index}
          index={index}
          image={outfit.imageUrl}
          color={outfit.color}
          onSwipe={(direction) => handleSwipe(direction, outfit)}
        />
        ))}
      </div>
    </div>
  );
};

export default App;