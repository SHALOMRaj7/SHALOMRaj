require('dotenv').config()
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');



client.on("ready", msg => {
    console.log("kid is up");
    
    client.user.setActivity('OVER MODERATOR', { type: 'WATCHING'}).catch(console.error);

});

client.login(process.env.TOKEN)