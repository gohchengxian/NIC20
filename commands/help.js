const Discord = require('discord.js');

// inside a command, event listener, etc.
exports.run = async (bot, message, args) => {
  var help = [`**Normal**
1.avatar
2.snipe
3.editsnipe
4.ban
5.kick
6.ping 

:question: **Info** :question: 
1.channelinfo
2.serverinfo
3.userinfo`,`:performing_arts:**Roleplay**:performing_arts:
1.kill
2.dead
3.punch
4.kiss
5.hug
6.bite
7.clap
8.lick
9.shoot
10.slap
`,` :chart_with_downwards_trend: **FunData** :chart_with_downwards_trend:
1.gay
2.handsome
3.height
4.weight

:page_with_curl: **Writing** :page_with_curl:
1.say
2.write
3.saying
4.embed`,`👨‍💻**Image**👨‍💻
1.bird
2.cat
3.dog
4.fox
5.kangaroo
6.koala
7.panda
8.racoon
9.meme`,`:underage: **NSFW** :underage:
1.porn 
2.dick18 
3.cumshot
4.neko18 
5.gayporn 
6.ass 
7.blowjob
8.pornhub
9.xvideos
10.yaoi(sfw)
8.hentai`,`Search\n1.anime\n2.gif\n3.google\n4.img\n5.video\n6.youtube`]
  let embed = new Discord.MessageEmbed()
  .setTitle("Help")
  .setColor("RANDOM")
  .setDescription(help[0])
  .setFooter(`Requested By ${message.author.username}`);
  var owo = await message.channel.send(embed)
  await owo.react("⬅️")
  await owo.react("🏦")
  await owo.react("➡️")
  await owo.react("❌")
  const collector = owo.createReactionCollector((r, usr) => usr === message.author, {time: 60000})
  var abc = 0
  collector.on("collect" , async (r) => {
    try {
      await r.users.remove(message.author.id)
    } catch (e) {
      console.log(e)
    }
    switch (r.emoji.name){
      case "❌":
        collector.stop("Reaction end")
        break
      case "🏦":
        await owo.edit(embed.setDescription(help[0]))
        break
      case "⬅️":
        if(abc <= 0){
          abc = help.length -1
          await owo.edit(embed.setDescription(help[abc]))
        } else {
          abc--
          await owo.edit(embed.setDescription(help[abc]))
        }
        break
      case "➡️":
        if(abc === help.length -1){
          abc = -1 + 1
          await owo.edit(embed.setDescription(help[abc]))
        } else {
          abc++
          await owo.edit(embed.setDescription(help[abc]))
        }
        break
    }
  })
  collector.on("end", async () => {
    await owo.reactions.removeAll()
  });
}