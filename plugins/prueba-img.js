let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Goku`.trim(), m)
};
handler.help = ["goku"];
handler.tags = ["internet"];
handler.command = /^(goku)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/df73fbe13f23c8367ca74.jpg",
  "https://telegra.ph/file/df73fbe13f23c8367ca74.jpg",
  "https://telegra.ph/file/dce3eba5946d3962dfb70.jpg",
  "https://telegra.ph/file/ea11c90185d6caf550bcd.jpg",
  "https://telegra.ph/file/8e398585865bc94030ce7.jpg",
];

handler.limit = 3;
