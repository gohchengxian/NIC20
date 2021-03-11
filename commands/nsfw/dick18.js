const { RichEmbed } = require("discord.js");
const randomPuppy = require("random-puppy");
const fetch = require("node-fetch");
const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(new Discord.MessageEmbed().setImage(`https://i.imgur.com/oe4iK5i.gif`).setTitle(`Here is not NSFW channel`).setDescription(`Marked NSFW channel:`).setColor("RANDOM"));
  var uwu = ["ratemycock", "averagepenis", "DickAndFace", "AverageDickPics"]
  var uwu = uwu[Math.floor(Math.random() * uwu.length)]
  const noice = await fetch(`https://cdn.nic20.tk/reddit/search?q=${uwu}`);
  const json = await noice.json();
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(json.image_url)
    .setFooter(message.author.username, message.author.displayAvatarURL())
    .setTimestamp();
  message.channel.send(embed);
}