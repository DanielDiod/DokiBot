let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `*Hola usuario estos son los grupos ofc de Shana-bot*

📎 *Shana-Bot 🈴*
 
https://chat.whatsapp.com/JKTtlxj8K2U4utBtFXhd9Z

📎 *Canal ⭐*

https://whatsapp.com/channel/0029VaBpO8M3rZZdwkGFIP33

⚙️ *Grupos En Colaboración:*

1 _Shana-Bot & NovaBot_

https://chat.whatsapp.com/C7g96LhthOb6I8QMye9GrI

2 SakuraBot & Shana-Bot

 https://chat.whatsapp.com/HjtosKShIYcE0xldUFSnkF

─────────────
🧿Si se restableció los enlaces comunicate con mi creador usa el comando #creador para comunicarte con el 🌟`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}
/*conn.sendHydrated(m.chat, str, `𝙂𝘼𝙏𝘼 𝘿𝙄𝙊𝙎 - 𝘼𝙎𝙄𝙎𝙏𝙀𝙉𝘾𝙄𝘼\n\n\n` + wm, media, 'https://github.com', 'Shana-Bot', null, null, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', '.cuentassb'],
['🎁 𝘿𝙤𝙣𝙖𝙧 | 𝘿𝙤𝙣𝙖𝙩𝙚', '.donar'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']
], m,)}*/

handler.command = /^grupos|gruposofc$/i
handler.exp = 33

export default handler
