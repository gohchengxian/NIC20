const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  await message.delete();
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("❌ You need admin role for using this command");
  if(!args[0]) return message.channel.send("Please provide the delete amount");
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply("I need  Manage Message permission ;-;")
  if(isNaN(args[0])) {
    message.channel.send("You need provide the num")
  } else {
    var deleteAmount;
    if (parseInt(args[0]) > 100) {
      deleteAmount = 100;
    } else {
      deleteAmount = parseInt(args[0]);
    }
    message.channel.bulkDelete(deleteAmount, true)
    .then(deleted => {
      message.channel.send(`Success purge \`${deleted.size}\` msg`)
    })
  }
}
