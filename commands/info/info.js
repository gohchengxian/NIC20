const Discord = require("discord.js")

module.exports.run = async (client, msg, args) => {
  var embed = new Discord.MessageEmbed()
  .setTitle("Info")
  .setDescription(`
  🇦 Botinfo\n🇦 Channelinfo\n🇨 ServerInfo\n🇩 UserInfo\n🇪 EmojiInfo
  `) 
  .setColor("RANDOM")
  var message = await msg.channel.send(embed)
  await message.react("🇦")
  await message.react("🇧")
  await message.react("🇨")
  await message.react("🇩")
  await message.react("🇪")
  const collector = message.createReactionCollector((r, usr) => usr === msg.author, {time: 60000})
  var abc = 0
  collector.on("collect" , async (r) => {
    try {
      await r.users.remove(msg.author.id)
    } catch (e) {
      console.log(e)
    }
    switch (r.emoji.name){
      case "🇦":
        await message.delete();
        client.commands.get("botinfo").run(client, msg, args)
        break
      case "🇧":
        await message.delete();
        client.commands.get("channelinfo").run(client, msg, args)
        break
      case "🇨":
        await message.delete();
        client.commands.get("serverinfo").run(client, msg, args)
        break
      case "🇩":
        await message.delete();
        client.commands.get("userinfo").run(client, msg, args)
        break
      case "🇪":
        await message.delete();
        client.commands.get("emoji").run(client, msg, args)
        break
    }
  })
}