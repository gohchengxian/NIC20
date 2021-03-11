//eval bot.guilds.cache.map(u => u.name + " - " + u.memberCount)
const db = require("quick.db")
const Discord = require("discord.js");
const os = require('os')
const fetch = require("node-fetch");

module.exports.run = (bot, msg, args) => {
  if (bot.config.developer_ID !== msg.author.id) return;
  try {
    return msg.channel.send("```" + eval(args.join(" ")) + "```")
  } catch (e) {
    return msg.channel.send("```" + e.toString() + "```")
  };
};