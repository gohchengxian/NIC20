const db = require("quick.db");
const Discord = require("discord.js");

module.exports = async (client, role, newRole) => {
  const entry = await role.guild.fetchAuditLogs({ limit: 1, type: 'roleUpdate' }).then(audit => audit.entries.first());
  var log_channel = await db.get(`server_log_${role.guild.id}`);
  if(newRole.id !== entry.target.id) return;
  var edw = await db.get(`RoleUpdate_${role.guild.id}_${entry.target.id}`);
  var status = await db.get(`server_log_status_${role.guild.id}`);
  var data = [];
  await entry.changes.forEach(async xd => {
    await data.push(`\`\`\`yml\n${xd.key}\n - Old: ${xd.old}\n - New: ${xd.new}\`\`\``);
  });
  if (log_channel && status === true) {
    var channel = client.channels.cache.get(log_channel);
    if (!channel) return;
    var i = 0;
    channel.send(new Discord.MessageEmbed().setTitle(`Role Update`).setColor("RANDOM").setTimestamp().setDescription(`Role: <@&${entry.target.id}>\nChange by: ${entry.executor.tag}\nNew Change:\n${data.join("\n")}`));
  }
};