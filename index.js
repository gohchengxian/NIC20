const { Router } = require("express");
const Discord = require("discord.js");
const db = require("quick.db");
const path = require("path")
let client = new Discord.Client();
let fs = require("fs");
const Enmap = require("enmap");
const cd = new Set();
client.discord = Discord;
client.discord.RichEmbed = Discord.MessageEmbed;
client.prefix = ">";
client.db = require("quick.db");
client.fetch = require("node-fetch");
client.cd = cd;
client.config = require(path.join(__dirname, 'json/config.json'));
const http = require("http");

fs.readdir("./handlers/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    // Load the event file itself
    const event = require(`./handlers/${file}`);
    // Get just the event name from the file name
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
    //delete require.cache[require.resolve(`./handlers/${file}`)];
  });
});

client.commands = new Enmap();
fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  })
});
//Run nsfw commands
fs.readdir("./commands/nsfw/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/nsfw/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command(NSFW): ${commandName}`);
    client.commands.set(commandName, props);
  })
});
//Run Image commands
fs.readdir("./commands/image/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/image/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command(Image): ${commandName}`);
    client.commands.set(commandName, props);
  })
});
//Run Search commands
fs.readdir("./commands/search/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/search/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command(Search): ${commandName}`);
    client.commands.set(commandName, props);
  })
});
//Info
fs.readdir("./commands/info/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/info/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command(Info): ${commandName}`);
    client.commands.set(commandName, props);
  })
});
//Fun Data
fs.readdir("./commands/fundata/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/fundata/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command(Fun Data): ${commandName}`);
    client.commands.set(commandName, props);
  })
});
//Normal Commands
fs.readdir("./commands/normal/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/normal/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command(Fun Data): ${commandName}`);
    client.commands.set(commandName, props);
  })
});
//Admin Commands
fs.readdir("./commands/admin/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/admin/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command(Admin): ${commandName}`);
    client.commands.set(commandName, props);
  })
});
//Roleplay Commands
fs.readdir("./commands/roleplay/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/roleplay/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command(Roleplay): ${commandName}`);
    client.commands.set(commandName, props);
  })
});
//Developer Commands
fs.readdir("./commands/developer/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/developer/${file}`);
    let commandName = file.split(".")[0]
    console.log(`Attempting to load command(developer): ${commandName}`);
    client.commands.set(commandName, props);
  })
});

client.login(client.config.bot_token);

//Web developer
const express = require("express");
const app = express();
app.get("/", (request, response) => {
  response.status(200).send('LOL, your bot was up')
});
app.use((request, response) => {
  response.sendStatus(404);
});
app.listen(process.env.PORT);