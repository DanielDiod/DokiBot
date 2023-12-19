let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner, isROwner} ) {
const fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net"
}
if (!m.isGroup) return !54
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[conn.user.jid] || {}
if (isBotAdmin && chat.antifake && !isAdmin && !isOwner && !isROwner) {
//if (!db.data.chats[m.chat].antifake && m.isGroup) throw 0
let texto = `${ag}este numero *@${m.sender.split`@`[0]}* eres un sin económia\n\nsolo los que tienen económia pueden permanecer`

if (m.sender.startsWith('54' || '54')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('54' || '54')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('54' || '54')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('54' || '54')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('54' || '54')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('54' || '54')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 

if (m.sender.startsWith('54' || '54')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('54' || '54')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('54' || '966')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('229' || '229')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('40' || '40')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('49' || '49')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('20' || '20')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('963' || '963')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('967' || '967')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('234' || '234')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('210' || '210')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return 
}

if (m.sender.startsWith('212' || '212')) {
await conn.reply(m.chat, texto, fkontak,  m)
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} 	
   
}}
export default handler
