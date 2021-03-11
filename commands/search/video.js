const Discord = require("discord.js");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const db = require("quick.db");

module.exports.run = async (bot, msg, args) => {
  if (!args.join(" ")) return msg.channel.send(new Discord.MessageEmbed().setDescription(`You need to provide what video name you want to search.`).setColor("RED"));
  var video = `videosearch_${args.join(" ")}`;
  if(msg.channel.nsfw) var video = `videosearch_nsfw_${args.join(" ")}`;
  var uwu = await db.get(video);
  if (!uwu || Date.now() - uwu.time >= 1209600000) {
    var url = `https://google.com/search?q=${encodeURI(args.join(" "))}&tbm=vid`;
    if(!msg.channel.nsfw) var url = `https://google.com/search?q=${encodeURI(args.join(" "))}&tbm=vid&safe=active`;
    const headers = {
      "accept-language": " en-UK",
      "user-agent":
        "Mozilla/5.0 OWo"
    };
    var Search = await fetch(url, { headers });
    var html = await Search.text();
    var $ = await cheerio.load(html);
    if ($(`.g`).length === 0) {
      var video = `videosearch_${args.join(" ")}`;
      if(msg.channel.nsfw) var video = `videosearch_nsfw_${args.join(" ")}`;
      await db.set(video, { "items": [], "time": Date.now() });
      msg.channel.send(new Discord.MessageEmbed().setDescription(`not anythings about it.`).setColor("RED"));
    } else {
      var num = Math.floor(Math.random() * $(`.g`).length);
      var xd = [];
      if(uwu){
        uwu.items.forEach(async ecdwnbs => {
          xd.push(ecdwnbs)
        })
      };
      await $(`.yuRUbf`).each(async (uwu) => {
        var xddd = $(`.yuRUbf`)[uwu].children[0].children[0].parent.attribs.href;
        if(xd.includes(xddd)) return;
        await xd.push(xddd)
      });
      var video = `videosearch_${args.join(" ")}`;
      if(msg.channel.nsfw) var video = `videosearch_nsfw_${args.join(" ")}`;
      await db.set(video, { "items": xd, "time": Date.now() });
      var url = $(`.yuRUbf`)[num]
      var url = url.children[0].children[0].parent.attribs.href;
      msg.channel.send(url);
    }
  } else {
    var items = uwu.items;
    console.log(uwu)
    if(items.length === 0) return msg.channel.send(new Discord.MessageEmbed().setDescription(`not anythings about it.`).setColor("RED"));
    var ran = items[Math.floor(Math.random() * items.length)];
    msg.channel.send(ran)
  };
};