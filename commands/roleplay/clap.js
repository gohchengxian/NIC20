const Discord = require("discord.js")
module.exports = {
  run: (bot, message, args) => {
      var options = ["https://media.tenor.com/images/b4e7db00545e72f60e94ec15a27486ba/tenor.gif",
      "https://media.giphy.com/media/srg19CG0cKMuI/200.gif",
      "https://i.pinimg.com/originals/ae/90/c4/ae90c4d4bd4f39c82d76b42679bc5fbc.gif",
      "https://media.tenor.com/images/ed9272c81f685d9c3de214333ee08ced/tenor.gif",
      "https://cdn.lowgif.com/full/01be67c39428150b-gif-anime-happy-smile-animated-gif-on-gifer-by-anayaswyn.gif",
      "https://media1.tenor.com/images/7ea5fbd96e5a87781f3ab54fe0f96a11/tenor.gif?itemid=15209555",
      "https://i.pinimg.com/originals/4b/a6/d7/4ba6d79dd99d8a8e49b215725746b23f.gif",
      "https://i.pinimg.com/originals/fa/96/ea/fa96ea1412f39b1d610d94235855721d.gif",
      "https://i.gifer.com/7ddb.gif"];       
      var answer = options[Math.floor(Math.random()*options.length)];
      const Embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} clap someone **`)
      .setColor("RANDOM")
      .setImage(answer);
      if (args.length === 0) return message.channel.send(Embed);
      let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
      const embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} clap hand**`)
      .setColor("RANDOM")
      .setImage(answer);
      
       message.channel.send(embed);
    }
}