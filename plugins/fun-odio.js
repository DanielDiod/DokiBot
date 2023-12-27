let handler = async (m, { conn, command, text }) => {
let love = `══════ •⊰✧⊱• ══════ \n𝐂𝐀𝐋𝐂𝐎𝐋𝐀𝐓𝐎𝐑𝐄 𝐃𝐈 𝐎𝐃𝐈𝐎 😡
el odio entre ${text} y tu es de: ${Math.floor(Math.random() * 100)}%\n══════ •⊰✧⊱• ══════ `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.command = /^(odio)$/i
export default handler
