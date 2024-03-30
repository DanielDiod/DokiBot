import fetch from 'node-fetch' 
let handler = async function (m, { conn, text, usedPrefix }) {
const apiUrl = `https://api.apis.net.pe/v2/reniec/dni?numero=${text}&token=apis-token-7946.-LODBsCL6vKrK7tS4sh0l3fgi6wK6ElW`
fetch(apiUrl).then(response => {
if (!response.ok) {
return console.log('La página no esta funcionando actualmente')
}
return response.json()
}).then(data => {
const formattedResult = `
 DNI: ${text}
NOMBRE: ${data.nombres}
APELLIDO PATERNO: ${data.apellidoPaterno}
APELLIDO MATERNO: ${data.apellidoMaterno}
`
m.reply(formattedResult.trim())
}).catch(error => {
console.error('Error:', error)
})
}
handler.command = /^(dni)$/i
export default handler