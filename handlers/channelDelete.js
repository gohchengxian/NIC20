module.exports = async (client, channel) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  var log_channel = await db.get(`server_log_${channel.guild.id}`);
  var status = await db.get(`server_log_status_${channel.guild.id}`);
  const entry = await channel.guild.fetchAuditLogs({type: 'channelDelete'}).then(audit => audit.entries.first())
  if(log_channel && status === true){
    var channel = client.channels.cache.get(log_channel);
    if(!channel) return;
    channel.send(new Discord.MessageEmbed().setTitle(`Channel Delete`).setTimestamp().setDescription(`> Name: ${channel.name}\n> Mentions: <#${channel.id}>\n> ID: ${channel.id}\n> Author: ${entry.executor.tag}\n> Members: ${channel.guild.memberCount}`).setColor("RANDOM").setThumbnail(entry.executor.displayAvatarURL()))
  };
}