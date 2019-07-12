const { RichEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");
const { prefix } = require("../../botconfig.json")
 
module.exports = {
    config: {
        name: "host",
        category: "miscellaneous",
        usage: `${prefix}host`,
        description: "",
        accessableby: "Members",
        status: "Working",
        aliases: ["ht"]
    },
    run: async (bot, message, args) => {
        message.channel.send("Working on it...").then(m => {
        
        let hsEmbed = new RichEmbed()
        .setTitle(`${bot.user.username}'s Host Status`, `${bot.user.displayAvatarURL}`)
        .addField("I'm not hosted 24/7","🔴")
        .setFooter("Tripix Studios © 2019-2020", `${bot.user.displayAvatarURL}`)
        .setColor(red_light)
        .setTimestamp()
        message.react("✅")
        message.react("🔴");
        m.edit(hsEmbed)
    })
  }
}