const Discord = require("discord.js");
const superagent = require('superagent');

exports.run = async (client, message, args) => {
  let { body } = await superagent
  .get("https://some-random-api.ml/img/racoon")
  
  let testEmbed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("Racoon Image")
    .setURL(`${body.link}`)
    .setImage(body.link);
  message.channel.send(testEmbed);
};
