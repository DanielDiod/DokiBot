var handler = async (m, {command, conn, args, usedPrefix, text}) => {
  if (command == "serbot --code" || command == "serbot") {
    let mp4 = `*_[🛑 hey alto ] este comando cambio, ahora es :_
_${usedPrefix}code_`.trim();

    m.reply(mp4);
  }

  if (command == "allmenu") {
    var play = `*_[ 🛑 HEY ALTO ] ESTE COMANDO CAMBIO, AHORA ES :_
_${usedPrefix}menu_*`.trim();
    m.reply(play);
  }
};
handler.command = ["ytmp4", "play", "", ""];
handler.tags = ["internet"];
export default handler
