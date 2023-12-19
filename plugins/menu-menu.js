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

𝙱𝚒𝚎𝚗𝚟𝚎𝚗𝚒𝚍𝚘 𝚊𝚕 𝚖𝚎𝚗𝚞 𝚍𝚎 𝙼𝚘𝚗𝚔𝚒 𝙱𝚘𝚝 🐵

┏━━━━━━━━━━━━━━━━┓ 

👤ㅤ» 𝐎𝐰𝐧𝐞𝐫 𝟏: wa.me/51906641131
👤ㅤ» 𝐎𝐰𝐧𝐞𝐫 𝟐: wa.me/51977835959
🫂ㅤ» 𝐂𝐫𝐞𝐚𝐝𝐨𝐫: 𝑫𝒂𝒏𝒊𝒆𝒍
✍🏻ㅤ» 𝐄𝐝𝐢𝐭𝐨𝐫: 𝑺𝒐𝒑𝒊𝒊𝒙
⏱ㅤ» 𝐔𝐩𝐭𝐢𝐦𝐞: *${uptime}*
🛎ㅤ» 𝐈𝐠: http://Instagram.com/monki_bot/
ㅤ
┗━━━━━━━━━━━━━━━━┛

┏━━━━━━━━━━━━━━━━┓ 
ㅤㅤㅤ𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐔𝐒𝐔𝐀𝐑𝐈𝐎
┃
┃ㅤ🎖 » 𝙽𝚒𝚟𝚎𝚕 : ${level}
┃ㅤ💎 » 𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜 : ${limit}
┃ㅤ🐒 » 𝙼𝚘𝚗𝚔𝚒𝙲𝚘𝚒𝚗𝚜 : ${money}
┃ㅤ🪙 » 𝚃𝚘𝚔𝚎𝚗𝚜 : ${joincount}
┃ㅤ🕹 » 𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚒𝚊 : ${exp}
┃ㅤ⚜ » 𝚁𝚊𝚗𝚐𝚘 : ${role}
┃ㅤ${readMore}
┗━━━━━━━━━━━━━━━━┛

┌─── 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓
┊□ _${usedPrefix}infobot_
┊□ _${usedPrefix}grupos_
┊□ _${usedPrefix}instalarbot_
┊□️ _${usedPrefix}menu2_
┊□ _${usedPrefix}estado_
┊□ _${usedPrefix}sc_
┊□ _${usedPrefix}ping_
┊□ _Bot_
┊□ _¿Qué es un Bot?_
┊□ _Términos y condiciones_
└─────────────

┌─── 𝐔𝐍𝐈𝐑 𝐔𝐍 𝐁𝐎𝐓 𝐀 𝐓𝐔 𝐆𝐑𝐔𝐏𝐎
┆ 🤖 _${usedPrefix}join *link del grupo*_ 
└─────────────

┌─── 𝐒𝐄𝐑𝐁𝐎𝐓 𝐘 𝐉𝐀𝐃𝐈𝐁𝐎𝐓
┆ 🤖 _${usedPrefix}serbot_
┆ 🤖 _${usedPrefix}stop_
┆ 🤖 _${usedPrefix}bots_
└─────────────

┌─── 𝐉𝐔𝐄𝐆𝐎𝐒
┆ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙿𝙰𝚁𝙰 𝙷𝙰𝙲𝙴𝚁 𝙼𝙰𝚂 𝙳𝙸𝚅𝙴𝚁𝚃𝙸𝙳𝙾 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 🎊
┆
┆🕹️ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
┆🕹️ _${usedPrefix}ppt *<papel / tijera /piedra>*_
┆🕹️ _${usedPrefix}prostituto *<nombre / @tag>*_
┆🕹️ _${usedPrefix}prostituta *<nombre / @tag>*_
┆🕹️ _${usedPrefix}gay2 *<nombre / @tag>*_
┆🕹️ _${usedPrefix}lesbiana *<nombre / @tag>*_
┆🕹️ _${usedPrefix}pajero *<nombre / @tag>*_
┆🕹️ _${usedPrefix}pajera *<nombre / @tag>*_
┆🕹️ _${usedPrefix}puto *<nombre / @tag>*_
┆🕹️ _${usedPrefix}puta *<nombre / @tag>*_
┆🕹️ _${usedPrefix}manco *<nombre / @tag>*_
┆🕹️ _${usedPrefix}manca *<nombre / @tag>*_
┆🕹️ _${usedPrefix}rata *<nombre / @tag>*_
┆🕹️ _${usedPrefix}love *<nombre / @tag>*_
┆🕹️ _${usedPrefix}doxear *<nombre / @tag>*_
┆🕹️ _${usedPrefix}pregunta *<texto>*_
┆🕹️ _${usedPrefix}suitpvp *<@tag>*_
┆🕹️ _${usedPrefix}slot *<apuesta>*_
┆🕹️ _${usedPrefix}ttt *<nombre sala>*_
┆🕹️ _${usedPrefix}delttt_
┆🕹️ _${usedPrefix}simi *<texto>*_
┆🕹️ _${usedPrefix}top *<texto>*_
┆🕹️ _${usedPrefix}topotakus_
┆🕹️️ _${usedPrefix}top10gays_
┆🕹️️ _${usedPrefix}toplind@s_
┆🕹️️ _${usedPrefix}topput@s_
┆🕹️️ _${usedPrefix}toppajer@s_
┆🕹️️ _${usedPrefix}topotakus_
┆🕹️️ _${usedPrefix}topintegrantes_
┆🕹️️ _${usedPrefix}toplagrasa_
┆🕹️️ _${usedPrefix}toppanafrescos_
┆🕹️ _${usedPrefix}topshiposters_
┆🕹️️ _${usedPrefix}toppajeros_
┆🕹️️ _${usedPrefix}toplind@s_
┆🕹️️ _${usedPrefix}topfamosos_
┆🕹️️ _${usedPrefix}topsoltero
┆🕹️️ _${usedPrefix}topparejas_
┆🕹️ _${usedPrefix}formarpareja_
┆🕹️ _${usedPrefix}verdad_
┆🕹️ _${usedPrefix}reto_
┆🕹️ _${usedPrefix}cancion_
┆🕹️ _${usedPrefix}pista_
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 👩🏼‍❤‍💋‍👨🏼 𝙿𝙰𝚁𝙴𝙹𝙰𝚂
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 𝚂𝚒 𝚌𝚘𝚒𝚗𝚌𝚒𝚍𝚎𝚗 𝚎𝚜 𝚎𝚕 𝚖𝚘𝚖𝚎𝚗𝚝𝚘 𝚍𝚎 𝚍𝚎𝚌𝚕𝚊𝚛𝚊𝚛𝚝𝚎 🧸
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆❤️➺ _${usedPrefix}listaparejas_
┆❤️➺ _${usedPrefix}mipareja_
┆❤️➺ _${usedPrefix}pareja *@tag*_
┆❤️➺ _${usedPrefix}aceptar *@tag*_
┆❤️➺ _${usedPrefix}rechazar *@tag*_
┆❤️➺ _${usedPrefix}terminar *@tag*_
└─────────────

┌─── 𝐍𝐔𝐌𝐄𝐑𝐎 𝐃𝐄𝐋 𝐂𝐑𝐄𝐀𝐃𝐎𝐑
┆🤖 _${usedPrefix}owner_
└─────────────

┌─── 𝐀𝐂𝐓𝐈𝐕𝐀𝐑 𝐎 𝐃𝐄𝐒𝐀𝐂𝐓𝐈𝐕𝐀𝐑
┆ *Configura si eres Propietario(a) y/o*
┆ *Admin!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆☑️ _${usedPrefix}enable_
└─────────────

┌─── 𝐑𝐄𝐏𝐎𝐑𝐓𝐀𝐑 𝐂𝐎𝐌𝐀𝐍𝐃𝐎𝐒 𝐂𝐎𝐍 𝐄𝐑𝐑𝐎𝐑𝐄𝐒
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *Reporta cualquier comando que falle para poder solucionarlo*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🚫 _${usedPrefix}reporte *<texto>*_
└─────────────

┌─── 𝐒𝐄𝐑 𝐏𝐑𝐄𝐌𝐈𝐔𝐌
┆ *Convierte en un(a)*
┆ *Usuario(a) Premium!!*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🎟️ _${usedPrefix}listapremium_
┆🎟️ _${usedPrefix}pase premium_
┆🎟️ _${usedPrefix}pass premium_
└─────────────

┌─── 𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒
┆📥 _${usedPrefix}play *<texto>*_
┆📥 _${usedPrefix}play.1 *<texto>*_
┆📥 _${usedPrefix}play.2 *<texto>*_
┆📥 _${usedPrefix}playdoc *<texto>*_
┆📥 _${usedPrefix}playlist *<texto>*_
┆📥 _${usedPrefix}playlist2 *<texto>*_
┆📥 _${usedPrefix}spotify *<texto>*_
┆📥 _${usedPrefix}tiktok *<enlace / link / url>*_
┆📥 _${usedPrefix}instagram *<enlace / link / url>*_
┆📥 _${usedPrefix}mediafire *<enlace / link / url>*_
┆📥 _${usedPrefix}instagram *<enlace / link / url>*_
┆📥 _${usedPrefix}gitclone *<enlace / link / url>*_
┆📥 _${usedPrefix}gdrive *<enlace / link / url>*_
┆📥 _${usedPrefix}xnxxdl *<enlace / link / url>*_
┆📥 _${usedPrefix}xvideosdl *<enlace / link / url>*_
┆📥 _${usedPrefix}twitter *<enlace / link / url>*_
┆📥 _${usedPrefix}fb *<enlace / link / url>*_
┆📥 _${usedPrefix}fb2 *<enlace / link / url>*_
┆📥 _${usedPrefix}fb3 *<enlace / link / url>*_
┆📥 _${usedPrefix}fb4 *<enlace / link / url>*_
┆📥 _${usedPrefix}fb5 *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp3 *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp4 *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp3doc *<enlace / link / url>*_
┆📥 _${usedPrefix}ytmp4doc *<enlace / link / url>*_
┆📥 _${usedPrefix}stickerpack *<enlace / link / url>*_
┆📥 _${usedPrefix}stickerly *<texto>*_
┆📥 _${usedPrefix}ringtone *<texto>*_
┆📥 _${usedPrefix}soundcloud *<texto>*_
┆📥 _${usedPrefix}imagen *<texto>*_
┆📥 _${usedPrefix}pinteret *<texto>*_
┆📥 _${usedPrefix}wallpaper *<texto>*_
┆📥 _${usedPrefix}wallpaper2 *<texto>*_
┆📥 _${usedPrefix}pptiktok *<nombre de usuario>*_
┆📥 _${usedPrefix}igstalk *<nombre de usuario>*_
┆📥 _${usedPrefix}igstory *<nombre de usuario>*_
┆📥 _${usedPrefix}tiktokstalk *<username>*_
└─────────────

┌─── 𝐆𝐑𝐔𝐏𝐎𝐒
┆ 𝙼𝚎𝚓𝚘𝚛𝚊 𝚝𝚞 𝚐𝚛𝚞𝚙𝚘 𝚌𝚘𝚗 𝙼𝚘𝚗𝚔𝚒𝙱𝚘𝚝 🙊
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆💎 _${usedPrefix}add *<numero>*_
┆💎 _${usedPrefix}kick *<@tag>*_
┆💎 _${usedPrefix}grupo *<abrir / cerrar>*_
┆💎 _${usedPrefix}grouptime *<opcion> <tiempo>*_
┆💎 _${usedPrefix}promote *<@tag>*_
┆💎 _${usedPrefix}demote *<@tag>*_
┆💎 _admins *<texto>*_ (𝑢𝑠𝑜 𝑠𝑖𝑛 𝑝𝑟𝑒𝑓𝑖𝑗𝑜)
┆💎 _${usedPrefix}demote *<@tag>*_
┆💎 _${usedPrefix}infogroup_
┆💎 _${usedPrefix}resetlink_
┆💎 _${usedPrefix}link_
┆💎 _${usedPrefix}setname *<texto>*_
┆💎 _${usedPrefix}setdesc *<texto>*_
┆💎 _${usedPrefix}invocar *<texto>*_
┆💎 _${usedPrefix}setwelcome *<texto>*_
┆💎 _${usedPrefix}setbye *<texto>*_
┆💎 _${usedPrefix}hidetag *<texto>*_
┆💎 _${usedPrefix}warn *<@tag>*_
┆💎 _${usedPrefix}unwarn *<@tag>*_
┆💎 _${usedPrefix}listwarn_
┆💎 _${usedPrefix}fantasmas_
┆💎 _${usedPrefix}destraba_
┆💎 _${usedPrefix}setpp *<imagen>*_
└─────────────

┌───⊷ 𝐂𝐎𝐍𝐕𝐄𝐑𝐓𝐈𝐃𝐎𝐑𝐄𝐒
┆ 𝙲𝚘𝚗𝚟𝚒𝚎𝚛𝚝𝚎 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 𝚎𝚗 𝚒𝚖𝚊𝚐𝚎𝚗𝚎𝚜 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🧧 _${usedPrefix}togifaud *<video>*_
┆🧧 _${usedPrefix}robar *texto*
┆🧧 _${usedPrefix}wm *texto*
┆🧧 _${usedPrefix}toimg *<sticker>*_
┆🧧 _${usedPrefix}tomp3 *<video>*_
┆🧧 _${usedPrefix}tomp3 *<nota de voz>*_
┆🧧 _${usedPrefix}toptt *<video / audio>*_
┆🧧 _${usedPrefix}tovideo *<sticker>*_
┆🧧 _${usedPrefix}tourl *<video / imagen / audio>*_
┆🧧 _${usedPrefix}tts es *<texto>*_
└─────────────

┌─── 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐘 𝐋𝐎𝐆𝐎𝐒
┆ 𝙲𝚛𝚎𝚊 𝚢 𝚙𝚎𝚛𝚜𝚘𝚗𝚊𝚕𝚒𝚣𝚊 𝚕𝚘𝚐𝚘𝚜 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🖍️ _${usedPrefix}mensajefalso *<nombre|mensaje>*_
┆🖍️ _${usedPrefix}phmaker *<opcion> <imagen>*_
┆🖍️ _${usedPrefix}logos *<efecto> <texto>*_
┆🖍️ _${usedPrefix}logochristmas *<texto>*_
┆🖍️ _${usedPrefix}logocorazon *<texto>*_
┆🖍️ _${usedPrefix}ytcomment *<texto>*_
┆🖍️ _${usedPrefix}hornycard *<@tag>*_
┆🖍️ _${usedPrefix}simpcard *<@tag>*_
┆🖍️ _${usedPrefix}lolice *<@tag>*_
┆🖍️ _${usedPrefix}itssostupid_
┆🖍️ _${usedPrefix}pixelar_
┆🖍️ _${usedPrefix}blur_
└─────────────

┌─── 𝐅𝐑𝐀𝐒𝐄𝐒 𝐘 𝐓𝐄𝐗𝐓𝐎𝐒
┆ 𝙿𝚘𝚛 𝚜𝚒 𝚎𝚛𝚎𝚜 𝚙𝚎𝚜𝚒𝚖𝚘 𝚍𝚒𝚌𝚒𝚎𝚗𝚍𝚘 𝚏𝚛𝚊𝚜𝚎𝚜 𝚢 𝚙𝚘𝚎𝚖𝚊𝚜 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 🥀 _${usedPrefix}piropo_
┆🥀 _${usedPrefix}consejo_
┆🥀 _${usedPrefix}fraseromantica_
└─────────────

┌───⊷ *RANDOM*
┆👾 _${usedPrefix}kpop *<blackpink / exo / bts>*_
┆👾 _${usedPrefix}cristianoronaldo_
┆👾 _${usedPrefix}messi_
┆👾 _${usedPrefix}meme_
┆👾 _${usedPrefix}itzy_
┆👾 _${usedPrefix}blackpink_
┆👾 _${usedPrefix}lolivid_
┆👾 _${usedPrefix}loli_
┆👾 _${usedPrefix}navidad_
┆👾 _${usedPrefix}ppcouple_
┆👾 _${usedPrefix}wpmontaña_
┆👾 _${usedPrefix}pubg_
┆👾 _${usedPrefix}wpgaming_
┆👾 _${usedPrefix}wpaesthetic_
┆👾 _${usedPrefix}wpaesthetic2_
┆👾 _${usedPrefix}wprandom_
┆👾 _${usedPrefix}wallhp_
┆👾 _${usedPrefix}wpvehiculo_
┆👾 _${usedPrefix}wpmoto_
┆👾 _${usedPrefix}coffee_
┆👾 _${usedPrefix}pentol_
┆👾 _${usedPrefix}caricatura_
┆👾 _${usedPrefix}ciberespacio_
┆👾 _${usedPrefix}technology_
┆👾 _${usedPrefix}doraemon_
┆👾 _${usedPrefix}hacker_
┆👾 _${usedPrefix}planeta_
┆👾 _${usedPrefix}randomprofile_
┆👾 _${usedPrefix}neko_
┆👾 _${usedPrefix}waifu_
┆👾 _${usedPrefix}akira_
┆👾 _${usedPrefix}akiyama_
┆👾 _${usedPrefix}anna_
┆👾 _${usedPrefix}asuna_
┆👾 _${usedPrefix}ayuzawa_
┆👾 _${usedPrefix}boruto_
┆👾 _${usedPrefix}chiho_
┆👾 _${usedPrefix}chitoge_
┆👾 _${usedPrefix}deidara_
┆👾 _${usedPrefix}erza_
┆👾 _${usedPrefix}elaina_
┆👾 _${usedPrefix}eba_
┆👾 _${usedPrefix}emilia_
┆👾 _${usedPrefix}hestia_
┆👾 _${usedPrefix}hinata_
┆👾 _${usedPrefix}inori_
┆👾 _${usedPrefix}isuzu_
┆👾 _${usedPrefix}itachi_
┆👾 _${usedPrefix}itori_
┆👾 _${usedPrefix}kaga_
┆👾 _${usedPrefix}kagura_
┆👾 _${usedPrefix}kaori_
┆👾 _${usedPrefix}keneki_
┆👾 _${usedPrefix}kotori_
┆👾 _${usedPrefix}kurumi_
┆👾 _${usedPrefix}madara_
┆👾 _${usedPrefix}mikasa_
┆👾 _${usedPrefix}miku_
┆👾 _${usedPrefix}minato_
┆👾 _${usedPrefix}naruto_
┆👾 _${usedPrefix}nezuko_
┆👾 _${usedPrefix}sagiri_
┆👾 _${usedPrefix}sasuke_
┆👾 _${usedPrefix}sakura_
┆👾 _${usedPrefix}cosplay_
└─────────────

┌───⊷ 𝐂𝐎𝐌𝐀𝐍𝐃𝐎 +𝟏𝟖
┆ 𝚄𝚜𝚊𝚕𝚘 𝚋𝚊𝚓𝚘 𝚝𝚞 𝚛𝚎𝚜𝚙𝚘𝚗𝚜𝚊𝚋𝚒𝚕𝚒𝚍𝚊𝚍
┆ • 𝚂𝚎𝚛 𝚙𝚊𝚓𝚎𝚛𝚘 𝚊𝚌𝚑𝚒𝚌𝚊 𝚎𝚕 𝚙𝚒𝚝𝚘 👀
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🔞 _${usedPrefix}hornymenu_
└─────────────

┌─── 𝐄𝐅𝐄𝐂𝐓𝐎𝐒 𝐏𝐀𝐑𝐀 𝐍𝐎𝐓𝐀𝐒 𝐃𝐄 𝐕𝐎𝐙
┆ 𝚁𝚎𝚊𝚕𝚒𝚣𝚊 𝚖𝚘𝚍𝚒𝚏𝚒𝚊𝚌𝚒𝚘𝚗𝚎𝚜 𝚊 𝚕𝚊𝚜 𝚗𝚘𝚝𝚊𝚜 𝚍𝚎 𝚟𝚘𝚣 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🎤 _${usedPrefix}audioefectomenu_
└─────────────

┌─── 𝐀𝐔𝐃𝐈𝐎𝐒
┆ 𝚁𝚎𝚟𝚒𝚜𝚊 𝚎𝚕 𝚖𝚎𝚗𝚞 𝚍𝚎 𝚊𝚞𝚍𝚒𝚘𝚜 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🔊 _${usedPrefix}menu2_
┆🔊 _${usedPrefix}audios_
└─────────────

┌─── 𝐂𝐇𝐀𝐓𝐒 𝐀𝐍𝐎𝐍𝐈𝐌𝐎𝐒
┆ 𝙼𝚊𝚗𝚍𝚊𝚕𝚎 𝚖𝚎𝚗𝚜𝚊𝚓𝚎 𝚊 𝚞𝚗𝚊 𝚙𝚎𝚛𝚜𝚘𝚗𝚊 𝚜𝚒𝚗 𝚚𝚞𝚎 𝚜𝚎𝚙𝚊 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆📳 _${usedPrefix}start_
┆📳 _${usedPrefix}next_
┆📳 _${usedPrefix}leave_
└─────────────

┌─── 𝐁𝐔𝐒𝐂𝐀𝐃𝐎𝐑𝐄𝐒
┆ 𝙱𝚞𝚜𝚌𝚊 𝚕𝚘 𝚚𝚞𝚎 𝚍𝚎𝚜𝚎𝚊𝚜 𝚌𝚘𝚗 𝚎𝚕 𝚋𝚘𝚝 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🔍 _${usedPrefix}stickersearch *<texto>*_
┆🔍 _${usedPrefix}stickersearch2 *<texto>*_
┆🔍 _${usedPrefix}xnxxsearch *<texto>*_
┆🔍 _${usedPrefix}animeinfo *<texto>*_
┆🔍 _${usedPrefix}google *<texto>*_
┆🔍 _${usedPrefix}letra *<texto>*_
┆🔍 _${usedPrefix}wikipedia *<texto>*_
┆🔍 _${usedPrefix}ytsearch *<texto>*_
┆🔍 _${usedPrefix}apkdone *<texto>*_
┆🔍 _${usedPrefix}apkgoogle *<texto>*_
┆🔍 _${usedPrefix}apkmody *<texto>*
┆🔍 _${usedPrefix}uapkpro *<texto>*_
┆🔍 _${usedPrefix}playstore *<texto>*_
└─────────────

┌─── 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒
┆🛠️ _${usedPrefix}spamwa *<numero|texto|cantidad>*_
┆🛠️ _${usedPrefix}tamaño *<cantidad> <imagen / video>*_
┆🛠️ _${usedPrefix}clima *<país> <ciudad>*_
┆🛠️ _${usedPrefix}encuesta *<texto1|texto2...>*_
┆🛠️ _${usedPrefix}afk *<motivo>*_
┆🛠️ _${usedPrefix}ocr *<responde a imagen>*_
┆🛠️ _${usedPrefix}acortar *<enlace / link / url>*_
┆🛠️ _${usedPrefix}calc *<operacion math>*_
┆🛠️ _${usedPrefix}del *<mensaje>*_
┆🛠️ _${usedPrefix}whatmusic *<audio>*_
┆🛠️ _${usedPrefix}readqr *<imagen (QR)>*_
┆🛠️ _${usedPrefix}qrcode *<texto>*_
┆🛠️ _${usedPrefix}readmore *<texto1| texto2>*_
┆🛠️ _${usedPrefix}styletext *<texto>*_
┆🛠️ _${usedPrefix}traducir *<texto>*_
┆🛠️ _${usedPrefix}zoom *<texto>*_
┆🛠️ _${usedPrefix}nowa *<numero>*_
┆🛠️ _${usedPrefix}horario_
└─────────────

┌─── 𝐄𝐂𝐎𝐍𝐎𝐌𝐈𝐀𝐒 - 𝐑𝐏𝐆 - 𝐋𝐈𝐌𝐈𝐓𝐄𝐒
┆ 𝙲𝚘𝚖𝚙𝚛𝚊 𝚢 𝚖𝚎𝚓𝚘𝚛𝚊 𝚝𝚞 𝚗𝚒𝚟𝚎𝚕 𝚢 𝚛𝚊𝚗𝚐𝚘 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆💵 _${usedPrefix}verificar_
┆💵 _${usedPrefix}unreg *<numero de serie>*_
┆💵 _${usedPrefix}claim_
┆💵 _${usedPrefix}lb_
┆💵 _${usedPrefix}levelup_
┆💵 _${usedPrefix}perfil_
┆💵 _${usedPrefix}minar_
┆💵 _${usedPrefix}buy_
┆💵 _${usedPrefix}balance_
┆💵 _${usedPrefix}myns_
┆💵 _${usedPrefix}work_
┆💵 _${usedPrefix}buyall_
┆💵 _${usedPrefix}transfer *<tipo> <cantidad> <@tag>*_
└─────────────

┌─── 𝐓𝐎𝐏 𝐄𝐍 𝐌𝐎𝐍𝐊𝐈 𝐁𝐎𝐓 🙈
┆ 𝙳𝚎𝚜𝚌𝚞𝚋𝚛𝚎 𝚎𝚗 𝚚𝚞𝚎 𝚃𝚘𝚙 𝚎𝚜𝚝𝚊𝚜 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆🏆➺ _${usedPrefix}top | lb | leaderboard_
└─────────────

┌─── 𝐒𝐓𝐈𝐂𝐊𝐄𝐑𝐒
┆ 𝚁𝚎𝚊𝚕𝚒𝚣𝚊 𝚢 𝚌𝚛𝚎𝚊 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆👽 _${usedPrefix}sticker *<responder a imagen o video>*_
┆👽 _${usedPrefix}sticker *<enlace / link / url>*_
┆👽 _${usedPrefix}s *<responder a imagen o video>*_
┆👽 _${usedPrefix}s *<enlace / link / url>*_
┆👽 _${usedPrefix}sfull *<imagen o video>*_
┆👽 _${usedPrefix}emojimix *<emoji 1>&<emoji 2>*_
┆👽 _${usedPrefix}scircle *<imagen>*_
┆👽 _${usedPrefix}sremovebg *<imagen>*_
┆👽 _${usedPrefix}semoji *<tipo> <emoji>*_
┆👽 _${usedPrefix}attp *<texto>*_
┆👽 _${usedPrefix}attp2 *<texto>*_
┆👽 _${usedPrefix}attp3 *<texto>*_
┆👽 _${usedPrefix}ttp *<texto>*_
┆👽 _${usedPrefix}ttp2 *<texto>*_
┆👽 _${usedPrefix}ttp3 *<texto>*_
┆👽 _${usedPrefix}ttp4 *<texto>*_
┆👽 _${usedPrefix}ttp5 *<texto>*_
┆👽 _${usedPrefix}pat *<@tag>*_
┆👽 _${usedPrefix}slap *<@tag>*_
┆👽 _${usedPrefix}kiss *<@tag>*_
┆👽 _${usedPrefix}dado_
┆👽 _${usedPrefix}wm *<packname> <author>*_
┆👽 _${usedPrefix}stickermarker *<efecto> <imagen>*_
┆👽 _${usedPrefix}stickerfilter *<efecto> <imagen>*_
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ 𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙳𝙸𝙽𝙰𝙼𝙸𝙲𝙾𝚂
┆ 𝚁𝚎𝚊𝚕𝚒𝚣𝚊 𝚊𝚌𝚌𝚒𝚘𝚗𝚎𝚜 𝚌𝚘𝚗 𝚜𝚝𝚒𝚌𝚔𝚎𝚛𝚜 𝚎𝚝𝚒𝚚𝚞𝚎𝚝𝚊𝚗𝚍𝚘 𝚊 𝚊𝚕𝚐𝚞𝚒𝚎𝚗 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆⛱️ _${usedPrefix}palmaditas | pat *@tag*_
┆⛱️ _${usedPrefix}bofetada | slap *@tag*_
┆⛱️ _${usedPrefix}golpear *@tag*_
┆⛱️ _${usedPrefix}besar | kiss *@tag*_
┆⛱️ _${usedPrefix}alimentar | food *@tag*
└─────────────

┌─── 𝐏𝐑𝐎𝐏𝐈𝐄𝐓𝐀𝐑𝐈𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓
┆ 𝚂𝚘𝚕𝚘 𝚙𝚊𝚛𝚊 𝚘𝚠𝚗𝚎𝚛𝚜 𝚍𝚎𝚕 𝚋𝚘𝚝 🪽
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆👑 > *<funcion>*
┆👑 => *<funcion>*
┆👑 $ *<funcion>*
┆👑 _${usedPrefix}setprefix *<prefijo>*_
┆👑 _${usedPrefix}resetprefix_
┆👑 _${usedPrefix}autoadmin_
┆👑 _${usedPrefix}leavegc_
┆👑 _${usedPrefix}cajafuerte_
┆👑 _${usedPrefix}blocklist_
┆👑 _${usedPrefix}block *<@tag / numero>*_
┆👑 _${usedPrefix}unblock *<@tag / numero>*_
┆👑 _${usedPrefix}enable *restrict*_
┆👑 _${usedPrefix}disable *restrict*_
┆👑 _${usedPrefix}enable *autoread*_
┆👑 _${usedPrefix}disable *autoread*_
┆👑 _${usedPrefix}enable *public*_
┆👑 _${usedPrefix}disable *public*_
┆👑 _${usedPrefix}enable *pconly*_
┆👑 _${usedPrefix}disable *pconly*_
┆👑 _${usedPrefix}enable *gconly*_
┆👑 _${usedPrefix}disable *gconly*_
┆👑 _${usedPrefix}enable *anticall*_
┆👑 _${usedPrefix}disable *anticall*_
┆👑 _${usedPrefix}enable *antiprivado*_
┆👑 _${usedPrefix}disable *antiprivado*_
┆👑 _${usedPrefix}msg *<texto>*_
┆👑 _${usedPrefix}banchat_
┆👑 _${usedPrefix}unbanchat_
┆👑 _${usedPrefix}banuser *<@tag>*_
┆👑 _${usedPrefix}unbanuser *<@tag>*_
┆👑 _${usedPrefix}dardiamantes *<@tag>*_
┆👑 _${usedPrefix}añadirxp *<@tag>*_
┆👑 _${usedPrefix}banuser *<@tag>*_
┆👑 _${usedPrefix}bc *<texto>*_
┆👑 _${usedPrefix}bcchats *<texto>*_
┆👑 _${usedPrefix}bcgc *<texto>*_
┆👑 _${usedPrefix}bcbot *<texto>*_
┆👑 _${usedPrefix}cleartpm_
┆👑 _${usedPrefix}restart_
┆👑 _${usedPrefix}update_
┆👑 _${usedPrefix}banlist_
┆👑 _${usedPrefix}addprem *<@tag>*_
┆👑 _${usedPrefix}delprem *<@tag>*_
┆👑 _${usedPrefix}listprem_
┆👑 _${usedPrefix}listcmd_
┆👑 _${usedPrefix}setppbot *<responder a imagen>*_
┆👑 _${usedPrefix}addcmd *<texto> <responder a sticker/imagen>*_
┆ 👑 _${usedPrefix}delcmd *<responder a sticker/imagen con comando o texto asignado>*_
└───────────────────`.trim()
    conn.sendFile(m.chat, pp, 'lp.jpg', menu, m, false, { contextInfo: { mentionedJid }})
	
} catch (e) {
//await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)	
}}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|menú|menucompleto|allmenu|allm\?)$/i
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
