let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Charmander`.trim(), m)
};
handler.help = ["Charmander"];
handler.tags = ["internet"];
handler.command = /^(Charmander)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/ee988056a9144313e32e9.jpg",
  "https://telegra.ph/file/66ee9ac67e6b850cab10a.jpg",
  "https://telegra.ph/file/a3baaf3fb82d5248c4c09.jpg",
  "https://telegra.ph/file/16257cd2952824fd42d25.jpg",
  "https://telegra.ph/file/b5b7111a7a0ec25244e97.jpg",
];

handler.limit = 3;
