import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) return conn.reply(m.chat, `*🚩 Ingresa que imagen deseas buscar en Google.*`, m)
await m.react('🕓')
let res = await googleImage(text)
await conn.sendButton(m.chat, "*I M A G E N*", wm, [["⚽ SIGUIENTE ⚽", `${usedPrefix + command}`]], m);
await m.react('✅')
}
handler.help = ['imagen <texto>']
handler.tags = ['search', 'img']
handler.command = ['img', 'image', 'imagen'] 
handler.star = 1
handler.register = true 

export default handler
