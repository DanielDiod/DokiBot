
const { en, es, ar, id, pt, rs} = require('./libs/idiomas/total-idiomas.js')
let user = global.db.data.users[m.sender]
if (user.Language == 'es') {
global.lenguaje = es
} else if (user.Language == 'en') {
global.lenguaje = en
} else if (user.Language == 'ar') {
global.lenguaje = ar 
} else if (user.Language == 'id') { 
global.lenguaje = id
} else if (user.Language == 'pt') { 
global.lenguaje = pt
} else if (user.Language == 'rs') { 
global.lenguaje = rs
} else {
global.lenguaje = es
}
    
 }
 handler.help = ['language <es-en..>']
 handler.tags = ['main']
 handler.command = ['language', 'lenguaje', 'lang', 'idioma'] 
 
 export default handler
