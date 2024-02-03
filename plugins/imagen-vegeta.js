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
  "https://telegra.ph/file/541a5523424c67ca65bed.jpg",
  "https://telegra.ph/file/ae1323315708ff728ff01.jpg",
];

handler.limit = 3;
