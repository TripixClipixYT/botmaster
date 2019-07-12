const { RichEmbed } = require("discord.js");
const { red_light } = require("../../colours.json");
const { version, prefix, ownerid, website } = require("../../botconfig.json")
 
module.exports = {
    config: {
        name: "botinfo",
        category: "miscellaneous",
        usage: "!botinfo",
        description: "",
        accessableby: "Members",
        status: "Working",
        websitestatus: "Under Construction",
        aliases: ["binfo", "infob", "bi", "ib"]
    },
    run: async (bot, message, args) => {
        let bi2Embed = new RichEmbed()
        .setAuthor(bot.user.username,`${bot.user.displayAvatarURL}`)
        .setColor(red_light)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTitle("**Bot Info**")
        .addField("Version:", version)
        .addField("Prefix", prefix)
        .addField("Owner ID:", ownerid)
        .addField("Website:", website)
        .setFooter("Tripix Studios © 2019-2020", `${bot.user.displayAvatarURL}`)
        .setTimestamp();
        message.channel.send(bi2Embed)
    }
}
