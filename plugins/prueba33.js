let media = './storage/logos/Menu2.jpg'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `conn.relayMessage(from, { viewOnceMessage: { message: { interactiveMessage: { header: { title: 'Lista' }, body: { text: '💤' }, nativeFlowMessage: { buttons: [ { name: 'single_select', buttonParamsJson: JSON.stringify({ title: 'Click', sections: [ {title: 'Lista', highlight_label: 'Yaoi', rows: [{ title: 'menu1', id: 'menu1' }]}, { highlight_label: 'ON', rows: [{ header: 'Test', title: 's',description: 's', id: 'tes'}] }, { highlight_label: 'ON', rows: [ { header: 'Test', title: 'status', description: 'status', id: 'te' }]}]})}], messageParamsJson: '' }}}}}, {})		
break`
await conn.sendFile(m.chat, media, 'Curiosity.jpg', str, fkontak)}
handler.tags = ['main']
handler.command = /^plist22|Plist|plist$/i
handler.exp = 35
handler.register = true
export default handler
