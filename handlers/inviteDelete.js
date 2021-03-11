module.exports = async (client, invite) => {
  const Discord = require("discord.js");
  const db = require("quick.db");
  const entry = await invite.guild.fetchAuditLogs({ limit: 1, type: 'inviteDelete' }).then(audit => audit.entries.first());
  var log_channel = await db.get(`server_log_${invite.guild.id}`);
  var status = await db.get(`server_log_status_${invite.guild.id}`);
  if (log_channel && status === true) {
    var channel = client.channels.cache.get(log_channel);
    if (!channel) return;
    channel.send(new Discord.MessageEmbed().setTitle(`Invite Delete`).setColor("RED").setTimestamp().setDescription(`> Code: ${invite.code}\n> Delete by: ${entry.executor.tag}`))
  }
};