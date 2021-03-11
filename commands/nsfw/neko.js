const { MessageEmbed } = require("discord.js");
const superagent = require("node-fetch");

module.exports.run =  async (client, message, args) => {
  const lol = await superagent(`https://nekos.life/api/v2/img/neko`);
  var body = await lol.json();
  const Embed = new MessageEmbed()
    .setTitle("Neko >==<")
    .setColor("RANDOM")
    .setImage(body.url)
    .setDescription(`Link: ${body.url}`)
    .setFooter(`Requested By ${message.author.username}`);
  message.channel.send(Embed);
}