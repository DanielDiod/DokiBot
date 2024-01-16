import fs from "fs" 
 let handler = m => m 
 handler.all = async function (m) { 
 let bot = `Codigo gay` 
 let vn = [pepon1, pepon2, img1].getRandom() 
 let chat = global.db.data.chats[m.chat] 
 if (/^pepas$/i.test(m.text) && !chat.isBanned) {  
 conn.sendPresenceUpdate('recording', m.chat)     
 conn.sendFile(m.chat, vn, 'bot.jpg', bot, m, true, { type: 'conversation', ptt: true, sendEphemeral: true, quoted: estilo })} 
 return !0 
 } 
 export default handler
