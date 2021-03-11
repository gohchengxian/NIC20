const Discord = require("discord.js");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const db = require("quick.db");

module.exports.run = async (bot, msg, args) => {
  const headers = {
    "user-agent":
      "Mozilla/5.0 OWo"
  };
  if (!msg.channel.nsfw) return msg.channel.send(new Discord.MessageEmbed().setImage(`https://i.imgur.com/oe4iK5i.gif`).setTitle(`Here is not NSFW channel`).setDescription(`Marked NSFW channel:`).setColor("RANDOM"));
  var dataaaa = await db.get(`NSFW_PORNHUB_${args.join(" ").toLowerCase()}`);
  if (dataaaa && Date.now() - dataaaa.time <= 1209600000) {
    var data = dataaaa.data;
    var data = data[Math.floor(Math.random() * data.length)];
    msg.channel.send(new Discord.MessageEmbed().setTitle(data.title).setImage(data.image).setURL(data.link).setDescription(`Type: ${data.type.toUpperCase()} \n URL: ${data.link}`).setColor("RANDOM").setTimestamp());
  } else {
    var owo = await fetch(`https://www.pornhub.com/video/search?search=${encodeURIComponent(args.join(" "))}`, { headers });
    var text = await owo.text();
    var $ = await cheerio.load(text);
    var data = [];
    var random = await $(`#videoSearchResult`)[Math.floor(Math.random() * $(`#videoSearchResult`).length)].children[4];
    var xd = await $(`#videoSearchResult`)[0].children;
    if (xd.length === 0) return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("I can't find this video..."));
    xd.forEach(async awa => {
      if (awa.attribs === undefined) return;
      if (awa.attribs['class'] !== 'pcVideoListItem js-pop videoblock videoBox') return;
      var image = awa.children[0].next.children[1].children[3].children[1].attribs['data-src'] || awa.children[0].next.children[1].children[3].children[1].attribs['src'];
      data.push({ link: "https://www.pornhub.com/view_video.php?viewkey=" + awa.attribs['data-video-vkey'], type: awa.attribs['data-segment'], title: awa.children[0].next.children[1].children[3].attribs['title'], image: image });
    });
    var data = data.filter(owo => owo.image.startsWith('https://') === true);
    await db.set(`NSFW_PORNHUB_${args.join(" ").toLowerCase()}`, {data: data, time: Date.now()});
    var data = data[Math.floor(Math.random() * data.length)];
    msg.channel.send(new Discord.MessageEmbed().setTitle(data.title).setImage(data.image).setURL(data.link).setDescription(`Type: ${data.type.toUpperCase()} \n URL: ${data.link}`).setColor("RANDOM").setTimestamp());
  }
};