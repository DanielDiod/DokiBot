let handler = async (m, {conn, command}) => {
  let url = pack[Math.floor(Math.random() * pack.length)];
    await conn.sendFile( 
     m.chat, 
     url, 
     "gimage.jpg", 
     ` 
 Batman`.trim(), m)
};
handler.help = ["Batman"];
handler.tags = ["internet"];
handler.command = /^(Batman)$/i;
export default handler;

global.pack = [
  "https://telegra.ph/file/084db0d4b04550c658b45.jpg",
  "https://telegra.ph/file/776fd84d669c8e36a5172.jpg",
  "https://telegra.ph/file/408e4930808436fb27abe.jpg",
  "https://telegra.ph/file/8a2e0e2ec53928c4686e7.jpg",
  "https://telegra.ph/file/d85e012316b01a4c7be9c.jpg",
];

handler.limit = 3;
