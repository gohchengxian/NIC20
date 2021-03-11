module.exports = async (bot, member) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  const entry = await member.guild.fetchAuditLogs({ limit: 1, type: 'guildMemberRemove' }).then(audit => audit.entries.first());
  console.log(entry)
  var log_channel = await db.get(`server_log_${member.guild.id}`);
  var status = await db.get(`server_log_status_${member.guild.id}`);
  if (log_channel && status === true) {
    var channel = bot.channels.cache.get(log_channel);
    if (!channel) return;
    if(entry.action === 'MEMBER_KICK') {
      channel.send(new Discord.MessageEmbed().setTitle(`Kick Menbers`).setTimestamp().setDescription(`> Name: ${member.user.username}\n> Mentions: <@${member.user.id}>\n> ID: ${member.user.id}\n> Kick by: ${entry.executor.tag}`).setColor("RANDOM").setThumbnail(member.user.displayAvatarURL()))
    } else if(entry.action === 'MEMBER_BAN_ADD') {
      channel.send(new Discord.MessageEmbed().setTitle(`Ban Add`).setColor("RED").setDescription(`> Name: ${member.user.username}\n> ID: ${entry.target.id}\n> Ban by: ${entry.executor.tag}`).setImage(entry.target.displayAvatarURL()))
    } else {
      channel.send(new Discord.MessageEmbed().setTitle(`Menbers Leave`).setTimestamp().setDescription(`> Name: ${member.user.username}\n> Mentions: <@${member.user.id}>\n> ID: ${member.user.id}\n> Invite by: ${entry.executor.tag}`).setColor("RANDOM").setThumbnail(member.user.displayAvatarURL()));
    };
  };
};