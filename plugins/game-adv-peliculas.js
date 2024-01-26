const peliculas = new Map()
const movies = [
    { emoji: "🚢🧊", title: "Titanic" },
    { emoji: "🦖🌴", title: "Parque Jurásico" },
    { emoji: "🦸‍♂️🦸‍♀️🤖", title: "Los Vengadores" },
    { emoji: "🍫🏠📦", title: "Mi Pobre Angelito" },
    { emoji: "🕷️🕸️🦸‍♂️", title: "El Hombre Araña" },
    { emoji: "🏴‍☠️⚓🍻", title: "Piratas del Caribe" },
    { emoji: "🔫🕵️‍♂️🕵️‍♀️", title: "Hombres de Negro" },
    { emoji: "🧙‍♂️🔮🐉", title: "Harry Potter" },
    { emoji: "🌍🌊🐟", title: "Buscando a Nemo" },
    { emoji: "👑🦁🌅", title: "El Rey León" },
    { emoji: "🚀🏌️‍♂️🌕", title: "Apollo 13" },
    { emoji: "🧊❄️🏔️", title: "Frozen" },
    { emoji: "🦖🦕🌋", title: "Parque Jurásico" },
    { emoji: "🌿🐢🦖", title: "Parque Jurásico" },
    { emoji: "👑🏰🧙‍♂️", title: "El Señor de los Anillos" },
    { emoji: "🌚🔫🍹", title: "Pulp Fiction" },
    { emoji: "🧠🔬🍃", title: "Milagros Inesperados" },
    { emoji: "🚗🌪️👠", title: "Mad Max: Furia en el Camino" },
    { emoji: "📖🥀🦁", title: "Las Crónicas de Narnia" },
    { emoji: "🚁🏝️🐅", title: "Avatar" }
]

for (const movie of movies) {
peliculas.set(movie.title.toLowerCase(), movie.emoji)
}

const gam = new Map()
function getRandomInt(min, max) {
min = Math.ceil(min)
max = Math.floor(max)
return Math.floor(Math.random() * (max - min + 1)) + min
}

let handler = async (m, { conn }) => {
let users = global.db.data.users[m.sender]
let peli = movies[Math.floor(Math.random() * movies.length)]
gam.set(m.sender, peli.title.toLowerCase())
conn.reply(m.chat, `*• Adivina el nombre de la película con solo emojis:*\n\n${peli.emoji}`, m)
}

handler.before = async (m, { conn }) => {
let users = global.db.data.users[m.sender]
let pelicula = gam.get(m.sender)
if (!pelicula) return
if (m.text.toLowerCase() === pelicula) {
const premio = ['2000', '3000', '1000']
let prems = [7, 10, 15, 20, 5]
let fee = prems[Math.floor(Math.random() * prems.length)]
let ramdon = premio[Math.floor(Math.random() * premio.length)]
users.exp += parseInt(ramdon)
users.limit += fee
conn.reply(m.chat, `*• Has ganado:* \n- ${ramdon} XP \n- ${fee} Coins💰`, m)
gam.delete(m.sender);
} else if (m.text.toLowerCase() === 'stop') {
conn.reply(m.chat, `*• La película correcta era:* ${movies.find(movie => movie.title.toLowerCase() === pelicula).title}`, m)
gam.delete(m.sender)
}}
handler.help = ['jueguito']
handler.tags = ['game']
handler.command = ['advpeli']
export default handler
