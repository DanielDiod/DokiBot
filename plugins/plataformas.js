let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*PLATAFORMAS GENERADAS ✅*\n\n*Estas son las siguiente plataformas generadas de hoy 👇🏼*\n\n*CANVA PRO 🖥️*\n\n💌https://www.canva.com/brand/join?token=DGDare_uZD1QkiKpg6qzRw&referrer=team-invite\n\n*AMAZON MUSIC 3 MESES 🎧*\n\nRecomiendo usar vpn con direccion Brasil 🇧🇷\n\n💌https://a.co/afTOnM8\n\n*BY MONKIBOT 🐒*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^plataformas$/i
export default handler
