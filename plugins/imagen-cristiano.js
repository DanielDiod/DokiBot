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
  "https://telegra.ph/file/b7da157436bf29c5e8d21.jpg",
  "https://telegra.ph/file/830088a43cc5f132a1657.jpg",
  "https://telegra.ph/file/ca2311503805a502b3ccb.jpg",
  "https://telegra.ph/file/3e01b5da8300f4d6bea0f.jpg",
  "https://telegra.ph/file/a75a5f41e864b86210f42.jpg",
];

handler.limit = 3;
