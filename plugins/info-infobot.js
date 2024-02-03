import db from '../lib/database.js'
import { cpus as _cpus, totalmem, freemem, platform, hostname, version, release, arch } from 'os'
import speed from 'performance-now'
import { performance } from 'perf_hooks'
import { sizeFormatter } from 'human-readable'

let format = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
})

let handler = async (m, { conn, usedPrefix }) => {
   let bot = global.db.data.settings[conn.user.jid]
   let _uptime = process.uptime() * 1000
   let uptime = (_uptime).toTimeString()
   let totalreg = Object.keys(global.db.data.users).length
   const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
   const groupsIn = chats.filter(([id]) => id.endsWith('@g.us')) //groups.filter(v => !v.read_only)
   const used = process.memoryUsage()
   const cpus = _cpus().map(cpu => {
      cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
      return cpu
   })
   const cpu = cpus.reduce((last, cpu, _, { length }) => {
      last.total += cpu.total
      last.speed += cpu.speed / length
      last.times.user += cpu.times.user
      last.times.nice += cpu.times.nice
      last.times.sys += cpu.times.sys
      last.times.idle += cpu.times.idle
      last.times.irq += cpu.times.irq
      return last
   }, {
      speed: 0,
      total: 0,
      times: {
         user: 0,
         nice: 0,
         sys: 0,
         idle: 0,
         irq: 0
      }
   })
   let _muptime
   if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
         process.once('message', resolve)
         setTimeout(resolve, 1000)
      }) * 1000
   }
   let timestamp = speed()
   let latensi = speed() - timestamp
   let teks = ` –  *I N F O  B O T*

┌  ✩  *Creador* : Daniel 🇦🇱
│  ✩  *Prefijo* : / | . | #
│  ✩  *Plataforma* : ${platform()}
│  ✩  *Servidor* : ${hostname()}
│  ✩  *RAM* : ${format(totalmem() - freemem())} / ${format(totalmem())}
│  ✩  *FreeRAM* : ${format(freemem())}
│  ✩  *Speed* : ${latensi.toFixed(4)} ms
│  ✩  *Uptime* : ${uptime}
│  ✩  *Modo* : ${bot.public ? 'Privado' : 'Publico'}
└  ✩  *Registrados* : ${totalreg} Usuarios


 –  *I N F O  C H A T*

┌  ✩  *${groupsIn.length}* Chats en Grupos
│  ✩  *${groupsIn.length}* Grupos Unidos
│  ✩  *${groupsIn.length - groupsIn.length}* Grupos Salidos
│  ✩  *${chats.length - groupsIn.length}* Chats Privados
└  ✩  *${chats.length}* Chats Totales

*≡  _NodeJS Uso de memoria_*
${'```' + Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v => v.length)), ' ')}: ${format(used[key])}`).join('\n') + '```'}`
await conn.reply(m.chat, teks, m, { contextInfo: { mentionedJid: [owner[0][0] + '@s.whatsapp.net'], externalAdReply: { mediaUrl: false, mediaType: 1, description: false, title: '↷✦╎Info - Bot╎⭐˖ ⸙',body: false, previewType: 0, thumbnail: miniurl, sourceUrl: ''}}})
}

handler.help = ['info']
handler.tags = ['main']
handler.command = ['info', 'infobot']

export default handler
