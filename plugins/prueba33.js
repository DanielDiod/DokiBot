import pkg from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg

var handler = async (m, { conn, usedPrefix }) => {

let msg = generateWAMessageFromContent(m.chat, {
  viewOnceMessage: {
    message: {
        conn.relayMessage(from, { viewOnceMessage: { message: { interactiveMessage: { header: { title: 'Lista' }, body: { text: '💤' }, nativeFlowMessage: { buttons: [ { name: 'single_select', buttonParamsJson: JSON.stringify({ title: 'Click', sections: [ {title: 'Lista', highlight_label: 'Yaoi', rows: [{ title: 'menu1', id: 'menu1' }]}, { highlight_label: 'ON', rows: [{ header: 'Test', title: 's',description: 's', id: 'tes'}] }, { highlight_label: 'ON', rows: [ { header: 'Test', title: 'status', description: 'status', id: 'te' }]}]})}], messageParamsJson: '' }}}}}, {})		

await conn.relayMessage(msg.key.remoteJid, msg.message, { messageId: msg.key.id })

}
handler.command = /^(botones)$/i

export default handler  
