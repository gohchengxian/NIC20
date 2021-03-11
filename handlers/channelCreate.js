module.exports = async (client, channelss) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  var log_channel = await db.get(`server_log_${channelss.guild.id}`);
  var status = await db.get(`server_log_status_${channelss.guild.id}`);
  const entry = await channelss.guild.fetchAuditLogs({type: 'channelCreate'}).then(audit => audit.entries.first())
  if(log_channel && status === true){
    var channel = client.channels.cache.get(log_channel);
    if(!channel) return;
    channel.send(new Discord.MessageEmbed().setTitle(`Channel Create`).setTimestamp().setDescription(`> Name: ${channelss.name}\n> Mentions: <#${channelss.id}>\n> ID: ${channelss.id}\n> Author: ${entry.executor.tag}\n> Members: ${channelss.guild.memberCount}`).setColor("RANDOM").setThumbnail(entry.executor.displayAvatarURL()))
  };
}