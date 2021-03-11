module.exports = async (bot, emoji) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  const entry = await emoji.guild.fetchAuditLogs({ limit: 1, type: 'emojiCreate' }).then(audit => audit.entries.first());
  var log_channel = await db.get(`server_log_${emoji.guild.id}`);
  var status = await db.get(`server_log_status_${emoji.guild.id}`);
  if (log_channel && status === true) {
    var channel = bot.channels.cache.get(log_channel);
    if (!channel) return;
    if(emoji.animated === false){
      var image = `https://cdn.discordapp.com/emojis/${emoji.id}.png?v=1`
    } else {
      var image = `https://cdn.discordapp.com/emojis/${emoji.id}.gif?v=1`
    };
    channel.send(new Discord.MessageEmbed().setTitle(`Emoji Add`).setColor("RANDOM").setDescription(`> Emoji Name: ${emoji.name}\n> Emoji ID: ${emoji.id}\n> Create By: ${entry.executor.tag}`).setImage(image).setTimestamp())
  };
}