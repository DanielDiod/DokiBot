let handler = async (m, { conn }) => {
  if (!(m.chat in global.db.data.chats)) return m.reply('*Este chat no está registrado en la base de datos!*', m, fake,)
  let chat = global.db.data.chats[m.chat]
  if (!chat.isBanned) return m.reply('*Este chat no está baneado!!*', m, fake,)
  chat.isBanned = false
  m.reply(`*BOT ONLINE 🚀*`, m, fake,)
}
handler.command = /^unbanchat$/i
handler.botAdmin = true
handler.admin = false

export default handler
