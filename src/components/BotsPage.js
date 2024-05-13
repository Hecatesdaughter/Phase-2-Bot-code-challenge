import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import EnlistSection from "./EnlistSection";

const url = "http://localhost:8002/bots";

function BotsPage(
) {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    getBots();
  }, []);

  const getBots = (
) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    fetch(url, {
      headers: myHeaders,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error fetching data");
        }
        return response.json();
      })
      .then((data) => {
        setBots(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <YourBotArmy botArmy={botArmy} setBotArmy={setBotArmy} />
      <EnlistSection 
        botArmy={botArmy} 
        setBotArmy={setBotArmy}
        selectedBot={selectedBot} 
        setSelectedBot={setSelectedBot} />
      <BotCollection bots={bots} setSelectedBot={setSelectedBot} />
    </div>
  );
}

export default BotsPage;
