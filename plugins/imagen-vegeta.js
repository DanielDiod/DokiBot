let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Vegeta`.trim(), m)
};
handler.help = ["Vegeta"];
handler.tags = ["internet"];
handler.command = /^(Vegeta)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/1a04073abb1951612fc7f.jpg",
  "https://telegra.ph/file/ccdcd6a92c4f6b1c11a00.jpg",
  "https://telegra.ph/file/260660a398e0d07360ba6.jpg",
  "https://telegra.ph/file/aba8cbbe1a1c7dc727a19.jpg",
  "https://telegra.ph/file/1fbb857f22b30578ae1b6.jpg",
];

handler.limit = 3;
