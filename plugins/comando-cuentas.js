var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "ytmp4" || command == "ytvmp4") {
    let mp4 = `*_[🛑 hey alto ] este comando cambio, ahora es :_
_${usedPrefix}videomp4_`.trim();

    m.reply(mp4);
  }

  if (command == "play") {
    var play = `*_[ 🛑 HEY ALTO ] ESTE COMANDO CAMBIO, AHORA ES :_
_${usedPrefix}MUSICA_*`.trim();
    m.reply(play);
  }
};
handler.command = ["ytmp4", "play", "", ""];
handler.tags = ["internet"];
export default handler
