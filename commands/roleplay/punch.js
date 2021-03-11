const Discord = require("discord.js")
module.exports = {
  run: (bot, message, args) => {
      var options = ["https://i.pinimg.com/originals/e9/d9/d4/e9d9d40eef4ab994670c08524e35bbdb.gif",
                    "https://media3.giphy.com/media/l1BgSeVnzntUAHBAc/200w.gif?cid=ecf05e471e44c1c773f7eab06c582eaecd046a0143f7288a&rid=200w.gif",
                    "https://media0.giphy.com/media/xUNemWOzznJDZpRDZm/200.gif?cid=ecf05e471e44c1c773f7eab06c582eaecd046a0143f7288a&rid=200.gif",
                    "https://media3.giphy.com/media/PO9aIzHerOX1S/200w.gif?cid=ecf05e47bed843fbb42725bda8e82fbacf4585f031173e92&rid=200w.gif",
                    "https://media3.giphy.com/media/UlR3iaDT7YXDO/200.gif?cid=ecf05e47bed843fbb42725bda8e82fbacf4585f031173e92&rid=200.gif",
                    "https://media1.giphy.com/media/eiw5mph3qBvdiiHxMa/200w.gif?cid=ecf05e47c394dc45bcd724ae2374264878d2ac8d68b80bba&rid=200w.gif",
                    "https://media1.giphy.com/media/dYLWFqSfCKWB5C8MEw/200.gif?cid=ecf05e47ae9dad87daa52eebb06d47d1d35842ce4bf903f9&rid=200.gif",
                    "https://media3.giphy.com/media/6HnZTkTOmcV2w/200w.gif?cid=ecf05e4788c6e3e9c0fa3809f874f097c92d520d4cd6e140&rid=200w.gif",
                    "https://media3.giphy.com/media/3oxHQzoelb7hEVzJgQ/100.gif?cid=ecf05e473377ee3fd87e6bf6d7c0fe7fa43f555df87fc34a&rid=100.gif",
                    "https://media0.giphy.com/media/egX1DfpvLkJFK/200.gif?cid=ecf05e47ede180108c490e9a67f24b4d4e86e7e3851137df&rid=200.gif"];       
      var answer = options[Math.floor(Math.random()*options.length)];
      const Embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} punch someone **`)
      .setColor("RANDOM")
      .setImage(answer);
      if (args.length === 0) return message.channel.send(Embed);
      let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
      const embed = new Discord.RichEmbed() 
      .setDescription(`**${message.author.username} punch ${User.displayName} **`)
      .setColor("RANDOM")
      .setImage(answer);
      
       message.channel.send(embed);
    }
}