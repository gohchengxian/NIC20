const Discord = require("discord.js")
module.exports = {
  aliases: ['bite'],
  run: (bot, message, args) => {
    var options = ["https://media.giphy.com/media/OqQOwXiCyJAmA/200_d.gif",
      "https://media3.giphy.com/media/LO9Y9hKLupIwko9IVd/200.gif",
      "https://media3.giphy.com/media/dSi6nSNvQh33y/giphy.gif?cid=ecf05e47f718bea0ad8a7eef8ced069a65c0ee2e137434d8&rid=giphy.gif",
      "https://media0.giphy.com/media/XtuYDes6uyL4Y/giphy.gif?cid=ecf05e47e3b8ff302c5588fe4ce2d8f7cfaa4837363f1eeb&rid=giphy.gif",
      "https://media0.giphy.com/media/lXIwBQJGBd3Bm/200w.gif?cid=ecf05e47858f8363501231261dfa62f0784547ce09e3550d&rid=200w.gif",
      "https://media1.tenor.com/images/f308e2fe3f1b3a41754727f8629e5b56/tenor.gif?itemid=12390216",
      "https://media.tenor.com/images/b06d6a26b08516ac069b7a9acdd001e5/tenor.gif",
      "https://media.tenor.com/images/557723325e65671bae3f9cd061220c3e/tenor.gif",
      "https://thumbs.gfycat.com/TornMelodicBlackpanther-size_restricted.gif",
      "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif",
      "https://cdn.zerotwo.dev/BITE/af512c2c-de0c-4ec9-825a-f898f8853c16.gif",
      "https://giffiles.alphacoders.com/172/172776.gif",
      "https://media1.tenor.com/images/8901a31defde8ec91e0b8b4f52e377b5/tenor.gif?itemid=11222900"];
    var answer = options[Math.floor(Math.random() * options.length)];
    const Embed = new Discord.RichEmbed()
      .setDescription(`**${message.author.username} bite someone **`)
      .setColor("RANDOM")
      .setImage(answer);
    if (args.length === 0) return message.channel.send(Embed);
    let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
    const embed = new Discord.RichEmbed()
      .setDescription(`**${message.author.username} bite ${User.displayName} **`)
      .setColor("RANDOM")
      .setImage(answer);

    message.channel.send(embed);
  }
}