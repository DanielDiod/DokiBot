let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*Bueno yo Daniel creador de MonkiBot*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^nuevo|comandos|comandosnuevos$/i
export default handler
