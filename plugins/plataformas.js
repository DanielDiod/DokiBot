let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*🥳 PLATAFORMAS GENERADAS 🥳*\n\n*Estas son las siguiente plataformas generadas de hoy 👇🏼*\n\n*Disney Plus 💙*\n\n*💌biancaterata@gmail.com\n🔑Pinklipstick12\n\n💌arribasaa@gmail.com\n🔑Tidechair1924'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^plataformas$/i
export default handler
