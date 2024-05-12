import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `error intenta de nuevo`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧') 
  let play = `
	≡ ${packname}
┌──────────────
▢ 📌 *Titulo:* ${vid.title}
▢ ⌚ *duración:* ${vid.timestamp}
▢ 👀 *vistas:* ${vid.views.toLocaleString()}
└──────────────`
 await conn.sendButton(m.chat,wm, play, res.videos[0].thumbnail, [
    ['🍧 MP3', `${usedPrefix}fgmp3 ${url}`],
    ['🍿 MP4', `${usedPrefix}fgmp4 ${url}`]
  ],
}
handler.help = ['botones']
handler.tags = ['dl']
handler.command = ['botones', 'playvid']
//handler.disabled = false

export default handler
