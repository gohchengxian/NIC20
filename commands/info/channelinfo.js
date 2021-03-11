const Discord = require('discord.js');

const timer = (now) => {
  const focus = (number) => {
    if (number.toString().length !== 2) {
      return "0" + number.toString();
    }
    return number;
  }
  return `Date : ${now.getFullYear()}-${now.getMonth()}-${now.getDate()} | Time: ${focus(now.getHours())}:${focus(now.getMinutes())}:${focus(now.getSeconds())}`;
}

exports.run = (client, message, args) => {
  var guild = client.guilds.cache.get(message.guild.id)
  const channels = client.channels.cache.get(args[0]) || client.channels.cache.find(owo => owo.name === args[0]) || message.mentions.channels.first() || message.channel;
  console.log(channels.name)
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
  var chtype = channels.type
  if (chtype === "text") {
    var chtype = chtype.replace("text", ":pencil: Text")
  } else if (chtype === "news") {
    var chtype = chtype.replace("news", ":loudspeaker: News")
  } else if (chtype === "voice") {
    var chtype = chtype.replace("voice", ":loud_sound: Voice")
  } else if (chtype === "store") {
    var chtype = chtype.replace("store", ":newspaper: Store")
  } else if (chtype === "unknown") {
    var chtype = chtype.replace("unknown", ":question: Unknown")
  } else if (chtype === "category") {
    var chtype = chtype.replace("category", ":file_cabinet: Category")
  } else if (chtype === "dm") {
    var chtype = chtype.replace("dm", ":regional_indicator_d: :regional_indicator_m:")
  }
  //rate
  var rate = channels.rateLimitPerUser
  if (isNaN(rate)) {
    if (rate == undefined) {
      var rate = "hi"
      var rate = rate.replace("hi", "`None`")
    }
  } else {
    if (rate / 60 >= 1) {
      if (rate / 3600 >= 1) {
        var rate = (rate / 3600) + "h"
      } else {
        var rate = (rate / 60) + "m"
      }
    } else {
      if (rate === 0) {
        var rate = "`None`"
      } else {
        var rate = rate + "s"
      }
    }
  }
  var members = message.guild.members.cache.map(m => m.permissionsIn(channels).has('VIEW_CHANNEL')).length
  var chntopic = channels.topic ? channels.topic : "`None`";
  if (chntopic.length > 50) chntopic = chntopic.slice(0, 50) + "...";
  const embed = new Discord.MessageEmbed()
    .setColor(message.member.displayHexColor)
    .addField("Name:", "`" + channels.name + "`", true)
    .addField("ID:", "`" + channels.id + "`", true)
    .addField("Members:", "`" + members ? members : "None" + "`", true)
    .addField("Category: ", channels.parent ? "`" + channels.parent.name + "`" : "`None`", true)
    .addField("Channel type", `${chtype}`, true)
    .addField("Region: ", region, true)
    .addField("Rate Limit", rate, true)
    .addField("Channel topic: ", chntopic, true)
    .addField("Created(UTC) :", timer(channels.createdAt), true)
    .setFooter(`Requested by | ${message.author.tag} `)
    .setTimestamp()
  message.channel.send(embed)
}