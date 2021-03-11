const Discord = require("discord.js");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const db = require("quick.db");

module.exports.run = async (bot, msg, args) => {
  if (!msg.channel.nsfw) return msg.channel.send(new Discord.MessageEmbed().setImage(`https://i.imgur.com/oe4iK5i.gif`).setTitle(`Here is not NSFW channel`).setDescription(`Marked NSFW channel:`).setColor("RANDOM"));
  var dataaaa = await db.get(`NSFW_XVIDEOS_${args.join(" ").toLowerCase()}`);
  if (dataaaa) {
    var data = dataaaa.data;
    console.log(data)
    var rand = data[Math.floor(Math.random() * data.length)];
    msg.channel.send(new Discord.MessageEmbed().setTitle(rand.title).setImage(rand.image).setURL(rand.link).setColor("RANDOM").setTimestamp());
  } else {
    var owo = await fetch(`https://www.xvideos.com/?k=${encodeURI(args.join(" "))}`);
    var text = await owo.text();
    var $ = await cheerio.load(text);
    if ($(`.thumb-block`).length === 0) return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("I can't find this video...")), await db.set(`NSFW_XVIDEOS_${args.join(" ").toLowerCase()}`, { data: [], time: Date.now() });
    var data = [];
    var i = 0;
    await $(`.thumb-block`).each(async owo => {
      var title = $(`.thumb-block`)[owo].children[1].children[0].children[0].attribs.title || $(`.thumb-block`)[owo].children[1].children[0].children[0].children[0].data;
      var link = `https://www.xvideos.com${$(`.thumb-block`)[owo].children[0].children[0].children[0].attribs.href}`;
      var image = $(`.thumb-block`)[owo].children[0].children[0].children[0].children[0].attribs['data-src'];
      await data.push({ title: title, link: link, image: image })
    });
    var rand = data[Math.floor(Math.random() * data.length)];
    await db.set(`NSFW_XVIDEOS_${args.join(" ").toLowerCase()}`, { data: data, time: Date.now() });
    msg.channel.send(new Discord.MessageEmbed().setTitle(rand.title).setImage(rand.image).setURL(rand.link).setColor("RANDOM").setTimestamp());
  }
};

module.exports.aliases = ["xvideo"]