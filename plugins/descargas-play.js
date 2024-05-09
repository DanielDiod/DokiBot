import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (!lister.includes(feature)) return conn.reply(m.chat, `*🚩 Ingresa el formato en que deseas descargar más el titulo de un video o musica de YouTube.*\n\nEjemplo : ${usedPrefix + command} *mp3* SUICIDAL-IDOL - ecstacy\n\nFormatos disponibles :\n${usedPrefix + command} *mp3*\n${usedPrefix + command} *mp3doc*\n${usedPrefix + command} *mp4*\n${usedPrefix + command} *mp4doc*`,  m, fake,)
    if (lister.includes(feature)) {
        if (feature == "mp3") {
            if (!inputs) return conn.reply(m.chat, `*🚩 Ingresa el titulo de un video o musica de YouTube.*`,  m, fake,)
    await m.react('🕓')
    let res = await yts(text)
    let vid = res.videos[0]
    let q = '128kbps'
const texto1 = `╭──────────✰\n
	│🍭 *Título ∙* ${vid.title}\n
        │🕜 *Duración ∙* ${vid.timestamp}\n
        │👁 *Visitas ∙* ${vid.views}\n
        │📚 *Autor ∙* ${vid.author.name}\n
        │📅 *Publicado ∙* ${vid.ago}\n
        │⛓ *Url ∙* ${'https://youtu.be/' + vid.videoId}\n
        ╰──────────✰\n\n`.trim()
		
await conn.sendButton(m.chat, wm, texto1, res.videos[0].thumbnail, [['menu', `${usedPrefix}menu`]], null, null, m)
       
let listSections = [];             
listSections.push({
title: comienzo + ' Tipo de descargas ' + fin,
rows: [{ header: "audio (Opcion 1)", title: "", id: `${usedPrefix}yta ${res.videos[0].url}`, description: `${res.videos[0].title}\n` }, { header: "𓃠 𝗔 𝗨 𝗗 𝗜 𝗢 (Opcion 2)", title: "", id: `${usedPrefix}play.1 ${res.videos[0].url}`, description: `${res.videos[0].title}\n` },
{ header: "audio doc", title: "", id: `${usedPrefix}ytmp3doc ${res.videos[0].url}`, description: `${res.videos[0].title}\n` },
{ header: "video (Opcion 1)", title: "", id: `${usedPrefix}ytv ${res.videos[0].url}`, description: `${res.videos[0].title}\n` },
{ header: "video (Opcion 2)", title: "", id: `${usedPrefix}play.2 ${res.videos[0].url}`, description: `${res.videos[0].title}\n` },
{header: "video doc", title: "", id: `${usedPrefix}ytmp4doc ${res.videos[0].url}`, description: `${res.videos[0].title}\n`}
]});

/*listSections.push({
  text: `*𝙀𝙇𝙄𝙅𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙃𝘼𝘾𝙀𝙍 𝘾𝙊𝙉  ${text}*`,
  footer: global.wm,
  title: `${htki} *♻️ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎* ${htka}`,
  buttonText: `🍄 𝙀𝙇𝙀𝙍𝙂𝙄𝙍 🍁`,
  sections
}) */

await conn.sendList(m.chat, `*Eliga su opcion de  ${text}*`, `\n${htki} *descargas* ${htka}`, `Elegir`, listSections, {quoted: fkontak});
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2']
//handler.limit = 3
//handler.register = true 
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}
