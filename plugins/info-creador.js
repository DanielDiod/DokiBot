import fetch from 'node-fetch'; 
 const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => { 
   if (usedPrefix == 'a' || usedPrefix == 'A') return; 
   try { 
     const pp = imagen1; 
     // let vn = './media/menu.mp3' 
     const img = './Menu2.jpg'; 
     const d = new Date(new Date + 3600000); 
     const locale = 'es'; 
     const week = d.toLocaleDateString(locale, {weekday: 'long'}); 
     const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'}); 
     const _uptime = process.uptime() * 1000; 
     const uptime = clockString(_uptime); 
     const user = global.db.data.users[m.sender]; 
     const {money, joincount} = global.db.data.users[m.sender]; 
     const {exp, limit, level, role} = global.db.data.users[m.sender]; 
     const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length; 
     const more = String.fromCharCode(8206); 
     const readMore = more.repeat(850); 
     const url = global.md 
     const taguser = '@' + m.sender.split('@s.whatsapp.net')[0]; 
     const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document']; 
     const document = doc[Math.floor(Math.random() * doc.length)]; 
     if (!/web|desktop|unknown/gi.test(dispositivo)) {  
let menu = `• 𝐂𝐫𝐞𝐚𝐝𝐨𝐫 𝐨𝐟𝐜: 𝗗𝗮𝗻𝗶𝗲𝗹 🇦🇱

𝐈𝐠: Instagram.com/Jxtxn17/
𝐍𝐮𝐦𝐞𝐫𝐨: Wa.me/51907913096


• 𝐒𝐨𝐩𝐨𝐫𝐭𝐞 𝐨𝐟𝐜: 𝗦𝗼𝗽𝗶𝗶 🧸

𝐈𝐠: Instagram.com/sophziix/
𝐍𝐮𝐦𝐞𝐫𝐨: Wa.me/51977835959

• 𝐂𝐨𝐥𝐚𝐛𝐨𝐫𝐚𝐝𝐨𝐫 𝐨𝐟𝐜: 𝗔𝘅 ⚜

𝐈𝐠: Instagram.com/Litopeax
𝐍𝐮𝐦𝐞𝐫𝐨: Wa.me/51929972576`.trim()
    
const buttonParamsJson = JSON.stringify({
title: "VER LISTA",
description: "Infórmate por medios oficiales sobre Igna • bot",
sections: [
{ title: "ℹ️ Información", highlight_label: "Popular",
rows: [
{ header: "✅ Redes", title: "🔓 Para: Todos", description: "Infórmate por medios oficiales sobre GataBot", id: usedPrefix + "cuentasgb" },
{ header: "📢 Grupos/Canales", title: "🔓 Para: Todos", description: "¡Te esperamos!", id: usedPrefix + "grupos" },
{ header: "🎁 Donar", title: "🔓 Para: Todos", description: "GataBot se mantiene funcionando gracias a donaciones ¡tú también puedes sumarte apoyando el proyecto!", id: usedPrefix + "donar" }
]},
{ title: "🔖 Atajos", highlight_label: "Popular",
rows: [
{ header: "🆕 Ser Bot (código)", title: "🔓 Para: Todos", description: "¡Conviértete en Bot con el método de código de 8 dígitos!", id: usedPrefix + "serbot --code" },
{ header: "🤖 Ser Bot (qr)", title: "🔓 Para: Todos", description: "Forma estándar de ser bot con código QR", id: usedPrefix + "serbot" },
{ header: "🚄 Velocidad", title: "🔓 Para: Todos", description: "Seleccione esto si desea saber el ping del Bot", id: usedPrefix + "ping" },
{ header: "😺 Estado", title: "🔓 Para: Todos", description: "Conoce en que estado se encuentra GataBot", id: usedPrefix + "estado" }
]},
{ title: "Ⓜ️ Menú", highlight_label: "Popular",
rows: [
{ header: "⭐ Menú completo", title: "", description: "Visita todos los comandos", id: usedPrefix + "allmenu" }
]}
]})
const interactiveMessage = {
body: { text: menu },
footer: { text: wm + ` \nSi algo no funciona utilice el comando *${usedPrefix}menu2*` },
header: { title: `⭐ *------- NUEVO MENÚ -------* ⭐\n${lenguajeGB['smsConfi2']()} *${user.genero === 0 ? '👤' : user.genero == 'Ocultado 🕶️' ? `🕶️` : user.genero == 'Mujer 🚺' ? `🚺` : user.genero == 'Hombre 🚹' ? `🚹` : '👤'} ${user.registered === true ? user.name : taguser} 💖*`, subtitle: "test4", hasMediaAttachment: false },
nativeFlowMessage: { buttons: [{ 
name: "single_select",
buttonParamsJson
}]
}}
const message = { messageContextInfo: { deviceListMetadata: {}, deviceListMetadataVersion: 2 }, interactiveMessage }
await conn.relayMessage(m.chat, { viewOnceMessage: { message } }, {}) 
} else { 
let menu = `BIENVENIDO AL MENU DE IGNA BOT ELIGA ALGUNA DE LAS SIGUIENTES OPCIONES`.trim()  
await conn.sendFile(m.chat, gataImg, 'lp.jpg', menu, fkontak, false, { contextInfo: {mentionedJid, externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: 'Igna  - Bot ', previewType: 0, thumbnail: imagen4, sourceUrl: redesMenu}}}) 
await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: 'error.mp3', mimetype: 'audio/mp4', ptt: true }, { quoted: m }) 
//conn.sendFile(m.chat, gataVidMenu.getRandom(), 'gata.mp4', menu, fkontak)
}} catch (e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)}}

handler.command = /^(menu|menú|memu|memú|help\?)$/i
handler.register = true
export default handler 
