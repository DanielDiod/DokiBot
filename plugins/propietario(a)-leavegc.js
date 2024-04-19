let handler = async (m, {conn, args, command}) => {
  await m.reply("_.🎌Adios a todos, Igna • Bot abandona el grupo_");
  await conn.groupLeave(m.chat);
};
handler.command = /^(salir|leavegc|leave|salirdelgrupo)$/i;
handler.group = true;
handler.rowner = true;
export default handler;
