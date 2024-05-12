import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, handleClick, enlistBot, removeBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy && botArmy.length > 0 && botArmy.map((b) => (
           <BotCard 
            key={b.id} 
            bot={b} 
            handleClick={handleClick} 
            enlistBot={enlistBot}
            dischargeBot={removeBot}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
