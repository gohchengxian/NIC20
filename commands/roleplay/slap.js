const Discord = require("discord.js")
module.exports = {
  run: (bot, message, args) => {
      var options = ["https://media.tenor.com/images/9a2c17416b01df4363c05702a489425b/tenor.gif",
      "https://thumbs.gfycat.com/IllinformedRigidAfricangoldencat-size_restricted.gif",
      "https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUFk2Ae92E1tAeAfjk_pGLpKnHfWiikue5-m1fMe8_1TjRXlLKNwbrQTs1EfUN5ol3A",
      "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
      "https://i.imgur.com/Li9mx3A.gif",
      "https://cdn78.picsart.com/189414319002202.gif?to=min&r=640",
      "https://media.tenor.com/images/356fec15c3c741170a67fd740f918ecd/tenor.gif",
      "https://steamuserimages-a.akamaihd.net/ugc/850473950842117246/8C83635F86CE09C683D511622D7ED2B85BAD3ADD/",
      "https://image.myanimelist.net/ui/Nxzta1m1Sc-kYrbG5bCjnupKG6x0l9DascQOIDs9QyV9Au7iLnCfJQI2RmLe622mb773NNBMaKiVfHqrJsSPZA",
      "https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif",
      "https://i.imgur.com/VW0cOyL.gif",
      "https://i.gifer.com/9KyA.gif",
      "https://media1.giphy.com/media/KHWsnPDIpF2JgoeJ3v/source.gif",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRwI7G04eNLJQDX48rFyxQMytOlDyOpGDXMaQ&usqp=CAU",
      "https://artemisunfiltered.files.wordpress.com/2014/05/golden-time-nana-slap.gif",
      "https://media0.giphy.com/media/m6etefcEsTANa/giphy.gif",
      "https://steamuserimages-a.akamaihd.net/ugc/442858231150348236/D74979E09E92A3491B34666FB3AFE5D98FE98EE9/",
      "https://media0.giphy.com/media/lSDqu7IbMqMiQvCjjN/giphy.gif",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgNhjJv1mQc6gWR677dQVH9xw5rhy1138zLw&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRStwt30v1F1GT-SqU_Ex897OpMNvuJI5WWsA&usqp=CAU"];       
      var answer = options[Math.floor(Math.random()*options.length)];
      const Embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} slap someone! **`)
      .setColor("RANDOM")
      .setImage(answer);
      if (args.length === 0) return message.channel.send(Embed);
      let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
      const embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} slap ${User.displayName} **`)
      .setColor("RANDOM")
      .setImage(answer);
      
       message.channel.send(embed);
    }
}