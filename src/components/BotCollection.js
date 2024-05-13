import React, { useState, useEffect } from "react";
import BotSpecs from "./BotSpecs";
//import BotCard from "./BotCard";

function BotCollection(props) {
  const bots = props

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots.map((bot) => {
           <BotSpecs 
              key={bot.id}
              bot={bot}/>
        })}
        Collection of all the bots.
      </div>
    </div>
  );
}

export default BotCollection;
