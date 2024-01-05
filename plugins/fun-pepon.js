import axios from 'axios'; 
 import fetch from 'node-fetch'; 
 const handler = async (m, {command, conn}) => { 
   if (!db.data.chats[m.chat].pepon && m.isGroup) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙿𝙴𝙿𝙾𝙽 𝙴𝚂𝚃𝙰𝙽 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝚈 𝙳𝙴𝚂𝙴𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾𝚂 𝚄𝚂𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #enable modohorny*'; 

 if (command == 'pepon') { 
     const res = (await axios.get(`https://raw.githubusercontent.com/Jxtxn17/BaileyBot-MD/master/src/JSON/Gordo-PEPON.json`)).data; 
     const haha = await res[Math.floor(res.length * Math.random())]; 
     conn.sendMessage(m.chat, {image: {url: haha}, caption: `_${command}_`.trim()}, {quoted: m}); 
   } 
  };
 handler.help = ['pepon']; 
 handler.command = ['pepon']; 
 handler.tags = ['nsfw']; 
 handler.premium = true 

 export default handler;
