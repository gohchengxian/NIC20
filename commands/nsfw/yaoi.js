const { MessageEmbed } = require("discord.js");
const superagent = require("superagent");

module.exports.run =  async (client, message, args) => {
  const { body } = await superagent.get(`https://cdn-image.nic20.tk/api/type=yaoi`);
  const Embed = new MessageEmbed()
    .setTitle("Yaoi >_<")
    .setColor("RANDOM")
    .setImage(body.url)
    .setDescription(`Link: ${body.url}`)
    .setFooter(`Requested By ${message.author.username}`);
  message.channel.send(Embed);
}