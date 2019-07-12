const { RichEmbed } = require("discord.js")
const { red_light } = require("../../colours.json");

module.exports = {
    config: {
        name: "rolesplitter",
        description: "",
        usage: "!rolesplitter",
        category: "miscellaneous",
        accessableby: "Members",
        aliases: ["rs"]
    },
    run: async (bot, message, args) => {
    let rsEmbed = new RichEmbed()
        .setColor(red_light)
        .setTitle("Role Splitter")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL)
        .addField("To split a role is easy", "Just change the role color to `#2f3136` and adding any name for the role you want.\n  This will only work on desktop and also dark theme but the finished product looks amazing!")
        .setFooter(`Tripix Studios 2019-2020`, bot.user.displayAvatarURL);

    message.channel.send(rsEmbed);
    }
}