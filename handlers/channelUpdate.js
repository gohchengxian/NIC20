module.exports = async (client, channel) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  var log_channel = await db.get(`server_log_${channel.guild.id}`);
  var status = await db.get(`server_log_status_${channel.guild.id}`);
  const entry = await channel.guild.fetchAuditLogs({type: 'channelUpdate'}).then(audit => audit.entries.first());
  console.log(entry);
  if(log_channel && status === true){
    var channel = client.channels.cache.get(log_channel);
    if(!channel) return;
    var data = [];
    entry.changes.forEach(async xd => {
      data.push(`${xd.key.toUpperCase()}\`\`\`yml\n - Old: ${xd.old}\n - New: ${xd.new}\`\`\``)
    });
    var embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Channel Update`)
    .setDescription(`> Update Channel: ${channel.name}\n> ID: ${channel.id}\n> Mentions: <#${channel.id}>\n> Change by: ${entry.executor.username}\n\n**See new change:**\n ${data.join("\n")}`)
    .setThumbnail(entry.executor.displayAvatarURL());
    channel.send(embed);
  }
}