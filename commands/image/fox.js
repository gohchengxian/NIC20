const Discord = require("discord.js");
const superagent = require('superagent');

exports.run = async (client, message, args) => {
  let { body } = await superagent
  .get("https://some-random-api.ml/img/fox")
  
  let testEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Fox Image")
    .setURL(`${body.link}`)
    .setImage(body.link);
  message.channel.send(testEmbed);
};
