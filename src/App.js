import React from "react";
import BasketballPlayerCard from "./BasketballPlayerCard";

function App() {
  return (
    <div className="App">
      <BasketballPlayerCard
        name="LeBron James"
        image="https://mcdn.wallpapersafari.com/medium/88/40/X90vmd.jpg"
        position="Forward"
        stats={{
          pointsPerGame: 25.4,
          assistsPerGame: 7.1,
          reboundsPerGame: 10.5,
        }}
      />
    </div>
  );
}

export default App;
