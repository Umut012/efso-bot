const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
const db = require("quick.db")
require("moment-duration-format");












exports.run = async (bot, message, args) => {
  const msg = message

  let p = args[0];
  let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `n!`
let onlycode = args.slice(0).join(' ');
}

exports.run = async (bot, message, args) => {
  const msg = message

  let kontrol = await db.fetch(`dil_${msg.guild.id}`);
  if (kontrol == "tr") {
    let p = args[0];
    let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `n!`
  let onlycode = args.slice(0).join(' ');
  
  

   const annencilermaldır = new Discord.MessageEmbed()

  .setColor('BLUE')
  .setFooter('Nether  \'Nether Yardım', bot.user.displayAvatarURL())
  .setImage('https://cdn.discordapp.com/attachments/793502641418010624/796385452021907486/standard_15.gif')
  .addField(`**<:fixit:793770061386743818> Kanal Nuke**`, `${prefix}nuke`, false)
  .addField(`**<:fixit:793770061386743818> Süreli Mute**`, `${prefix}mute`, false)
  .addField(`**<:fixit:793770061386743818> Süreli Unmute**`, `${prefix}unmute`, false)


  .addField('\u200b', '\u200B')
  .addField("**<:discord:793769836068470816> Önemliler**", " [Beni Davet et](https://discord.com/api/oauth2/authorize?client_id=916742629700562974&permissions=8&scope=bot) \n[Destek Sunucusu](YAKINDA!)")


 return msg.channel.send(annencilermaldır);

  }else{  

    let p = args[0];
    let prefix = await require('quick.db').fetch(`prefix_${msg.guild.id}`) || `n!`
  let onlycode = args.slice(0).join(' ');
  
  
    const aa2 = new Discord.MessageEmbed()
 

    .setColor('BLUE')
    .setFooter('Nether  \'Nether Help', bot.user.displayAvatarURL())
    .addField(`**<:fixit:793770061386743818> Channel Nuke**`, `${prefix}nuke`, false)
    .addField(`**<:fixit:793770061386743818> Timed Mute**`, `${prefix}mute`, false)
    .addField(`**<:fixit:793770061386743818> Timed Unmute**`, `${prefix}unmute`, false)
      .addField('\u200b', '\u200B')
    .addField("**<:discord:793769836068470816> Important**", " [Invite Me](https://discord.com/api/oauth2/authorize?client_id=916742629700562974&permissions=8&scope=bot) \n[Support Realm](YAKINDA!)")

   
   






  return msg.channel.send(aa2);

  
  }


};

   
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'moderasyon', 'moderation'],
  permLevel: 0
};
 
exports.help = {
  name: "moderasyon"
};
