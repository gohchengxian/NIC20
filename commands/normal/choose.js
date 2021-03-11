const Discord = require("discord.js");

exports.run = async (bot, msg, args) => {
  if(!args.join(" ")) return msg.channel.send(`You must provide what things you want me choose.`)
  var choose = args.join(" ").split(",");
  var choose = choose[Math.floor(Math.random() * choose.length)];
  if(choose.length === 0) return msg.channel.send(`I choose \`\`${args.join(" ").split(",")[0].trim()}\`\``)
  msg.channel.send(`I choose \`\`${choose.trim()}\`\``)
};