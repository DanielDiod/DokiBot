let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 lora`.trim(), m)
};
handler.help = ["lora"];
handler.tags = ["internet"];
handler.command = /^(lora)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/05f973588e0d6a1eb8516.jpg",
];

handler.limit = 3;
