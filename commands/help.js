const discord = require("discord.js")
const config = require("../config.json")

module.exports = {
  name: "help",
  aliases: ["h", "commands", "cmd"],
  run: async (message, args, client) => {
    
    message.channel.send("Loading...").then(m => m.edit(`Successfully`))

    let embed = new discord.MessageEmbed()
    .setAuthor("Helpfull", message.author.displayAvatarURL({ format: "png", size: 2048, dynamic: true }))
    .setDescription(`**Commands**: \n\`${config.prefix}help\` , \`${config.prefix}close\` , \`${config.prefix}reply\` , \`${config.prefix}anonymous\` , \`${config.prefix}setblacklist\` , \`${config.prefix}ping\``)
    .setColor("#5865F2")
    
    if (message.attachments.array().length > 0) {
      
       embed.setImage(message.attachments.array()[0].url)
      }
    
      message.channel.send(embed)
    
  }
}