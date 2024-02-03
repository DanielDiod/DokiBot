let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 CristianoRonaldo`.trim(), m)
};
handler.help = ["cristiano"];
handler.tags = ["internet"];
handler.command = /^(cristiano)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/f63e8fdc4b5b04e7bc20c.jpg",
  "https://telegra.ph/file/ad094777d59bab113a2a4.jpg",
  "https://telegra.ph/file/df2c58e93b091a1ab5055.jpg",
  "https://telegra.ph/file/52d9768b081df6c66c028.jpg",
  "https://telegra.ph/file/ae7d1003c7527806678df.jpg",
];

handler.limit = 3;
