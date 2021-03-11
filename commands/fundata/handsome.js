const Discord = require("discord.js");
const db = require("quick.db");

function financial(x) {
  return Number.parseFloat(x).toFixed(0);
}

exports.run = async (bot, msg, args) => {
  var content = args.join(" ");
  var num = Math.ceil(Math.random() * 100);
  var saynum = content.replace(/%/g, "");
  var checkstatus = db.get(`hdsstatus_${msg.author.id}`);
  var hdsdata = db.get(`hdsdata_${msg.author.id}`);
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
          var mentionuserstatus = db.get(`hdsstatus_${mentionuserid}`);
          var mentionuserdata = db.get(`hdsdata_${mentionuserid}`);
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
              .setDescription(`${mentionuserdata}% handsome`);
            msg.channel.send(embed);
          } else {
            //mentions -> status off
            var embed = new Discord.MessageEmbed()
              .setAuthor(
                msg.guild.member(user).displayName,
                user.displayAvatarURL()
              )
              .setColor(msg.guild.member(user).displayColor)
              .setDescription(`${num}% handsome`);
            msg.channel.send(embed);
          }
        } else {
          //not have mention anyone
          if (args.join(" ") == "help") {
            var embed = new Discord.MessageEmbed()
              .setTitle("Handsome commands help")
              .setColor(msg.member.displayHexColor).setDescription(`
***__Now is only Beta__*** 
> handsome reset - reset your handsome data
> handsome + userid/mentions - get another user handsome

**Hope you can play well 030**
Got any bug can DM gohchengxian#7445 , thanks 030
`);
            msg.channel.send(embed);
          } else {
            //not have mentions anyone -> not help
            var commanduser = msg.author;
            var userstatus = db.get(`hdsstatus_${msg.author.id}`);
            var userdata = db.get(`hdsdata_${msg.author.id}`);

            if (userstatus == `on`) {
              //not mentions -> status on
              var embed = new Discord.MessageEmbed()
                .setAuthor(
                  msg.guild.member(msg.author).displayName,
                  msg.author.displayAvatarURL()
                )
                .setColor(msg.member.displayHexColor)
                .setDescription(`${userdata}% handsome`);
              msg.channel.send(embed);
            } else {
              //not mentions -> status off
              var embed = new Discord.MessageEmbed()
                .setAuthor(
                  msg.guild.member(msg.author).displayName,
                  msg.author.displayAvatarURL()
                )
                .setColor(msg.member.displayHexColor)
                .setDescription(`${num}% handsome`);
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
            var hdsstatus = db.get(`hdsstatus_${User.id}`);
            var hdsdata = db.get(`hdsdata_${User.id}`);

            if (hdsstatus == `on`) {
              //userid ->on
              var embed = new Discord.MessageEmbed()
                .setAuthor(
                  msg.guild.member(User).displayName,
                  User.displayAvatarURL()
                )
                .setColor(msg.guild.member(User).displayColor)
                .setDescription(`${hdsdata}% handsome`);
              msg.channel.send(embed);
            } else {
              //userid -> off
              var embed = new Discord.MessageEmbed()
                .setAuthor(
                  msg.guild.member(User).displayName,
                  User.displayAvatarURL()
                )
                .setColor(msg.guild.member(User).displayColor)
                .setDescription(`${num}% handsome`);
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
              return msg.reply("Oh man, you can't setting under 0%");
            if (saynum <= 100) {
              //small then 100
              if (checkstatus == `on`) {
                //update new data
                db.set(`hdsdata_${msg.author.id}`, `${saynum}`);
                msg.reply(
                  "Sucess update your handsome data, that will look like this:"
                );
                var embed = new Discord.MessageEmbed()
                  .setAuthor(
                    msg.guild.member(msg.author).displayName,
                    msg.author.displayAvatarURL()
                  )
                  .setColor(msg.member.displayHexColor)
                  .setDescription(`${saynum}% handsome`);
                msg.channel.send(embed);
              } else {
                //setting data
                db.set(`hdsstatus_${msg.author.id}`, `on`);
                db.set(`hdsdata_${msg.author.id}`, `${saynum}`);
                msg.reply(
                  "Sucess setting up your handsome data, that will look like this:"
                );
                var embed = new Discord.MessageEmbed()
                  .setAuthor(
                    msg.guild.member(msg.author).displayName,
                    msg.author.displayAvatarURL()
                  )
                  .setColor(msg.member.displayHexColor)
                  .setDescription(`${saynum}% handsome`);
                msg.channel.send(embed);
              }
            } else {
              //warning for upto 100
              msg.reply("You can't setting your handsome data upto 100%");
            }
          }
        }
      }
    } else {
      //reset the hdsstatus
      if (checkstatus == `on`) {
        db.set(`hdsstatus_${msg.author.id}`, `off`);
        msg.channel.send("You have success off your customize handsome data.");
      } else {
        msg.reply("Oh man, you not have setting up your handsome data before");
      }
    }
  } else {
    if (checkstatus == `on`) {
      //no args -> status on
      var owo = db.get(`hdsdata_${msg.author.id}`);
      var embed = new Discord.MessageEmbed()
        .setAuthor(
          msg.guild.member(msg.author).displayName,
          msg.author.displayAvatarURL()
        )
        .setColor(msg.member.displayHexColor)
        .setDescription(`${owo}% handsome`);
      msg.channel.send(embed);
    } else {
      //no args -> status off
      var num = Math.ceil(Math.random() * 100);
      var embed = new Discord.MessageEmbed()
        .setAuthor(
          msg.guild.member(msg.author).displayName,
          msg.author.displayAvatarURL()
        )
        .setColor(msg.member.displayHexColor)
        .setDescription(`${num}% handsome`);
      msg.channel.send(embed);
    }
  }
};
