let handler = async (m, {conn, usedPrefix, text}) => {
  if (isNaN(text) && !text.match(/@/g)) {
  } else if (isNaN(text)) {
    var number = text.split`@`[1];
  } else if (!isNaN(text)) {
    var number = text;
  }

  if (!text && !m.quoted)
    return conn.reply(
      m.chat,
      `> ERROR\n\n_.🎌Use el comandó correctamente_\n\n_Ejemplo : mencione a alguien y escriba ${usedPrefix}demote 🏳️_`,
      m
    );
  if (number.length > 13 || (number.length < 11 && number.length > 0))
    return conn.reply(m.chat, `_.🎌El número ingresado es incorrecto, por favor ingrese el número correcto_`, m);

  try {
    if (text) {
      var user = number + "@s.whatsapp.net";
    } else if (m.quoted.sender) {
      var user = m.quoted.sender;
    } else if (m.mentionedJid) {
      var user = number + "@s.whatsapp.net";
    }
  } catch (e) {
  } finally {
    conn.groupParticipantsUpdate(m.chat, [user], "demote");
    conn.reply(m.chat, `_🎌Ordenes Recibidas _\n\n> By Igna • Bot`, m);
  }
};
handler.help = ["*593xxx*", "*@usuario*", "*responder chat*"].map((v) => "demote " + v);
handler.tags = ["group"];
handler.command = /^(demote|quitarpoder|quitaradmin)$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;
export default handler;
