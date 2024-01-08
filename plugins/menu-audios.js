import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  try {
    const pp = imagen1;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `
    
   𝐇𝐨𝐥𝐚, ${taguser}

𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒 𝐏𝐀𝐑𝐀 𝐀𝐃𝐐𝐔𝐈𝐑𝐈𝐑 𝐌𝐎𝐍𝐊𝐈 𝐁𝐎𝐓 🐵: 

» 𝐆𝐫𝐚𝐭𝐮𝐢𝐭𝐨 𝐞𝐧 𝐓𝐞𝐫𝐦𝐮𝐱
߷ 𝗧𝗲 𝗮𝘆𝘂𝗱𝗮𝗺𝗼𝘀 𝗮 𝗶𝗻𝘀𝘁𝗮𝗹𝗹𝗮𝗿 𝗲𝗹 𝗯𝗼𝘁 𝗰𝗼𝗻 𝗹𝗮𝘀 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝘆 𝗻𝗼𝗺𝗯𝗿𝗲𝘀 𝗲𝘀𝘁𝗮𝗯𝗹𝗲𝗰𝗶𝗱𝗼𝘀

» 𝐌𝐨𝐧𝐤𝐢𝐁𝐨𝐭 𝐞𝐧 𝐭𝐮 𝐠𝐫𝐮𝐩𝐨 

💰 𝟯 𝘀𝗼𝗹𝗲𝘀 𝘅 𝗴𝗿𝘂𝗽𝗼 

» 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨 𝐞𝐧 𝐓𝐞𝐫𝐦𝐮𝐱 
߷ 𝗧𝗲 𝗮𝘆𝘂𝗱𝗮𝗺𝗼𝘀 𝗮 𝗶𝗻𝘀𝘁𝗮𝗹𝗮𝗿 𝗲𝗹 𝗯𝗼𝘁 𝗰𝗼𝗻 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝘆 𝗱𝗮𝘁𝗼𝘀 𝗮 𝘁𝘂 𝗴𝘂𝘀𝘁𝗼 

💰 𝟮𝟬 𝘀𝗼𝗹𝗲𝘀 ( 𝗠𝗮𝗻𝗱𝗮𝗺𝗼𝗮 𝗲𝗹 𝗔𝗣𝗞 𝗱𝗲 𝗧𝗲𝗿𝗺𝘂𝘅 𝗲𝗻 𝗰𝗮𝘀𝗼 𝗻𝗼 𝗹𝗼 𝘁𝗲𝗻𝗴𝗮𝗻 ) 

» 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨 𝐞𝐧 𝐏𝐚𝐠𝐢𝐧𝐚 
߷ 𝗧𝗲 𝗮𝘆𝘂𝗱𝗮𝗺𝗼𝘀 𝗮 𝗶𝗻𝘀𝘁𝗮𝗹𝗮𝗿 𝗲𝗹 𝗯𝗼𝘁 𝗰𝗼𝗻 𝗶𝗺𝗮𝗴𝗲𝗻𝗲𝘀 𝘆 𝗱𝗮𝘁𝗼𝘀 𝗮 𝘁𝘂 𝗴𝘂𝘀𝘁𝗼, 𝗲𝘀𝘁𝗮 𝗮𝗰𝘁𝗶𝘃𝗼 𝟮𝟰/𝟳 

💰 𝟯𝟬 𝘀𝗼𝗹𝗲𝘀 + 𝟭𝟬 𝘀𝗼𝗹𝗲𝘀 𝘅 𝗺𝗲𝘀 

❗𝗦𝗜 𝗧𝗨 𝗙𝗢𝗥𝗠𝗔 𝗗𝗘 𝗣𝗔𝗚𝗢 𝗡𝗢 𝗘𝗦𝗧𝗔 𝗣𝗨𝗘𝗗𝗘𝗦 𝗖𝗢𝗡𝗦𝗨𝗟𝗧𝗔𝗥 𝗔 𝗟𝗢𝗦 𝗔𝗗𝗠𝗜𝗡𝗦 

❗𝗡𝗢 𝗢𝗙𝗥𝗘𝗖𝗘𝗠𝗢𝗦 𝗗𝗘𝗩𝗢𝗟𝗨𝗖𝗜𝗢𝗡, 𝗔𝗦𝗘𝗚𝗨𝗥𝗔𝗧𝗘 𝗔𝗟 𝟭𝟬𝟬% 𝗤𝗨𝗘 𝗗𝗘𝗦𝗘𝗔𝗦 𝗔𝗗𝗤𝗨𝗜𝗥𝗜𝗥 𝗔𝗟𝗚𝗨𝗡 𝗕𝗢𝗧

❗𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢 𝗗𝗘 𝗘𝗡𝗧𝗥𝗘𝗚𝗔 𝗘𝗦 𝗠𝗔𝗫𝗜𝗠𝗢 𝟯 𝗗𝗜𝗔𝗦 ( 𝗗𝗢𝗠𝗜𝗡𝗚𝗢𝗦 𝗡𝗢 𝗧𝗥𝗔𝗕𝗔𝗝𝗔𝗠𝗢𝗦 )`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m);
  }
};
handler.command = /^(precios|precio|precio|información|informacion|precios|precio|precio|precio|info|comprar)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
