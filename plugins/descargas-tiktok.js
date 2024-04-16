import fg from 'api-dylux'
import { tiktokdl } from '@bochilteam/scraper'

var handler = async (m, { conn, text, args, usedPrefix, command}) => {

if (!args[0]) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫іᥒgrᥱsᥱ ᥙᥒ ᥱᥒᥣᥲᥴᥱ ძᥱ 𝗍іk𝗍᥆k*\n\n [ 💡 ] ᥱȷᥱm⍴ᥣ᥆, !${command} https://vm.tiktok.com/ZMYG92bUh/`, m)
if (!args[0].match(/tiktok/gi)) return conn.reply(m.chat, `🚩 *🚫 𝐄𝐑𝐑𝐎𝐑 🚫 ᥱᥒᥣᥲᥴᥱ іᥒᥴ᥆rrᥱᥴ𝗍᥆*`, m)

await m.react('⌛')

const { key } = await conn.sendMessage(m.chat, {text: `${wait}`}, {quoted: m})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waittt}`, edit: key})
await delay(1000 * 1)
await conn.sendMessage(m.chat, {text: `${waitttt}`, edit: key})

try {
let p = await fg.tiktok(args[0])
let te = `*Nombre:* ${p.nickname}
*Usuario:* ${p.unique_id}
*Duración:* ${p.duration}
*Descripción:* ${p.description}`
conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
m.react(done)
} catch {

try {
await m.react('✅')

const { author: { nickname }, video, description } = await tiktokdl(args[0])
const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd

m.react(error)
if (!url) return conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *᥆ᥴᥙrrі᥆ ᥙᥒ 𝖿ᥲᥣᥣ᥆*`, m)
conn.sendFile(m.chat, url, 'fb.mp4', `*Nombre:* ${nickname}\n*Descripción:* ${description}`, m)
m.react(done)
} catch {
m.react(error)
conn.reply(m.chat, `🚫 𝐄𝐑𝐑𝐎𝐑 🚫 *᥆ᥴᥙrrі᥆ ᥙᥒ 𝖿ᥲᥣᥣ᥆*`, m)
}}

}
handler.help = ['tiktok']
handler.tags = ['descargas']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm)$/i

handler.limit = true
handler.register = true

export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
