const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
  const { body } = await superagent.get(`https://cdn.nic20.tk/gif?q=${encodeURIComponent(args.join(" "))}`);
  if(body.error === true) return message.channel.send(`❌ Sorry, I can't find this Image ;-;`);
  message.channel.send(new Discord.MessageEmbed().setTitle(`"${args.join(" ")}" Gif.`).setImage(body.images).setFooter(`Request by ${message.author.tag}`).setColor("RANDOM"))
};