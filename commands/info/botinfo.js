const Discord =  require('discord.js');

const timer = (now) => {
  const focus = (number) => {
    if (number.toString().length !== 2) {
      return "0" + number.toString();
    }
    return number; 
  }
  return `Date : ${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()} | Time: ${focus(now.getHours()+8)}:${focus(now.getMinutes()+1)}:${focus(now.getSeconds()+1)}`;
}

exports.run = (client , message , args) => {
  let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
  let uptime = `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`; 
  const Embed = new Discord.RichEmbed().setColor("RANDOM")
		.addField("Username:", message.client.user.tag,true)
    .addField("Nickname:", message.guild.me.displayName)
		.addField("ID:", message.client.user.id)
		.addField("Status:", message.guild.me.user.presence.status.toUpperCase())
    .addField("Join server time(UTC+8) :" , timer(message.guild.me.joinedAt),true)
    .addField(`Uptime:` , uptime,true)
    .addField(`Ping:`,client.ws.ping + " ms",true)
    .addField(`Server count:`, client.guilds.cache.size,true)
		.setThumbnail(message.guild.me.user.displayAvatarURL())
  message.channel.send(Embed);
}
