module.exports = async (bot, emoji) => {
  const Discord = require("discord.js");
  const db = require("quick.db");
  const entry = await emoji.guild.fetchAuditLogs({ limit: 1, type: 'emojiUpdate' }).then(audit => audit.entries.first());
  var log_channel = await db.get(`server_log_${emoji.guild.id}`);
  var status = await db.get(`server_log_status_${emoji.guild.id}`);
  if (log_channel && status === true) {
    var chl = bot.channels.cache.get(log_channel);
    if(!chl) return;
    var data = [];
    if(emoji.animated === false){
      var image = `https://cdn.discordapp.com/emojis/${emoji.id}.png?v=1`
    } else {
      var image = `https://cdn.discordapp.com/emojis/${emoji.id}.gif?v=1`
    };
    entry.changes.forEach(async xd => {
      await data.push(`\`\`\`yml\n - ${xd.key.toUpperCase()}\n - Old: ${xd.old}\n - New: ${xd.new}\`\`\``)
    })
    chl.send(new Discord.MessageEmbed().setTitle(`Emoji Update`).setDescription(`> Emoji Update by: ${entry.executor.tag}\n\n**New Change:** \n${data.join("\n")}`).setColor("RANDOM").setTimestamp().setImage(image))
  }
}