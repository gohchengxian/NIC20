const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run =  async (client, message, args) => {
  var prefix = db.get(`prefix_${message.guild.id}`) || client.prefix;
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`❌ You need admin role to run`);
  if (args.length < 1) return message.channel.send(`usage: ${prefix} autorole [role name] or [Mentions Role]`);
  if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply("I need one role that can Manage Role.")
  let start = 0;
  let role = message.mentions.roles.first() || message.guild.roles.cache.find(owo => owo.name === args.join("")) || message.guild.roles.cache.find(owo => owo.id === args.join(""));
  if(!role) return message.channel.send("Can't find this role")
  db.set(`autorole_${message.guild.id}`, role.id);
  message.channel.send("Success setting ``<@&" + role.id + ">`` to autorole")
};