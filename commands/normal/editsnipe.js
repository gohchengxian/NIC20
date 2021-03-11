const { MessageEmbed } =  require('discord.js');
const db = require("quick.db")

exports.run = (client , message , args) => {
  var user = client.users.cache.get(args[0]) || message.mentions.users.first();
  if(user) {
    var userEditMessage = db.get(`Updatamessageuser_${message.author.id}_${message.channel.id}`);
    if(userEditMessage.length === 0) return message.channel.send("Can't find edit");
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Edit by ${user.tag} `, user.displayAvatarURL())
    .setDescription(userEditMessage)
    message.channel.send(embed)
  } else {
    var oldMessage = db.get(`Updatamessage_${message.channel.id}`);
    if(oldMessage.length === 0) return message.channel.send("Can't find edit");
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Edit by ${db.get(`Updatamessagetag_${message.channel.id}`)}`,db.get(`UpdateMessageIconURL_${message.channel.id}`))
    .setDescription(oldMessage)
    message.channel.send(embed)
  }
}