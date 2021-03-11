const Discord = require("discord.js");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const db = require("quick.db");

async function nsfwcheck(title, description, url, bot) {
  var nsfw_words = ["porn", "gayporn", "a片", "性愛","做愛","內射","成人电影","成人视频","sex","hentai","av","免费成人高清在线视频"];
  var nsfw_word = ["porn", "gayporn", "a片", "性愛","做愛","內射","成人电影","成人视频","sex","hentai","免费成人高清在线视频","成人影片"];
  var ban_link = await db.get(`NSFW_WEBSITE`);
  var white_list = ['https://zh.wikipedia.org/','https://wikipedia.org/'];
  var whitelistttt = [];
  white_list.forEach(xdd => {
    if(url.startsWith(xdd)) whitelistttt.push(xdd);
  });
  var data = [];
  nsfw_words.forEach(owo => {
    description.split(" ").forEach(uwu => {
      if(owo === uwu.toLowerCase()) return data.push(owo)
    });
    description.split("、").forEach(uwu => {
      if(owo === uwu.toLowerCase()) return data.push(owo)
    });
    description.split(",").forEach(uwu => {
      if(owo === uwu.toLowerCase()) return data.push(owo)
    });
    title.split(" ").forEach(uwu => {
      if(owo === uwu.toLowerCase()) return data.push(owo)
    });
    title.split("、").forEach(uwu => {
      if(owo === uwu.toLowerCase()) return data.push(owo)
    });
    return;
  });
  nsfw_word.forEach(owo => {
    if(description.toLowerCase().includes(owo)) return data.push(owo);
    if(title.toLowerCase().includes(owo)) return data.push(owo);
    return;
  });
  var link = [];
  ban_link.forEach(xdd => {
    if(url.startsWith(xdd)) data.push(xdd), link.push(xdd);
  })
  if(ban_link.includes(url)) data.push(url);
  if(whitelistttt.length !== 0) return 0;
  if(data.length === 0) return 0;
  var urls = url.split('/')[0] + "//" + url.split('/')[2];
  var verify_channel = bot.channels.cache.get(bot.config.verifynsfw);
  if(verify_channel){
    if(!ban_link.includes(urls)){
      verify_channel.send(new Discord.MessageEmbed().setURL(urls).setTimestamp().setDescription("URL: "+ urls).setColor("RANDOM"));
    }
  };
  if(link.length === 0){
    //await db.push(`NSFW_WEBSITE`, urls);
    return data;
  } else {
    return data;
  }
};

module.exports.run = async (bot, msg, args) => {
  if (!args.join(" ")) return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Sorry, you need provide what you want to search...`));
  var uwu = await db.get(`Google_search_${args.join(" ")}`);
  if (uwu && (Date.now() - uwu.time) <= 1209600000) {
    var items = uwu.items[0];
    console.log(items)
    var nsfwchecking = await nsfwcheck(items.title, items.description, items.url, bot);
    console.log(nsfwchecking)
    if (!msg.channel.nsfw && nsfwchecking !== 0) return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`❌ I think this is NSFW message, so you only can see in nsfw channels`));
    if (items.length === 0) return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`Sorry, I can't found anythings about it`));
    msg.channel.send(new Discord.MessageEmbed().setTitle(items.title).setColor("RANDOM").setURL(items.url).setDescription(items.description));
  } else {
    var url = `https://google.com/search?q=${encodeURI(args.join(" "))}`;
    const headers = {
      "accept-language": "en-UK",
      "user-agent":
        "Mozilla/5.0 OWo"
    };
    const Search = await fetch(url, { headers });
    const html = await Search.text();
    var $ = await cheerio.load(html);
    var title = $('.g').find(`h3[class="LC20lb DKV0Md"]`).first().text() ;
    var description = $(`span[class="hgKElc"]`).text() || $(".mod").find('span[class="hgKElc"]').text() || $(`.zCubwf`).first().text() || $(`.kno-rdesc`).text().replace("Description", "").replace("― Google", "") || $(`span[class="aCOpRe"]`).first().text() || $(`span[class="hgKElc"]`).first().text() || $(`span[class="ILfuVd NA6bn"]`).find(`span[class="hgKElc"]`).first().text();
    var url = $('.yuRUbf').find('a').first().attr('href');
    if (url.length === 0) {
      await db.set(`Google_search_${args.join(" ")}`, { time: Date.now(), items: [] });
      msg.channel.send(new Discord.MessageEmbed().setDescription(`I can't find anythings about it.`).setColor("RED"))
    } else {
      var xddddddddddddd = [];
      var xddddddddddd = {};
      xddddddddddd.title = title;
      xddddddddddd.url = url;
      xddddddddddd.description = description;
      await xddddddddddddd.push(xddddddddddd);
      await db.set(`Google_search_${args.join(" ")}`, { time: Date.now(), items: xddddddddddddd });
      var nsfwchecking = await nsfwcheck(title, description, url, bot);
      if (!msg.channel.nsfw && nsfwchecking !== 0) return msg.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`❌ I think this is NSFW message, so you only can see in nsfw channels`));
      msg.channel.send(new Discord.MessageEmbed().setTitle(title).setColor("RANDOM").setURL(url).setDescription(description));
    };
  };
};