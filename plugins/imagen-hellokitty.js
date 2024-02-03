let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 HelloKitty`.trim(), m)
};
handler.help = ["hellokitty"];
handler.tags = ["internet"];
handler.command = /^(hellokitty)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/f7caab6d527f9f05ee62c.jpg",
  "https://telegra.ph/file/04f5e603c1f9e0e3d96dd.jpg",
  "https://telegra.ph/file/7edec9dbf21fb338e1adb.jpg",
  "https://telegra.ph/file/3086bd60dbdd808dc4789.jpg",
  "https://telegra.ph/file/d80db2847746fdf8bbe16.jpg",
];

handler.limit = 3;
