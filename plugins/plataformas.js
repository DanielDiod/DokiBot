let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*PLATAFORMAS GENERADAS ✅*\n\n*Estas son las siguiente plataformas generadas de hoy 👇🏼*\n\n*CANVA PRO 🖥️*\n\n💌https://www.canva.com/brand/join?token=DGDare_uZD1QkiKpg6qzRw&referrer=team-invite\nhttps://www.canva.com/brand/join?token=jX8irnzB_EzxoP220MU1iQ&referrer=team-invite\n\n*HBO MAX 💜*\n\n💌leonardodelgadosanta@gmail.com:Colombiazomus4\nletonape23@gmail.com:Emmateo2319\nlas4gris.unicas@gmail.com:GS15171825\nlcsandymh@hotmail.com:sam02120212\nlamouniereduardo62@gmail.com:520201Du\nlarita0216@gmail.com:30112018Oli.\nkissmelle15@gmail.com:Pechugaconsal34\nlalitosbruik@gmail.com:Lalitos3012\nlambadahunter@gmail.com:akylol100\nkevin-brugman@hotmail.com:RiseAgainst1995\nkeyser.perez.150817@gmail.com:Maximo1105\nkikamev@gmail.com:Fernanda01@#\n\n*AGRADECER AL CREADOR EN EL GRUPO OFICIAL DEL BOT 👇🏼*\n\nhttps://chat.whatsapp.com/GbrlQFMXcMb39vOpNaNsZ2\n\nBY MONKIBOT 🐒*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^plataformas$/i
export default handler
