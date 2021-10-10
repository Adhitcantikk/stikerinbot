let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
${pickRandom(['Wah Mantap Dia Masih Punya Bapack\nPasti Bapack Nya Kuli :v\nAwowkwokwwok\n*#CandabOs*', 'Aowkwwo Disini Ada Yteam:v\nSabar Bro Ga Punya Bapack\n*#Camda*', 'Bjir Bapack Dia Ternyata Sudah Cemrai\nSedih Bro Gua Liatnya\nTapi Nih Tapi :v\nTetep Ae Dia Yteam Aowkwowkw Ngakak :v', 'Jangan #cekbapaknya terus Broo :v\nKasian Kalo Beneran Dia Yteam\nNtar Tersinggung Kan\nYahahaha Hayyuk:v'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['cekbapaknya @tag']
handler.tags = ['fun']
handler.command = /^cekbapak?nya$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

