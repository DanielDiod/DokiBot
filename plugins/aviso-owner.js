let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*AVISO: Yo "Daniel", he tomado la decisión de retirarme de todo lo relacionado con el bot o temas similares,por el motivó de algunos problema familiares y que por ahora no me encuentro apto para seguir continuando esto quiere decir*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^nuevo|comandos|comandosnuevos$/i
export default handler
