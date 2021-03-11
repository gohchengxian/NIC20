module.exports = async (client, message) => {
  const db = require("quick.db");
  // Ignore all bots
  if (message.author.bot) return;
  // Ignore messages not starting with the prefix (in config.json)
  const prefix = db.get(`prefix_${message.guild.id}`) || client.prefix;
  if (message.mentions.users.first() === client.user)
    message.channel.send(new client.discord.RichEmbed().setDescription(`This server prefix was \`\`${prefix}\`\``).setColor("RANDOM"));
  if (message.content.indexOf(prefix) !== 0) return;
  // Our standard argument/command name definition.
  const args = message.content.slice(prefix.length).trim().split(/ +/)//.split(" ").slice(1);
  const commandName = args.shift().toLowerCase();
  const command = message.content.slice(prefix.length).split(" ")[0];
  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));;
  // If that command doesn't exist, silently exit and do nothing
  if (!cmd) return;
  // Run the command
  cmd.run(client, message, args);
};