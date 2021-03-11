module.exports = async (bot, member) => {
  const db = require("quick.db");
  const role = db.get(`autorole_${member.guild.id}`)
  if (role !== null) {
    try {
      member.roles.add(role)
    } catch (e) {
      console.log(e);
    }
  }
  const Discord = require("discord.js");
  const entry = await member.guild.fetchAuditLogs({ limit: 1,type: 'guildMemberAdd' }).then(audit => audit.entries.first());
  var log_channel = await db.get(`server_log_${member.guild.id}`);
  var status = await db.get(`server_log_status_${member.guild.id}`);
  if (log_channel && status === true) {
    var channel = bot.channels.cache.get(log_channel);
    if (!channel) return;
    if(entry.action === "BOT_ADD") {
      channel.send(new Discord.MessageEmbed().setTitle(`Bot Join`).setTimestamp().setDescription(`> Bot Name: ${member.user.username}\n> Mentions: <@${member.user.id}>\n> Bot ID: ${member.user.id}\n> Invite by: ${entry.executor.tag}`).setColor("RANDOM").setThumbnail(member.user.displayAvatarURL()))
    } else {
      channel.send(new Discord.MessageEmbed().setTitle(`Menbers Join`).setTimestamp().setDescription(`> Name: ${member.user.username}\n> Mentions: <@${member.user.id}>\n> ID: ${member.user.id}\n> Invite by: ${entry.executor.tag}`).setColor("RANDOM").setThumbnail(member.user.displayAvatarURL()))
    };
  };
}
