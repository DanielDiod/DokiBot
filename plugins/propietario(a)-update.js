import {execSync} from "child_process"
let handler = async (m, {conn, text}) => {
  await m.reply(`*🚀 𝘾 𝘼 𝙍 𝙂 𝘼 𝙉 𝘿 𝙊*`)
  try {
    if (global.conn.user.jid == conn.user.jid) {
      let stdout = execSync("git pull" + (m.fromMe && text ? " " + text : ""))
      await await await conn.reply(m.chat, stdout.toString(), m)
    }
  } catch {
    var update = execSync("git remote set-url origin https://github.com/DanielDiod/DokiBot.git && git pull")
    await await await m.reply(update.toString())
  }
};
handler.help = ["update"]
handler.tags = ["owner"]
handler.command = /^update|actualizar$/i
handler.rowner = true
export default handler
