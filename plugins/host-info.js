/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {


let Reglas = ` *💫 Te presentamos un nuevo hosting: "Infinity-Wa Host"`*

*¿Muy lento tu nokia y necesitas tener activo tu bot 24/7?*

> *Te tenemos la mejor opción para mantener activo tu bot 24/7, a precios muy accesibles. Es muy barato y todos pueden comprar.*

*🚩Precios:*
* 1GB, 100 CPU = 1Dolar
* 2GB, 120 CPU = 2Dolar
* 3GB, 140 CPU = 3Dolar
* 4GB, 175 CPU = 4Dolar
* 5GB, 200 CPU = 5 Dólar. 

*`Contactanos para más información o alquidir los servicios:`*
https://chat.whatsapp.com/GQ82mPnSYnm0XL2hLPk7FV

> *Tenemos varios métodos de pagos: PayPal, Mercado pago, Naranja x, Yape, Transferencia por banco.*
`.trim()
await m.react('❌')  
await conn.sendFile(m.chat, imagen1, 'gata.mp4', Reglas)
}
handler.customPrefix = /info|host/i
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