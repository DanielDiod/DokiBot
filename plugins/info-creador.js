let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;おDanịel.xyz⁩;;\nFN:Sopiix🙈⁩\nORG:おDanịel🇦🇱⁩\nTITLE:\nitem1.TEL;waid=51907913096:51977835959\nitem1.X-ABLabel:おDanịel🇦🇱⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:おDanịel🇦🇱\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'おDanịel.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
