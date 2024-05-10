
import yts from 'yt-search'
let handler = async (m, { conn, command, text, usedPrefix }) => {
	
  if (!text) throw `Ingrese el titulo de la musica de youtube`
	let res = await yts(text)
	let vid = res.videos[0]
	if (!vid) throw `✳️ Vídeo/Audio no encontrado`
	let { title, description, thumbnail, videoId, timestamp, views, ago, url } = vid
	//const url = 'https://www.youtube.com/watch?v=' + videoId
	m.react('🎧') 
  let play = `
┌──────────────
▢ 📌 *Titulo* ${vid.title}
▢ 📆 *Publicado* ${vid.ago}
▢ ⌚ *Duracion* ${vid.timestamp}
▢ 👀 *Autor* ${vid.author.name}}
└──────────────`
 await conn.sendButton(m.chat, play, res.videos[0].thumbnail, [
    ['Audio mp3', `${usedPrefix}ytmp3 ${url}`],
    ['video mp4', `${usedPrefix}ytmp4 ${url}`]
 ], null, [['Canal', `${md}`]], m)
}
handler.help = ['play']
handler.tags = ['dl']
handler.command = ['play', 'playvid']
handler.disabled = false

export default handler
