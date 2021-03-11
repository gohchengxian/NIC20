module.exports = async (bot, msg) => {
  const db = require("quick.db");
  const Discord = require("discord.js");
  if (!msg.guild) return;
  const entry = await msg.guild.fetchAuditLogs({ limit: 1, type: 'messageDelete' }).then(audit => audit.entries.first());
  var data = [];
  var type = [];
  var content = msg.content;
  var embeds = msg.embeds;
  var attach = msg.attachments.first();
  if (content.length !== 0) await data.push({ content: {content: content, num: "0"} }), type.push('content');
  if (embeds.length !== 0) await data.push({ embed: embeds , num: "1"}), type.push('embed');
  if (attach) await data.push({ attach: attach , num: "2"}), type.push('attach');
  var author = msg.author;
  await data.push({user: {tag: author.tag, av: msg.author.displayAvatarURL()}},  {type: type}, {deleteBy: entry.executor} );
  await db.set(`Snipe_${msg.author.id}_${msg.channel.id}`, data);
  await db.set(`Snipe_${msg.channel.id}`, data);
  var log_channel = await db.get(`server_log_${msg.guild.id}`);
  var status = await db.get(`server_log_status_${msg.guild.id}`);
  if (log_channel && status === true) {
    var channel = bot.channels.cache.get(log_channel);
    if(msg.channel.id === channel.id) return;
    if (!channel) return;
    var user = data[data.length - 3].user;
    var type = data[data.length - 2].type;
    var dataa = data[data.length - 1].deleteBy;
    if (type.includes("content")) {
      var content = await data.find(xd => xd.content.num === "0");
      var embedss = await data.find(xd => xd.num === "1");
      var embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Send by ${user.tag}`, user.av)
        .setDescription(`Deleted by: ${dataa.tag}\nOld content: ${content.content.content}`)
        .setTitle("Snipe Result:")
      if(embedss !== undefined){
        embed.setFooter(`⇓ Embed ⇓`)
      }
      channel.send(embed)
    };
    if (type.includes("attach")) {
      var attach = await data.find(xd => xd.num === "2");
      var embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Send by ${user.tag}`, user.av)
        .setDescription(`URL: ${attach.attach.proxyURL}`)
        .setImage(attach.attach.proxyURL)
        .setTitle("Deleted by: "+ dataa.tag +"\nSnipe Result:")
      channel.send(embed)
    };
    if (type.includes("embed")) {
      if(type.includes("attach") === false &&type.includes("content") === false ) channel.send(new Discord.MessageEmbed().setAuthor(`Send by ${user.tag}`, user.av)
      .setFooter(`⇓ Embed ⇓`)
      .setColor("RANDOM")
      .setDescription(`Deleted by: ${dataa.tag}`)
      .setThumbnail(user.av))
      var embeds = await data.find(xd => xd.num === "1").embed[0];
      if (embeds.type === 'rich') {
        var embed = new Discord.MessageEmbed()
        if (embeds.color !== 0) {
          embed.setColor(embeds.color)
        };
        if (embeds.title !== null) {
          embed.setTitle(embeds.title)
        };
        if (embeds.url !== null) {
          embed.setURL(embeds.url)
        };
        if (embeds.description !== null) {
          embed.setDescription(embeds.description)
        };
        if (embeds.image !== null) {
          embed.setImage(embeds.image.proxyURL)
        };
        if (embeds.thumbnail !== null) {
          embed.setThumbnail(embeds.thumbnail.proxyURL)
        };
        if (embeds.footer !== null) {
          embed.setFooter(embeds.footer.text)
        };
        if (embeds.footer !== null) {
          embed.setFooter(embeds.footer.text)
        };
        if (embeds.timestamp !== null) {
          embed.setTimestamp(embeds.timestamp)
        };
        if (embeds.author !== null) {
          embed.setAuthor(embeds.author.name, embeds.author.icon_url)
        };
        var field = embeds.fields;
        field.forEach(async uwu => {
          embed.addField(uwu.name, uwu.value, uwu.inline)
        });
        channel.send(embed)
      };
    };
  }
};