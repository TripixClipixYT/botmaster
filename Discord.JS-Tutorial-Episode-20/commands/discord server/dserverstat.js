const { RichEmbed } = require("discord.js")
const { status } = require("../../botconfig.json")
    
    module.exports = { 
        config: {
            name: "dserverstat",
            description: "",
            usage: "!dserverstat",
            category: "discord server",
            accessableby: "Members",
            aliases: ["dstat","statd"]
        },
        run: async (bot, message, args) => {
            let dsEmbed = new RichEmbed()
            .setAuthor(`${bot.user.username} Discord Server Status`, message.guild.iconURL)
            .setTimestamp()
            .setFooter(`Server Status`)
            .setURL("https://tripix.statuskit.com/")
            .addField("View the Discord Server Status", status);
                message.channel.send(dsEmbed)
            }
        }