const Discord = require("discord.js");

module.exports.run = async (bot, msg, args) => {
  var uwu = [];
  args.forEach(xdd => {
    var argss = xdd.split(":")[1] || xdd || xdd.split(">")[0];
    var emoji = msg.guild.emojis.cache.find(owo => owo.name === argss) || msg.guild.emojis.cache.find(owo => owo.id === argss);
    var emojis = bot.emojis.cache.find(owo => owo.id === argss) || bot.emojis.cache.find(owo => owo.name === argss);
    if (emoji) {
      if (emoji.animated) {
        if(uwu.find(owo => owo.id === emoji.id) !== undefined) return;
        uwu.push({ id: emoji.id, type: "gif", name: emoji.name});
      } else {
        if(uwu.find(owo => owo.id === emoji.id) !== undefined) return;
        uwu.push({ id: emoji.id, type: "png", name: emoji.name});
      };
    } else {
      return;
    }
  });
  if (uwu.length === 0) return msg.channel.send(`${bot.emojis.cache.get("783227073685618728")} Sorry, I can't find any emoji in your message at this server.`);
  uwu.forEach(async awaaa => {
    msg.channel.send(new Discord.MessageEmbed().setTitle(`Emoji Info:`).addField(`ID:`, awaaa.id, true).addField(`Name:`, awaaa.name, true).setImage(`https://cdn.discordapp.com/emojis/${awaaa.id}.${awaaa.type}?v=1`).setURL(`https://cdn.discordapp.com/emojis/${awaaa.id}.${awaaa.type}?v=1`).setColor("RANDOM"))
  })
};