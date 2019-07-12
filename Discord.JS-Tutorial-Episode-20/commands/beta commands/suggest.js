const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
//!suggestion
let sugges = args.slice(0).join(" ");
if(!sugges) return message.reply("No Text found.");
let sugembed = new Discord.RichEmbed()
.setAuthor(message.author.tag)
.setColor("#f46242")
.addField("Suggestion", sugges)
message.channel.send(sugembed).then(msg => {
   msg.react("✅")
    msg.react("✖")
})

}

module.exports = {
    config: {
  name: "suggestion",
  category: "beta commands",
  status: "Testing"
},
}