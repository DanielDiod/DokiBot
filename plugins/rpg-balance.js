let handler = async (m, {usedPrefix}) => {	
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
else who = m.sender
let name = conn.getName(who) 
m.reply(`> R P G - B A L A N C E
*Nombre:* ${name}
*Euros:* ${global.db.data.users[who].limit}🪙\n\n

Puedes comprar mas *Euros 🪙* usando el comando 
• ${usedPrefix}buy <cantidad>
• ${usedPrefix}buyall`)
}
handler.help = ['bal']
handler.tags = ['xp']
handler.command = ['bal', 'euros', 'coins', 'balance'] 
handler.register = true
export default handler
