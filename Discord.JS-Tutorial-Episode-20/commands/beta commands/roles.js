const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    const role = message.guild.roles;
  const embed = new Discord.RichEmbed()
    .setDescription(role.map((e) => e).join('**\n**'))
    .setColor(0xffe259)
  message.channel.send({embed}) 
}
   
   
module.exports.config = {
    name: "printroles",
    category: "beta commands",
    aliases: ["roles", "showroles", "allroles"]
}