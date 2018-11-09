const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Savage..");
 
client.on('ready', async() => {
var server = "510406975654330368"; 
var channel = "510408873765634058";
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**  سافج سافج  سافج  سافج  سافج  سافج  سافج  سافج  سافج  سافج  سافج  سافج  سافج  سافج سافج  سافج  سافج  سافج سافج سافج  سافج  سافج  سافج  سافج سافج سافج سافج سافج سافج سافج سافج  سافج  سافج  سافج سافج سافج سافج رسافج  سافج  سافج  سافج سافج  سافج  سافج  سافج سافج  سافج  سافج سافج  سافج سافج  سافج سافج  سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج  سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج سافج  **')
    },305);
})





client.login(process.env.BOT_TOKEN);
