//CÓDIGO CREADO POR elrebelde21 : https://github.com/elrebelde21
const handler = async (m, {conn, isPrems}) => {
const date = global.db.data.users[m.sender].crime + 3600000; //3600000 = 1 hs
if (new Date - global.db.data.users[m.sender].crime < 3600000) return m.reply(`*『⚠️』LA POLICÍA TE TIENE VIGILADO EN ESTE MOMENTO, VUELVE EN* : ${msToTime(date - new Date())}`)
const exp = Math.floor(Math.random() * 9000)
const diamond = Math.floor(Math.random() * 150)
const money = Math.floor(Math.random() * 9000)
if (global.db.data.users[m.sender].exp < 0) return m.reply(`〔🪙〕${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp)
if (global.db.data.users[m.sender].limit < 0) return m.reply(`〔🪙〕${pickRandom(global.robar)} ${diamond} 💎 Diamante`).catch(global.db.data.users[m.sender].limit += diamond)
if (global.db.data.users[m.sender].money < 0) return m.reply(`〔🪙〕${pickRandom(global.robar)} ${money} 🪙ShanaCoins`).catch(global.db.data.users[m.sender].money += money) 
let or = ['text', 'text2', 'text3', 'text4']; 
let media = or[Math.floor(Math.random() * 4)]
global.db.data.users[m.sender].crime = new Date * 1;
if (media === 'text') return m.reply(`〔🪙〕${pickRandom(global.robar)} ${exp} XP`).catch(global.db.data.users[m.sender].exp += exp) 
if (media === 'text2') return m.reply(`〔🚓〕${pickRandom(global.robmal)} ${exp} XP`).catch(global.db.data.users[m.sender].exp -= exp) 
if (media === 'text3') return m.reply(`〔🪙〕*${pickRandom(global.robar)}*\n\n${diamond} 💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄\n${money} 🪙 SHANACOINS`).catch(global.db.data.users[m.sender].limit += diamond).catch(global.db.data.users[m.sender].money += money)
if (media === 'text4') return m.reply(`〔🚓〕${pickRandom(global.robmal)}\n\n${diamond} 💎 𝐃𝐈𝐀𝐌𝐀𝐍𝐓𝐄\n${money} 🪙 SHANACOINS`).catch(global.db.data.users[m.sender].limit -= diamond).catch(global.db.data.users[m.sender].money -= money) 
}
handler.help = ['robar'];
handler.tags = ['xp'];
handler.command = /^(crime|Crime)$/i
handler.register = true
export default handler;

function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
seconds = Math.floor((duration / 1000) % 60),
minutes = Math.floor((duration / (1000 * 60)) % 60),
hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
hours = (hours < 10) ? "0" + hours : hours
minutes = (minutes < 10) ? "0" + minutes : minutes
seconds = (seconds < 10) ? "0" + seconds : seconds
return hours + " Hora(s) " + minutes + " Minuto(s)"}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())];
}

global.robar = ['Violaste a la persona que dijo que los bots sea crean por termux y obtuviste :', 'Mataste al otaku de tu grupo , obtuviste :', 'Secuestraste a tu ex , recibiste una recompensa valiosa de 💰. !Te cuidado la próxima vez! obtuviste:', 'Los Chamos fueron generosos y recibistes una cantidad de :', 'Trataste de enamorar a la administradora del grupo', 'Mandaste a asesinar a tu presidente recibistes una recompensa de :', 'le robarte a un famoso un valor de :'];
global.robmal = ['La policía te llego a ver pediste :', 'Trataste de robarle a un policía pero perdiste en el intento , pediste:', 'No pudiste escapar de la Policía 🚔🤡, perdiste :']
