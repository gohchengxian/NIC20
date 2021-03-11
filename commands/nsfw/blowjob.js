const { MessageEmbed } = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(new MessageEmbed().setImage(`https://i.imgur.com/oe4iK5i.gif`).setTitle(`Here is not NSFW channel`).setDescription(`Marked NSFW channel:`).setColor("RANDOM"));
  const Embed = new MessageEmbed()
    .setTitle("OwO")
    .setColor("FFEE07")
    .setImage(
      "http://porngif.top/gif/strikani/0" +
        Math.ceil(Math.random()*250) +".gif"
    )
    .setFooter(`Requested By ${message.author.username}`);
  message.channel.send(Embed);
};