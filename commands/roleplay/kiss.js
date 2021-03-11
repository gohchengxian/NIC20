const Discord = require("discord.js")
module.exports = {
  run: (bot, message, args) => {
      var options = ["https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865",
                    "https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif",
                    "https://acegif.com/wp-content/uploads/anime-kiss-m.gif",
                    "https://i.imgur.com/sZhtvBR.gif",
                    "https://media.tenor.com/images/fbb2b4d5c673ffcf8ec35e4652084c2a/tenor.gif",
                    "https://i.gifer.com/origin/22/22d1db6014be2c75d2cbd1b69f43b94a_w200.gif",
                    "https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif",
                    "https://media1.tenor.com/images/f03f245e14fdfcacaf06318cdc667a03/tenor.gif?itemid=15111568",
                    "https://66.media.tumblr.com/e32206d2d51424eeb3c017c1ef0e80ad/fbe2f7e1b2143d0b-6a/s500x750/0280bd77e01a03bac8994f7a3c1aafa267abad0a.gif",
                    "https://cdn69.picsart.com/191947441000202.gif?to=min&r=480",
                    "https://38.media.tumblr.com/54d420a22917e3c7a95d7bd5509668ca/tumblr_n8to4p91nH1r7k9lao1_500.gif",
                    "https://data.whicdn.com/images/236205010/original.gif",
                    "https://i.imgur.com/KLVAl0T.gif",
                    "https://37.media.tumblr.com/162fae92689e51b35946e11af62619be/tumblr_mtj3c1HsKK1s9pzh1o1_500.gif",
                    "https://quotesblog.net/wp-content/uploads/2018/08/anime-good-night-kiss-gif.gif",
                    "https://i.pinimg.com/originals/60/22/ee/6022ee7f1819f4ca95e1440b263a45d8.gif",
                    "https://media1.tenor.com/images/ba1841e4aeb5328e41530d3289616f46/tenor.gif?itemid=14240425"];       
      var answer = options[Math.floor(Math.random()*options.length)];
      const Embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} kiss his/her friend OMG! **`)
      .setColor("RANDOM")
      .setImage(answer);
      if (args.length === 0) return message.channel.send(Embed);
      let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
      const embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} kiss ${User.displayName} **`)
      .setColor("RANDOM")
      .setImage(answer);
      
       message.channel.send(embed);
    }
}