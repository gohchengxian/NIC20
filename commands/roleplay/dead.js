const Discord = require("discord.js")
module.exports = {
  run: (bot, message, args) => {
      var options = ["https://media0.giphy.com/media/29NleWMjS3P1kkBp5z/200.gif",
                     "https://i.gifer.com/EXh.gif",
                     "https://media.tenor.com/images/c6f81bc8337c08ff3a8519547d539b2f/tenor.gif",
                     "https://media3.giphy.com/media/w2spEHAltsCU8/200.gif",
                     "https://media1.tenor.com/images/25a5b0faa2044db0b1e5e3ab2fb8d4f0/tenor.gif?itemid=15157935",
                     "https://survivingcollege.com/wp-content/uploads/2014/04/brain-dead.gif",
                     "https://i.gifer.com/fyCI.gif",
                     "https://2eu.funnyjunk.com/gifs/He+made+a+funny+subscribe+if+you+like+gifs+and_e55f4d_4316119.gif",
                     "https://media.tenor.com/images/307279e7b2691de71d24c349ae97378f/tenor.gif",
                     "https://media.tenor.com/images/51d13faa94130b3ca9cef25aa1f41553/tenor.gif"
                    ];       
      var answer = options[Math.floor(Math.random()*options.length)];
      const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setDescription(`**${message.author.tag} already dead OwO**`)
      .setImage(answer)
      
       message.channel.send(embed);
    }
}