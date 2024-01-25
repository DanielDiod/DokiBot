import axios from 'axios'
import cheerio from 'cheerio'
import fg from 'api-dylux'

let handler = async (m, { conn, args, command }) => {
	if (!args[0]) return conn.reply(m.chat, '*• Ingresa el enlace de Facebook*', m)
	try {
	await m.react('🕓')
	let config = {
        'id': args[0],
        'locale': 'id'
      }
    let { data, status } = await axios('https://getmyfb.com/process', {
        method: 'POST',
        data: new URLSearchParams(Object.entries(config)),
        headers: {
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
          "cookie": "PHPSESSID=914a5et39uur28e84t9env0378; popCookie=1; prefetchAd_4301805=true"
        }
      })
      let $ = cheerio.load(data)
      let HD = $('div.container > div.results-download > ul > li:nth-child(1) > a').attr('href')
      let SD = $('div.container > div.results-download > ul > li:nth-child(2) > a').attr('href')
	await conn.sendMessage(m.chat, { video: { url: HD || SD }, caption: `${global.listo}` }, { quoted: m})
	await m.react('✅')
	} catch {
	try {
    let result = await fg.fbdl(args[0])
    await conn.sendFile(m.chat, result.videoUrl, 'fb.mp4', listo, m)
    await m.react('✅')
} catch {
await conn.reply(m.chat, `${global.error}`, m).then(_ => m.react('✖️'))
}}}
handler.help = ['fb *<link fb>*']
handler.tags = ['downloader'] 
handler.command = /^(facebook|fb|facebookdl|fbdl)$/i
handler.limit = 1
handler.register = true
export default handler
