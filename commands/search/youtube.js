const Discord = require("discord.js");
const ytsr = require("ytsr")
const { Database } = require("quickmongo");

async function uwu(bot, msg, args) {
  const db = new Database(bot.config.mongodb);
  var data = await db.get(`YouTube_Search_${args.join(" ")}`);
  if (!data) return await yts(bot, msg, args);
  if (args.join(" ").startsWith("channel") || args.join(" ").startsWith("channels") || args.join(" ").startsWith("users") || args.join(" ").startsWith("user")) {
    if (args[1] === "latest") {
      var chl = data.filter(xd => xd.type === 'shelf');
      var chl = chl.filter(xd => xd.title.startsWith('Latest from') === true)
      if (chl.length === 0) return msg.channel.send(new Discord.MessageEmbed().setDescription(`❌ Sorry, I can't find this channel latest video.`).setColor("RANDOM"));
      var chl = chl[Math.floor(Math.random() * chl.length)];
      var embed = new Discord.MessageEmbed()
        .setTitle(chl.title)
        .setColor("RANDOM");
      var data = [];
      console.log(chl.items.length)
      await chl.items.forEach(async xd => {
        data.push(`[${xd.title.slice(0, 80)}](https://www.youtube.com/watch?v=${xd.id})\nDescription: ${xd.description.slice(0, 200)}`)
      });
      embed.setDescription(data.slice(0, 5).join("\n\n"));
      var xd = await msg.channel.send(embed);
      await xd.react("⬅️")
      await xd.react("➡️")
      await xd.react("❌")
      await collectReact(data, xd, msg, embed);
    } else {
      var chl = data.filter(xd => xd.type === 'channel');
      if (chl.length === 0) return msg.channel.send(new Discord.MessageEmbed().setDescription(`❌ Sorry, I can't find this channel.`).setColor("RANDOM"))
      var chl = chl[Math.floor(Math.random() * chl.length)];
      msg.channel.send(new Discord.MessageEmbed().setTitle(chi.name).setURL(`https://www.youtube.com/channel/${chi.channelID}`).setThumbnail(chi.av).setDescription(chi.description + "\n\n" + `Subscribers: ${chi.sub}\nVideos: ${chi.videos}`).setColor("RED"));
    }
  } else if (args.join(" ").startsWith("playlist") || args.join(" ").startsWith("playlists") || args.join(" ").startsWith("list")) {
    var list = data.filter(xd => xd.type === 'playlist');
    if (list.length === 0) msg.channel.send(new Discord.MessageEmbed().setDescription(`❌ Sorry, I can't find this channel.`).setColor("RANDOM"));
    var list = list[Math.floor(Math.random() * list.length)]
    msg.channel.send(`https://www.youtube.com/playlist?list=${list.id}`);
  } else {
    var video = data.filter(xd => xd.type === 'video');
    msg.channel.send("https://youtu.be/" + video[Math.floor(Math.random() * video.length)].id)
  };
}

async function awa(bot, msg, args) {
  msg.channel.send(`Sorry, Now got problem`);
}

async function yts(bot, msg, args) {
  const db = new Database(bot.config.mongodb);
  var search = await ytsr(args.join(" ").replace("channel", "").replace("user", "").replace("latest", "").replace("channels", ""), { pages: 1 }).catch(async (e) => {
    return await awa(bot, msg, args)
  });
  var items = search.items;
  var data = [];
  items.forEach(async xdd => {
    var type = xdd.type;
    var video = {};
    if (type === 'video') {
      video.type = 'video'
      video.id = xdd.id;
      video.title = xdd.title;
      video.description = xdd.description;
      video.image = `https://i.ytimg.com/vi/${xdd.id}/maxresdefault.jpg`;
      video.author = xdd.author;
    } else if (type === 'channel') {
      video.type = 'channel'
      video.name = xdd.name;
      video.channelID = xdd.channelID;
      video.sub = xdd.subscribers;
      video.description = xdd.descriptionShort;
      video.videos = xdd.videos;
      video.av = xdd.bestAvatar.url;
    } else if (type === 'shelf') {
      video.type = 'shelf';
      var weuiwedc = [];
      await xdd.items.forEach(async xddd => {
        var videos = {}
        videos.id = xddd.id;
        videos.title = xddd.title;
        videos.description = xddd.description;
        videos.image = `https://i.ytimg.com/vi/${xddd.id}/maxresdefault.jpg`;
        videos.author = xddd.author;
        weuiwedc.push(videos)
      });
      video.title = xdd.title
      video.items = weuiwedc
    } else if (type === 'playlist') {
      video.type = 'playlist'
      video.title = xdd.title;
      video.id = xdd.playlistID;
    };
    data.push(video);
  });
  console.log(search.items.find(xddd => xddd.type === 'shelf'));
  await db.set(`YouTube_Search_${args.join(" ")}`, data);
  if (args.join(" ").startsWith("channel") || args.join(" ").startsWith("channels") || args.join(" ").startsWith("users") || args.join(" ").startsWith("user")) {
    if (args[1] === "latest") {
      var chl = data.filter(xd => xd.type === 'shelf');
      var chl = chl.filter(xd => xd.title.startsWith('Latest from') === true)
      if (chl.length === 0) return msg.channel.send(new Discord.MessageEmbed().setDescription(`❌ Sorry, I can't find this channel latest video.`).setColor("RANDOM"));
      var chl = chl[Math.floor(Math.random() * chl.length)];
      var embed = new Discord.MessageEmbed()
        .setTitle(chl.title)
        .setColor("RANDOM");
      var data = [];
      console.log(chl.items.length)
      await chl.items.forEach(async xd => {
        data.push(`[${xd.title.slice(0, 80)}](https://www.youtube.com/watch?v=${xd.id})\nDescription: ${xd.description.slice(0, 200)}`)
      });
      embed.setDescription(data.slice(0, 5).join("\n\n"));
      var xd = await msg.channel.send(embed);
      await xd.react("⬅️")
      await xd.react("➡️")
      await xd.react("❌")
      await collectReact(data, xd, msg, embed);
    } else {
      var chl = data.filter(xd => xd.type === 'channel');
      if (chl.length === 0) return msg.channel.send(new Discord.MessageEmbed().setDescription(`❌ Sorry, I can't find this channel.`).setColor("RANDOM"))
      var chl = chl[Math.floor(Math.random() * chl.length)];
      msg.channel.send(new Discord.MessageEmbed().setTitle(chi.name).setURL(`https://www.youtube.com/channel/${chi.channelID}`).setThumbnail(chi.av).setDescription(chi.description + "\n\n" + `Subscribers: ${chi.sub}\nVideos: ${chi.videos}`).setColor("RED"));
    }
  } else if (args.join(" ").startsWith("playlist") || args.join(" ").startsWith("playlists") || args.join(" ").startsWith("list")) {
    var list = data.filter(xd => xd.type === 'playlist');
    if (list.length === 0) msg.channel.send(new Discord.MessageEmbed().setDescription(`❌ Sorry, I can't find this channel.`).setColor("RANDOM"));
    var list = list[Math.floor(Math.random() * list.length)]
    msg.channel.send(`https://www.youtube.com/playlist?list=${list.id}`);
  } else {
    var video = data.filter(xd => xd.type === 'video');
    msg.channel.send("https://youtu.be/" + video[Math.floor(Math.random() * video.length)].id)
  };
};

async function collectReact(msg, owo, message, embed) {
  const collector = owo.createReactionCollector((r, usr) => usr === message.author, { time: 10000 })
  var abc = 0;
  collector.on("collect", async (r) => {
    try {
      await r.users.remove(message.author.id)
    } catch (e) {
      console.log(e)
    }
    switch (r.emoji.name) {
      case "❌":
        collector.stop()
        break
      case "⬅️":
        abc--
        if (abc >= 0) {
          await owo.edit(embed.setDescription(msg.slice(0, 5).join("\n\n")))
        } else {
          abc = 1;
          await owo.edit(embed.setDescription(msg.slice(5, 10).join("\n\n")))
        }
        break
      case "➡️":
        abc++
        if (abc <= 1) {
          await owo.edit(embed.setDescription(msg.slice(5, 10).join("\n\n")))
        } else {
          abc = 0;
          await owo.edit(embed.setDescription(msg.slice(0, 5).join("\n\n")))
        }
        break
    }
  })
  collector.on("end", async () => {
    await owo.reactions.removeAll()
  });
}
exports.run = async (bot, message, args) => {
  if (!args.join(" ")) return message.channel.send(`You need provide what you want to search at YouTube.`);
  await uwu(bot, message, args);
};

module.exports.aliases = ["yt"];