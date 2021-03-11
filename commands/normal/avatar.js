const Discord =  require('discord.js');

exports.run = (client, message, args) => {
  var user = message.mentions.users.first() || client.users.cache.get(args[0]) || client.users.cache.find(owo => owo.tag === args[0]) || client.users.cache.find(owo => owo.nickname === args[0]) || client.users.cache.find(owo => owo.username === args[0]);
    if (user) {
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(`Avatar for ${user.username} :`)
        .setImage( user.displayAvatarURL({format: 'jpeg'}))
        .setFooter(`Requese by | ${message.author.tag} `)
        .setTimestamp();
        message.channel.send({embed});
    } else {
      const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTitle(`Avatar for ${message.author.tag} :`)
      .setImage( message.author.displayAvatarURL({format: 'jpeg'}))
      .setFooter(`Requese by | ${message.author.tag} `)
      .setTimestamp();
      message.channel.send({embed});
    };
};