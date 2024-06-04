let handler = async (m, { conn, text }) => {

let _idioma = '🚩 *Seleccione su idioma*\n\n> Idiomas disponibles:\nes _(Español)_\nen _(Inglés)_\n\n`Ejemplo:`\n.idioma es'
if (!text) {
return conn.sendButton(m.chat, _idioma, '🍟 Seleccione su idioma', null, [['Español 🇲🇽', `.idioma es`], ['Inglés 🇺🇸', `.idioma en`]], null, null, m)
}
let choice = text.includes('es') ? 'es' : text.includes('en') ? 'en' : null
if (!choice) {
return m.reply('Solo puedes seleccionar español o inglés')
}
global.lenguajeGB = choice
return m.reply(choice === 'es' ? 'Idioma configurado a Español 🇲🇽' : 'Language set to English 🇺🇲')

}
handler.command = /^lenguage|lenguaje|idioma$/i
handler.rowner = true
handler.botAdmin = true
export default handler
