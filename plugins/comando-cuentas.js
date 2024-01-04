var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "ytmp4" || command == "ytvmp4") {
    let mp4 = `*_[🛑 hey alto ] este comando cambio, ahora es :_
_${usedPrefix}videomp4_`.trim();

    m.reply(mp4);
  }

  if (command == "cuentas") {
    var play = `*[🟢 ACTUALIZANDO 🟢]*\n\n*Se actualizo con exito las cuenta de hoy*\n
*${usedPrefix}recuerda que se actualiza las cuentas disponibles cada 24 horas*\n*Solicita las cuentas disponible con el siguiente comando 👇🏼*\n\n.plataformas\n\n*Disfruta de las cuentas 👋🏼*`.trim();
    m.reply(play);
  }
};
handler.command = ["ytmp4", "cuentas", "", ""];
handler.tags = ["internet"];
export default handler
