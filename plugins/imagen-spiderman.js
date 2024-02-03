let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Spiderman`.trim(), m)
};
handler.help = ["spiderman"];
handler.tags = ["internet"];
handler.command = /^(spiderman)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/f749593b7f9874317e546.jpg",
  "https://telegra.ph/file/67625e3a7495777b4beff.jpg",
  "https://telegra.ph/file/586c6c21829d57f71fab3.jpg",
  "https://telegra.ph/file/90111b3b09a7ec599b13f.jpg",
  "https://telegra.ph/file/7a4919ebd5687312b1e64.jpg",
];

handler.limit = 3;
