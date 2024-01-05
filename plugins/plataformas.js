let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*🥳 PLATAFORMAS GENERADAS 🥳*\n\n*Estas son las siguiente plataformas generadas de hoy 👇🏼*\n\n*Disney Plus 💙*\n\n*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^plataformas$/i
export default handler
