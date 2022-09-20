const discord = require("discord.js")

module.exports = async (message, args, user, channel, anonymous, client) => {
  
  let embed = new discord.MessageEmbed()
  .setDescription(args.join(" "))
  .setColor("#96f7b0")
  .setFooter("El mal uso de este medio conllevará una sanción ┊ El staff nunca te preguntará por tu correo, contraseña, números telefónicos y/o tokens")
  
  if (message.attachments.array().length > 0) {
     embed.setImage(message.attachments.array()[0].url)
    }
    
    if (anonymous === true) {
      embed.setAuthor("Anonymous", "https://is.gd/tSxaUL")
    }
    
    else {
      embed.setAuthor(message.author.tag, message.author.displayAvatarURL({ format: "png", size: 2048, dynamic: true }))
    }
  
    channel.send(embed).catch(() => {
      message.channel.send(":x: I was unable to DM the User.")
    })
   
   message.channel.send(embed)
  
}
