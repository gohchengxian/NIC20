module.exports = async (bot, channels) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  const entry = await channels.guild.fetchAuditLogs({ limit: 1, type: 'GUILD_MEMBER_UPDATE' }).then(audit => audit.entries.first());
  console.log(entry)
  var log_channel = await db.get(`server_log_${channels.guild.id}`);
  var status = await db.get(`server_log_status_${channels.guild.id}`);
  if (log_channel && status === true) {
    var channel = bot.channels.cache.get(log_channel);
    if (!channel) return;
    var { changes } = entry;
    if(changes.find(xd => xd.key === 'nick')){
      var owo = changes.find(xd => xd.key === 'nick');
      var after = owo.new;
      var before = owo.old;
      if(after === undefined) var after = channels.user.username
      if(before === undefined) var before = channels.user.username
      channel.send(new Discord.MessageEmbed().setTitle(`Nick Change`).setColor("RANDOM").setTimestamp().setDescription(`> User: ${channels.user.tag}\n> Mentions: <@${channels.user.id}>\n> ID: ${channels.user.id}\n\n**Changes:**`).addField("Before", before, true).addField("After", after, true))
    };
  };
}