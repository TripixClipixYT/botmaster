const { RichEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");
const { prefix } = require("../../botconfig.json")
 
module.exports = {
    config: {
        name: "avatar",
        category: "beta commands",
        usage: `${prefix}avatar`,
        description: "",
        accessableby: "Members",
        status: "Testing",
        aliases: ["av"]
    },
    run: async (bot, message, args) => {
        let aEmbed = new RichEmbed()
        .setTitle(`${message.author.username}'s Avatar`, `${message.author.displayAvatarURL}`)
        .setImage(`${message.author.displayAvatarURL}`)
        .setFooter("Tripix Studios © 2019-2020", `${bot.user.displayAvatarURL}`)
        .setColor(red_light)
        .setTimestamp();
        message.channel.send(aEmbed)
    }
}
