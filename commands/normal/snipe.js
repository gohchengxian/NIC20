const { MessageEmbed, MessageAttachment } = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {
  var user = client.users.cache.get(args[0]) || message.mentions.users.first();
  if (user) {
    var data = await db.get(`Snipe_${user.id}_${message.channel.id}`);
    if (!data) return message.channel.send(new MessageEmbed().setDescription(`${client.emojis.cache.get("783227073685618728")} nothing for snipe`).setColor("RANDOM"));
    var user = data[data.length - 3].user;
    var type = data[data.length - 2].type;
    var dataa = data[data.length - 1].deleteBy;
    if (type.includes("content")) {
      var content = await data.find(xd => xd.content.num === "0");
      var embedss = await data.find(xd => xd.num === "1");
      var embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Send by ${user.tag}`, user.av)
        .setDescription(`Deleted by: ${dataa.tag}\nOld content: ${content.content.content}`)
        .setTitle("Snipe Result:")
      if(embedss !== undefined){
        embed.setFooter(`⇓ Embed ⇓`)
      }
      message.channel.send(embed)
    };
    if (type.includes("attach")) {
      var attach = await data.find(xd => xd.num === "2");
      var embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Send by ${user.tag}`, user.av)
        .setDescription(`URL: ${attach.attach.proxyURL}`)
        .setImage(attach.attach.proxyURL)
        .setTitle("Deleted by: "+ dataa.tag +"\nSnipe Result:")
      message.channel.send(embed)
    };
    if (type.includes("embed")) {
      if(type.includes("attach") === false &&type.includes("content") === false ) message.channel.send(new MessageEmbed().setAuthor(`Send by ${user.tag}`, user.av)
      .setFooter(`⇓ Embed ⇓`)
      .setColor("RANDOM")
      .setDescription(`Deleted by: ${dataa.tag}`)
      .setThumbnail(user.av))
      var embeds = await data.find(xd => xd.num === "1").embed[0];
      if (embeds.type === 'rich') {
        var embed = new MessageEmbed()
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
        message.channel.send(embed)
      };
    };
  } else {
    var data = await db.get(`Snipe_${message.channel.id}`);
    if (!data) return message.channel.send(new MessageEmbed().setDescription(`${client.emojis.cache.get("783227073685618728")} nothing for snipe`).setColor("RANDOM"));
    var user = data[data.length - 3].user;
    var type = data[data.length - 2].type;
    var dataa = data[data.length - 1].deleteBy;
    if (type.includes("content")) {
      var content = await data.find(xd => xd.content.num === "0");
      var embedss = await data.find(xd => xd.num === "1");
      var embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Send by ${user.tag}`, user.av)
        .setDescription(`Deleted by: ${dataa.tag}\nOld content: ${content.content.content}`)
        .setTitle("Snipe Result:")
      if(embedss !== undefined){
        embed.setFooter(`⇓ Embed ⇓`)
      }
      message.channel.send(embed)
    };
    if (type.includes("attach")) {
      var attach = await data.find(xd => xd.num === "2");
      var embed = new MessageEmbed()
        .setColor("RANDOM")
        .setAuthor(`Send by ${user.tag}`, user.av)
        .setDescription(`URL: ${attach.attach.proxyURL}`)
        .setImage(attach.attach.proxyURL)
        .setTitle("Deleted by: "+ dataa.tag +"\nSnipe Result:")
      message.channel.send(embed)
    };
    if (type.includes("embed")) {
      if(type.includes("attach") === false &&type.includes("content") === false ) message.channel.send(new MessageEmbed().setAuthor(`Send by ${user.tag}`, user.av)
      .setFooter(`⇓ Embed ⇓`)
      .setColor("RANDOM")
      .setDescription(`Deleted by: ${dataa.tag}`)
      .setThumbnail(user.av))
      var embeds = await data.find(xd => xd.num === "1").embed[0];
      if (embeds.type === 'rich') {
        var embed = new MessageEmbed()
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
        message.channel.send(embed)
      };
    };
  };
}