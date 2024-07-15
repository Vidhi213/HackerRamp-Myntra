import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useAnimation,
} from "framer-motion";
import "./Card.css";
import likeIcon from "./like.png";
import cancelIcon from "./cancel.png";
import starIcon from "./star.png";
import uploadIcon from "./upload.png";

const Card = ({ index, color, image, onSwipe }) => {
  const [showHeart, setShowHeart] = useState(false);
  const [showCross, setShowCross] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const motionValue = useMotionValue(0);
  const rotateValue = useTransform(motionValue, [-200, 200], [-15, 15]);
  const opacityValue = useTransform(
    motionValue,
    [-200, -150, 0, 150, 200],
    [0, 1, 1, 1, 0]
  );
  const animControls = useAnimation();

  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: color,
    boxShadow: "5px 10px 18px #888888",
    borderRadius: 10,
    height: "500px",
    width: "300px",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "24px",
  };

  const handleDragEnd = (event, info) => {
    const threshold = 150; // Swipe threshold
    if (Math.abs(info.point.x) <= threshold) {
      animControls.start({ x: 0 });
      setShowHeart(false);
      setShowCross(false);
    } else {
      const direction = info.point.x < 500 ? -1000 : 1000;
      if (info.point.x < 500) {
        setShowCross(true);
        setShowHeart(false);
        onSwipe("left"); // Call onSwipe with 'left'
      } else {
        setShowHeart(true);
        setShowCross(false);
        onSwipe("right"); // Call onSwipe with 'right'
      }
      animControls.start({ x: direction, opacity: 0 });
    }
  };

  const handlePlusClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    // Handle file upload logic here, e.g., save the file or process it
    console.log("File selected:", file.name);
  };

  return (
    <motion.div
      className="card"
      drag="x"
      style={{
        ...style,
        x: motionValue,
        rotate: rotateValue,
        opacity: opacityValue,
      }}
      dragConstraints={{ left: -1000, right: 1000 }}
      onDragEnd={handleDragEnd}
      animate={animControls}
    >
      <button className="star-button">
        <img src={starIcon} alt="star" className="star-icon" />{" "}
        {/* Star.png on top right */}
      </button>
      {showHeart && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <img src={likeIcon} alt="like" className="icon" />
        </motion.div>
      )}
      {showCross && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 1,
          }}
        >
          <img src={cancelIcon} alt="cancel" className="icon" />
        </motion.div>
      )}
      <div className="action-buttons">
        <img src={cancelIcon} alt="cancel" className="action-button" />
        <button className="plus-button" onClick={handlePlusClick}>
          +
        </button>
        <img src={likeIcon} alt="like" className="action-button" />
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>
              &times;
            </span>
            <h2>Add Your Fit!</h2>
            <p>Content to add your fit goes here...</p>
            <div className="file-upload">
              <input
                type="file"
                id="file-upload"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
              <label htmlFor="file-upload" className="upload-label">
                <img src={uploadIcon} alt="Upload" className="upload-icon" />
              </label>
            </div>
            <p
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                color: "#000",
              }}
            >
              Add your Myntra Fit!
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Card;
