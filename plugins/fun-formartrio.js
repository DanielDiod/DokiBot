let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
let c
do c = ps.getRandom()
while (b === a)
m.reply(`*Hey!!! ${toM(a)}, ${toM(b)} y ${toM(c)} han pensado en hacer un trio? ustedes 3 hacen un buen trio 😳😏*`, null, {
mentions: [a, b, c],
})}
handler.help = ['formartrio']
handler.tags = ['fun']
handler.command = ['formartrio','formartrios']
handler.group = true
export default handler 
