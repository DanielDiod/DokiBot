
import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
    if (!text) throw `✳️ Seleccióne el archivo *${usedPrefix + command}* Lil Peep hate my life`;
    m.react('📀');
    
    let result = await yts(text);
    let ytres = result.videos;
    

    let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `${index}┃ ${v.title}`,
            rows: [
                {
                    header: '🎶 MP3',
                    title: "",
                    description: `▢ ⌚ *Duración:* ${v.timestamp}\n▢ 👀 *Visualizaciónes* ${v.views}\n▢ 📌 *Titulo* : ${v.title}\n▢ 📆 *Fecha:* ${v.ago}\n`, 
                    id: `${usedPrefix}fgmp3 ${v.url}`
                },
                {
                    header: "🎥 MP4",
                    title: "" ,
                    description: `▢ ⌚ *Duración:* ${v.timestamp}\n▢ 👀 *Visualizaciónes* ${v.views}\n▢ 📌 *Titulo* : ${v.title}\n▢ 📆 *Fecha:* ${v.ago}\n`, 
                    id: `${usedPrefix}fgmp4 ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, '  ≡ *IGNA MUSIC*🔎', `\n 📀 Resultados de:\n *${text}*`, `Click Aqui`, ytres[0].image, listSections, m);
};

handler.help = ['play2']
handler.tags = ['dl']
handler.command = ['play2', 'playvid2', 'playlist', 'playlista'] 
handler.disabled = false

export default handler
