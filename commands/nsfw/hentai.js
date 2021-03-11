const { MessageEmbed } = require("discord.js");

exports.run = (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(new MessageEmbed().setImage(`https://i.imgur.com/oe4iK5i.gif`).setTitle(`Here is not NSFW channel`).setDescription(`Marked NSFW channel:`).setColor("RANDOM"));
  const Embed = new MessageEmbed()
    .setTitle("OwO")
    .setColor("FFEE07")
    .setImage(
      "https://wetgif.com/wp-content/uploads/porno-overwatch-" +
        Math.ceil(Math.random()*100) +".gif"
    )
    .setFooter(`Requested By ${message.author.username}`);
  message.channel.send(Embed);
};