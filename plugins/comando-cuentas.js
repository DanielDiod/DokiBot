var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "ytmp4" || command == "ytvmp4") {
    let mp4 = `*_[🛑 hey alto ] este comando cambio, ahora es :_
_${usedPrefix}videomp4_`.trim();

    m.reply(mp4);
  }

  if (command == "cuentas") {
    var play = `*_[ 🛑 HEY ALTO ] SE ESTAN ACTUALIZANDO LAS CUENTAS RECUERDA QUE CADA 24 HORAS SE ACTULIZA LAS CUENTAS DISPONIBLES\n_
_${usedPrefix}By MonkiBot_*`.trim();
    m.reply(play);
  }
};
handler.command = ["ytmp4", "cuentas", "", ""];
handler.tags = ["internet"];
export default handler
