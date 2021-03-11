const Discord = require("discord.js")
module.exports = {
  run: (bot, message, args) => {
      var options = ["https://acegif.com/wp-content/uploads/anime-hug.gif",
                    "https://66.media.tumblr.com/18fdf4adcb5ad89f5469a91e860f80ba/tumblr_oltayyHynP1sy5k7wo1_400.gif",
                    "https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif",
                    "https://i.pinimg.com/originals/b6/d0/90/b6d0903e0d54e05bb993f2eb78b39778.gif",
                    "https://media1.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
                    "https://66.media.tumblr.com/291c8b98b219283f9e21927e7ef6c3f2/tumblr_mzscklfLYx1tptsy9o1_400.gif",
                    "https://cdn.myanimelist.net/s/common/uploaded_files/1460993069-9ac8eaae8cd4149af4510d0fed0796bf.gif",
                    "https://media0.giphy.com/media/l2QDM9Jnim1YVILXa/source.gif",
                    "https://i.gifer.com/AHb9.gif",
                    "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
                    "https://media0.giphy.com/media/JUwliZWcyDmTQZ7m9L/200.gif",
                    "https://i.pinimg.com/originals/54/e9/7e/54e97e0cdeefea2ee6fb2e76d141f448.gif",
                    "https://blog.otaku-streamers.com/wp-content/uploads/2016/11/2667e224721aa938e8afa8da_1479482583.gif",
                    "https://data.whicdn.com/images/59589473/original.gif",
                    "https://media.tenor.com/images/46230193e9d3f913531a3c00ef772963/tenor.gif",
                    "https://thumbs.gfycat.com/NiftyNeglectedAstarte-max-1mb.gif",
                    "https://media.tenor.com/images/0abe1090ab9874c62c4baaac18f0994d/tenor.gif",
                    "http://38.media.tumblr.com/9204649fd84d3df7223feb6712a89444/tumblr_n8pc8badUs1sg0ygjo1_500.gif",
                    "https://media.tenor.com/images/934adba8e5516096e526f955458ec94a/tenor.gif",
                     "https://media.tenor.com/images/99d79afa6be6bb2aedbd5549d8efb94b/tenor.gif",
                    "https://media.tenor.com/images/8bf44194ffd76a08acf5a1cf1e7ac0a0/tenor.gif",
                    "https://tenor.com/view/anime-cute-sweet-hug-gif-12668677",
                    "https://media.tenor.com/images/ca1663b2092426c2d42c4c14be91cc69/tenor.gif",
                    "https://media.tenor.com/images/dc89c9a80c6404ac9b5b2aa1227dd8de/tenor.gif",
                    "https://media.tenor.com/images/93bfab4553b14fd12f6c567a79aefe00/tenor.gif",
                    "https://media1.tenor.com/images/a521ab2d49d05306eb197c4c70455584/tenor.gif?itemid=8120066",
                    "https://gifdownload.net/wp-content/uploads/2019/01/anime-girl-tackle-hug-gif-4.gif",
                    "https://thumbs.gfycat.com/HatefulAmusingDoctorfish-small.gif"];       
      var answer = options[Math.floor(Math.random()*options.length)];
      const Embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} hug someone **`)
      .setColor("RANDOM")
      .setImage(answer);
      if (args.length === 0) return message.channel.send(Embed);
      let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
      const embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} hug ${User.displayName} with perverted smile**`)
      .setColor("RANDOM")
      .setImage(answer);
      
       message.channel.send(embed);
    }
}