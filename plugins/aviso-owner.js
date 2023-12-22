let handler = async (m, { conn, usedPrefix, command, paypal }) => {
conn.sendMessage(m.chat, {text:'*AVISO: Yo "Daniel", he tomado la decisión de retirarme de todo lo relacionado con el bot o temas similares,por el motivó de algunos problema familiares y que por ahora no me encuentro apto para seguir continuando esto quiere decir, que en algún momento quedará obsoleto y/o algunos comandos dejarán de funcionar, Agradezco su preferencia durante el recorrido por este mundo de los bots.*\n\n*MonkiBot pasa a quedar en manos de colaboradores, y como principal representante, @sopiix*\n\n*agradecer a amigos que siempre estuvieron apoyando a este lindo proyecto , pero es hora de decir adios 👋🏼*'},  { quoted: m })
}
handler.help = ['pagina']
handler.tags = ['info']
handler.command = /^aviso$/i
export default handler
