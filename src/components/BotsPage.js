import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const url = "http://localhost:8002/bots";

function BotsPage() {
  const [bots, setBots] = useState([]);
  //const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    const getBots = async () => {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          "HTTP status " + response.status + ": " + response.statusText
        )}

      const data = await response.json();
      console.log(data);
      setBots(data);
    };

    getBots();
  }, []);

  return (
    <div>
      <YourBotArmy />
      <BotCollection bots={bots} />
    </div>
  );
}

export default BotsPage;
