let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {

  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n${usedPrefix + command} https://vt.tiktok.com/yqyjPX/`
  if (!args[0].match(/tiktok/gi)) throw `url salah`

  let res = await fetch(API('zeks', '/api/download/tiktok', { url: args[0] }, 'apikey'))
  if (!res.ok) throw eror
  let json = await res.json()
  // if (!json.status) throw json
  await m.reply(wait)
  await conn.sendFile(m.chat, json.nowm, '', `${json.caption}\n\n*🌹Nih udah di Download^_^🌹*`, m)

}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok(dl)?|tt(dl)?)$/i

handler.limit = true

module.exports = handler
