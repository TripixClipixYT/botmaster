const { RichEmbed } = require("discord.js")
const { status, ownerid } = require("../../botconfig.json")
    
    module.exports = { 
        config: {
            name: "news",
            description: "",
            usage: "!news",
            category: "youtube",
            accessableby: "Owner",
            aliases: []
        },
        run: async (bot, message, args) => {
            let ynEmbed = new RichEmbed()
            .setAuthor(`${bot.user.username} Discord Server Status`, message.guild.iconURL)
            .setTimestamp()
            .setFooter(`Youtube News ${bot.user.iconURL}`)
            .setURL("https://tripix.statuskit.com/")
                message.channel.send(ynEmbed)
            }
            
        }    
    