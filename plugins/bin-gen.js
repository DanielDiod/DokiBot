import namso from "namso-cc-gen"
let handler = async (m, { conn, text, command, usedPrefix, args }) => {
    let response = args.join(' ').split('|')
    if (!response[0].includes(`x`)) throw `Asegurese de que los digitos contengan una 'x' en los espacios faltantes`
    //let split = '|'
    //if (!text.includes(split)) throw `test`
    //if (`${response[1]}`.length != 2) throw `El codigo de mes debe tener 2 digitos`
    //if (`${response[2]}`.length > 4) throw `El codigo de año solo debe contener 2 digitos`
    //let msgwait = await conn.sendMessage(m.chat, {text: wait}, {quoted: m})
    let mes = response[1] || "rnd";
    let ano = response[2] || "rnd";
    let cvc = response[3] || "rnd";
    let res = await namso.gen({
        ShowCCV: true,
        CCV: cvc,
        ShowExpDate: true,
        ShowBank: false,
        Month: mes,
        Year: ano,
        Quantity: "10",
        Bin: response[0],
        Format: "PIPE"
       })
       conn.sendMessage(m.chat, {text: res}, {quoted: m})
}
handler.command = handler.help = ['gen']
handler.tags = ['tools']

export default handler
