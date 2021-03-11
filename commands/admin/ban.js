const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let gg = args[0];
  if (!gg) return message.channel.send(`Pls {@user} {reason}`)
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`❌ You need BAN_MEMBERS role OwO`)
  let bUser = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));
  if (!bUser) return message.channel.send(`❌ Can't find this user`)
  if (bUser.id === bot.user.id) return message.channel.send(`OwO`)
  let bReason = args.slice(1).join(' ');
  if (!bReason) bReason = "No reason provided";
  if (bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`❌ ${message.author} ,  I cannot ban this user! Do they have a higher role? Do I have ban permissions? They have Manage message role , if got you can't ban him , Bot also !`)
  let banEmbed = new Discord.RichEmbed()
    .setDescription(`** <@${message.author.id}> BAN ${bUser} Reason: ${bReason}**`)
    .setColor("RANDOM")
    .setAuthor(`Ban by ${message.author.id}`)
    .setFooter(`Ban User ID: ${bUser.id}`);
  message.guild.member(bUser).ban(bReason)
  message.channel.send(banEmbed);
};