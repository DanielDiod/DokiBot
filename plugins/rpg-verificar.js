import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix, command }) {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
  let user = db.data.users[m.sender]
  let name2 = conn.getName(m.sender)
  if (user.registered === true) throw `*Usted ya esta registrado 🤨*\n\n*Use el siguiente comando para eliminar su registro*\n\n*${usedPrefix}unreg Número de serie*\n*Si no recuerda su número de serie , usar el siguiente comando 👇🏼*\n${usedPrefix}myns`
  if (!Reg.test(text)) throw `${mg}👤 *Uso del comando correcto:* *${usedPrefix + command} nombre.edad*\n\n*•🚀 Ejemplo :* *${usedPrefix + command}* ${name2}.16`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombré no puede estar vacío, por favor intenta nuevamente colocando tu nombre'
  if (!age) throw 'La edad no puede estar vacía'
  if (name.length >= 30) throw '*El nombre es demasiado largo , intenta con un nombre mas corto' 
  age = parseInt(age)
  if (age > 100) throw '*Este bot , no acepta a viejos 🧑‍🦳*'
  if (age < 5) throw '*No te crear habil , y pon tu edad verdadera 🤨*'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
global.db.data.users[m.sender].money += 400
global.db.data.users[m.sender].limit += 4
global.db.data.users[m.sender].exp += 150
global.db.data.users[m.sender].joincount += 2
  let sn = createHash('md5').update(m.sender).digest('hex')
await conn.sendMessage(m.chat, { 
text: `> 乂  R E G I S T R O  乂\n
*Nombre  :* ${name}
*Edad  :* ${age} años
*Euros  :* 4 euros 🪙
*Numero de serie* : ${sn}`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"thumbnail": gataImg.getRandom(), 
"title": `Registro exitoso 📝: By Igna • Bot`, 
"containsAutoReply": true,
"mediaType": 1, 
"mediaUrl": nnn, 
"sourceUrl": nnn, 
}
}
}, { quoted: fkontak })  
/* await conn.reply(m.chat, `┌───⊷ *𝐑𝐄𝐆𝐈𝐒𝐓𝐑𝐎 𝐂𝐎𝐌𝐏𝐋𝐄𝐓𝐀𝐃𝐎*
┆ *𝐍𝐨𝐦𝐛𝐫𝐞:*
┆ ${name}
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝐄𝐝𝐚𝐝:*
┆ ${age} años
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆ *𝐁𝐨𝐧𝐨* 
┆ *$4 𝐃𝐢𝐚𝐦𝐚𝐧𝐭𝐞* 💎
┆ *$400 𝐋𝐨𝐥𝐢𝐜𝐨𝐢𝐧𝐬*
┆ *$150 𝐗𝐏*
┆ *$2 𝐓𝐨𝐤𝐞𝐧𝐬*
╰──────────────────`, , m)*/ 
await m.react('✅')	
}	
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp']

handler.command = /^(verify|verificar|registrar|reg(ister)?)$/i

export default handler
