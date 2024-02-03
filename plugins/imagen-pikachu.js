let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Pikachu`.trim(), m)
};
handler.help = ["pikachu"];
handler.tags = ["internet"];
handler.command = /^(pikachu)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/5a382d2ee0f08306e9970.jpg",
  "https://telegra.ph/file/ccdcd6a92c4f6b1c11a00.jpg",
  "https://telegra.ph/file/260660a398e0d07360ba6.jpg",
  "https://telegra.ph/file/aba8cbbe1a1c7dc727a19.jpg",
  "https://telegra.ph/file/1fbb857f22b30578ae1b6.jpg",
];

handler.limit = 3;
