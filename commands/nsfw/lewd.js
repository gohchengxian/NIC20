const { MessageEmbed } = require("discord.js");
const superagent = require("node-fetch");

module.exports.run =  async (client, message, args) => {
  if (!message.channel.nsfw) return message.channel.send(new MessageEmbed().setImage(`https://i.imgur.com/oe4iK5i.gif`).setTitle(`Here is not NSFW channel`).setDescription(`Marked NSFW channel:`).setColor("RANDOM"));
  const lol = await superagent(`https://nekos.life/api/v2/img/lewd`);
  var body = await lol.json();
  const Embed = new MessageEmbed()
    .setTitle("Lewd >==<")
    .setColor("RANDOM")
    .setImage(body.url)
    .setDescription(`Link: ${body.url}`)
    .setFooter(`Requested By ${message.author.username}`);
  message.channel.send(Embed);
}