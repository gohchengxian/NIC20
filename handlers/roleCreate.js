module.exports = async (client, role) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  console.log(role);
  const entry = await role.guild.fetchAuditLogs({ limit: 1, type: 'roleCreate' }).then(audit => audit.entries.first());
  console.log(entry);
  var log_channel = await db.get(`server_log_${role.guild.id}`);
  var status = await db.get(`server_log_status_${role.guild.id}`);
  if (log_channel && status === true) {
    var channel = client.channels.cache.get(log_channel);
    if (!channel) return;
    channel.send(new Discord.MessageEmbed().setColor("GREEN").setTimestamp().setTitle(`Role Create`).setDescription(`> Name: ${role.name}\n> ID: ${role.id}\n> Mentions: <@&${role.id}>\n> Create by: ${entry.executor.tag}`))
  }
}