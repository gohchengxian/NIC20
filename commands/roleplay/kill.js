const Discord = require("discord.js")
module.exports = {
  run: (bot, message, args) => {
      var options = ["https://media.giphy.com/media/yy1rPT45jdX1K/giphy.gif", 
                     "https://vignette.wikia.nocookie.net/akamegakill/images/e/e7/Akame_Ep_1_-_Murasame.gif", 
                     "https://i.gifer.com/WxLR.gif", 
                     "https://media1.tenor.com/images/e4db2e0888c2c85a042ea9e54fc4d771/tenor.gif?itemid=16079109", 
                     "https://thumbs.gfycat.com/PhysicalKindHypacrosaurus-small.gif",
                     "https://i.pinimg.com/originals/c5/5d/75/c55d75e746b35e9f5a08c2f298768a83.gif",
                     "https://media1.tenor.com/images/a0f0c3dacfa0962425f34e011d30e9be/tenor.gif?itemid=13064973",
                     "https://media1.tenor.com/images/340387eaff501ff98cc9317317b7fd76/tenor.gif?itemid=16329824",
                     "https://cdn.zerotwo.dev/SHOOT/a4c62263-fb0d-43d5-bfdd-53ad703817f7.gif",
                     "https://i.imgur.com/2iys5aw.gif",
                     "https://66.media.tumblr.com/b6def0b7d5f842272ef5b703db8a7f9d/tumblr_otc7htWAwS1v4u49oo1_400.gif"
                    ];       
      var answer = options[Math.floor(Math.random()*options.length)];
      const Embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} kill someone **`)
      .setColor("RANDOM")
      .setImage(answer);
      if (args.length === 0) return message.channel.send(Embed);
      let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
      const embed = new Discord.RichEmbed() 
      .setDescription(`**${User.displayName} kill by ${message.author.username} **`)
      .setColor("RANDOM")
      .setImage(answer);
      
       message.channel.send(embed);
    }
}