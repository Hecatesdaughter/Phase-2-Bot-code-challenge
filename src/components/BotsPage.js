import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const url = "http://localhost:8002/bots";

function BotsPage(
) {
  const [bots, setBots] = useState([]);
  //const [botArmy, setBotArmy] = useState([]);
   useEffect(() => {
    getBots();
    }, []);

  const getBots = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  }
  
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      console.log(result)
      setBots(result)
    })
    .catch((error) => console.error(error));

  return (
    <div>
      <YourBotArmy />
      <BotCollection
        bots={bots}
      />
    </div>
  );
}

export default BotsPage;
