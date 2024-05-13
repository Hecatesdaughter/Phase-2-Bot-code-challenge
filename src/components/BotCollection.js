import React from "react";
//import BotSpecs from "./BotSpecs";
import OneBot from "./OneBot";

function BotCollection({ bots, setSelectedBot }) {

  return (
    <div className="ui four column grid">
      <div className="row">
        {bots && bots.length > 0 && (
         <>
        {bots.map((bot) => {
              return (
                <div key={bot.id} onClick={() => setSelectedBot(bot)}>
                  <OneBot bot={bot} />
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default BotCollection;
