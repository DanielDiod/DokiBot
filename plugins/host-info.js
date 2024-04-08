let handler = async (m, { conn, command, usedPrefix }) => {
let cafirexostxt = `
> Optimice la implementación de *IGNA • BOT* mediante la integración en un servicio de alojamiento de alto rendimiento y mejor calidad.\n

\`\`\`USA IGNA • BOT EN INFINITY HOST\`\`\`

Que esperas para usar *IGNA • BOT* en los mejores servidores de alto rendimiento y de bajo precio. El Staff de *IGNA • BOT* y *INFINITY HOST* hacen posible que puedas ejecutar las funciones que tanto te gusta usar de *IGNA • BOT* sintiendo una experiencia fluida y de calidad.

🔵 \`\`\`Información del Host\`\`\`

💻 *Página*
https://www.cafirexos.com

✨ *Dashboard*
https://dash.cafirexos.com

⚙️ *Panel*
https://panel.cafirexos.com

📢 *Canal de WhatsApp*
https://whatsapp.com/channel/0029VaFVSkRCMY0KFmCMDX2q

💥 *Grupo de WhatsApp*
https://chat.whatsapp.com/FBtyc8Q5w2iJXVl5zGJdFJ

📧 *Correo*
contacto@cafirexos.com

🧑‍💻 *Contacto (Diego Flores)*
https://wa.me/50497150165
`
await conn.sendFile(m.chat, 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo.png', 'fantasy.jpg', cafirexostxt.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🔰𝐈𝐧𝐟𝐢𝐧𝐢𝐭𝐲-𝐖𝐚 𝑯𝒐𝒔𝒕𝒊𝒏𝒈 🔰`,
body: `✅ Hosting de Calidad`,
mediaType: 1,
sourceUrl: accountsgb,
thumbnailUrl: 'https://grxcwmcwbxwj.objectstorage.sa-saopaulo-1.oci.customer-oci.com/n/grxcwmcwbxwj/b/cafirexos/o/logos%2Flogo_2.png'
}}
}, { mentions: m.sender })

}
handler.command = /^(cafirexos|prueba38)$/i
export default handler
