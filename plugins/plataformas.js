let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*PLATAFORMAS GENERADAS ✅*\n\n*Estas son las siguiente plataformas generadas de hoy 👇🏼*\n\n*CANVA PRO 🖥️*\n\n*BY MONKIBOT 🐒*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^plataformas$/i
export default handler
