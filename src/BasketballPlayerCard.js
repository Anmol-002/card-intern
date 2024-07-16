// BasketballPlayerCard.js
import React, { useState } from "react";
import "./BasketballPlayerCard.css";

const BasketballPlayerCard = ({ name, image, position, stats }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`background ${isDarkMode ? "dark-mode" : ""}`}>
      <div
        className={`player-card ${isDarkMode ? "dark-mode" : ""} ${
          isFlipped ? "flipped" : ""
        }`}
      >
        <div className="card-inner">
          <div className="card-front">
            <div className="player-image-container">
              <img src={image} alt={`${name}`} className="player-image" />
            </div>
            <h2 className="player-name">{name}</h2>
            <p className="player-position">{position}</p>
            <button className="flip-button" onClick={handleCardFlip}>
              View Stats
            </button>
          </div>
          <div className="card-back">
            <h3>Player Stats</h3>
            <div className="player-stats">
              <div className="stat">
                <span className="stat-label">Points per Game:</span>
                <span className="stat-value">{stats.pointsPerGame}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Assists per Game:</span>
                <span className="stat-value">{stats.assistsPerGame}</span>
              </div>
              <div className="stat">
                <span className="stat-label">Rebounds per Game:</span>
                <span className="stat-value">{stats.reboundsPerGame}</span>
              </div>
            </div>
            <button className="flip-button" onClick={handleCardFlip}>
              View Player
            </button>
          </div>
        </div>

        <button className="dark-mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default BasketballPlayerCard;


