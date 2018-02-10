const Discord = require('discord.js');
const path = require('path');
const bot = new Discord.Client();
const ddiff = require('return-deep-diff');
const prefix = "/";
const fs = require("fs");

var cli = new Discord.Client({autoReconnect:true});

var servers = {};

bot.commands = new Discord.Collection();

bot.on("error", (e) => console.error(e));
bot.on("warn", (e) => console.warn(e));
bot.on("debug", (e) => console.info(e));

bot.on('ready', function() {
    console.log("toto https://discordapp.com/oauth2/authorize?client_id=411229619761577994&scope=bot&permissions=104324160")},

bot.on('ready',() => {
  bot.user.setPresence(({ game: { name: "Africa by Toto -- ADMIN: TYPE /toto", type: 3}}));
})),

bot.on("message", function (message) {
  if (message.author.equals(bot.user)) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(prefix)) {
     message.delete(100)
  }

  var args = message.content.substring(prefix.length).split(" ")

// Commandes
  switch (args[0]) {
  //toto
      case "toto":
        if (!message.member.voiceChannel) {
        return;
        }

        if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
        return false; 
        }

        if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
        .then (connection => {
        const stream = message.guild.voiceConnection.playStream("toto africa/toto africa.mp3")
        .once('end', () => totoafrica());
        
        if (message.content === "/toto") {
          if (!message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
          message.author.sendMessage("Nice try. You will never change the vocal channel of Toto - Africa. Except if you are the admin of this server.")}
          if (message.guild.member(bot.user).hasPermission("ADMINISTRATOR")) {
          return;
        }}
        function totoafrica() {
        const stream = connection.playStream("toto africa/toto africa.mp3")
        .once('end', () => totoafrica());
        }
        })
      } else {
      return;
      }
      break;
    }

});

bot.login(process.env.BOT_TOKEN);
