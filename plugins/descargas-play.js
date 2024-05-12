import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `error intenta de nuevo`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `🚩 *Lo que buscas no se encontró*`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
  let text = `> ${wm}
┌──────────────
💚 *Nombre:* 
- ${vid.title}
⏳️ *Tiempo:* 
- ${vid.timestamp}
👀 *Vistas:* 
- ${vid.views.toLocaleString()}
└──────────────`
 await conn.sendButton(m.chat, wm, text, res.videos[0].thumbnail, [
    ['💎 𝗠𝗣3', `${usedPrefix}fgmp3 ${url}`],
    ['📎 𝗠𝗣4', `${usedPrefix}fgmp4 ${url}`]
  ],
}
handler.help = ['botones']
handler.tags = ['dl']
handler.command = ['botones', 'playvid']
handler.disabled = false

export default handler
