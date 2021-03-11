const Discord = require("discord.js");
const db = require("quick.db");

const timer = now => {
  const focus = number => {
    if (number.toString().length !== 2) {
      return "0" + number.toString();
    }
    return number;
  };
  return `Date : ${now.getFullYear()}-${now.getMonth() +
    1}-${now.getDate()} | Time: ${focus(now.getHours())}:${focus(
      now.getMinutes()
    )}:${focus(now.getSeconds())}`;
};

exports.run = async (client, message, args) => {
  var user = client.users.cache.find(owo => owo.tag === args.join(" ")) || client.users.cache.find(owo => owo.username === args.join(" ")) || message.mentions.users.first() || client.users.cache.get(args.join(" ")) || message.author;
  if (!user) return;
  var roles = message.guild.member(user).roles.cache.map(r => r.name).join(", ");
  var roles = roles.replace(/, @everyone/g, "")
  var roles = roles.replace("@everyone", "None")
  if (message.guild.member(user).roles.cache.map(r => r.name).length > 3) {
    var roles = message.guild.member(user).roles.cache.map(r => r.name).join(",").split(",")
    var roles = roles[0] + ", " + roles[1] + ", " + roles[2] + ` and ${message.guild.member(user).roles.cache.map(r => r.name).length - 3} more`
  }
  //channel
  var channel = message.guild.channels.cache.filter(c => c.permissionsFor(message.guild.member(user)).has("VIEW_CHANNEL")).map(c => c.name)
  if (channel.length > 3) {
    var channel = channel.join(",").split(",")
    var channel = channel[0] + ", " + channel[1] + ", " + channel[2] + ` and ${channel.length - 3} more`
  }
  //flags
  if (user.flags != null && user.flags.toArray().join(" ") != "") {
    var flags = user.flags.toArray().join(" ");
    var flags = flags.replace("HOUSE_BRAVERY", client.emojis.cache.get("782956290841772043"));
    var flags = flags.replace("HOUSE_BRILLIANCE", client.emojis.cache.get("782965772565086248"));
    var flags = flags.replace("HOUSE_BALANCE", client.emojis.cache.get("782966213197430824"));
    var flags = flags.replace("DISCORD_EMPLOYEE", client.emojis.cache.get("782966807275372555"));
    var flags = flags.replace("PARTNERED_SERVER_OWNER", client.emojis.cache.get("782967645871407167"));
    var flags = flags.replace("EARLY_VERIFIED_BOT_DEVELOPER", client.emojis.cache.get("782969629261037599"));
    var flags = flags.replace("EARLY_SUPPORTER", client.emojis.cache.get("782971951915728907"));
    var flags = flags.replace("HYPESQUAD_EVENTS", client.emojis.cache.get("782972585003974656"));
    var flags = flags.replace("VERIFIED_BOT", client.emojis.cache.get("783238110116184064"));
    var flags = flags.replace("BUGHUNTER_LEVEL_1", client.emojis.cache.get("783172222130061342"))
    var flags = flags.replace("BUGHUNTER_LEVEL_2", client.emojis.cache.get(""))
  } else {
    var flags = "None";
  }
  //bot checking
  var str = "owo"
  if (user.bot === true) {
    var bot = str.replace("owo", `${client.emojis.cache.get("783227135383961610")} True`)
  } else if (user.bot === false) {
    var bot = str.replace("owo", `${client.emojis.cache.get("783227073685618728")} False`)
  }
  //user status
  if (user.presence.status.toUpperCase() === "DND") {
    var status = str.replace("owo", `${client.emojis.cache.get("783237919195791382")} DND`)
  } else if (user.presence.status.toUpperCase() === "ONLINE") {
    var status = str.replace("owo", `${client.emojis.cache.get("783237963965923329")} Online`)
  } else if (user.presence.status.toUpperCase() === "OFFLINE") {
    var status = str.replace("owo", `${client.emojis.cache.get("783237943602053160")} Offline`)
  } else if (user.presence.status.toUpperCase() === "IDLE") {
    var status = str.replace("owo", `${client.emojis.cache.get("783237988145954827")} IDLE`)
  }
  //highest role
  if (message.guild.member(user).roles.highest.name === "@everyone") {
    var highest_role = "None"
  } else {
    var highest_role = message.guild.member(user).roles.highest.name
  }
  var color = message.guild.member(user).displayHexColor;
  if(color == "#000000") color = "RANDOM";
  var embed = new Discord.RichEmbed()
    .setColor(color)
    .addField("Username:", user.tag, true)
    .addField("Nickname:", message.guild.member(user).displayName, true)
    .addField("ID:", user.id, true)
    .addField("Status:", status, true)
    .addField("Flags:", flags, true)
    .addField("Bot acc:", bot, true)
    .addField("Role Color:", "`" + message.guild.member(user).displayHexColor + "`", true)
    .addField("Higher Role:", highest_role, true)
    .addField("Created(UTC) :", timer(user.createdAt), true)
    .addField("Join server time(UTC) :", timer(message.member.joinedAt), true)
    .addField("Roles:", "`" + roles + "`", true)
    .addField("Channel:", "`" + channel + "`", true)
    .setThumbnail(user.displayAvatarURL({ format: "jpeg", size: 1024 }));
  message.channel.send(embed);
};