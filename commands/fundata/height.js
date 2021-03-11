const Discord = require("discord.js");
const db = require("quick.db");

function financial(x) {
  return Number.parseFloat(x).toFixed(1);
}

exports.run = async (bot, msg, args) => {
  var content = args.join(" ");
  var num =  Math.ceil(Math.random() * 250)
  if(num < 100){
    var num = num + 100
  }
  var saynum = content.replace(/cm/g, "");
  var checkstatus = db.get(`heightstatus_${msg.author.id}`);
  var heightdata = db.get(`heightdata_${msg.author.id}`);
  var catchuserid = msg.guild.members.cache.find(u => u.id === content);
  var catchroleid = msg.guild.roles.cache.find(r => r.id === content);
  var catchusername = msg.guild.members.cache.find(u => u.name === content);

  //commands run place
  if (msg.mentions.everyone) return msg.reply("You are bad @.@");

  if (args.join(" ")) {
    if (args.join(" ") !== "reset") {
      if (isNaN(saynum)) {
        //content is not number
        if (msg.mentions.users.first()) {
          //have mention anyone in the server
          var mentionuserid = msg.mentions.users.first().id;
          var mentionuserstatus = db.get(`heightstatus_${mentionuserid}`);
          var mentionuserdata = db.get(`heightdata_${mentionuserid}`);
          var user = bot.users.cache.get(mentionuserid);
          var catchusername = msg.guild.members.cache.find(
            u => u.name === content
          );

          if (mentionuserstatus == `on`) {
            //mentions -> status on
            var embed = new Discord.MessageEmbed()
              .setAuthor(
                msg.guild.member(user).displayName,
                user.displayAvatarURL()
              )
              .setColor(msg.guild.member(user).displayColor)
              .setDescription(`${mentionuserdata}cm Height`);
            msg.channel.send(embed);
          } else {
            //mentions -> status off
            var embed = new Discord.MessageEmbed()
              .setAuthor(
                msg.guild.member(user).displayName,
                user.displayAvatarURL()
              )
              .setColor(msg.guild.member(user).displayColor)
              .setDescription(`${num}cm Height`);
            msg.channel.send(embed);
          }
        } else {
          //not have mention anyone
          if (args.join(" ") == "help") {
            var embed = new Discord.MessageEmbed()
              .setTitle("Height commands help")
              .setColor(msg.member.displayHexColor).setDescription(`
***__Now is only Beta__*** 
> height reset - reset your height data
> height + userid/mentions - get another user height

**Hope you can play well 030**
Got any bug can DM gohchengxian#7445 , thanks 030
`);
            msg.channel.send(embed);
          } else {
            //not have mentions anyone -> not help
            var commanduser = msg.author;
            var userstatus = db.get(`heightstatus_${msg.author.id}`);
            var userdata = db.get(`heightdata_${msg.author.id}`);

            if (userstatus == `on`) {
              //not mentions -> status on
              var embed = new Discord.MessageEmbed()
                .setAuthor(
                  msg.guild.member(msg.author).displayName,
                  msg.author.displayAvatarURL()
                )
                .setColor(msg.member.displayHexColor)
                .setDescription(`${userdata}cm Height`);
              msg.channel.send(embed);
            } else {
              //not mentions -> status off
              var embed = new Discord.MessageEmbed()
                .setAuthor(
                  msg.guild.member(msg.author).displayName,
                  msg.author.displayAvatarURL()
                )
                .setColor(msg.member.displayHexColor)
                .setDescription(`${num}cm Height`);
              msg.channel.send(embed);
            }
          }
        }
      } else {
        //content is a number
        if (catchuserid) {
          // catch user/bot id
          if (catchuserid == bot.user.id) {
            //using botid
            msg.reply("Bot was not human ._.");
          } else {
            //using userid
            const User = bot.users.cache.get(content);
            var heightstatus = db.get(`heightstatus_${User.id}`);
            var heightdata = db.get(`heightdata_${User.id}`);

            if (heightstatus == `on`) {
              //userid ->on
              var embed = new Discord.MessageEmbed()
                .setAuthor(
                  msg.guild.member(User).displayName,
                  User.displayAvatarURL()
                )
                .setColor(msg.guild.member(User).displayColor)
                .setDescription(`${heightdata}cm Height`);
              msg.channel.send(embed);
            } else {
              //userid -> off
              var embed = new Discord.MessageEmbed()
                .setAuthor(
                  msg.guild.member(User).displayName,
                  User.displayAvatarURL()
                )
                .setColor(msg.guild.member(User).displayColor)
                .setDescription(`${num}cm Height`);
              msg.channel.send(embed);
            }
          }
        } else {
          //if this was not userid
          if (catchroleid) {
            msg.reply("Oh man, you can't ping role id");
          } else {
            if (saynum == 0) {
              //make sure not have spam
              var saynum = 0;
            } else {
              //整数
              var saynum = financial(saynum);
            }
            if (saynum < 0)
              return msg.reply("Oh man, you can't setting under 0cm");
            if (saynum <= 250) {
              //small then 100
              if (checkstatus == `on`) {
                //update new data
                db.set(`heightdata_${msg.author.id}`, `${saynum}`);
                msg.reply(
                  "Sucess update your height data, that will look like this:"
                );
                var embed = new Discord.MessageEmbed()
                  .setAuthor(
                    msg.guild.member(msg.author).displayName,
                    msg.author.displayAvatarURL()
                  )
                  .setColor(msg.member.displayHexColor)
                  .setDescription(`${saynum}cm Height`);
                msg.channel.send(embed);
              } else {
                //setting data
                db.set(`heightstatus_${msg.author.id}`, `on`);
                db.set(`heightdata_${msg.author.id}`, `${saynum}`);
                msg.reply(
                  "Sucess setting up your height data, that will look like this:"
                );
                var embed = new Discord.MessageEmbed()
                  .setAuthor(
                    msg.guild.member(msg.author).displayName,
                    msg.author.displayAvatarURL()
                  )
                  .setColor(msg.member.displayHexColor)
                  .setDescription(`${saynum}cm Height`);
                msg.channel.send(embed);
              }
            } else {
              //warning for upto 250cm
              msg.reply("You can't setting your height data upto 250cm");
            }
          }
        }
      }
    } else {
      //reset the heightstatus
      if (checkstatus == `on`) {
        db.set(`heightstatus_${msg.author.id}`, `off`);
        msg.channel.send("You have success off your customize height data.");
      } else {
        msg.reply("Oh man, you not have setting up your height data before");
      }
    }
  } else {
    if (checkstatus == `on`) {
      //no args -> status on
      var owo = db.get(`heightdata_${msg.author.id}`);
      var embed = new Discord.MessageEmbed()
        .setAuthor(
          msg.guild.member(msg.author).displayName,
          msg.author.displayAvatarURL()
        )
        .setColor(msg.member.displayHexColor)
        .setDescription(`${owo}cm Height`);
      msg.channel.send(embed);
    } else {
      //no args -> status off
      var embed = new Discord.MessageEmbed()
        .setAuthor(
          msg.guild.member(msg.author).displayName,
          msg.author.displayAvatarURL()
        )
        .setColor(msg.member.displayHexColor)
        .setDescription(`${num}cm Height`);
      msg.channel.send(embed);
    }
  }
};
