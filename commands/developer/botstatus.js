const Discord = require("discord.js");
const os = require('os')

function bytesToMB(bytes) {
  return (Math.round(bytes / 1024) / 1024).toFixed(1)
}

module.exports.run = async (bot, msg, args) => {
  if(bot.config.developer_ID !== msg.author.id) return ;
  msg.channel.send(
      new Discord.MessageEmbed()
      .setTitle(bot.user.tag + " Status")
      .setColor("RED")
      .setDescription(`\`\`\`yaml
  Memory Data: 
    - ${bytesToMB(process.memoryUsage().rss)} MiB memoryUsage
    - ${bytesToMB(process.memoryUsage().heapTotal)} MiB memory cache
    - ${bytesToMB(process.memoryUsage().heapUsed)} MiB Bot usage memory
    - System Usage: ${bytesToMB(os.totalmem() - os.freemem())}/${bytesToMB(os.totalmem())} MiB

  Load Data:
    - Usage: ${os.loadavg()[0].toFixed(1)} (%)
    - Average usage: ${os.loadavg().map(a => a.toFixed(1)).join("/")} (1m/5m/15m)
    - CPU arch: ${os.arch()}
    - CPU model: ${os.cpus()[0].model}
    - CPU speed: ${os.cpus()[0].speed} MHz
      
  System Data:
    - System platform: ${os.platform()} (${os.release()})
    - Hostname: ${os.hostname()}
    - Home: ${os.homedir()}
      \`\`\``)
    )
};