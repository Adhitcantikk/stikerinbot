let handler = m => m

handler.all = async function (m) {
    if (!db.data.settings[this.user.jid].antispam) return // antitroli aktif?
    if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
        m.reply('Njirr jan pake fake troli_-\n\n' + require('util').format(m.key), null)
        //await this.modifyChat(m.chat, 'clear', { //kalo gak mau clear chat blok tiga baris dari sini
            //includeStarred: false
        //}).catch(console.log)
        this.reply(global.owner[0] + '@s.whatsapp.net', `
Pelaku pengirim troli @${m.sender.split`@`[0]}
ID: ${m.isGroup ? m.chat : m.sender}
Nama: ${m.isGroup ? this.getName(m.chat) : this.getName(m.sender)}
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
    }
}

module.exports = handler
