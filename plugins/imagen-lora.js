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
  "https://telegra.ph/file/df73fbe13f23c8367ca74.jpg",
  "https://telegra.ph/file/dce3eba5946d3962dfb70.jpg",
  "https://telegra.ph/file/ea11c90185d6caf550bcd.jpg",
  "https://telegra.ph/file/b89bda12fe332c1bf680c.jpg",
];

handler.limit = 3;
