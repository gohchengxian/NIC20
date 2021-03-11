const Discord = require("discord.js");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  var bf = Date.now();
  var dbss = `Image_Search_`;
  if (message.channel.nsfw) var dbss = `Image_Search_nsfw_`;
  if (!args.join(" ")) return message.channel.send(`You need provide what you want to search OwO`);
  var dataaaa = await db.get(`${dbss}${args.join(" ")}`);
  if (dataaaa && Date.now() - dataaaa.time <= 1209600000) {
    var result = dataaaa.items;
    console.log(`Result(${args.join(" ")}): ` + result.length)
    if (result.length === 0 || result === 0) {
      message.channel.send(new Discord.MessageEmbed().setDescription(`I can't found the Image ;-;`).setColor("RANDOM"));
    } else {
      message.channel.send(new Discord.MessageEmbed().setImage(result[Math.floor(Math.random() * result.length)]).setDescription(Date.now() - bf).setColor("RANDOM"));
    };
  } else {
    var i = 0;
    var url = `https://google.com/search?q=${encodeURIComponent(args.join(" "))}&tbm=isch&safe=active`;
    if (message.channel.nsfw) var url = `https://google.com/search?q=${encodeURIComponent(args.join(" "))}&tbm=isch`;
    const headers = {
      "accept-language": " en-UK",
      "user-agent":
        "Mozilla/5.0 OWo"
    };
    const searchresult = await fetch(url, { headers });
    const text = await searchresult.text();
    var result = await rand(text, args.join(" "), client);
    if (result === 0) var result = [];
    await db.set(`${dbss}${args.join(" ")}`, { items: result, time: Date.now() });
    if (result.length === 0 || result === 0) {
      message.channel.send(new Discord.MessageEmbed().setDescription(`I can't found the Image ;-;`).setColor("RANDOM"));
    } else {
      message.channel.send(new Discord.MessageEmbed().setImage(result[Math.floor(Math.random() * result.length)]).setDescription(Date.now() - bf).setColor("RANDOM"));
    };
    async function rand(text, argsl, i) {
      var webcd = `Image_Search_`;
      if (message.channel.nsfw) var webcd = `Image_Search_nsfw_`;
      const $ = await cheerio.load(text);
      var u = i || 0;
      var result = await $(`img[class="rg_i Q4LuWd"]`).length;
      if (result === 0) return APIs(argsl);
      var owooo = [];
      var xd = [];
      console.log(dataaaa)
      if (dataaaa) {
        dataaaa.items.forEach(async ecdwnbs => {
          xd.push(ecdwnbs)
        })
      };
      var results = await $(`img[class="rg_i Q4LuWd"]`);
      for (let u = 0; u < results.length; u++) {
        let chapterTitle = await $(`img[class="rg_i Q4LuWd"]`)[u].attribs['src'] || $(`img[class="rg_i Q4LuWd"]`)[u].attribs['data-src'];
        await owooo.push(`${chapterTitle}`);
      };
      var uwu = owooo.filter(uwu => uwu.startsWith('https://') === true);
      uwu.forEach(async cesdwni => {
        if (!xd.includes(cesdwni)) return xd.push(cesdwni);
      });
      console.log(xd.length)
      if (uwu.length === 0) {
        return APIs(argsl, bot)
      } else {
        return uwu;
      };
    };
    async function APIs(argsu, bot) {
      var cx = bot.config.custom_search_cx;
      var key = bot.config.customsearch_api_key;
      if(key.length === 0) return 0;
      if (!message.channel.nsfw) var url = `https://www.googleapis.com/customsearch/v1?key=${key[Math.floor(Math.random() * key.length)]}&cx=${cx[Math.floor(Math.random() * cx.length)]}&q=${encodeURIComponent(argsu)}&safe=off&num=10&searchType=image`;
      if (message.channel.nsfw) var url = `https://www.googleapis.com/customsearch/v1?key=${key[Math.floor(Math.random() * key.length)]}&cx=${cx[Math.floor(Math.random() * cx.length)]}&q=${encodeURIComponent(argsu)}&num=10&searchType=image&safe=active`;
      //console.log(url)
      const owo = await fetch(url);
      if (owo.status === 200) {
        var json = await owo.json();
        var webcd = `Image_Search_`;
        if (message.channel.nsfw) var webcd = `Image_Search_nsfw_`;
        if (json.searchInformation.totalResults == 0) return 0;
        var owooo = [];
        var xd = [];
        var dataaaa = await db.get(`${webcd}${args.join(" ")}`);
        console.log(dataaaa)
        if (dataaaa && dataaaa.items) {
          dataaaa.items.forEach(async ecdwnbs => {
            xd.push(ecdwnbs)
          })
        };
        for (let u = 0; u < json.items.length; u++) {
          let chapterTitle = json.items[u].link || json.url || json.image.thumbnailLink;
          //if (owooo.includes(chapterTitle)) return;
          await owooo.push(`${chapterTitle}`);
        };
        owooo.forEach(async cesdwni => {
          if (!xd.includes(cesdwni)) return xd.push(cesdwni);
        });
        return xd;
      } else {
        return 0;
      }
    }
  }
}

module.exports.aliases = ["images", "image"];