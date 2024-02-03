let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Cristiano Ronaldo`.trim(), m)
};
handler.help = ["cristiano"];
handler.tags = ["internet"];
handler.command = /^(cristiano)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/b20127fd54a1fd462faf2.jpg",
  "https://telegra.ph/file/82b96fef625a47a4b1250.jpg",
  "https://telegra.ph/file/9b2d2a129def992084406.jpg",
  "https://telegra.ph/file/edb670744120a67b254d6.jpg",
  "https://telegra.ph/file/2609b9d8006f4b96e223e.jpg",
];

handler.limit = 3;
