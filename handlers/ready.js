module.exports = async (bot, message) => {
  console.log(`log in as ${bot.user.tag}`)
  let abc = 1
  setInterval(() => {
    bot.user.setActivity(`log was ${bot.user.tag}!`)
  }, 20000);
  const log_channel = bot.channels.cache.get(bot.config.logchannel);
  if (!log_channel) return ;
  log_channel.send(new bot.discord.RichEmbed().setColor("GREEN").setDescription(`${bot.emojis.cache.get("783227135383961610")} Bot start`));
}