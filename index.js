const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setGame("!help | Created by Derpy");
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    msg.reply('Pong!');
  }
});

client.login('process.env.BOT_TOKEN');
