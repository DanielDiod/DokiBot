import axios from 'axios';
import cheerio from 'cheerio';
import request from 'request';
import acrcloud from 'acrcloud';

let acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})

let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || q.mediaType || ''
    if (/video|audio/.test(mime)) {
      let buffer = await q.download()
      let { status, metadata } = await acr.identify(buffer)
      if (status.code !== 0) {
        buffer = await q.download() 
        let retry = await acr.identify(buffer)
        if (retry.status.code !== 0) {
          throw retry.status.msg; 
        }
        metadata = retry.metadata;
      }
      let { title, artists, album, genres, release_date } = metadata.music[0]
      let txt = `🌿⁀➷ *Titulo* : ${title}${artists ? `\n🐢⁀➷ *Artista* : ${artists.map(v => v.name).join(', ')}` : ''}`
      txt += `${album ? `\n🌿⁀➷ *Album* : ${album.name}` : ''}${genres ? `\n🐢⁀➷ *Genero* : ${genres.map(v => v.name).join(', ')}` : ''}\n`
      txt += `🌿⁀➷ *Fecha de lanzamiento* : ${release_date}`
    // await conn.reply(m.chat, txt, m)
      let img = await (await fetch(`https://i.postimg.cc/B6CDnZG3/wonder-egg-priority-icons.jpg`)).buffer()
      await conn.sendMessage(m.chat, { text: txt, contextInfo: { mentionedJid: [m.sender], forwardingScore: 9, externalAdReply: { title: '𝐒𝐇𝐀𝐍𝐀 𝐁𝐎𝐓', body: 'Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ', thumbnail: img, thumbnailUrl: img, sourceUrl: 'https://www.instagram.com/Jxtxn17/', mediaType: 1 }}}, { quoted: m })
    } else {
      return await conn.sendMessage(m.chat, { text: "*Responde a un audio o video*", contextInfo: {   mentionedJid: [m.sender], forwardingScore: 9, externalAdReply: { title: '𝐒𝐇𝐀𝐍𝐀 𝐁𝐎𝐓', body: 'Wʜᴀᴛꜱᴀᴘᴘ Bᴏᴛ - Mᴜʟᴛɪ Dᴇᴠɪᴄᴇ', thumbnail: img, thumbnailUrl: img, sourceUrl: 'https://www.instagram.com/Jxtxn17/', mediaType: 1 }}}, { quoted: m })
    }
  } catch (error) {

  }
}
handler.help = ['whatmusic *<audio/video>*']
handler.tags = ['tools']
handler.command = /^(whatmusic|shazam)$/i
handler.limit = 2
export default handler
