module.exports = async (bot, channel) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  const entry = await channel.guild.fetchAuditLogs({ limit: 1, type: 'webhookUpdate' }).then(audit => audit.entries.first());
  var log_channel = await db.get(`server_log_${channel.guild.id}`);
  var status = await db.get(`server_log_status_${channel.guild.id}`);
  if (log_channel && status === true) {
    var channel = bot.channels.cache.get(log_channel);
    if (!channel) return;
    if(entry.action === "WEBHOOK_UPDATE") {
      var data = [];
      entry.changes.forEach(xd => {
        data.push(`\`\`\`yml\n${xd.key}\n - Old: ${xd.old}\n - New: ${xd.new}\`\`\``);
      });
      channel.send(new Discord.MessageEmbed().setTitle("Webhook Update").setColor("RANDOM").setTimestamp().setDescription(`> Updated by: ${entry.executor.tag}\n> Webhook Name: ${entry.target.name}\n> Webhook ID: ${entry.target.id}\n> Channel: <#${entry.target.channelID}>\n**New changes**\n${data.join("\n")}`));
    } else if(entry.action === "WEBHOOK_DELETE") {
      channel.send(new Discord.MessageEmbed().setTitle("Webhook Delete").setColor("RED").setTimestamp().setDescription(`> Delete by: ${entry.executor.tag}\n> Webhook Name: ${entry.target.name}\n> Webhook ID: ${entry.target.id}\n> Channel: <#${entry.target.channelID}>`));
    } else if(entry.action === "WEBHOOK_CREATE") {
      channel.send(new Discord.MessageEmbed().setTitle("Webhook Create").setColor("GREEN").setTimestamp().setDescription(`> Delete by: ${entry.executor.tag}\n> Webhook Name: ${entry.target.name}\n> Webhook ID: ${entry.target.id}\n> Channel: <#${entry.target.channelID}>`));
    };
  };
};