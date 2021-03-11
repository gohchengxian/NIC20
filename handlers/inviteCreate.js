module.exports = async (client, invite) => {
  const db = require("quick.db");
  const Discord = require("discord.js")
  console.log(invite);
  const entry = await invite.guild.fetchAuditLogs({ limit: 1, type: 'inviteCreate' }).then(audit => audit.entries.first());
  console.log(entry);
  var log_channel = await db.get(`server_log_${invite.guild.id}`);
  var status = await db.get(`server_log_status_${invite.guild.id}`);
  if (log_channel && status === true) {
    var channel = client.channels.cache.get(log_channel);
    if (!channel) return;
    var used = invite.maxUses;
    if(invite.maxUses === 0) var used = "Unlimited";
    channel.send(new Discord.MessageEmbed().setTitle(`New Invite Link`).setColor("GREEN").setTimestamp().setDescription(`> Create by: ${invite.inviter.username}\n> Invite Link: discord.gg/${invite.code}\n> Code: ${invite.code}\n> Max used: ${used}`))
  }
}