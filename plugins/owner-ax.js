let handler = (m) => m;
handler.all = async function (m) {


  if (/^Daniel|Daniel|Daniel|Daniel|Daniel|Daniel$/i.test(m.text)) {
    var ax = `𝙲𝚁𝙴𝙰𝙳𝙾𝚁 @${global.suittag} 𝚄𝙽 𝙷𝚄𝙼𝙰𝙽𝙾 𝚃𝙴 𝙰 𝙸𝙽𝚅𝙾𝙲𝙰𝙳𝙾`;


    m.reply(ax, m.chat, { mentions: conn.parseMention(ax)}); 
  return !0
}}
export default handler
