const Discord = require("discord.js");
const db = require("quick.db");
//Not Stable
module.exports.run = async (client, msg, args) => {
  var prefix = db.get(`prefix_${msg.guild.id}`) || client.prefix;
  var embed = new Discord.MessageEmbed();
  var log_channel = db.get(`server_log_${msg.guild.id}`)
  if (args[0] === `close`) {
    if (!log_channel) return msg.channel.send(embed.setColor(`RED`).setDescription(`Oooof, I don't think you have set log channel before so you can't stop it.`));
    if (db.get(`server_log_status_${msg.guild.id}`) === false) return msg.channel.send(embed.setColor(`RED`).setDescription(`Your log channel now is off.\nIf you want to open again you can use \`\`${prefix}log reopen\`\``))
    db.set(`server_log_status_${msg.guild.id}`, false);
    return msg.channel.send(embed.setColor(`GREEN`).setDescription(`You already close the Log OwO`));
  } else if (args[0] === `reopen`) {
    if (db.get(`server_log_status_${msg.guild.id}`) === true) return msg.channel.send(embed.setColor(`RED`).setDescription(`Your log channel now is ON.\nIf you want to close you can use \`\`${prefix}log close\`\``));
    if (args[1]) {
      var channels = client.channels.cache.get(args[1]) || client.channels.cache.find(owo => owo.name === args[1]) || msg.mentions.channels.first() || msg.guild;
      db.set(`server_log_status_${msg.guild.id}`, true);
      db.set(`server_log_${msg.guild.id}`, channels.id);
      msg.channel.send(embed.setColor(`GREEN`).setDescription(`You open the log and change log channel to ${channels}`));
    } else {
      if (log_channel) {
        db.set(`server_log_status_${msg.guild.id}`, true);
        msg.channel.send(embed.setColor(`RED`).setDescription(`Oh YEAH! You already open the Log already!\nIf you want reset log channel, you can use \`\`${prefix} log reset (Channel[# or id])`));
      } else {
        msg.channel.send(embed.setColor(`RED`).setDescription(`Oooof, I don't think you have set log channel before so you can't stop it.`));
      }
    };
  } else if (args[0] === `reset`) {
    var channels = client.channels.cache.get(args[1]) || client.channels.cache.find(owo => owo.name === args[1]) || msg.mentions.channels.first() || msg.guild;
    db.set(`server_log_status_${msg.guild.id}`, true);
    db.set(`server_log_${msg.guild.id}`, channels.id);
    msg.channel.send(embed.setColor(`GREEN`).setDescription(`I will help you auto open the log channel, if you want to close it, you can use \`\`${prefix} log close\`\`\nYou already setting up ${channels} to Log channel`));
  } else if (args[0] === `help`){
    msg.channel.send(embed.setColor("RANDOM").setTitle(`Log Channel Help`).setDescription(`\`\`${prefix} log channels(# or id)\`\`-> set up log channels\n\`\`${prefix} log close\`\`-> close log notification\n\`\`${prefix} log reopen\`\`-> reopen log notification(If don't have close or don't have set up the channels, you can't do it)\n\`\`${prefix} log reset channels(# or id)\`\`-> you can reset your log channels`))
  } else {
    var channels = client.channels.cache.get(args[0]) || client.channels.cache.find(owo => owo.name === args[0]) || msg.mentions.channels.first();
    if(!channels) return msg.channel.send(embed.setColor("RED").setDescription(`Sorry, I can't find this channels qwq\n**You can find help at \`\`${prefix} log help\`\`**`));
    db.set(`server_log_status_${msg.guild.id}`, true);
    db.set(`server_log_${msg.guild.id}`, channels.id);
    msg.channel.send(embed.setColor(`GREEN`).setDescription(`You already setting up your log channel(${channels})!`));
  };
};