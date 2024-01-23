import yts from 'yt-search';

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `*Formato incorrecto*\n*Ejemplo:*\n\n${usedPrefix + command} Mi corazón encantado`
try {
let results = await yts(text);
let tes = results.all;
let teks = results.all.map(v => {
switch (v.type) {
case 'video':
return `
⚘ ${v.title}
⚘ *Link*: ${v.url}
⚘️ *Duración*: ${duracion(v.timestamp)}
⚘ *Subido*: ${subido(v.ago)}
⚘ *Vistas*: ${v.views}
`.trim();
case 'canal':
return `
⚘ *${v.name}* (${v.url})
⚘ ${v.subCountLabel} (${v.subCount}) Subs
⚘ ${v.videoCount} videos
`.trim();
}
}).filter(v => v).join('\n\n• ──────⊱ ⊰────── •\n\n');
conn.sendFile(m.chat, tes[0].thumbnail, 'yt.jpg', teks, m);
} catch (error) {
}}
handler.help = ['ytsearch']
handler.tags = ['dl']
handler.command = ['ytsearch', 'yts', 'ytb', 'ytbuscar']
export default handler
function duracion(duration) {
let parts = duration.split(':')
let seconds = parseInt(parts.pop(), 10)
let minutes = parts.length > 0 ? parseInt(parts.pop(), 10) : 0
let hours = parts.length > 0 ? parseInt(parts.pop(), 10) : 0
let years = Math.floor(hours / 8760)
let result = '';
if (years > 0) result += `${years} años, `
if (hours > 0) result += `${hours} horas, `
if (minutes > 0) result += `${minutes} minutos, `
result += `${seconds} segundos`
return result;
}

function subido(ago) {
let palabras = ago.split(' ')
let cantidad = parseInt(palabras[0])
let unidad = palabras[1]
switch (unidad) {
case 'second':
case 'seconds':
return `${cantidad} segundos`
case 'minute':
case 'minutes':
return `${cantidad} minutos`
case 'hour':
case 'hours':
return `${cantidad} horas`
case 'day':
case 'days':
return `${cantidad} días`
case 'week':
case 'weeks':
return `${cantidad} semanas`
case 'month':
case 'months':
return `${cantidad} meses`
case 'year':
case 'years':
return `${cantidad} años`
default:
return ago
}}
