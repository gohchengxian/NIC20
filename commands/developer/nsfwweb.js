const Discord = require("discord.js");
const db = require("quick.db")

module.exports.run = async (bot, msg, args) => {
  if (!ot.config.developer_ID !== msg.author.id) return;
  var data = await db.get(`NSFW_WEBSITE`);
  msg.channel.send(new Discord.MessageEmbed().setDescription(data.join("\n")).setColor("RANDOM"))
};