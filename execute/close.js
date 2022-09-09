const discord = require("discord.js")
const db = require("quick.db")

module.exports = async (user, channel) => {
  
  let userdata = db.get(`ticket_${user.id}`)
  
  let channeldata = db.get(`ticket_${channel.id}`)
  
  let embed = new discord.MessageEmbed()
  .setTitle("Ticket Cerrado <a:_:1016358279938588672>")
  .setColor("RANDOM")
  .setDescription("Su boleto ha sido cerrado ┊ \ Responder ahora creará un nuevo ticket.<a:_:1013316019936296980> \n\nNo dude en ponerse en contacto con nosotros de nuevo si necesita cualquier tipo de ayuda.Gracias por utilizar nuestro servicio ModMail.")
  .setTimestamp();

  if (userdata !== null) {
    user.send(embed).catch(() => {})
    db.delete(`ticket_${user.id}`)
  }
  
  if (channeldata !== null) {
    
    channel.send("Este canal de entradas ha sido cerrado.\nEl canal se eliminará en 10 segundos.")
    db.delete(`ticket_${channel.id}`)
    
    setTimeout(() => {
    channel.delete()
    }, 10000)
    
  }
  
}