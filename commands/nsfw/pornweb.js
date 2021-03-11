const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports.run =  async (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(new MessageEmbed().setImage(`https://i.imgur.com/oe4iK5i.gif`).setTitle(`Here is not NSFW channel`).setDescription(`Marked NSFW channel:`).setColor("RANDOM"));
  var nsfwweb = await db.get(`NSFW_WEBSITE`);
  var nsfwweb = nsfwweb[Math.floor(Math.random() * nsfwweb.length)];
  message.channel.send(new MessageEmbed().setDescription(nsfwweb).setColor("RANDOM"));
}