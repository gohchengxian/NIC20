const Discord =  require('discord.js');

const timer = (now) => {
  const focus = (number) => {
    if (number.toString().length !== 2) {
      return "0" + number.toString();
    }
    return number; 
  }
  return `Date : ${now.getFullYear()}-${now.getMonth()}-${now.getDate()} | Time: ${focus(now.getHours())}:${focus(now.getMinutes())}:${focus(now.getSeconds())}`;
}
exports.aliases = ["servinfo","serverinfo"]
exports.run = (client, message, args) => {
  var region = message.guild.region.toUpperCase()
  if(region === "SINGAPORE"){
    var region = region.replace("SINGAPORE",":flag_sg: Singapore")
  } else if(region === "US-CENTRAL"){
    var region = region.replace("US-CENTRAL",":flag_us: US Central")
  } else if(region === "US-EAST"){
    var region = region.replace("US-EAST",":flag_us: US East")
  } else if(region === "US-SOUTH"){
    var region = region.replace("US-SOUTH",":flag_us: US South")
  } else if(region === "US-WEST"){
    var region = region.replace("US-WEST",":flag_us: US WEST")
  } else if(region === "BRAZIL"){
    var region = region.replace("BRAZIL",":flag_br: Brazil")
  } else if(region === "EUROPE"){
    var region = region.replace("EUROPE",":flag_eu: Europe")
  } else if(region === "HONGKONG"){
    var region = region.replace("HONGKONG",":flag_hk: Hong Kong")
  } else if(region === "INDIA"){
    var region = region.replace("INDIA",":flag_in: India")
  } else if(region === "JAPAN"){
    var region = region.replace("JAPAN",":flag_jp: Japan")
  } else if(region === "RUSSIA"){
    var region = region.replace("RUSSIA",":flag_ru: Russia")
  } else if(region === "SYDNEY"){
    var region = region.replace("SYDNEY",":flag_au: Sydney")
  } else if(region === "SOUTHAFRICA"){
    var region = region.replace("SOUTHAFRICA",":flag_za: South Africa")
  } 
  var rulesch = message.guild.rulesChannel
  if(rulesch === null){
    var rulesch = "None"
  } 
  var verify = message.guild.verificationLevel
  if(verify === "NONE"){
    var verify = "None"
  } else if(verify === "LOW"){
    var verify = "Low"
  } else if(verify === "MEDIUM"){
    var verify = "Medium"
  } else if(verify === "HIGH"){
    var verify = "High"
  } else if(verify === "VERY_HIGH"){
    var verify = "Highest"
  };
  
  var embed = new Discord.MessageEmbed()
  .setColor(message.member.displayHexColor)
  .setImage(message.guild.bannerURL({ format : "jpg"}))
  .setThumbnail(message.guild.iconURL({format : "jpg",size: 2048, dynamic: false}))
  .addField("Name","`" + message.guild.name + "`",true)
  .addField("ID", "`" + message.guild.id + "`",true)
  .addField("Members",  "`"+message.guild.memberCount + "`",true)
  .addField("Bot",  message.guild.members.cache.filter(member => member.user.bot === true).size, true)
  .addField("User",  message.guild.members.cache.filter(member => member.user.bot === false).size, true)
  .addField("Roles", "`" + message.guild.roles.cache.map(c => c.id).length + "`",true)
  .addField("Channel", "`" + message.guild.channels.cache.map(c => c.id).length + "`",true)
  .addField("Owner", "`" + client.users.cache.get(message.guild.ownerID).tag + "`",true)
  .addField("Region",region,true)
  .addField("Emoji", "`" + message.guild.emojis.cache.map(e => e.id).length + "`",true)
  .addField("Boost", "`" + message.guild.premiumSubscriptionCount + "`",true)
  .addField("Rules Channel",rulesch,true)
  .addField("Verification Level", "`" + verify + "`",true)
  .addField("Create Time(UTC)",timer(message.guild.createdAt),true)
  .setFooter(`Requested by | ${message.author.tag}`)
  .setTimestamp()
  message.channel.send(embed)
}

//finish