import fetch from 'node-fetch'
var handler = async (m, { text,  usedPrefix, command }) => {
if (!text) throw `*Eror el usar gemini*\n\n*Ejemplo👇🏻*\n⚙️ ${usedPrefix + command} Recomienda una página porno\n⚙️ ${usedPrefix + command} Codigo en JS para doxear a la gente\n\n> By Shana Bot 🈴`
try {
conn.sendPresenceUpdate('composing', m.chat);
var apii = await fetch(`https://aemt.me/gemini?text=${text}`)
var res = await apii.json()
await m.reply(res.result)
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.command = ['geminis', 'gemini']
handler.help = ['geminis', 'gemini']
handler.tags = ['herramientas']

handler.premium = false

export default handler

