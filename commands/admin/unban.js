const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`❌ You need BAN_MEMBERS role OwO`);
  let bReason = args[1];
  if (!bReason) bReason = "No reason provided";
  message.guild.members.unban(args[0], bReason)
    .then(uwu =>
      message.channel.send(new Discord.MessageEmbed().setColor("GREEN").setDescription(`${args[0]} already unban`).setTitle("Unban")))
    .catch(() =>
      message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Unban getting error`).setTitle("Unban ERROR")));
  var log_channel = await db.get(`server_log_${message.guild.id}`);
  var status = await db.get(`server_log_status_${message.guild.id}`);
  if (log_channel && status === true) {
    var channel = bot.channels.cache.get(log_channel);
    if (!channel) return;
    channel.send(new Discord.MessageEmbed().setTitle("UNBAN User").setColor("GREEN").setTimestamp().setDescription(`> ID: ${args[0]}\nUnban by: ${message.author.tag}`))
  }
}