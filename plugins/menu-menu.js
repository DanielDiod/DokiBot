import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, command }) => {
try {	
let vn = './media/menu.mp3'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let { money, joincount } = global.db.data.users[m.sender]
let user = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
//let user = global.db.data.users[m.sender]
//user.registered = false
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
//let enlace = { contextInfo: { externalAdReply: {title: wm, body: 'support group' , sourceUrl: nna, thumbnail: await(await fetch(img)).buffer() }}}
  let pp = './Menu2.jpg'
//let pp = gataVidMenu.getRandom()
await conn.reply(m.chat, `*Hey estamos enviando el menu*
𝘁𝗲𝗻 𝗽𝗮𝗰𝗶𝗲𝗻𝗰𝗶𝗮 𝘆 𝗲𝘃𝗶𝘁𝗮 𝗲𝗹 𝘀𝗽𝗮𝗺 👀

𝐒𝐇𝐀𝐍𝐀 𝐁𝐎𝐓`, m)
  
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

let menu = `⌜ *${wm}* ⌟  

*╭━〔  𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 ⛅  〕⬣
 👤 𝐂𝐫𝐞𝐚𝐝𝐨𝐫 : Daniel 
 👤 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 : Sopixx
 🧿 𝐂𝐚𝐧𝐚𝐥 : https://whatsapp.com/channel/0029VaBpO8M3rZZdwkGFIP33
*╰━━━━━━━━━━━━⬣*

*╭━〔 🎮 𝐉𝐔𝐄𝐆𝐎𝐒 🎮 〕*
*┃➤ 🕹️ ${usedPrefix}mates*
*┃➤ 🕹️ ${usedPrefix}ppt*
*┃➤ 🕹️${usedPrefix}prostituto <@tag>*
*┃➤ 🕹️ ${usedPrefix}prostituta <@tag>*
*┃➤ 🕹️ ${usedPrefix}gay2 <@tag>*
*┃➤ 🕹️ ${usedPrefix}lesbiana <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajero <@tag>*
*┃➤ 🕹️ ${usedPrefix}pajera <@tag>*
*┃➤ 🕹️ ${usedPrefix}puto <@tag>*
*┃➤ 🕹️ ${usedPrefix}puta <@tag>*
*┃➤ 🕹️ ${usedPrefix}manco <@tag>*
*┃➤ 🕹️ ${usedPrefix}manca <@tag>*
*┃➤ 🕹️ ${usedPrefix}rata <@tag>*
*┃➤ 🕹️ ${usedPrefix}negro <@tag>*
*┃➤ 🕹️ ${usedPrefix}negra <@tag>*
*┃➤ 🕹️ ${usedPrefix}fea <@tag>*
*┃➤ 🕹️ ${usedPrefix}feo <@tag>*
*┃➤ 🕹️ ${usedPrefix}sinpoto <@tag>*
*┃➤ 🕹️ ${usedPrefix}sintetas <@tag>*
*┃➤ 🕹️ ${usedPrefix}sinpito <@tag>*
*┃➤ 🕹️ ${usedPrefix}adoptada <@tag>*
*┃➤ 🕹️ ${usedPrefix}adoptado <@tag>*
*┃➤ 🕹️ ${usedPrefix}love*
*┃➤ 🕹️ ${usedPrefix}los10*
*┃➤ 🕹️ ${usedPrefix}suitpvp*
*┃➤ 🕹️ ${usedPrefix}slot*
*┃➤ 🕹️ ${usedPrefix}simisimi*
*┃➤ 🕹️ ${usedPrefix}pregunta*
*┃➤ 🕹️ ${usedPrefix}cuando*
*┃➤ 🕹️ ${usedPrefix}ship5*
*┃➤ 🕹️ ${usedPrefix}abrazo*
*┃➤ 🕹️ ${usedPrefix}ship2*
*┃➤ 🕹️ ${usedPrefix}formarpareja*
*┃➤ 🕹️ ${usedPrefix}verdad*
*┃➤ 🕹️ ${usedPrefix}reto*
*┃➤ 🕹️ ${usedPrefix}cancion*
*┃➤ 🕹️ ${usedPrefix}pista*
*┃➤ 🕹️ ${usedPrefix}ruleta*
*┃➤ 🕹️ ${usedPrefix}zodiac*
*┃➤ 🕹️ ${usedPrefix}odio*
*┃➤ 🕹️ ${usedPrefix}ship*
*┃➤ 🕹️ ${usedPrefix}sorteo*
*┃➤ 🕹️ ${usedPrefix}minovia*
*┃➤ 🕹️ ${usedPrefix}minovio*
*┃➤ 🕹️ ${usedPrefix}kchero*
*┃➤ 🕹️ ${usedPrefix}kchero*
 ╰━━━━━━━━━━━━

 ╭━〔 🪙 𝐀𝐃𝐐𝐔𝐈𝐄𝐑𝐄 𝐌𝐎𝐍𝐊𝐈𝐁𝐎𝐓 🪙 〕
*┃➤ 💰 ${usedPrefix}precios*
 ╰━━━━━━━━━━━━


 ╭━〔 🧿 𝐆𝐄𝐍𝐄𝐑𝐀 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀𝐒 🧿 〕
*┃➤ 🌐 ${usedPrefix}cuentas*
 ╰━━━━━━━━━━━━

 ╭━〔 👾 𝐆𝐑𝐔𝐏𝐎 𝐃𝐄 𝐒𝐎𝐑𝐓𝐄𝐎𝐒 👾 〕
*┃➤ ⭐ ${usedPrefix}sorteo*
*┃➤ ⭐ ${usedPrefix}ruleta*
*┃➤ ⭐ ${usedPrefix}deathnote*
 ╰━━━━━━━━━━━━

 ╭━〔 ⚙️ 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ⚙️ 〕
*┃➤ 🟢 ${usedPrefix}enable*
*┃➤ 🔴 ${usedPrefix}disable*
 ╰━━━━━━━━━━━━

 ╭━〔 🈴 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 🈴 〕
*┃➤ 📥 ${usedPrefix}play*
*┃➤ 📥 ${usedPrefix}play.1*
*┃➤ 📥 ${usedPrefix}play.2*
*┃➤ 📥 ${usedPrefix}playlist*
*┃➤ 📥 ${usedPrefix}spotify*
*┃➤ 📥 ${usedPrefix}spotifydl*
*┃➤ 📥 ${usedPrefix}spotifysearch*
*┃➤ 📥 ${usedPrefix}tiktok*
*┃➤ 📥 ${usedPrefix}instagram*
*┃➤ 📥 ${usedPrefix}mediafire*
*┃➤ 📥 ${usedPrefix}gdrive*
*┃➤ 📥 ${usedPrefix}twitter*
*┃➤ 📥 ${usedPrefix}ytmp3*
*┃➤ 📥 ${usedPrefix}ytmp4*
*┃➤ 📥 ${usedPrefix}imagen*
*┃➤ 📥 ${usedPrefix}iaimagen*
*┃➤ 📥 ${usedPrefix}pinteres*
*┃➤ 📥 ${usedPrefix}igstory*
*┃➤ 📥 ${usedPrefix}pornhubsearch*
*┃➤ 📥 ${usedPrefix}mercadolibre*
 ╰━━━━━━━━━━━━

 ╭━〔 ❄️ 𝐆𝐑𝐔𝐏𝐎𝐒 ❄️〕
*┃➤ 👥 ${usedPrefix}kick*
*┃➤ 👥 ${usedPrefix}grupo*
*┃➤ 👥 ${usedPrefix}promote*
*┃➤ 👥 ${usedPrefix}demote*
*┃➤ 👥 ${usedPrefix}demote*
*┃➤ 👥 ${usedPrefix}link*
*┃➤ 👥 ${usedPrefix}invocar*
*┃➤ 👥 ${usedPrefix}setwelcome*
*┃➤ 👥 ${usedPrefix}setbye*
*┃➤ 👥 ${usedPrefix}hidetag*
*┃➤ 👥 ${usedPrefix}fantasmas*
*┃➤ 👥 ${usedPrefix}kickfantasmas*
 ╰━━━━━━━━━━━━

*╭━〔 👀 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 👀 〕*
*┃➤ 📍 ${usedPrefix}toimg*
*┃➤ 📍 ${usedPrefix}tomp3*
*┃➤ 📍 ${usedPrefix}toptt*
*┃➤ 📍 ${usedPrefix}tovideo*
*┃➤ 📍 ${usedPrefix}tts*
 ╰━━━━━━━━━━━━

*╭━〔 ♓ 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ♓ 〕*
*┃➤ ❄️ ${usedPrefix}mensajefalso*
*┃➤ ❄️ ${usedPrefix}logos*
*┃➤ ❄️ ${usedPrefix}logocorazon*
*┃➤ ❄️ ${usedPrefix}ytcomment*
*┃➤ ❄️ ${usedPrefix}hornycard*
*┃➤ ❄️ ${usedPrefix}itssostupid*
*┃➤ ❄️ ${usedPrefix}pixelar*
 ╰━━━━━━━━━━━━

*╭━〔  𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 〕*
*┊꒱ 🥀 ${usedPrefix}piropo*
*┊꒱ 🥀 ${usedPrefix}consejo*
*┊꒱ 🥀 ${usedPrefix}fraseromantica*
 ╰━━━━━━━━━━━━

 ╭━〔   𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ⛅  〕*
*┊꒱ 🔍 ${usedPrefix}xnxxsearch <texto>*
*┊꒱ 🔍 ${usedPrefix}google <texto>*
*┊꒱ 🔍 ${usedPrefix}letra <texto>*
*┊꒱ 🔍 ${usedPrefix}wikipedia <texto>*
*┊꒱ 🔍 ${usedPrefix}ytsearch <texto>*
*┊꒱ 🔍 ${usedPrefix}playstore <texto>*
 ╰━━━━━━━━━━━━

 ╭━〔  𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 ⛅  〕
*┊꒱ 🍃 ${usedPrefix}clima <país> <ciudad>*
*┊꒱ 🍃 ${usedPrefix}afk <motivo>*
*┊꒱ 🍃 ${usedPrefix}ocr <responde a imagen>*
*┊꒱ 🍃 ${usedPrefix}calc <operacion math>*
*┊꒱ 🍃 ${usedPrefix}del <mensaje>*
*┊꒱ 🍃 ${usedPrefix}whatmusic <audio>*
*┊꒱ 🍃 ${usedPrefix}qrcode <texto>*
*┊꒱ 🍃 ${usedPrefix}traducir <texto>*
 ╰━━━━━━━━━━━━

*╭━〔  𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 ⛅  〕*
*┊꒱ 🍁 ${usedPrefix}verificar*
*┊꒱ 🍁 ${usedPrefix}unreg* *<numero de serie>*
*┊꒱ 🍁 ${usedPrefix}minar*
*┊꒱ 🍁 ${usedPrefix}buy*
*┊꒱ 🍁 ${usedPrefix}work*
*┊꒱ 🍁 ${usedPrefix}transfer* *<tipo> <cantidad> <@tag>*
 ╰━━━━━━━━━━━━

 ╭━〔  𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ⛅  〕
*┊꒱ ☁️ ${usedPrefix}s <responder a imagen o video>*
*┊꒱ ☁️ ${usedPrefix}emojimix <emoji 1>&<emoji 2>*
*┊꒱ ☁️ ${usedPrefix}attp <texto>*
*┊꒱ ☁️ ${usedPrefix}qc <texto>*
 ╰━━━━━━━━━━━━

SHANA BOT || DANIEL X SOPIIX`.trim()
//conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
let img = await (await fetch(`https://telegra.ph/file/b9768737c2e193587ad45.jpg`)).buffer()  
await conn.sendMessage(m.chat, {
text: menu,
contextInfo: { 
mentionedJid: [m.sender],
forwardingScore: 9, 
externalAdReply: {
title: '❑— 𝐒𝐇𝐀𝐍𝐀-𝐁𝐎𝐓 —❑\nWʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
//body: 'Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ',
thumbnail: img,
sourceUrl: 'https://chat.whatsapp.com/GbrlQFMXcMb39vOpNaNsZ2',
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m})
await m.react('✅')	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(herramientas|herramientas|herramientas|herramientas|allm\?)$/i
//handler.register = true
handler.exp = 50
handler.fail = null
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
