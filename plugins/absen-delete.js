let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `Tidak ada absen berlangsung digrup ini!\n\nketik *${usedPrefix}mulaiabsen* untuk memulai absen`.trim(), 'Klik di bawah untuk mulai absen!', 'Mulai Absen', `${usedPrefix}mulaiabsen`, m)
        throw false
    }
    delete conn.absen[id]
    m.reply(`Absen dihapus`)
}
handler.help = ['hapusabsen']
handler.tags = ['absen']
handler.command = /^(del(ete)?|hapus)absen$/i
handler.group = true
handler.admin = true
module.exports = handler
