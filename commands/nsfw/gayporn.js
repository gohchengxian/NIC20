const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports.run =  async (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(new MessageEmbed().setImage(`https://i.imgur.com/oe4iK5i.gif`).setTitle(`Here is not NSFW channel`).setDescription(`Marked NSFW channel:`).setColor("RANDOM"));
  const { body } = await superagent.get(`https://cdn.nic20.tk/api/type=gay`)
  const Embed = new MessageEmbed()
    .setTitle("Gay Porn OwO")
    .setColor(message.member.displayHexColor)
    .setImage(body.url)
    .setDescription("Your nice gay porn uwu")
    .setFooter(`Requested By ${message.author.username}`);
  message.channel.send(Embed);
}