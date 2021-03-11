const { MessageEmbed } = require("discord.js");

module.exports.run =  async (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(new MessageEmbed().setImage(`https://i.imgur.com/oe4iK5i.gif`).setTitle(`Here is not NSFW channel`).setDescription(`Marked NSFW channel:`).setColor("RANDOM"));
const Embed = new MessageEmbed()
    .setTitle("Cumshot OwO")
    .setColor("FFEE07")
    .setImage(
      "http://porngif.top/gif/koureni/0" +
        Math.ceil(Math.random()*400) + ".gif"
    )
    .setDescription("That are now no stable")
    .setFooter(`Requested By ${message.author.username}`);
  message.channel.send(Embed);
    }