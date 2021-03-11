module.exports = async (bot, emoji) => {
  const Discord = require("discord.js");
  const db = require("quick.db");
  const entry = await emoji.guild.fetchAuditLogs({ limit: 1, type: 'emojiDelete' }).then(audit => audit.entries.first());
  var log_channel = await db.get(`server_log_${emoji.guild.id}`);
  var status = await db.get(`server_log_status_${emoji.guild.id}`);
  if (log_channel && status === true) {
    var chl = bot.channels.cache.get(log_channel);
    chl.send(new Discord.MessageEmbed().setColor("RED").setDescription(`> Name: ${emoji.name}\n> ID: ${emoji.id}\n> Delete by: ${entry.executor.tag}`).setTitle(`Emoji Delete`).setTimestamp());
  };
};