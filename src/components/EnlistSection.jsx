import BotSpecs from "./BotSpecs";

function EnlistSection(props) {
    const {selectedBot, setSelectedBot, botArmy, setBotArmy} = props;
   
    const enlist =() => {
        console.log("Enlist bot");
        
        for(let i=0; i<botArmy.length;i++){
            let bot= botArmy[i];

            if (bot.id === selectedBot?.id) {
                return;
            }
        }

        let newBotArmy = botArmy;
        newBotArmy.push(selectedBot);
        setSelectedBot(null)
    }

    const discharge =() => {
        console.log("Back to Main Page");
        setSelectedBot(null);
    }

    if(selectedBot === null) {
        return null;
     }

    return <BotSpecs bot= {selectedBot} enlist = {enlist} discharge = {discharge} />
}

export default EnlistSection;