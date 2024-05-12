import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

const url = "http://localhost:8002/bots";

function BotsPage(
) {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => setBots(data));
  }, []);

  function enlistBot(bot) {
    if (botArmy.some((b) => b.id === bot.id)) {
      return;
    }
     setBotArmy([...botArmy, { ...bot, enlisted: true }]);
  }

  function releaseBot(bot) {
    const newBotArmy = botArmy.map((b) =>
    b.id === bot.id ? { ...b, enlisted: false } : b);
    setBotArmy(newBotArmy);
  }

  function removeBot(e, bot) {
    e.stopPropagation();

  const newBots = bots.filter((b) => b.id !== bot.id);
    const newBotArmy = botArmy.filter((b) => b.id !== bot.id);
    setBots(newBots);
    setBotArmy(newBotArmy);
  }

  return (
    <div>
      <YourBotArmy
        botArmy={botArmy.filter((b) => b.enlisted)}
        handleClick={releaseBot}
        enlistBot={enlistBot}
        dischargeBot={removeBot}
      />
      <BotCollection
        bots={bots}
        handleClick={enlistBot}
        dischargeBot={removeBot}
      />
    </div>
  );
}

export default BotsPage;
