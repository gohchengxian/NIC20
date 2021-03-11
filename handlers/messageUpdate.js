module.exports = async (bot, msg) => {
  const db = require("quick.db");
  if (!msg.guild) return;
  let Updatamessage_msg = msg.content;
  if(Updatamessage_msg.oldMessage === Updatamessage_msg.newMessage ) return;
  db.set(`Updatamessage_${msg.channel.id}`, Updatamessage_msg);
  db.set(`Updatamessageuser_${msg.author.id}_${msg.channel.id}`, Updatamessage_msg)
  db.set(`UpdateMessageIconURL_${msg.channel.id}`, await msg.author.displayAvatarURL({format : "jpeg"}));
  db.set(`Updatamessagetag_${msg.channel.id}`, msg.author.tag);
}