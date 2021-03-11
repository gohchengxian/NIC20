const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
    let gg = args.join(" ").slice(10);
    if(!gg) return message.channel.send(`Pls {@user} {reason}`)
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`❌ You need Kick members permission role OwO`)
    let bUser = message.guild.member(message.mentions.users.first() || bot.users.cache.get(args[0]));
    if(!bUser) return message.channel.send(`❌ Sorry, I can't find this user`)
    if(bUser.id === bot.user.id) return message.channel.send(`❌ Don't kick me ;-;`)
    let bReason = args.slice(1).join(' ');
    if(!bReason) bReason = "No reason provided";
    if(bUser.hasPermission("KICK_MEMBERS")) return message.channel.send(`Sorry ${message.author.tag}, his was my boss, because his got Kick members permission ;-;`)
    let banEmbed = new Discord.RichEmbed()
    .setDescription(`** ${message.author} Kick ${bUser} \nReason: ${bReason}**`)
    .setColor("RANDOM")
    .setAuthor(`Kick by ${message.author.tag}`)
    .setFooter(`Kick User ID: ${bUser.id}`)
    message.guild.member(bUser).kick(bReason);
    message.channel.send(banEmbed);
}