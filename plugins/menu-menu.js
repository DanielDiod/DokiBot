import moment from 'moment-timezone';
var shadow = async (m, {  
      command, 
      conn, 
      args,  
      usedPrefix,  
      text
  }) => {  
    const d = new Date(new Date() + 3600000); 
   const locale = "es"; 
   const week = d.toLocaleDateString(locale, {weekday: "long"}); 
   const date = d.toLocaleDateString(locale, {day: "numeric", month: "long", year: "numeric"}); 
   const _uptime = process.uptime() * 1000; 
   const uptime = clockString(_uptime); 
   const {exp, limit, dolares, role} = global.db.data.users[m.sender]; 
   const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender; 
   const username = conn.getName(who); 
   let pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg')
   const fload = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 2023, status: 1, surface : 1, message: '◈⏤͟͟͞͞ Loading...⏤͟͟͞͞◈', orderTitle: `kdndkskmnd`, thumbnail: await (await fetch(pp)).buffer(), sellerJid: '0@s.whatsapp.net' 
    }
    }
    }
   const db = "./Menu2.jpg"
  
if (command == "menu" || command == "menú") {
let uwu = `
╭───❮ *⛩️Igna - Bot⛩️* ❯───◈
║╮
║├✧••➤ ᴏᴡɴᴇʀ ᴏғɪᴄɪᴀʟ : ᴊᴇsᴜs ᴏғᴄ🍁
║├➣ ɴᴜ́ᴍᴇʀᴏ : _+51 907 913 096 ❄_
║╯
╰───────────────────────────◈
  
╭════════════════════════════⊱◈
║╭─❮ *⛩️I N F O⛩️* ❯──◈
║│
║├✧••► _.creador_
║├✧••► _.gruposofc_
║╰─────────────────────────⊱◈
║
║╭───❮ *⛩️S U B - B O T⛩️* ❯───◈
║│
║├✧••► .serbot 
║├✧••► .bots
║╰─────────────────────────⊱◈
║
║╭───❮ *🍁R E P O R T E S🍁*️ ❯───◈
║│
║├✧••► _${usedPrefix}reporte *texto*_
║├✧••► _${usedPrefix}report *texto*_
║╰─────────────────────────⊱◈
║
║╭───❮ *📥️D E S C A R G A S📥️* ❯───◈
║│
║├✧••► _${usedPrefix}imagen | image *texto*_
║├✧••► _${usedPrefix}pinterest | dlpinterest *texto*_
║├✧••► _${usedPrefix}wallpaper|wp *texto*_
║├✧••► _${usedPrefix}play | play2 *texto o link*_
║├✧••► _${usedPrefix}play.1 *texto o link*_
║├✧••► _${usedPrefix}play.2 *texto o link*_ 
║├✧••► _${usedPrefix}ytmp3 | yta *link*_
║├✧••► _${usedPrefix}ytmp4 | ytv *link*_
║├✧••► _${usedPrefix}pdocaudio | ytadoc *link*_
║├✧••► _${usedPrefix}pdocvieo | ytvdoc *link*_
║├✧••► _${usedPrefix}tw |twdl | twitter *link*_
║├✧••► _${usedPrefix}facebook | fb *link*_
║├✧••► _${usedPrefix}instagram *link video o imagen*_
║├✧••► _${usedPrefix}verig | igstalk *usuario(a)*_
║├✧••► _${usedPrefix}ighistoria | igstory *usuario(a)*_
║├✧••► _${usedPrefix}tiktok *link*_
║├✧••► _${usedPrefix}tiktokimagen | ttimagen *link*_
║├✧••► _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
║├✧••► _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
║├✧••► _${usedPrefix}mediafire | dlmediafire *link*_
║├✧••► _${usedPrefix}clonarepo | gitclone *link*_
║├✧••► _${usedPrefix}clima *país ciudad*_
║╰─────────────────────────⊱◈
║
║
║╭───❮ *⛩️ ️R P G ⛩️* ❯───◈
║│
║├✧••► _.Craft_
║├✧••► _${usedPrefix}crime_
║├✧••► _.robar | (Roba xp a otro user)_
║├✧••► _${usedPrefix}minar | minar2 | minar3 minar4_
║├✧••► _.mendigar_
║├✧••► _${usedPrefix}transferir *tipo cantidad @tag*_
║├✧••► _${usedPrefix}balance_
║├✧••► _${usedPrefix}verificar | reg_
║├✧••► _${usedPrefix}perfil | profile_
║├✧••► _${usedPrefix}experiencia | exp_
║├✧••► _${usedPrefix}top | lb | leaderboard_
║├✧••► _${usedPrefix}nivel | level | lvl_
║├✧••► _${usedPrefix}rol | rango_
║├✧••► _${usedPrefix}inventario | inventory_
║├✧••► _${usedPrefix}aventura | adventure_
║├✧••► _${usedPrefix}curar | heal_
║├✧••► _${usedPrefix}buy_
║├✧••► _${usedPrefix}reclamar | regalo | claim_
║├✧••► _${usedPrefix}cadahora | hourly_
║├✧••► _${usedPrefix}cadasemana_
║├✧••► _${usedPrefix}cadames | mes | monthly_
║├✧••► _${usedPrefix}cofre | abrircofre | coffer_
║├✧••► _${usedPrefix}myns_
║├✧••► _${usedPrefix}caza_
║├✧••► _${usedPrefix}unreg *numero de serie*_
║├✧••► _${usedPrefix}trabajar | work_
║╰─────────────────────────⊱◈
║
║╭───❮ *⛩️ENTRETENIENTO⛩️* ❯───◈
║│
║├✧••► _.es facil_
║├✧••► _${usedPrefix}mates | matemáticas | math_
║├✧••► _${usedPrefix}tictactoe | ttt *sala*_
║├✧••► _${usedPrefix}deltictactoe | delttt_
║├✧••► _${usedPrefix}topgays_
║├✧••► _${usedPrefix}topotakus_
║├✧••► _${usedPrefix}toppajer@s_
║├✧••► _${usedPrefix}topput@s_
║├✧••► _${usedPrefix}topintegrantes | topintegrante_
║├✧••► _${usedPrefix}toplagrasa | topgrasa_
║├✧••► _${usedPrefix}toplindos | toplind@s_
║├✧••► _${usedPrefix}topfamosos | topfamos@s_
║├✧••► _${usedPrefix}topparejas | top5parejas_
║├✧••► _${usedPrefix}gay | gay *@tag*_
║├✧••► _${usedPrefix}gay2 *nombre : @tag*_
║├✧••► _${usedPrefix}lesbiana *nombre : @tag*_
║├✧••► _${usedPrefix}manca *nombre : @tag*_
║├✧••► _${usedPrefix}manco *nombre : @tag*_
║├✧••► _${usedPrefix}pajero *nombre : @tag*_
║├✧••► _${usedPrefix}pajera *nombre : @tag*_
║├✧••► _${usedPrefix}puto *nombre : @tag*_
║├✧••► _${usedPrefix}puta *nombre : @tag*_
║├✧••► _${usedPrefix}rata *nombre : @tag*_
║├✧••► _${usedPrefix}love *nombre : @tag*_
║├✧••► _${usedPrefix}doxear *nombre : @tag*_
║├✧••► _${usedPrefix}doxxeame_
║├✧••► _${usedPrefix}pregunta *texto*_
║├✧••► _${usedPrefix}formarpareja_
║├✧••► _${usedPrefix}dado_
║├✧••► _${usedPrefix}verdad_
║├✧••► _${usedPrefix}reto_
║╰─────────────────────────⊱ꨄ
║
║
║╭─❮ *⛩️CONVERTIDORES️* ❯─◈
║│
║├✧••► _${usedPrefix}toimg | img | jpg *sticker*_
║├✧••► _${usedPrefix}toanime | jadianime *foto*_
║├✧••► _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
║├✧••► _${usedPrefix}tovn | vn *video o audio*_
║├✧••► _${usedPrefix}tovideo *audio*_
║├✧••► _${usedPrefix}tourl *video, imagen*_
║├✧••► _${usedPrefix}toenlace  *video, imagen o audio*_
║├✧••► _${usedPrefix}tts es *texto*_
║╰─────────────────────────⊱◈
║  
║╭─❮ *❄CREA LOGOS❄* ❯───◈
║│
║├✧••►_${usedPrefix}logos *efecto texto*_
║╰─────────────────────────⊱ꨄ
║
║╭───❮ *🍁️EFECTOS🍁️* ❯───◈
║│
║├✧••► _${usedPrefix}simpcard *@tag*_
║├✧••► _${usedPrefix}hornycard *@tag*_
║├✧••► _${usedPrefix}lolice *@tag*_
║├✧••► _${usedPrefix}ytcomment *texto*_
║├✧••► _${usedPrefix}itssostupid_
║├✧••► _${usedPrefix}pixelar_
║├✧••► _${usedPrefix}blur_
║╰─────────────────────────⊱ꨄ
║  
║╭───❮ *⛩️IMAGENES - ANIME⛩️* ❯───◈
║│
║├✧••► _${usedPrefix}lolivid_
║├✧••► _${usedPrefix}loli_
║├✧••► _${usedPrefix}neko_
║├✧••► _${usedPrefix}waifu_
║├✧••► _${usedPrefix}akira_
║├✧••► _${usedPrefix}akiyama_
║├✧••► _${usedPrefix}asuna_
║├✧••► _${usedPrefix}ayuzawa_
║├✧••► _${usedPrefix}boruto_
║├✧••► _${usedPrefix}chiho_
║├✧••► _${usedPrefix}chitoge_
║├✧••► _${usedPrefix}deidara_
║├✧••► _${usedPrefix}erza_
║├✧••► _${usedPrefix}elaina_
║├✧••► _${usedPrefix}eba_
║├✧••► _${usedPrefix}emilia_
║├✧••► _${usedPrefix}hestia_
║├✧••► _${usedPrefix}hinata_
║├✧••► _${usedPrefix}inori_
║├✧••► _${usedPrefix}isuzu_
║├✧••► _${usedPrefix}itachi_
║├✧••► _${usedPrefix}itori_
║├✧••► _${usedPrefix}kaga_
║├✧••► _${usedPrefix}kagura_
║├✧••► _${usedPrefix}kaori_
║├✧••► _${usedPrefix}keneki_
║├✧••► _${usedPrefix}kotori_
║├✧••► _${usedPrefix}kurumi_
║├✧••► _${usedPrefix}madara_
║├✧••► _${usedPrefix}mikasa_
║├✧••► _${usedPrefix}miku_
║├✧••► _${usedPrefix}minato_
║├✧••► _${usedPrefix}naruto_
║├✧••► _${usedPrefix}nezuko_
║├✧••► _${usedPrefix}sagiri_
║├✧••► _${usedPrefix}sasuke_
║├✧••► _${usedPrefix}sakura_
║╰─────────────────────────⊱ꨄ
║
║╭───❮ *⛩️MODIFICA AUDIOS⛩️* ❯───◈
║│
║├✧••► _${usedPrefix}bass_
║├✧••► _${usedPrefix}blown_
║├✧••► _${usedPrefix}deep_
║├✧••► _${usedPrefix}earrape_
║├✧••► _${usedPrefix}fast_
║├✧••► _${usedPrefix}fat_
║├✧••► _${usedPrefix}nightcore_
║├✧••► _${usedPrefix}reverse_
║├✧••► _${usedPrefix}robot_
║├✧••► _${usedPrefix}slow_
║├✧••► _${usedPrefix}smooth_
║├✧••► _${usedPrefix}tupai_
║╰─────────────────────────⊱ꨄ
║
║╭───❮ *⛩️BUSQUEDAS⛩️* ❯───◈
║│
║├✧••► _${usedPrefix}animeinfo *texto*_
║├✧••► _${usedPrefix}mangainfo *texto*_
║├✧••► _${usedPrefix}google *texto*_
║├✧••► _${usedPrefix}letra | lirik *texto*_
║├✧••► _${usedPrefix}ytsearch | yts *texto*_
║├✧••► _${usedPrefix}wiki | wikipedia *texto*_
║╰─────────────────────────⊱ꨄ
║
║╭─❮ *⛩️H E R R A M I E N T A S⛩️* ❯──◈
║│
║├✧••► _${usedPrefix}afk *motivo*_
║├✧••► _${usedPrefix}acortar *url*_
║├✧••► _${usedPrefix}del *respondre a mensaje del Bot*_
║├✧••► _${usedPrefix}calc *operacion math*_
║├✧••► _${usedPrefix}qrcode *texto*_
║├✧••► _${usedPrefix}readmore *texto1|texto2*_
║├✧••► _${usedPrefix}spamwa *numero|texto|cantidad*_
║├✧••► _${usedPrefix}styletext *texto*_
║├✧••► _${usedPrefix}traducir *texto*_
║├✧••► _${usedPrefix}morse codificar *texto*_
║├✧••► _${usedPrefix}morse decodificar *morse*_
║├✧••► _${usedPrefix}encuesta | poll *Motivo*_
║├✧••► _${usedPrefix}horario_
║╰─────────────────────────⊱ꨄ
║
║╭───❮ *⛩️STICKERS ⛩️* ❯───◈
║│
║├✧••► _${usedPrefix}sticker | s *imagen o video*_
║├✧••► _${usedPrefix}sticker | s *url de tipo jpg*_
║├✧••► _${usedPrefix}emojimix *👻+😜*_
║├✧••► _${usedPrefix}scircle | círculo *imagen*_
║├✧••► _${usedPrefix}semoji | emoji *tipo emoji*_
║├✧••► _${usedPrefix}attp *texto*_
║├✧••► _${usedPrefix}attp2 *texto*_
║├✧••► _${usedPrefix}ttp *texto*_
║├✧••► _${usedPrefix}ttp2 *texto*_
║├✧••► _${usedPrefix}ttp3 *texto*_
║├✧••► _${usedPrefix}ttp4 *texto*_
║├✧••► _${usedPrefix}ttp5 *texto*_
║├✧••► _${usedPrefix}ttp6 *texto*_
║├✧••► _${usedPrefix}dado_
║├✧••► _${usedPrefix}stickermarker *efecto : responder a imagen*_
║├✧••► _${usedPrefix}stickerfilter *efecto : responder a imagen*_
║├✧••► _${usedPrefix}cs *:* cs2_
║╰─────────────────────────⊱ꨄ
║
║╭─❮ *_⛩️Para creador & Propietario⛩️_* ❯──◈
║│
║├✧••► _${usedPrefix}join *enlace*_
║├✧••► _${usedPrefix}unete *enlace*_
║├✧••► _${usedPrefix}dardiamantes *cantidad*_
║├✧••► _${usedPrefix}darxp *cantidad*_
║├✧••► _${usedPrefix}darcoins *cantidad*_
║├✧••► _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
║├✧••► _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
║├✧••► _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
║├✧••► _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
║├✧••► _${usedPrefix}idioma | language_
║├✧••► _${usedPrefix}cajafuerte_
║├✧••► _${usedPrefix}comunicar | broadcastall | bc *texto*_
║├✧••► _${usedPrefix}broadcastchats | bcc *texto*_
║├✧••► _${usedPrefix}comunicarpv *texto*_
║├✧••► _${usedPrefix}broadcastgc *texto*_
║├✧••► _${usedPrefix}comunicargrupos *texto*_
║├✧••► _${usedPrefix}borrartmp | cleartmp_
║├✧••► _${usedPrefix}delexp *@tag*_
║├✧••► _${usedPrefix}delcoins *@tag*_
║├✧••► _${usedPrefix}deldiamantes *@tag*_
║├✧••► _${usedPrefix}reiniciar | restart_
║├✧••► _${usedPrefix}ctualizar | update_
║├✧••► _${usedPrefix}addprem | +prem *@tag*_
║├✧••► _${usedPrefix}delprem | -prem *@tag*_
║├✧••► _${usedPrefix}listapremium | listprem_
║├✧••► _${usedPrefix}añadirdiamantes *@tag cantidad*_
║├✧••► _${usedPrefix}añadirxp *@tag cantidad*_
║├✧••► _${usedPrefix}añadircoins *@tag cantidad*_
╰─────────────────────────⊱ꨄ`

await conn.sendMessage(m.chat, {   
  text: uwu,  
  contextInfo:{  
  forwardingScore: 9999999,  
  isForwarded: true,   
  mentionedJid:[m.sender],  
  "externalAdReply": {  
  "showAdAttribution": true,  
  "containsAutoReply": true,
  "renderLargerThumbnail": true,  
  "title": wm,   
  "containsAutoReply": true,  
  "mediaType": 1,   
  "thumbnail": fotogodzx,  
  "mediaUrl": `https://chat.whatsapp.com/FZ5NqcnUDsN6ZA8kBFnewH`,  
  "sourceUrl": `https://chat.whatsapp.com/FZ5NqcnUDsN6ZA8kBFnewH`  
  }  
  }  
  }, { quoted: m })
}  
if (command == "menucompleto" || command == "allmenu") {
await m.reply(`*Enviando el menu completo...*`);                 
var completomenu = `
╭───❮ *⛩️Nightcore - Bot - MD⛩️* ❯───◈
║╮
║├✧•• Creador : Daniel🍁
║├➣ ɴᴜ́ᴍᴇʀᴏ : _+51 955 918 117_
║╯
╰───────────────────────────◈
  
╭════════════════════════════⊱◈
║╭─❮ *⛩️I N F O⛩️* ❯──◈
║│
║├✧••► _.creador_
║├✧••► _.gruposofc_
║╰─────────────────────────⊱◈
║
║╭───❮ *⛩️S U B - B O T⛩️* ❯───◈
║│
║├✧••► .serbot 
║├✧••► .bots
║╰─────────────────────────⊱◈
║
║╭───❮ *🍁R E P O R T E S🍁*️ ❯───◈
║│
║├✧••► _${usedPrefix}reporte *texto*_
║├✧••► _${usedPrefix}report *texto*_
║╰─────────────────────────⊱◈
║
║╭───❮ *📥️D E S C A R G A S📥️* ❯───◈
║│
║├✧••► _${usedPrefix}imagen | image *texto*_
║├✧••► _${usedPrefix}pinterest | dlpinterest *texto*_
║├✧••► _${usedPrefix}wallpaper|wp *texto*_
║├✧••► _${usedPrefix}play | play2 *texto o link*_
║├✧••► _${usedPrefix}play.1 *texto o link*_
║├✧••► _${usedPrefix}play.2 *texto o link*_ 
║├✧••► _${usedPrefix}ytmp3 | yta *link*_
║├✧••► _${usedPrefix}ytmp4 | ytv *link*_
║├✧••► _${usedPrefix}pdocaudio | ytadoc *link*_
║├✧••► _${usedPrefix}pdocvieo | ytvdoc *link*_
║├✧••► _${usedPrefix}tw |twdl | twitter *link*_
║├✧••► _${usedPrefix}facebook | fb *link*_
║├✧••► _${usedPrefix}instagram *link video o imagen*_
║├✧••► _${usedPrefix}verig | igstalk *usuario(a)*_
║├✧••► _${usedPrefix}ighistoria | igstory *usuario(a)*_
║├✧••► _${usedPrefix}tiktok *link*_
║├✧••► _${usedPrefix}tiktokimagen | ttimagen *link*_
║├✧••► _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
║├✧••► _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
║├✧••► _${usedPrefix}mediafire | dlmediafire *link*_
║├✧••► _${usedPrefix}clonarepo | gitclone *link*_
║├✧••► _${usedPrefix}clima *país ciudad*_
║╰─────────────────────────⊱◈
║
║
║╭───❮ *⛩️ ️R P G ⛩️* ❯───◈
║│
║├✧••► _.craft
║├✧••► _${usedPrefix}crime_
║├✧••► _.robar | (Roba xp a otro user)_
║├✧••► _${usedPrefix}minar | minar2 | minar3 minar4_
║├✧••► _.mendigar_
║├✧••► _${usedPrefix}transferir *tipo cantidad @tag*_
║├✧••► _${usedPrefix}balance_
║├✧••► _${usedPrefix}verificar | reg_
║├✧••► _${usedPrefix}perfil | profile_
║├✧••► _${usedPrefix}experiencia | exp_
║├✧••► _${usedPrefix}top | lb | leaderboard_
║├✧••► _${usedPrefix}nivel | level | lvl_
║├✧••► _${usedPrefix}rol | rango_
║├✧••► _${usedPrefix}inventario | inventory_
║├✧••► _${usedPrefix}aventura | adventure_
║├✧••► _${usedPrefix}curar | heal_
║├✧••► _${usedPrefix}buy_
║├✧••► _${usedPrefix}reclamar | regalo | claim_
║├✧••► _${usedPrefix}cadahora | hourly_
║├✧••► _${usedPrefix}cadasemana_
║├✧••► _${usedPrefix}cadames | mes | monthly_
║├✧••► _${usedPrefix}cofre | abrircofre | coffer_
║├✧••► _${usedPrefix}myns_
║├✧••► _${usedPrefix}caza_
║├✧••► _${usedPrefix}unreg *numero de serie*_
║├✧••► _${usedPrefix}trabajar | work_
║╰─────────────────────────⊱◈
║
║╭───❮ *⛩️ENTRETENIENTO⛩️* ❯───◈
║│
║├✧••► _.es facil_
║├✧••► _${usedPrefix}mates | matemáticas | math_
║├✧••► _${usedPrefix}tictactoe | ttt *sala*_
║├✧••► _${usedPrefix}deltictactoe | delttt_
║├✧••► _${usedPrefix}topgays_
║├✧••► _${usedPrefix}topotakus_
║├✧••► _${usedPrefix}toppajer@s_
║├✧••► _${usedPrefix}topput@s_
║├✧••► _${usedPrefix}topintegrantes | topintegrante_
║├✧••► _${usedPrefix}toplagrasa | topgrasa_
║├✧••► _${usedPrefix}toplindos | toplind@s_
║├✧••► _${usedPrefix}topfamosos | topfamos@s_
║├✧••► _${usedPrefix}topparejas | top5parejas_
║├✧••► _${usedPrefix}gay | gay *@tag*_
║├✧••► _${usedPrefix}gay2 *nombre : @tag*_
║├✧••► _${usedPrefix}lesbiana *nombre : @tag*_
║├✧••► _${usedPrefix}manca *nombre : @tag*_
║├✧••► _${usedPrefix}manco *nombre : @tag*_
║├✧••► _${usedPrefix}pajero *nombre : @tag*_
║├✧••► _${usedPrefix}pajera *nombre : @tag*_
║├✧••► _${usedPrefix}puto *nombre : @tag*_
║├✧••► _${usedPrefix}puta *nombre : @tag*_
║├✧••► _${usedPrefix}rata *nombre : @tag*_
║├✧••► _${usedPrefix}love *nombre : @tag*_
║├✧••► _${usedPrefix}doxear *nombre : @tag*_
║├✧••► _${usedPrefix}doxxeame_
║├✧••► _${usedPrefix}pregunta *texto*_
║├✧••► _${usedPrefix}formarpareja_
║├✧••► _${usedPrefix}dado_
║├✧••► _${usedPrefix}verdad_
║├✧••► _${usedPrefix}reto_
║╰─────────────────────────⊱ꨄ
║
║
║╭─❮ *⛩️CONVERTIDORES️* ❯─◈
║│
║├✧••► _${usedPrefix}toimg | img | jpg *sticker*_
║├✧••► _${usedPrefix}toanime | jadianime *foto*_
║├✧••► _${usedPrefix}tomp3 | mp3 *video o nota de voz*_
║├✧••► _${usedPrefix}tovn | vn *video o audio*_
║├✧••► _${usedPrefix}tovideo *audio*_
║├✧••► _${usedPrefix}tourl *video, imagen*_
║├✧••► _${usedPrefix}toenlace  *video, imagen o audio*_
║├✧••► _${usedPrefix}tts es *texto*_
║╰─────────────────────────⊱◈
║  
║╭─❮ *❄CREA LOGOS❄* ❯───◈
║│
║├✧••►_${usedPrefix}logos *efecto texto*_
║╰─────────────────────────⊱ꨄ
║
║╭───❮ *🍁️EFECTOS🍁️* ❯───◈
║│
║├✧••► _${usedPrefix}simpcard *@tag*_
║├✧••► _${usedPrefix}hornycard *@tag*_
║├✧••► _${usedPrefix}lolice *@tag*_
║├✧••► _${usedPrefix}ytcomment *texto*_
║├✧••► _${usedPrefix}itssostupid_
║├✧••► _${usedPrefix}pixelar_
║├✧••► _${usedPrefix}blur_
║╰─────────────────────────⊱ꨄ
║  
║╭───❮ *⛩️IMAGENES - ANIME⛩️* ❯───◈
║│
║├✧••► _${usedPrefix}lolivid_
║├✧••► _${usedPrefix}loli_
║├✧••► _${usedPrefix}neko_
║├✧••► _${usedPrefix}waifu_
║├✧••► _${usedPrefix}akira_
║├✧••► _${usedPrefix}akiyama_
║├✧••► _${usedPrefix}asuna_
║├✧••► _${usedPrefix}ayuzawa_
║├✧••► _${usedPrefix}boruto_
║├✧••► _${usedPrefix}chiho_
║├✧••► _${usedPrefix}chitoge_
║├✧••► _${usedPrefix}deidara_
║├✧••► _${usedPrefix}erza_
║├✧••► _${usedPrefix}elaina_
║├✧••► _${usedPrefix}eba_
║├✧••► _${usedPrefix}emilia_
║├✧••► _${usedPrefix}hestia_
║├✧••► _${usedPrefix}hinata_
║├✧••► _${usedPrefix}inori_
║├✧••► _${usedPrefix}isuzu_
║├✧••► _${usedPrefix}itachi_
║├✧••► _${usedPrefix}itori_
║├✧••► _${usedPrefix}kaga_
║├✧••► _${usedPrefix}kagura_
║├✧••► _${usedPrefix}kaori_
║├✧••► _${usedPrefix}keneki_
║├✧••► _${usedPrefix}kotori_
║├✧••► _${usedPrefix}kurumi_
║├✧••► _${usedPrefix}madara_
║├✧••► _${usedPrefix}mikasa_
║├✧••► _${usedPrefix}miku_
║├✧••► _${usedPrefix}minato_
║├✧••► _${usedPrefix}naruto_
║├✧••► _${usedPrefix}nezuko_
║├✧••► _${usedPrefix}sagiri_
║├✧••► _${usedPrefix}sasuke_
║├✧••► _${usedPrefix}sakura_
║╰─────────────────────────⊱ꨄ
║
║╭───❮ *⛩️MODIFICA AUDIOS⛩️* ❯───◈
║│
║├✧••► _${usedPrefix}bass_
║├✧••► _${usedPrefix}blown_
║├✧••► _${usedPrefix}deep_
║├✧••► _${usedPrefix}earrape_
║├✧••► _${usedPrefix}fast_
║├✧••► _${usedPrefix}fat_
║├✧••► _${usedPrefix}nightcore_
║├✧••► _${usedPrefix}reverse_
║├✧••► _${usedPrefix}robot_
║├✧••► _${usedPrefix}slow_
║├✧••► _${usedPrefix}smooth_
║├✧••► _${usedPrefix}tupai_
║╰─────────────────────────⊱ꨄ
║
║╭───❮ *⛩️BUSQUEDAS⛩️* ❯───◈
║│
║├✧••► _${usedPrefix}animeinfo *texto*_
║├✧••► _${usedPrefix}mangainfo *texto*_
║├✧••► _${usedPrefix}google *texto*_
║├✧••► _${usedPrefix}letra | lirik *texto*_
║├✧••► _${usedPrefix}ytsearch | yts *texto*_
║├✧••► _${usedPrefix}wiki | wikipedia *texto*_
║╰─────────────────────────⊱ꨄ
║
║╭─❮ *⛩️H E R R A M I E N T A S⛩️* ❯──◈
║│
║├✧••► _${usedPrefix}afk *motivo*_
║├✧••► _${usedPrefix}acortar *url*_
║├✧••► _${usedPrefix}del *respondre a mensaje del Bot*_
║├✧••► _${usedPrefix}calc *operacion math*_
║├✧••► _${usedPrefix}qrcode *texto*_
║├✧••► _${usedPrefix}readmore *texto1|texto2*_
║├✧••► _${usedPrefix}spamwa *numero|texto|cantidad*_
║├✧••► _${usedPrefix}styletext *texto*_
║├✧••► _${usedPrefix}traducir *texto*_
║├✧••► _${usedPrefix}morse codificar *texto*_
║├✧••► _${usedPrefix}morse decodificar *morse*_
║├✧••► _${usedPrefix}encuesta | poll *Motivo*_
║├✧••► _${usedPrefix}horario_
║╰─────────────────────────⊱ꨄ
║
║╭───❮ *⛩️STICKERS ⛩️* ❯───◈
║│
║├✧••► _${usedPrefix}sticker | s *imagen o video*_
║├✧••► _${usedPrefix}sticker | s *url de tipo jpg*_
║├✧••► _${usedPrefix}emojimix *👻+😜*_
║├✧••► _${usedPrefix}scircle | círculo *imagen*_
║├✧••► _${usedPrefix}semoji | emoji *tipo emoji*_
║├✧••► _${usedPrefix}attp *texto*_
║├✧••► _${usedPrefix}attp2 *texto*_
║├✧••► _${usedPrefix}ttp *texto*_
║├✧••► _${usedPrefix}ttp2 *texto*_
║├✧••► _${usedPrefix}ttp3 *texto*_
║├✧••► _${usedPrefix}ttp4 *texto*_
║├✧••► _${usedPrefix}ttp5 *texto*_
║├✧••► _${usedPrefix}ttp6 *texto*_
║├✧••► _${usedPrefix}dado_
║├✧••► _${usedPrefix}stickermarker *efecto : responder a imagen*_
║├✧••► _${usedPrefix}stickerfilter *efecto : responder a imagen*_
║├✧••► _${usedPrefix}cs *:* cs2_
║╰─────────────────────────⊱ꨄ
║
║╭─❮ *_⛩️Para creador & Propietario⛩️_* ❯──◈
║│
║├✧••► _${usedPrefix}join *enlace*_
║├✧••► _${usedPrefix}unete *enlace*_
║├✧••► _${usedPrefix}dardiamantes *cantidad*_
║├✧••► _${usedPrefix}darxp *cantidad*_
║├✧••► _${usedPrefix}darcoins *cantidad*_
║├✧••► _${usedPrefix}addprem | userpremium *@tag* *cantidad*_
║├✧••► _${usedPrefix}addprem2 | userpremium2 *@tag* *cantidad*_
║├✧••► _${usedPrefix}addprem3 | userpremium3 *@tag* *cantidad*_
║├✧••► _${usedPrefix}addprem4 | userpremium4 *@tag* *cantidad*_
║├✧••► _${usedPrefix}idioma | language_
║├✧••► _${usedPrefix}cajafuerte_
║├✧••► _${usedPrefix}comunicar | broadcastall | bc *texto*_
║├✧••► _${usedPrefix}broadcastchats | bcc *texto*_
║├✧••► _${usedPrefix}comunicarpv *texto*_
║├✧••► _${usedPrefix}broadcastgc *texto*_
║├✧••► _${usedPrefix}comunicargrupos *texto*_
║├✧••► _${usedPrefix}borrartmp | cleartmp_
║├✧••► _${usedPrefix}delexp *@tag*_
║├✧••► _${usedPrefix}delcoins *@tag*_
║├✧••► _${usedPrefix}deldiamantes *@tag*_
║├✧••► _${usedPrefix}reiniciar | restart_
║├✧••► _${usedPrefix}ctualizar | update_
║├✧••► _${usedPrefix}addprem | +prem *@tag*_
║├✧••► _${usedPrefix}delprem | -prem *@tag*_
║├✧••► _${usedPrefix}listapremium | listprem_
║├✧••► _${usedPrefix}añadirdiamantes *@tag cantidad*_
║├✧••► _${usedPrefix}añadirxp *@tag cantidad*_
║├✧••► _${usedPrefix}añadircoins *@tag cantidad*_
║╰─────────────────────────⊱ꨄ
 `.trim();
 await  conn.sendMessage(m.chat,{ image:{ url:"https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg", }, caption: completomenu, 
contextInfo: { mentionedJid: [m.sender], externalAdReply: { title: `MENU - COMPLETO`, 
sourceUrl: "http://wa.me/51955198117", mediaType: 1, showAdAttribution: true, thumbnailUrl: "https://telegra.ph/file/b8acfe3c320b12bfb3d7b.jpg", 
}, }, }, { quoted: m,});}};
         
  shadow.command = [
  "menu",
  "menú",
  "menucompleto",
  "allmenu"
  ];
  shadow.tags = ["internet"]  
  export default shadow 
  
  function clockString(ms) { 
   const h = isNaN(ms) ? "--" : Math.floor(ms / 3600000); 
   const m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60; 
   const s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60; 
   return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":"); 
 } 
  
 function ucapan() { 
   const time = moment.tz("America/Los_Angeles").format("HH"); //America/Los_Angeles  Asia/Jakarta   America/Toronto 
  
   var res = "🌉Buenas madrugadas"; 
  
   if (time >= 4) { 
     res = "🌇Buenos Días"; 
   } 
  
   if (time >= 11) { 
     res = "🏙️Buenas Tardes"; 
   } 
  
   if (time >= 15) { 
     res = "🌆Buenas tardes"; 
   } 
  
   if (time >= 17) { 
     res = "🌃Buenas noches"; 
   } 
  
   return res; 
 }
