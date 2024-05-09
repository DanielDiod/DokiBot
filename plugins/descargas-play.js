import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `𝙀𝙎𝘾𝙍𝙄𝘽𝘼 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝙊 𝙏𝙄𝙏𝙐𝙇𝙊\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} Billie Eilish - Bellyache*\n\n𝙒𝙍𝙄𝙏𝙀 𝙏𝙃𝙀 𝙉𝘼𝙈𝙀 𝙊𝙍 𝙏𝙄𝙏𝙇𝙀\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Billie Eilish - Bellyache*`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `*✧═════ ${vs} ═════✧*

ও 𝙏𝙄𝙏𝙐𝙇𝙊 | 𝙏𝙄𝙏𝙇𝙀
»  ${yt_play[0].title}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝙋𝙐𝘽𝙇𝙄𝘾𝘼𝘿𝙊 | 𝙋𝙐𝘽𝙇𝙄𝙎𝙃𝙀𝘿
» ${yt_play[0].ago}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝘿𝙐𝙍𝘼𝘾𝙄𝙊𝙉 | 𝘿𝙐𝙍𝘼𝙏𝙄𝙊𝙉
» ${secondString(yt_play[0].duration.seconds)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝙑𝙄𝙎𝙏𝘼𝙎 | 𝙑𝙄𝙀𝙒𝙎
» ${MilesNumber(yt_play[0].views)}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝙐𝙍𝙇
» ${yt_play[0].url}
﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘﹘
ও 𝙀𝙉𝙑𝙄𝘼𝘿𝙊 ${additionalText}, 𝘼𝙂𝙐𝘼𝙍𝘿𝙀 𝙐𝙉 𝙈𝙊𝙈𝙀𝙉𝙏𝙊

*✧═════ ${vs} ══════✧*`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['𝗠 𝗘 𝗡 𝗨 ☘️', `${usedPrefix}menu`]], null, null, m)

let listSections = [];             
listSections.push({
title: comienzo + ' 📡 𝗧𝗜𝗣𝗢𝗦 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 ' + fin,
rows: [{ header: "𓃠 𝗔 𝗨 𝗗 𝗜 𝗢 (Opcion 1)", title: "", id: `${usedPrefix}yta ${yt_play[0].url}`, description: `${yt_play[0].title}\n` }, { header: "𓃠 𝗔 𝗨 𝗗 𝗜 𝗢 (Opcion 2)", title: "", id: `${usedPrefix}play.1 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "𓃠 𝗔 𝗨 𝗗 𝗜 𝗢   𝗗 𝗢 𝗖", title: "", id: `${usedPrefix}ytmp3doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "𓃠 𝗩 𝗜 𝗗 𝗘 𝗢 (Opcion 1)", title: "", id: `${usedPrefix}ytv ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{ header: "𓃠 𝗩 𝗜 𝗗 𝗘 𝗢 (Opcion 2)", title: "", id: `${usedPrefix}play.2 ${yt_play[0].url}`, description: `${yt_play[0].title}\n` },
{header: "𓃠 𝗩 𝗜 𝗗 𝗘 𝗢   𝗗 𝗢 𝗖", title: "", id: `${usedPrefix}ytmp4doc ${yt_play[0].url}`, description: `${yt_play[0].title}\n`}
]});

/*listSections.push({
  text: `*𝙀𝙇𝙄𝙅𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙃𝘼𝘾𝙀𝙍 𝘾𝙊𝙉  ${text}*`,
  footer: global.wm,
  title: `${htki} *♻️ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎* ${htka}`,
  buttonText: `🍄 𝙀𝙇𝙀𝙍𝙂𝙄𝙍 🍁`,
  sections
}) */

await conn.sendList(m.chat, `*𝙀𝙇𝙄𝙅𝘼 𝙌𝙐𝙀 𝙑𝘼 𝙃𝘼𝘾𝙀𝙍 𝘾𝙊𝙉  ${text}*`, `\n${htki} *♻️ 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙎* ${htka}`, `🍄 𝙀𝙇𝙀𝙍𝙂𝙄𝙍 🍁`, listSections, {quoted: fkontak});
} catch (e) {
await conn.reply(m.chat, `Notifique al owner del bot ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ error en el comando ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2', 'play3', 'play4']
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
