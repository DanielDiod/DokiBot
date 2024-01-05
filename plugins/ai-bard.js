/creditos @AzamiJs

import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) return conn.reply(m.chat, `[❗𝐈𝐍𝐅𝐎❗] *𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉𝘼 𝙋𝙀𝙏𝙄𝘾𝙄𝙊𝙉*\n\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊, !bard Conoces MonkiBot?`, m, fake, )

try {

conn.sendPresenceUpdate('composing', m.chat)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
return conn.reply(m.chat, `*[❗𝐈𝐍𝐅𝐎❗] 𝙊𝘾𝙐𝙍𝙍𝙄𝙊́ 𝙐𝙉 𝙁𝘼𝙇𝙇𝙊*`, m, fake, )
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['ai']

handler.premium = false

export default handler
