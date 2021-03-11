module.exports = (client, guild) => {
  var region = guild.region.toUpperCase();
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
  };
  const log_channel = client.channels.cache.get(client.config.logchannel);
  if (!log_channel) return ;
  log_channel.send(new client.discord.RichEmbed().setTitle(`Left server log`).setColor("GREEN").addField(`Guild name`,guild.name,true).addField(`Member count`,guild.memberCount,true).addField(`Server Count`,client.guilds.cache.size,true).addField(`Region`,region,true).addField(`Owner`,client.users.cache.get(guild.ownerID).tag,true).setImage(guild.iconURL({format: "jpg"})));
};