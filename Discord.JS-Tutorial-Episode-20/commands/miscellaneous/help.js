const { RichEmbed } = require("discord.js")
const { prefix } = require("../../botconfig.json");
const { cyan } = require("../../colours.json");

module.exports = {
    config: {
        name: "help",
        aliases: ["h", "halp", "commands", "cmd"],
        usage: "!usage",
        category: "miscellaneous",
        description: "Pulls out the help menu",
        accessableby: "Members"
    },
    run: async (bot, message, args) => {
    let arr = [];
    let types = ["Moderation", "Miscellaneous","Images", "Beta Commands"];
    let embed = new RichEmbed()

    if (!args[0]) {
        for(let i = 0; i < types.length; i++) {
            arr.push(bot.commands.filter(c => c.config.category == types[i].toLowerCase()).map(c => `\`${c.config.name}\``).join(" "));
            try {
                embed.addField(types[i], arr[i]);
            } catch (e) {
                embed.addBlankField();
            }
        }
        embed.setColor(cyan)
        .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setTimestamp()
        .setAuthor(`${bot.user.username}`, `${bot.user.displayAvatarURL}`)
        .setDescription(`These are the avaliable commands for the Tripix Studios Bot!\nThe bot prefix is: **${prefix}**`)
        .setFooter("Tripix Studios © 2019-2020", bot.user.displayAvatarURL)

        message.channel.send(embed)
    } else {
        let command = bot.commands.get(args[0].toLowerCase()) ?  bot.commands.get(args[0].toLowerCase()).config : bot.commands.get(bot.aliases.get(args[0].toLowerCase())).config;
            
        embed.setColor(cyan)
        .setAuthor(`${message.guild.me.displayName} Help`, message.guild.iconURL)
        .setThumbnail(bot.user.displayAvatarURL)
        .setDescription(`The bot prefix is: ${prefix}\n\n**Command:** ${command.name}\n**Description:** ${command.description || "No Description"}\n**Usage:** ${command.usage || "No Usage"}\n**Accessable by:** ${command.accessableby || "Members"}\n**Status:** ${command.status}\n**Website Status:** ${command.websitestatus}\n**Aliases:** ${command.aliases ? command.aliases.join(", ") : "None"}`)
        message.channel.send(embed);
        }
        
    }
}