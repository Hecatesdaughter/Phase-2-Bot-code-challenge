import React, { useState, useEffect } from "react";
import BotCard from "./BotCard";

function BotCollection({ handleClick, selectedBots, dischargeBot }) {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch bots");
        }
        return response.json();
      })
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleBotClick = (bot) => {
    handleClick(bot);
  };

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            selectedBots={selectedBots}
            handleClick={handleClick}
            enlistBot={enlistBot}
            dischargeBot={dischargeBot}
            onClick={() => handleBotClick(bot)}
          />
        ))}
        Collection of all the bots.
      </div>
    </div>
  );
}

export default BotCollection;
