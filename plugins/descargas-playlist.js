import yts from 'yt-search';
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
if (!text) conn.reply(m.chat,  `🚩 Ingresa lo que deseas buscar en YouTube.*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: mg, body: wm, previewType: 0, thumbnail: img.getRandom(), sourceUrl: global.md}}})    
    let result = await yts(text);
    let ytres = result.videos;
    
let listSections = [];
    for (let index in ytres) {
        let v = ytres[index];
        listSections.push({
            title: `• Opción : [ ${index} ]`,
            rows: [
                {
                    header: 'Audio',
                    title: "",
                    description: `✩ *Titul:* ${v.title}\n✩ *Duracion:* ${v.timestamp}\n✩ *Vistas* ${v.views}\n✩ *Subido* ${v.ago}\n`, 
                    id: `${usedPrefix}ytmp3 ${v.url}`
                },
                {
                    header: "Video",
                    title: "" ,
                    description: `✩ *Titulo:* ${v.title}\n✩ *Duracion:* ${v.timestamp}\n✩ *Vistas:* ${v.views}\n✩ *Subido:* ${v.ago}\n`, 
                    id: `${usedPrefix}ytmp4 ${v.url}`
                }
            ]
        });
    }

    await conn.sendList(m.chat, `Busqueda de 🔎: ${text}`, `\n${wm}`, `Seleciones Aqui`, listSections, m);
};
handler.help = ['playlist']
handler.tags = ['dl']
handler.command = /^playlist|ytbuscar|yts(earch)?$/i
handler.limit = 1
handler.register = true

export default handler
