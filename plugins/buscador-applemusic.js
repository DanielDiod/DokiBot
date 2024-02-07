//Créditos del código Starlight team 

import cheerio from 'cheerio';
import axios from 'axios';
import fetch from 'node-fetch';

let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `*Formato incorrecto*\nEjemplo:\n\n${usedPrefix + command} con mi prima`;
try {
let searchResults = await searchApplemusic(args[0]);
let teks = searchResults.result.map((v, i) => 
`「 *APPLE  - S E A R C H* 」
• *Titulo:* ${v.name}
• *Duración:* ${v.duracion}
• *Vistas:* ${v.views}
• *Link:* ${v.url}
---------------------------------------------------\n`).join('\n\n');
if (searchResults.result.length === 0) {
teks = '*Sin resultados*';
}
m.reply(teks);
} catch (e) {
}};
handler.command = /^(appleearch|applemusicsearch)$/i;
export default handler;
async function searchApplemusic(search) {
  try {
    const response = await axios.get(`https://music.apple.com/us/search?search=${search}`);
    const html = response.data;
    const $ = cheerio.load(html);
    const result = [];
    $('ul#usSearchResult > li.pcusListItem').each(function(a, b) {
      const _title = $(b).find('a').attr('name');
      const _duration = $(b).find('var.duracion').text().trim();
      const _views = $(b).find('var.views').text().trim();
      const _url = 'https://music.apple.com/us/browse' + $(b).find('a').attr('href');
      const hasil = { title: _title, duration: _duration, views: _views, url: _url };
      result.push(hasil);
    });
    
    return { result };
  } catch (error) {
    console.error('Ocurrió un error al buscar en Pornhub:', error);
    return { result: [] };
  }
      }
