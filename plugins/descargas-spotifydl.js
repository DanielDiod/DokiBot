import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Formato incorrecto*\n\nEjemplo:\n${usedPrefix + command} https://open.spotify.com/track/5QO79kh1waicV47BqGRL3g`
try {
let resDL = await fetch(`https://vihangayt.me/download/spotify?url=${encodeURIComponent(text)}`)
let jsonDL = await resDL.json()
if (!jsonDL.status)  throw `No se pudo encontrar la canción:/`
let songInfo = `❒═════❬ *SPOTIFY* ❭═════╾❒
├‣ *Nombre*: ${jsonDL.data.song}
├‣ *Artista*: ${jsonDL.data.artist.join(', ')}
├‣ *Álbum*: ${jsonDL.data.album_name}
├‣ *Fecha de lanzamiento*: ${jsonDL.data.release_date}
├‣ *Link*: ${text}
❒═════════════════╾❒`
conn.sendMessage(m.chat, { image: { url: jsonDL.data.cover_url }, caption: songInfo }, { quoted: m })
let audioDL = await fetch(jsonDL.data.url)
let buffer = await audioDL.buffer()
fs.writeFileSync('./tmp/song.mp3', buffer)
conn.sendMessage(m.chat, { audio: fs.readFileSync('./tmp/song.mp3'), fileName: `${jsonDL.data.song}.mp3`, mimetype: 'audio/mp4' }, { quoted: m })
} catch (error) {
}}
handler.command = /^(spotifydl)$/i
export default handler
