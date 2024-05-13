import React from "react";
import OneBot from "./OneBot";

function YourBotArmy({botArmy}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {botArmy.map((bot) => {
            return <OneBot key={bot.id} bot={bot} />
          })}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy; 

