const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

const swearWords = ["fuck", "bitch"];

client.on('ready', () => {
  client.user.setStatus("online");
  client.user.setGame(")help | Created by Derpy");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;


  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);


  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("/kick (@user) (time) (reason)");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("**Kick**")
    .setColor("#d83c3c")
    .addField("Kicked", `${kUser}`)
    .addField("Moderator", `<@${message.author.id}>`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "log-warns");
    if(!kickChannel) return message.channel.send("Can't find log-warns channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }



if( swearWords.some(word => message.content.includes(word)) ) {
     message.delete();
  message.reply("Oh no you said a bad word!!!");
   Or just do message.delete();
await message.delete();
}


  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("/ban (@user) (time) (reason)");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**Ban**")
    .setColor("#bc0000")
    .addField("**Banned**", `${bUser}`)
    .addField("**Moderator**", `<@${message.author.id}>`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "log-warns");
    if(!incidentchannel) return message.channel.send("Can't find log-warns channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }




  if (cmd === `${prefix}unmute`) { // creates the command unmute
      if (!message.member.roles.some(r=>["Moderator"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
      var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
      if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
      unmutedmember.removeRole(mutedrole) //if reason, kick
          .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
      message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
  }





  if (cmd === `${prefix}say`){
 		message.delete()
 		message.channel.send(args.join(" "));
}




  if(cmd === `${prefix}help`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Help Commands")
    .setColor("#268ccf")
    .setThumbnail(bicon)
    .addField("/kick (user) (reason)", "Kick a User.")
    .addField("/ban (user) (reason)", "Ban a User.")
    .addField("/mute (user) (reason)", "Mute a User")
    .addField("/say (message)", "say your message.")
    .addField("/avatar @user", "Avatar of the user.")
    .addField("/ping", "Ping Pong")
    .addField("/help", "Show this Menu");

    return message.author.send(botembed);
  }




  if(cmd === `${prefix}mute`){

    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You dont have permissions for that!");

    let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!toMute) return message.reply("Need Mention a User");
    let role = message.guild.roles.find(r => r.name === "💀 | Punishment");
    if(!role){
      try {
        role = await message.guild.createRole({
          name: "Muted",
          color:"#000000",
          permissions:[]
        });

        message.guild.channels.forEach(async (channel, id) => {
          await channel.overwritePermissions(role, {
            SEND_MESSAGES: false,
            ADD_REACTIONS: false
          });
        });
      } catch (e) {
        console.log(e.stack)
      }
    }

    if(toMute.roles.has(role.id)) return message.reply('This User Airedy Muted');

    await(toMute.addRole(role));
    message.channel.send("Thats User is now Muted");

    return;
  }

});

const prefix = botconfig.prefix;
bot.on("message", (message) => {

  if(!message.content.startsWith(prefix)) return;

if(message.content.startsWith(prefix + "avatar ")) { //IF for the command.
     if(message.mentions.users.first()) { //Check if the message has a mention in it.
           let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
           let output = user.tag /*Nickname and Discriminator*/ +
           "\nAvatar URL: " + user.avatarURL; /*The Avatar URL*/
           message.channel.sendMessage(output); //We send the output in the current channel.
    } else {
          message.reply("Invalid user."); //Reply with a mention saying "Invalid user."
    }
  }});

bot.on('message', msg => {
  if (msg.content === '/ping') {
    msg.reply(`Pong! The ping is **${(bot.ping).toFixed(0)}**ms!  :ping_pong:`)
  }
});

bot.on('message', msg => {
  if (msg.content === '/help') {
    msg.reply(`Check your dms`)
  }
});

bot.on('message', msg => {
  if (msg.content === '/avatar') {
    msg.reply(`You need Mention someone`)
  }
});

bot.on('message', msg => {
  if (msg.content === '/play') {
    msg.reply(`Soon`)
  }
});

bot.on('message', message => {
    if(message.author.bot) return;
    var re =  /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi.exec(message.cleanContent);
    if(re != null){
        message.delete().then(message => {
            message.reply('Links is not allowed here!');
        });
    }
});

bot.login(process.env.BOT_TOKEN);
