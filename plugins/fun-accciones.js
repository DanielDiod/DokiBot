let handler = async (m, { conn, groupMetadata, text, command}) => {
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
if (!m.mentionedJid[0]) conn.reply(m.chat, `Le acabas de ${command} ${text} a *@${user.split('@')[0]}*  😳`, null, { mentions: [user] })
let participants = groupMetadata.participants
  conn.reply(m.chat, `Le acabas de ${command} ${text} 😳`, null, { mentions: [user] })

}
handler.help = ['acciones']
handler.tags = ['acciones']
handler.command = /^(regalar|dar|enviar|meter|chupar|metersela|calcular|retar)$/

handler.group = true

export default handler
