const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {
  var embed = new Discord.MessageEmbed()
  .setTitle("Info")
  .setDescription(`
  š¦ Botinfo\nš¦ Channelinfo\nšØ ServerInfo\nš© UserInfo\nšŖ EmojiInfo
  `) 
  .setColor("RANDOM")
  var message = await msg.channel.send(embed)
  await message.react("š¦")
  await message.react("š§")
  await message.react("šØ")
  await message.react("š©")
  await message.react("šŖ")
  const collector = message.createReactionCollector((r, usr) => usr === msg.author, {time: 60000})
  var abc = 0
  collector.on("collect" , async (r) => {
    try {
      await r.users.remove(msg.author.id)
    } catch (e) {
      console.log(e)
    }
    switch (r.emoji.name){
      case "š¦":
        await message.delete();
        client.commands.get("botinfo").run(client, msg, args)
        break
      case "š§":
        await message.delete();
        client.commands.get("channelinfo").run(client, msg, args)
        break
      case "šØ":
        await message.delete();
        client.commands.get("serverinfo").run(client, msg, args)
        break
      case "š©":
        await message.delete();
        client.commands.get("userinfo").run(client, msg, args)
        break
      case "šŖ":
        await message.delete();
        client.commands.get("emoji").run(client, msg, args)
        break
    }
  })
}