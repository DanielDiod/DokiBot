let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Esta es la agenda de esta semana 🧃`.trim(), m)
};
handler.help = ["agendasemanal"];
handler.tags = ["internet"];
handler.command = /^(Jsmkajsmsldudb)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/e4c8ba362a31e900bb70a.jpg",
];

handler.limit = 3;
