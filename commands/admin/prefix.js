const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (client, msg, args) => {
  if(!msg.member.hasPermission("ADMINISTRATOR")){
    msg.channel.send("You don't have Administrator role, so I can't change prefix ;-; ")
  } else {
    if(!args.join(" ")){
      msg.channel.send("❌ Your prefix can't set be blank ;-;")
    } else {
      db.set(`prefix_${msg.guild.id}`,args.join(" "))
      var embed = new Discord.MessageEmbed()
      .setDescription(`You success change your prefix to \`${db.get(`prefix_${msg.guild.id}`)}\``)
      .setColor("RANDOM")
      msg.channel.send(embed)
    }
  }
}