const Discord = require("discord.js")
module.exports = {
  run: (bot, message, args) => {
      var options = ["https://i.gifer.com/1MIc.gif",
                    "https://i.pinimg.com/originals/b4/d4/17/b4d4171855aa7ebcb5c875fd55e2ec92.gif",
                    "https://media1.tenor.com/images/5ca31fd724f6baca41e366db4258a1e6/tenor.gif?itemid=12141726",
                    "https://media1.tenor.com/images/9643577662a9946de17bd8c3fd124c72/tenor.gif?itemid=16422435",
                    "https://media1.tenor.com/images/fb5e394d76ec3b91f8482177fc4203ad/tenor.gif?itemid=9803097",
                    "https://media1.tenor.com/images/21c8ff8307eb88bf8bf8438e4c78382b/tenor.gif?itemid=16943447",
                    "https://i.imgur.com/JgXWxWf.gif",
                    "https://mrwgifs.com/wp-content/uploads/2013/04/Snuggling-Cuddling-Anime-Girls-Gif-.gif",
                    "https://i.kym-cdn.com/photos/images/original/000/715/851/d55.gif",
                    "https://media3.giphy.com/media/JUrjTvzTbTUME/giphy.gif",
                    "https://45.media.tumblr.com/891cb7d58961a1a243df1fd562a11acb/tumblr_o0fv4oVJyo1ufdoz0o1_500.gif",
                    "https://media.tenor.com/images/b4b9ed7ac3c7d8a230317807a918f1e9/tenor.gif",
                    "https://66.media.tumblr.com/25005ba7a4f0e5f30bef86f5ae09919a/tumblr_pkhbfp5Pgt1toamj8o1_400.gif",
                    "https://thumbs.gfycat.com/KindlyJubilantCurassow-size_restricted.gif"];       
      var answer = options[Math.floor(Math.random()*options.length)];
      const Embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} lick someone **`)
      .setColor("RANDOM")
      .setImage(answer);
      if (args.length === 0) return message.channel.send(Embed);
      let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
      const embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} lick ${User.displayName} OwO**`)
      .setColor("RANDOM")
      .setImage(answer);
      
       message.channel.send(embed);
    }
}