import { pinterest } from '@bochilteam/scraper'
let handler = async(m, { conn, text, usedPrefix, command }) => {
if (!text) throw `uso del comando correcto\n*${usedPrefix + command} gata | cat*` 
try {
const json = await pinterest(text)
conn.sendButton(m.chat, `🚩 resultado de ${text}`, `Daniel | ${wm}`, json.getRandom(), [
['Siguiente', `${usedPrefix}pinterest ${text}`]], null, null, m)
//await conn.sendFile(m.chat, json.getRandom(), 'error.jpg', `${lenguajeGB['smsAvisoEG']()} 💞 ${mid.buscador}: ${text}`.trim(), m)
} catch (e) {
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.money = false
}}
handler.help = ['pinterest <keyword>']
handler.tags = ['internet']
handler.command = /^(pinterest|dlpinterest|pinterestdl)$/i
handler.money = 1
export default handler
