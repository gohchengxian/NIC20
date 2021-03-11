const Discord = require("discord.js")
module.exports = {
  run: (bot, message, args) => {
      var options = ["https://data.whicdn.com/images/313767353/original.gif",
                    "https://i.gifer.com/g1V4.gif",
                    "https://media1.tenor.com/images/63c0c6b632dfffd790b60a87007f1bfd/tenor.gif?itemid=11514589",
                    "https://media1.tenor.com/images/c310fac4696c08c969638f60b07caf4e/tenor.gif?itemid=17441924",
                    "https://i.pinimg.com/originals/d4/2d/90/d42d9087479ee3be31ef438e90027c36.gif",
                    "https://media1.tenor.com/images/44920aacde0ad5796ed6e691db34384c/tenor.gif?itemid=12475929",
                    "https://media.tenor.com/images/c695f498fbe9517ad48f26ca081375d0/tenor.gif",
                    "https://media1.giphy.com/media/3oKIPBovAJobaGS61W/giphy.gif",
                    "https://i.gifer.com/Ls.gif",
                    "https://24.media.tumblr.com/tumblr_mcat9tLX9U1r9c0njo1_500.gif",
                    "https://media1.tenor.com/images/ec95d163be2e8b705164918e28c41aee/tenor.gif?itemid=6110986",
                    "https://giffiles.alphacoders.com/903/90351.gif",
                    "https://media1.giphy.com/media/NlEx8D5ijSasg/source.gif",
                    "https://cdn.lowgif.com/small/feda5a907cf95482-anime-gun-gif-tumblr.gif",
                    "https://i.pinimg.com/originals/f0/65/17/f065172f3045e0fba7ab6e3350c49300.gif"];       
      var answer = options[Math.floor(Math.random()*options.length)];
      const Embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} shoot someone OMG!!!!!!!!! **`)
      .setColor("RANDOM")
      .setImage(answer);
      if (args.length === 0) return message.channel.send(Embed);
      let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
      const embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} shoot ${User.displayName} 030**`)
      .setColor("RANDOM")
      .setImage(answer);
      
       message.channel.send(embed);
    }
}