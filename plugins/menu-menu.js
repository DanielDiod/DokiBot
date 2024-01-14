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
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let fsizedoc = '1'.repeat(10)
let adReply = { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { forwardingScore: fsizedoc, externalAdReply: { showAdAttribution: true, title: wm, body: '👋 ' + username, mediaUrl: ig, description: 'Hola', previewType: 'PHOTO', thumbnail: await(await fetch(global.img)).buffer(), sourceUrl: redesMenu.getRandom() }}}


let menu = `⌜ *${wm}* ⌟  

*╭━〔  𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 ⛅  〕⬣*
👤 𝐎𝐰𝐧𝐞𝐫 𝟏: wa.me/51907913096
👤 𝐎𝐰𝐧𝐞𝐫 𝟐: wa.me/51977835959
🫂 𝐂𝐫𝐞𝐚𝐝𝐨𝐫: *Daniel 🇦🇱*
✍🏻 𝐄𝐝𝐢𝐭𝐨𝐫: *Sopiix*
⏱ 𝐔𝐩𝐭𝐢𝐦𝐞: ${uptime}
🛎 𝐈𝐠: Instagram.com/monki_bot
*╰━━━━━━━━━━━━⬣*

*╭━〔  𝐉𝐔𝐄𝐆𝐎𝐒 ⛅  〕⬣*
💨 ${usedPrefix}mates
💨 ${usedPrefix}ppt <papel / tijera /piedra>
💨 ${usedPrefix}prostituto <nombre / @tag>
💨 ${usedPrefix}prostituta <nombre / @tag>
💨 ${usedPrefix}gay2 <nombre / @tag>
💨 ${usedPrefix}lesbiana <nombre / @tag>
💨 ${usedPrefix}pajero <nombre / @tag>
💨 ${usedPrefix}pajera <nombre / @tag>
💨 ${usedPrefix}puto <nombre / @tag>
💨 ${usedPrefix}puta <nombre / @tag>
💨 ${usedPrefix}manco <nombre / @tag>
💨 ${usedPrefix}manca <nombre / @tag>
💨 ${usedPrefix}rata <nombre / @tag>
💨 ${usedPrefix}negro <nombre / @tag>
💨 ${usedPrefix}negra <nombre / @tag>
💨 ${usedPrefix}fea <nombre / @tag>
💨 ${usedPrefix}feo <nombre / tag>
💨 ${usedPrefix}sinpoto <nombre / tag>
💨 ${usedPrefix}sintetas <nombre / tag>
💨 ${usedPrefix}sinpito <nombre / tag>
💨 ${usedPrefix}adoptada <nombre / tag>
💨 ${usedPrefix}adoptado <nombre / tag>
💨 ${usedPrefix}love
💨 ${usedPrefix}los10
💨 ${usedPrefix}suitpvp
💨 ${usedPrefix}slot
💨 ${usedPrefix}doxear
💨 ${usedPrefix}simisimi
💨 ${usedPrefix}pregunta
💨 ${usedPrefix}cuando
💨 ${usedPrefix}ship5
💨 ${usedPrefix}abrazo
💨 ${usedPrefix}ship2
💨 ${usedPrefix}formarpareja
💨 ${usedPrefix}verdad
💨 ${usedPrefix}reto
💨 ${usedPrefix}cancion
💨 ${usedPrefix}pista
💨 ${usedPrefix}ruleta
💨 ${usedPrefix}zodiac
💨 ${usedPrefix}odio
💨 ${usedPrefix}ship
💨 ${usedPrefix}sorteo
💨 ${usedPrefix}minovi@
*╰━━━━━━━━━━━━⬣*

*╭━〔  𝐀𝐃𝐐𝐔𝐈𝐄𝐑𝐄 𝐌𝐎𝐍𝐊𝐈𝐁𝐎𝐓 ⛅  〕⬣*
 💵${usedPrefix}precios
*╰━━━━━━━━━━━━⬣*

*╭━〔   𝐆𝐄𝐍𝐄𝐑𝐀 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀𝐒 ⛅  〕⬣*
 👾${usedPrefix}cuentas
 *╰━━━━━━━━━━━━⬣*

*╭━〔   𝐆𝐑𝐔𝐏𝐎 𝐃𝐄 𝐒𝐎𝐑𝐓𝐄𝐎𝐒 ⛅  〕⬣*
 💦${usedPrefix}sorteo
 💦${usedPrefix}ruleta
 💦${usedPrefix}deathnote
 *╰━━━━━━━━━━━━⬣*

*╭━〔   𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑 ⛅  〕⬣*
🟢 ${usedPrefix}enable
🔴 ${usedPrefix}disable
*╰━━━━━━━━━━━━⬣*

*╭━〔  𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒 ⛅  〕⬣*
📥 ${usedPrefix}play <texto>
📥 ${usedPrefix}play.1 <texto>
📥 ${usedPrefix}play.2 <texto>
📥 ${usedPrefix}playlist <texto>
📥 ${usedPrefix}spotify <texto>
📥 ${usedPrefix}tiktok <enlace / link / url>
📥 ${usedPrefix}instagram <enlace / link / url>
📥 ${usedPrefix}mediafire <enlace / link / url>
📥 ${usedPrefix}gdrive <enlace / link / url>
📥 ${usedPrefix}xnxxdl <enlace / link / url>
📥 ${usedPrefix}xvideosdl <enlace / link / url>
📥 ${usedPrefix}twitter <enlace / link / url>
📥 ${usedPrefix}fb <enlace / link / url>
📥 ${usedPrefix}ytmp3 <enlace / link / url>
📥 ${usedPrefix}ytmp4 <enlace / link / url>
📥 ${usedPrefix}imagen <texto>
📥 ${usedPrefix}pinteret <texto>
📥 ${usedPrefix}igstory <nombre de usuario>
*╰━━━━━━━━━━━━⬣*

*╭━〔  𝐆𝐑𝐔𝐏𝐎𝐒 ⛅  〕⬣*
💌 ${usedPrefix}add <numero>
💌 ${usedPrefix}kick <@tag>
💌 ${usedPrefix}grupo <abrir / cerrar>
💌 ${usedPrefix}promote <@tag>
💌 ${usedPrefix}demote <@tag>
💌 ${usedPrefix}demote <@tag>
💌 ${usedPrefix}link
💌 ${usedPrefix}invocar <texto>
💌 ${usedPrefix}setwelcome <texto>
💌 ${usedPrefix}setbye <texto>
💌 ${usedPrefix}hidetag <texto>
💌 ${usedPrefix}fantasmas
*╰━━━━━━━━━━━━⬣*

*╭━〔  𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒 ⛅  〕⬣*
🎭 ${usedPrefix}toimg <sticker>
🎭 ${usedPrefix}tomp3 <video>
🎭 ${usedPrefix}toptt <video / audio>
🎭 ${usedPrefix}tovideo <sticker>
🎭 ${usedPrefix}tts es <texto>
*╰━━━━━━━━━━━━⬣*

*╭━〔 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒 ⛅ 〕⬣*
🖋️ ${usedPrefix}mensajefalso <nombre|mensaje>
🖋️ ${usedPrefix}logos <efecto> <texto>
🖋️ ${usedPrefix}logocorazon <texto>
🖋️ ${usedPrefix}ytcomment <texto>
🖋️ ${usedPrefix}hornycard <@tag>
🖋️ ${usedPrefix}itssostupid
🖋️ ${usedPrefix}pixelar
*╰━━━━━━━━━━━━⬣*

*╭━〔  𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒 ⛅  〕⬣*
🥀 ${usedPrefix}piropo
🥀 ${usedPrefix}consejo
🥀 ${usedPrefix}fraseromantica
*╰━━━━━━━━━━━━⬣*

*╭━〔   𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒 ⛅  〕⬣*
🔍 ${usedPrefix}xnxxsearch <texto>
🔍 ${usedPrefix}google <texto>
🔍 ${usedPrefix}letra <texto>
🔍 ${usedPrefix}wikipedia <texto>
🔍 ${usedPrefix}ytsearch <texto>
🔍 ${usedPrefix}apkdone <texto>
🔍 ${usedPrefix}playstore <texto>
*╰━━━━━━━━━━━━⬣*

*╭━〔  𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 ⛅  〕⬣*
🛠️ ${usedPrefix}clima <país> <ciudad>
🛠️ ${usedPrefix}afk <motivo>
🛠️ ${usedPrefix}ocr <responde a imagen>
🛠️ ${usedPrefix}calc <operacion math>
🛠️ ${usedPrefix}del <mensaje>
🛠️ ${usedPrefix}whatmusic <audio>
🛠️ ${usedPrefix}qrcode <texto>
🛠️ ${usedPrefix}traducir <texto>
*╰━━━━━━━━━━━━⬣*

*╭━〔  𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 ⛅  〕⬣*
🧾 ${usedPrefix}verificar
🧾 ${usedPrefix}unreg *<numero de serie>*
🧾 ${usedPrefix}minar
🧾 ${usedPrefix}buy
🧾 ${usedPrefix}work
🧾 ${usedPrefix}transfer *<tipo> <cantidad> <@tag>
*╰━━━━━━━━━━━━⬣*

*╭━〔  𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒 ⛅  〕⬣*
🌟 ${usedPrefix}s <responder a imagen o video>
🌟 ${usedPrefix}emojimix <emoji 1>&<emoji 2>
🌟 ${usedPrefix}attp<texto>
🌟 ${usedPrefix}qc<texto>
*╰━━━━━━━━━━━━⬣*`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
	
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
