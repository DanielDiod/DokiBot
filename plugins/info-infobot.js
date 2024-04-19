import si from "systeminformation";
import {performance} from "perf_hooks";
import {sizeFormatter} from "human-readable";
import {cpus as _cpus} from "os";
let handler = async (m, {conn, usedPrefix}) => {

  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime)
  let totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"))
  const groups = chats.filter(([id]) => id.endsWith("@g.us"))
  const {restrict, antiCall, antiprivado} = global.db.data.settings[conn.user.jid] || {}
  const {autoread, gconly, pconly, self} = global.opts || {}
  let pp = "./galeria/menudorrat3.jpg"  
 let formatSize = sizeFormatter({ 
   std: "JEDEC", 
   decimalPlaces: 2, 
   keepTrailingZeroes: false, 
   render: (literal, symbol) => `${literal} ${symbol}B`, 
 }); 
 let ram = await si.mem(); 
 let cpu = await si.cpuCurrentSpeed(); 
 let disk = await si.fsSize(); 
 let json = { 
   memory: formatSize(ram.free) + " de " + formatSize(ram.total), 
   memory_used: formatSize(ram.used), 
   cpu: cpu.avg + " Ghz", 
   disk: formatSize(disk[0].available), 
 };
let info = `
╭─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┓
│❒  [🍁] *Creador: Daniel 🇦🇱*
│❒  [🍁] *Numero: +51 955 918 117*
│❒  [🍁️] *prefijo: ${usedPrefix}*
│❒  [🍁] *Chats PRIVADOS: ${chats.length - groups.length}*
│❒  [🍁] *Chat de Grupos: ${groups.length}* 
│❒  [🍁] *Chats Totales: ${chats.length}* 
│❒  [🍁] *Actividad: ${uptime}*
│❒  [🍁] *Usuarios: ${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
│❒  [🍁] *Autoread:* ${autoread ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
│❒  [🍁] *Restrict:* ${restrict ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"} 
│❒  [🍁] *Antiprivado*: ${antiprivado ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
│❒  [🍁] *Antillamada:* ${antiCall ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
│❒  [🍁] *Pconly*: ${pconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
│❒  [🍁] *Gconly*: ${gconly ? "*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*" : "*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*"}
│❒  [🍁] *Modo*: ${self ? "*𝚙𝚛𝚒𝚟𝚊𝚍𝚘*" : "*𝚙𝚞𝚋𝚕𝚒𝚌𝚘*"}
│❒  [🔴] *Ram Usada:* ${json.memory_used}
│❒  [🍁] *Disco Duro:*  ${json.disk}
╰─ ❖ ── ✦ ── ✧ ── ✦ ── ❖ ──┛`.trim();
  
conn.sendMessage(m.chat, { image: { url: "https://telegra.ph/file/0201b8bffdd9981043023.jpg", }, caption: info,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
title: `IGNA • BOT`,
sourceUrl: "http://wa.me/51955918117",
mediaType: 1,
showAdAttribution: true,
thumbnailUrl: "https://telegra.ph/file/0201b8bffdd9981043023.jpg",
}}}, { quoted: m })
}  
handler.help = ["infobot"]
handler.tags = ["info", "tools"]
handler.command = /^(infobot|informacionbot|infodorrat|informacióndorrat|informaciondorrats)$/i;
export default handler
function clockString(ms) {
  let h = Math.floor(ms / 3600000);
  let m = Math.floor(ms / 60000) % 60;
  let s = Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
