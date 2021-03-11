const Discord = require("discord.js");
const fetch = require("node-fetch");
const cheerio = require("cheerio");
const db = require("quick.db");

module.exports.run = async (client, message, args) => {
  const headers = {
    "user-agent":
      "Mozilla/5.0 OWo"
  };
  var fetching = await fetch(`https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(args.join(" "))}&page[limit]=1`,{ headers });
  var json = await fetching.json();
  if(json.meta.count === 0) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`❌ Error: Nothing found`));
  var data = json.data[0];
  message.channel.send(new Discord.MessageEmbed().setTitle(data.attributes.titles.en_jp).setURL(`https://kitsu.io/anime/${data.id}`).setThumbnail(data.attributes.posterImage.original).addField(`:hourglass_flowing_sand: Status:`,data.attributes.status,true).addField(`:dividers: Type`,data.type,true).addField(`:timer: Time`,`From ${data.attributes.createdAt.split('T')[0]} to ${data.attributes.updatedAt.split('T')[0]}`).addField(`:minidisc: Episodes`, data.attributes.episodeCount,true).addField(`:underage: NSFW`, data.attributes.nsfw,true).setColor("RANDOM"));
}