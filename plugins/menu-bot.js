/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {
  

let Reglas = ` *🛑INFORMACIÓN DEL MENU🛑*\n
📝𝗡𝗼𝘁𝗮 :𝐡𝐨𝐥𝐚 𝐮𝐬𝐮𝐚𝐫𝐢𝐨 𝐡𝐚𝐬 𝐬𝐨𝐥𝐢𝐜𝐢𝐭𝐚𝐝𝐨 𝐦𝐢 𝐦𝐞𝐧𝐮 , 𝐬𝐢 𝐝𝐞𝐬𝐞𝐚𝐬 𝐯𝐞𝐫 𝐦𝐢 𝐦𝐞𝐧𝐮 𝐦𝐚𝐧𝐝𝐚𝐫 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 :
.*herramientas*\n
*se te agradecería mucho si te unes al canal de MonkiBot 👇🏼*\n
${md}
`.trim()
await conn.sendFile(m.chat, imagen1, 'gata.mp4', Reglas)
}
handler.customPrefix = /menu|menubot|menu|uso, usobot|uso del bot/i
handler.command = new RegExp
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
