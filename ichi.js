/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

//Module 
require('./settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const chalk = require('chalk')
const fs = require('fs')
const moment = require('moment-timezone')
const util = require('util')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const hx = require('hxz-api')
const { aiovideodl, savefrom, snapsave,  instagramdl, instagramdlv2, instagramdlv3, instagramdlv4 } = require('@bochilteam/scraper')
const xa = require('xfarr-api')
const bocil = require('@bochilteam/scraper')
let yts = require('yt-search')
let remobg = require('remove.bg')
let cron = require('node-cron')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)

sender2 = m.sender

//API WEBSITE
let lolhuman = ['AryaXyz']
var lolapi = lolhuman[Math.floor(Math.random() * lolhuman.length)]

//Waktu
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 

//Lib
let { snaptik, mediafireDl, instagramstalk, tiktokstalk, githubstalk, facebookDl, getAudioWithTubeMp3, pinterest, wallpaper, wikimedia, quotesAnime } = require('./lib/scraper')
let { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('./lib/uploader')
let { smsg, getGroupAdmins, formatp, parseMillisecondss, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom } = require('./lib/myfunc')
let { toAudio, toPTT } = require('./lib/converter')
let { yta, ytv } = require('./lib/y2mate')
let _prem = require("./lib/premium");

global.limitawal = {
  premium: 'Unlimited',
  free: 10
}

         const checkRegisteredUser = (sender2) => {
             let status = false
             Object.keys(readlimit).forEach((i) => {
                 if (readlimit[i].id === sender2) {
                     status = true
                 }
             })
             return status
         }

         const checkBannedUser = (sender2) => {
             let status = false
             Object.keys(readbanned).forEach((i) => {
                 if (readbanned[i].id === sender2) {
                     status = true
                 }
             })
             return status
         }

const limitAdd = (sender2) => {
              let position = false
             Object.keys(readlimit).forEach((i) => {
                 if (readlimit[i].id == sender2) {
                     position = i
                 }
             })
             if (position !== false) {
                 readlimit[position].limit += 1
                 fs.writeFileSync('./database/userlimit.json', JSON.stringify(readlimit, null, 1))
             }
         }

autobio = true
//Module Exports
module.exports = ichi = async(ichi, m, chatUpdate, store) => {
try {
  //console.log(m)
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = ichi.user.id ? ichi.user.id.split(":")[0]+"@s.whatsapp.net" : ichi.user.id
const isOwner = [ichi.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == ichi.user.id ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await ichi.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)
const isRegistered = checkRegisteredUser(m.sender)
  const isBanned = checkBannedUser(m.sender)
  const isPremium = isOwner ? true : _prem.checkPremiumUser(m.sender, premium)
  const isBaileys = quoted.isBaileys


const reply = (texto) => {
			ichi.sendMessage(from, { text: texto, mentions: [m.sender] }, {	quoted: m })
		}

try {
let chats = readgroup[m.chat]
if (typeof chats !== 'object') readgroup[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
} else readgroup[m.chat] = {
antilink: false
}
} catch (err) {
    ichi.sendMessage(gruplog, { text: `*[ ERROR LOG ]*\n\n${moment().tz('Asia/Jakarta').format("HH:mm:ss DD/MM/YYYY")}\nError di bagian ${__filename}\n${budy || m.mtype}\n` + util.format(err) })
}


// Antilink
if (readgroup[m.chat].antilink == true) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return //  buat ngediem in daripada nyepam m.reply(mess.botAdmin)
var gclink = (`https://chat.whatsapp.com/`+await ichi.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
ichi.groupParticipantsUpdate(from, [m.sender], 'remove')
}
}

if (autobio){
  const timestamp = speed();
  const latensi = speed() - timestamp
  if (autobio === false) return
  let settingstatus = 0;
  if (new Date() * 1 - settingstatus > 1000) {
  ichi.setStatus(`MA x RJA | Runtime Bot : ${runtime(process.uptime())}`)
  settingstatus = new Date() * 1;
  }}
  
		if (m.mtype == 'viewOnceMessage') {
			let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : @${m.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    
    💫 *MessageType* : ${m.mtype}`
     reply(teks)
			await sleep(500)
			m.copyNForward(from, true, {
				readViewOnce: true
			}, {
				quoted: mek
			}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
		}

//Self / Public
if (!ichi.public) {
if (!m.key.fromMe && !isOwner) return
}
  
                   const checkLimit = (sender2) => {
             let found = false
                     for (let lmt of readlimit) {
                         if (lmt.id === sender2) {
                             let limitCounts = limitawal.free - lmt.limit
                             if (limitCounts <= 0) return reply(`*Maaf ${pushname} limit anda telah habis*\n\n_Note : Limit reset setiap jam 00:00 WIB\nPengen limitnya unlimited?, Bisa kirim .buypremium, Bisa kirim .buypremium_`)
                             reply(`*「 LIMIT COUNT 」*\n
Sisa limit anda : ${limitCounts}

NOTE : Pengen limitnya unlimited?, Bisa kirim .buypremium`)
                             found = true
                         }
                     }
                     if (found === false) {
                         let pushlimit = { id: m.sender, username: pushname, limit: 0, time: moment().tz('Asia/Jakarta').format("HH:mm:ss DD/MM/YYYY") }
                         readlimit.push(pushlimit)
                         fs.writeFileSync('./database/userlimit.json', JSON.stringify(readlimit, null, 1))
                     }
                    }

                    const isLimit = (sender2) => {
      let position = false;
      for (let i of readlimit) {
        if (i.id === sender2) {
          let limits = i.limit;
          if (limits >= limitawal.free) {
            position = true;
            reply(`*Maaf ${pushname} limit anda telah habis*\n\n_Note : Limit reset setiap jam 00:00 WIB\nPengen limitnya unlimited?, Bisa kirim .buypremium_`);
            return true;
          } else {
            readlimit;
            position = true;
            return false;
          }
        }
      }
      if (position === false) {
        const limitpush = { id: m.sender, username: pushname, limit: 0, time: moment().tz('Asia/Jakarta').format("HH:mm:ss DD/MM/YYYY") }
        readlimit.push(limitpush);
        fs.writeFileSync(
          "./database/userlimit.json",
          JSON.stringify(readlimit, null, 1)
        );
        return false;
      }
    };
      
          const bayarLimit = (sender2, amount) => {
             let position = false
             Object.keys(readlimit).forEach((i) => {
                 if (readlimit[i].id === sender2) {
                     position = i
                 }
             })
             if (position !== false) {
                 readlimit[position].limit -= amount
                 fs.writeFileSync('./database/userlimit.json', JSON.stringify(readlimit, null, 1))
             }
         }

    //Alasan Banned
    var found = false;
  Object.keys(readbanned).forEach((i) => {
    for (let cekban of readbanned) {
      if (cekban.id === sender2) {
        found = i;
      }
global.messs = {
  banned: `Kamu telah terbanned dengan alasan "${cekban.alasanban}"`,
}
    }
  })

  // Premium Check
  _prem.expiredCheck(ichi, premium)
  
  //Reset Limit every 00:00 WIB
  cron.schedule('0 0 * * *', () => {
          Object.keys(readlimit).forEach(async (user) => {
          readlimit[user].limit -= readlimit[user].limit
            await fs.writeFileSync(
            "./database/userlimit.json",
              JSON.stringify(readlimit, null, 1)
            )
      })
  }, {
scheduled: true,
timezone: "Asia/Jakarta"
})

//Read Message
if (m.message) {
  ichi.readMessages([m.key])
}
  
//Push Message To Console
  if (m.message) {
    //if (m.isBaileys == true) return
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ICHI \x1b[1;37m]', moment().tz('Asia/Jakarta').format("HH:mm:ss DD/MM/YYYY"), chalk.cyan(budy || m.mtype), 'Dari', chalk.yellow(m.sender.split("@")[0]), chalk.yellow(pushname), 'Di', chalk.red(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}

await ichi.sendPresenceUpdate('available', m.chat)
//type WAPresence = 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
  
  switch (command) {
    case 'daftar':
      case 'register':
      if (isRegistered) return reply(`Kamu telah terdaftar di Database YaSya BOT`)
      if (isLimit(m.sender)) return;
      reply(`Kamu telah terdaftar di Database dengan Nama: ${pushname}`)
      setTimeout(() => {
        checkLimit(m.sender);
      },600)
      break
        case 'ban':
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      if (!m.quoted && !text) return m.reply('Yang mau di Banned siapa? Setan??')
      let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      const obj = {
        id: users,
        alasanban: text.replace(/[^a-z A-Z]/g, '') || 'Yo Ndak Tau Kok Tanya Saya'
  };
  readbanned.push(obj);
      fs.writeFileSync("./database/userbanned.json", JSON.stringify(readbanned, null, 1));
      reply(`Nomor wa.me/${users.split("@")[0]} telah di Banned.`);
      break
    case 'unban':
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      if (!m.quoted && !text) return m.reply('Yang mau di UnBan siapa? Setan??')
      let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
       var found = false;
      Object.keys(readbanned).forEach((i) => {
        if (readbanned[i].id === userss) {
          found = i;
        }
      })
      if (found !== false) {
        const banupdated = readbanned[found];
        readbanned.splice(readbanned.indexOf(banupdated),1);
        fs.writeFileSync(
          "./database/userbanned.json",
          JSON.stringify(readbanned, null, 1)
        );
        reply(`Nomor wa.me/${userss.split("@")[0]} telah di unban!`);
      } else {
        reply(`Maaf, nomor ${userss.split("@")[0]} tidak terdaftar di database!`);
      }
        break;
    case 'ceklimit':
      case 'checklimit':
      case 'sisalimitt':
      checkLimit(m.sender);
      break
    case 'bayarlimit':
    case 'giftlimit':
      case 'berilimit':
              if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
        if (args.length == 0) return reply(`*Contoh:* .giftlimit 628xxx 9999`);
        const nomerr = args[0].replace(/[^0-9]/g, '')
        const jmla = args[1];
        if (jmla == 0) return reply(`Minimal gift limit adalah 1`);
        if (!nomerr)
          return reply(`Maaf format salah\nContoh : .giftlimit 628xxx 20`);
        const cysz = nomerr + "@s.whatsapp.net";
        var found = false;
        Object.keys(readlimit).forEach((i) => {
          if (readlimit[i].id === cysz) {
            found = i;
          }
        });
        if (found !== false) {
          readlimit[found].limit -= jmla;
          const updated = readlimit[found];
          const result = `*「 GIFT KUOTA LIMIT 」*\n\nGift kuota limit sukses pada ${moment().tz('Asia/Jakarta').format("HH:mm:ss DD/MM/YYYY")}\n• User : wa.me/${updated.id.replace(
            "@s.whatsapp.net",
            ""
          )}\n• Limit: ${limitawal.free - updated.limit}`;
          console.log(readlimit[found]);
          fs.writeFileSync(
            "./database/userlimit.json",
            JSON.stringify(readlimit, null, 1)
          );
          reply(result);
        } else {
          reply(`Maaf, nomor ${nomerr} tidak terdaftar di database!`);
        }
      break;
    case 'buylimit':
      reply(`List harga LIMIT.

1K      100 LIMIT
2K      200 LIMIT
3K      300 LIMIT
4K      400 LIMIT
5K      500 LIMIT
10K    1000 LIMIT
15K    2000 LIMIT

*Pembayaran bisa apapun kecuali PULSA*`);
          donate = `*DANA*
0895401223315\n
*SHOPEEPAY*
0895401223315\n
*GOPAY*
0895401223315\n
*OVO*
0895401223315\n
*SEABANK*
0895401223315\n
*LINKAJA*
0895401223315\n
*PAYPAL*
https://paypal.me/alvianto17\n
*SAWERIA*
https://saweria.co/alvianto17\n\n\n
*NOTE PENTING:*\n
*_Untuk pengguna GOPAY, DANA, OVO, SHOPEE, LINKAJA yang belum premium bisa men-scan kode QR_*\n
*_UNTUK YANG SUDAH TRANSFER HARAP LANGUSNG CHAT OWNER AGAR DAPAT SEGERA DIPROSES DAN SERTAKAN BUKTI TRANSFER_*`
                qris = fs.readFileSync(`./media/qr.jpg`)
                ichi.sendMessage(from, {caption: donate, image: qris})
      break
    
//Premium
        case 'prem':
      case 'premium':
      if (!isOwner) return reply('List Harga Premium\n\n1 Hari Rp.1000\n3 Hari Rp.3000\n7 Hari Rp.6000\n1 Bulan Rp.20000\n\n*Fitur Premium*\n1. Unlimited limit\n2. Bisa invite bot ke grup kalian dengan .join linkgrup\nBot akan keluar sendiri setelah anda mendapatkan notifikasi premium telah habis')
      if (args.length < 1) return reply(`Penggunaan :\n*${prefix}prem* @tag waktu\n*${prefix}prem* nomor waktu\n\nContoh : ${command} @tag 30d`)
      let premm = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (!args[1]) return reply(`Mau yang berapa hari?`)
      _prem.addPremiumUser(premm, args[1], premium)
      ichi.sendMessage(premm, { text: `Selamat anda adalah member Premium YaSya Bot selama ${args[1].replace(/[^0-9]/g, '')} Hari`})
      ichi.sendMessage(from, { text: `Sukses menambahkan wa.me/${premm.split("@")[0]} kedalam member Premium selama ${args[1].replace(/[^0-9]/g, '')} Hari`})
      break
    case 'unprem':
    case 'unpremium':
      if (!isOwner) return reply(mess.botOwner)
      let premmm = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
      var found = false;
      Object.keys(premium).forEach((i) => {
        if (premium[i].id === premmm) {
          found = i;
        }
      })
      if (found !== false) {
        const premupdated = premium[found];
        premium.splice(premium.indexOf(premupdated),1);
        fs.writeFileSync(
          "./database/premium.json",
          JSON.stringify(premium, null, 1)
        );
        reply(`Nomor wa.me/${premmm.split("@")[0]} telah di hapus dari daftar *Premium*!`);
      } else {
        reply(`Maaf, nomor ${premmm.split("@")[0]} tidak terdaftar di database *Premium*!`);
      }
      break
    case 'cekpremium':
    case 'cekprem':
    case 'checkpremium':
    case 'checkprem':
      if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}daftarprem* untuk membeli premium`)
                if (isOwner) return reply(`Kamu tu Owner,  buat apa check premium`)
                if (_prem.getPremiumExpired(m.sender, premium) == "PERMANENT") return reply(`PERMANENT`)
      let cekvip = parseMillisecondss(_prem.getPremiumExpired(m.sender, premium) - Date.now())
                let premiumnya = `*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`
                reply(premiumnya)
      break
    case 'buypremium':
    case 'buyprem':
    case 'belipremium':
    case 'beliprem':
      reply('List Harga Premium\n\n1 Hari Rp.1000\n3 Hari Rp.3000\n7 Hari Rp.6000\n1 Bulan Rp.20000\n\n*Fitur Premium*\n1. Unlimited limit\n2. Bisa invite bot ke grup kalian dengan .join linkgrup\nBot akan keluar sendiri setelah anda mendapatkan notifikasi premium telah habis')
      break
    case 'menu': case 'help':
      if (isBanned) return reply(messs.banned);
      let txttt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tomboll = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tomboll, txttt, 'YaSya Bot', m)
      Object.keys(readlimit).forEach((user) => {
        if (readlimit[user].id === m.sender) {
          let limitCountss = limitawal.free - readlimit[user].limit
          lzain = `╭──❲ INFO PENGGUNA ❳
│ Nama: *${pushname}*
│ Nomer: wa.me/${m.sender.split("@")[0]}
│ Limit : ${isPremium ? 'Unlimited' : limitCountss}
╰───────────⊱
╭──❲ BUAT BELI ES-TEH ❳
│ .donate
│ .donasi
╰───────────⊱
╭──❲ MAIN ❳
│ .daftar
│ .allmenu
│ .rules
│ .buypremium
│ .ceklimit
│ .cekpremium
╰───────────⊱
╭──❲ TEST BOT SUDAH AKTIF/BELUM ❳
│ .ping
│ .bot
╰───────────⊱
╭──❲ INFO BOT ❳
│  Nama BOT : YaSya BOT
│  Owner : YaSya
│  Ig: https://www.instagram.com/alvianto.17/
│  Hostname : Yannn Windows
│  Platform : Windows Server 2012 R2
│  Device Manufacturer: Xiaomi
│  Device Model: Redmi Node 9 Pro
│  WhatsApp Version: 2.23.4.79
╰────────────────⊱`;
      let but = [
        { buttonId: `.allmenu`, buttonText: { displayText: 'All Menu' }, type: 1 },
        { buttonId: `.premium`, buttonText: { displayText: 'Premium' }, type: 1 },
        { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  
  ]
  ichi.sendButtonText(m.chat, but, lzain, 'YaSya Bot')
}})
      break;
    case 'allmenu': case 'allhelp': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  
 allmenu = `╔════════
╠══ *DOWNLOAD MENU*
╠ ${prefix}play
╠ ${prefix}tiktok
╠ ${prefix}tiktokmp3
╠ ${prefix}ig
╠ ${prefix}fb
╠ ${prefix}spotify
╠ ${prefix}twitter
╠ ${prefix}telesticker
╠ ${prefix}ppcp
╠ ${prefix}gdrive
╠ ${prefix}mediafire
╠ ${prefix}yts
╠ ${prefix}ytmp3
╠ ${prefix}ytmp4
╚════════

╔════════
╠═ *INFORMATION MENU*
╠ ${prefix}gempa
╠ ${prefix}gempadirasakan
╠ ${prefix}gempaterbaru [Magnitudo 5.0+]
╠ ${prefix}covid
╠ ${prefix}checklimit
╠ ${prefix}buylimit
╠ ${prefix}cuaca
╠ ${prefix}jadwalsholat
╚════════

╔════════
╠═ *STALKER MENU*
╠ ${prefix}igstalk
╠ ${prefix}tiktokstalk
╠ ${prefix}githubstalk
╚════════

╔════════
╠══ *OWNER MENU*
╠ ${prefix}chatuser
╠ ${prefix}bc
╠ ${prefix}bcgc
╠ ${prefix}join
╠ ${prefix}leave
╠ ${prefix}block
╠ ${prefix}unblock
╠ ${prefix}blocklist
╠ ${prefix}totalblock
╠ ${prefix}ban
╠ ${prefix}unban
╠ ${prefix}listban
╠ ${prefix}premium
╠ ${prefix}unpremium
╠ ${prefix}listpremium
╠ ${prefix}listgrupbot
╠ ${prefix}setppbot
╠ ${prefix}self
╠ ${prefix}public
╠ ${prefix}restartbot
╠ ${prefix}speedtest
╠ ${prefix}totalpengguna
╠ ${prefix}totalpenggunaterbaru
╠ ${prefix}listpengguna
╠ ${prefix}listbanned
╠ ${prefix}ip
╠ ${prefix}cekresi
╠ ${prefix}spamtlp
╠ ${prefix}spamall
╚════════
  
╔════════
╠══ *GROUP MENU*
╠ ${prefix}antilink
╠ ${prefix}linkgroup
╠ ${prefix}grupid
╠ ${prefix}revoke
╠ ${prefix}delete
╠ ${prefix}add
╠ ${prefix}kick
╠ ${prefix}promote
╠ ${prefix}demote
╠ ${prefix}setname
╠ ${prefix}setdesk
╠ ${prefix}setppgrup
╠ ${prefix}tagall
╠ ${prefix}hidetag
╚════════
  
╔════════
╠══ *MAKER MENU*
╠ ${prefix}sticker
╠ ${prefix}stickermeme
╠ ${prefix}toanime
╠ ${prefix}nulis
╠ ${prefix}toimg
╠ ${prefix}tovideo
╠ ${prefix}toaudio
╠ ${prefix}tomp3
╠ ${prefix}tovn
╠ ${prefix}togif
╠ ${prefix}tourl
╠ ${prefix}removebg
╚════════

╔════════
╠══ *RANDOM MENU*
╠ ${prefix}pinterest
╠ ${prefix}wallpaper
╠ ${prefix}quotesanime
╠ ${prefix}wikimedia
╚════════

╔════════
╠══ *OTHER MENU*
╠ ${prefix}donasi
╠ ${prefix}sewa
╠ ${prefix}sc
╠ ${prefix}owner
╠ ${prefix}ping
╠ ${prefix}menu / ${prefix}help / ${prefix}?
╚════════`
  let butt = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.owner`, buttonText: { displayText: 'Owner' }, type: 1 }
  ]
  ichi.sendButtonText(m.chat, butt, allmenu, 'YaSya Bot')
  }
  break
  case 'donasi':
    case 'donate':
    donate = `*DONASINYA KAK BUAT SEWA SERVER, AGAR BOT BISA AKTIF 24 JAM*\n
*DANA*
0895401223315\n
*SHOPEEPAY*
0895401223315\n
*GOPAY*
0895401223315\n
*OVO*
0895401223315\n
*SEABANK*
0895401223315\n
*LINKAJA*
0895401223315\n
*PAYPAL*
https://paypal.me/alvianto17\n
*SAWERIA*
https://saweria.co/alvianto17\n\n
*_Untuk pengguna GOPAY, DANA, OVO, SHOPEE, LINKAJA yang belum premium bisa men-scan kode QR_*`
                qris = fs.readFileSync(`./media/qr.jpg`)
                ichi.sendMessage(from, {caption: donate, image: qris}, { quoted: mek})
      break
    case 'sewa':
    case 'sewabot':
m.reply(`Ingin memasukan BOT ke dalam grup kalian?
15 Hari Rp. 5500
1 Bulan Rp. 10000
2 Bulan Rp. 17000

Pembayaran via semua aplikasi kecuali *Pulsa*, Bayar? di .donate ya.\nJangan lupa kirimkan bukti transfer ke Owner`)
      break
    case 'sc': case 'sourcecode': case 'script': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  m.reply('*Script Berasal Dari :* https://github.com/nzrlafndi/ichigo-kurosaki\n\nJangan Lupa Bintang nya!')
    }
      await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'owner': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
      if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      const vcard = 'BEGIN:VCARD\n'
      +'VERSION:3.0\n'
      +'N:Yannn Owner Bot\n'
      +'FN:Yannn Owner Bot\n'
      +'item1.TEL;waid=62895401223315:62895401223315\n'
      +'item1.X-ABLabel:Ponsel\n'
      +'item2.EMAIL;type=INTERNET:tuyulheroes11@gmail.com\n'
      +'item2.X-ABLabel:Email\n'
      +'item3.URL:https://instagram.com/alvianto.17\n'
      +'item3.X-ABLabel:Instagram\n'
      +'item4.ADR:;;Yogyakarta - Indonesia;;;;\n'
      +'item4.X-ABLabel:Region\n'
      +'END:VCARD'
  ichi.sendMessage(m.chat,{ contacts: { displayName: 'Jeff', contacts: [{ vcard }] }}, {quoted: m})
  }
  break
    case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  respon = `
🏎️ Ping: *${latensi.toFixed(4)} Second*\n\nRuntime BOT : ${runtime(process.uptime())}\n\nRuntime Server : ${runtime(os.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}`.trim()
  m.reply(respon)
  }
  break

//Owner Menu
    case 'bcgc': case 'bcgroup': case 'broadcastgroup': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`)
  let getGroups = await ichi.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let i of anu) {
  let txt = `*Broadcast ${ichi.user.name}*\n\n${text}\n`
  ichi.sendButtonText(i, txt)
  }
  m.reply(`Sukses Broadcast ke ${anu.length} Grup`)
  }
  break
    case 'bc': case 'broadcast': case 'bcall': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return reply(`Text mana?\n\nExample : ${prefix + command} ${global.ownerName}`)
  let anu = await store.chats.all().map(v => v.id)
  let getGroups = await ichi.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anuan = groups.map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu && anuan) {
    let txt = `*Broadcast YaSya Bot*\n\n${text}`
    let but = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.menu`, buttonText: { displayText: 'Menu' }, type: 1 }
  ]
  ichi.sendButtonText(yoi, but, txt, 'YaSya Bot')
  }
  m.reply(`Sukses Broadcast ke ${anu.length} Chat`)
  }
  break
    case 'join': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      /*if (!isOwner) return m.reply(mess.botOwner)*/
      if (!isPremium && !isOwner) return m.reply(mess.premium)
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Invalid!')
  m.reply(mess.wait)
  let result = args[0].split('https://chat.whatsapp.com/')[1]
  await ichi.groupAcceptInvite(result).then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
    case 'leave': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!isOwner) return m.reply(mess.botOwner)
      await ichi.groupLeave(text ? text : m.chat)
      m.reply(mess.done)
  }
  break
    case 'block': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.updateBlockStatus(users, 'block').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
  break
    case 'unblock': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.done)).catch((err) => m.reply('Fitur Error ❎'))
  }
      break
    case 'totalblok':
    case 'totalblock':
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      listblok = await ichi.fetchBlocklist()
        ini_txt = `Total pengguna *Terblokir* YaSya BOT : ${listblok.length}`
          ichi.sendMessage(from, { text: ini_txt })
      break
    case 'setppbot': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!isOwner) return m.reply(mess.botOwner)
  if (!quoted) throw m.reply(`Kirim/m.reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) throw m.reply(`Kirim/m.reply Image Dengan Caption ${prefix + command}`)
      if (/webp/.test(mime)) throw m.reply(`Kirim/m.reply Image Dengan Caption ${prefix + command}`)
      hmmm = await './trash/setppbot-' + getRandom('')
  let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm)
  await ichi.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
      m.reply(mess.done)
      await fs.unlinkSync(media)
  }
  break
    case 'public': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.public = true
  m.reply('Sukses Mengubah Mode Bot Menjadi Publik')
  }
  break
    case 'self': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.self = false
  m.reply('Sukses Mengubah Mode Bot Menjadi Self')
  }
  break
    case 'eval': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }
  break

    case 'restart':
      case 'restartbot':
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      if (ichi.user.id.split(":")[0] + "@s.whatsapp.net") {
      await m.reply('RESTARTING BOT...')
        await process.exit()
      }
        break
    
//Group Menu
    case 'antilink':
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
      if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (readgroup[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
    readgroup[m.chat].antilink = true
    fs.writeFileSync('./database/group.json', JSON.stringify(readgroup, null, 1))
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!readgroup[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
    readgroup[m.chat].antilink = false
        fs.writeFileSync('./database/group.json', JSON.stringify(readgroup, null, 1))
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
      await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'linkgc':
    case 'linkgroup': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  let response = await ichi.groupInviteCode(m.chat)
  ichi.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break
    case 'revoke': {
      if (isBanned) return reply(mess.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  await ichi.groupRevokeInvite(from)
  m.reply(mess.done)
  }
  break
    case 'kick': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di kick siapa??')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
    case 'add': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di add siapa? Setan?')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
    case 'promote': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di promote siapa??')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
    case 'demote': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di demote siapa??')
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
      break
            case 'getgroupid':
    case 'getgrupid':
      case 'groupid':
      case 'grupid':
      if (!m.isGroup) return m.reply(mess.group)
       if (!isAdmins && !isOwner) return m.reply(mess.admin)
      reply(`ID Grup ${groupName} adalah: \n${m.chat}\n\nJangan lupa kirim ke Owner BOT ya:)`)
      break
    case 'setname': case 'setsubject': {
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return reply(`Example: ${prefix + command} Text ?`) 
  await ichi.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
    case 'setdesc': case 'setdesk': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return reply(`Example: ${prefix + command} Text ?`) 
  await ichi.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
    case 'setppgroup': case 'setppgrup': case 'setppgc': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
      if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
      hmmm = await './trash/setppgc-' + getRandom('')
  let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm)
  await ichi.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
      m.reply(mess.done)
      await fs.unlinkSync(media)
  }
  break
    case 'tagall': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
  for (let mem of participants) {
  teks += `>> @${mem.id.split('@')[0]}\n`
  }
  ichi.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) })
  }
  break
    case 'hidetag': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  ichi.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)})
    }
      await isPremium ? isPremium : limitAdd(m.sender)
      break
    case 'delete':
    case 'del':
      if (!m.isGroup) return m.reply(mess.group)
        if (!isBaileys) return reply('Hanya dapat menghapus pesan yang dikirimkan oleh bot')
        ichi.sendMessage(from, { delete: { remoteJid: m.quoted.sender, id: m.quoted.id, fromMe: true, participant: m.quoted.sender } })
      break
    case 'ephemeral': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Masukkan value enable/disable')
  if (args[0] === 'enable') {
  await ichi.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await ichi.sendMessage(from, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  }
  break
case 'group':
    case 'grup': {
      if (isBanned) return reply(messs.banned);
    let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'close'){
  await ichi.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await ichi.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'tutup'){
  await ichi.groupSettingUpdate(from, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'buka'){
  await ichi.groupSettingUpdate(from, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
    } else {
      replyan = `Grupnya mau dibuka atau ditutup?`
  let buttonsgroup = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(from, buttonsgroup, replyan, `Silahkan klik button dibawah, Jika button tidak muncul ketik ${command} open/close`)
  }
  }
  break
    case 'editinfo': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'open'){
  await ichi.groupSettingUpdate(from, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await ichi.groupSettingUpdate(from, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(from, buttonsinfo, `Mode Edit Info 🔥`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break

//Maker Menu
    case 'sticker': case 's': case 'stickergif': case 'sgif': case 'stiker': case 'sg': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
  if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`, m)
  m.reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await ichi.sendImageAsSticker(from, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await quoted.download()
  let encmedia = await ichi.sendVideoAsSticker(from, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
   m.reply(`Kirim Gambar/Video dengan caption .stiker\nDurasi Video 1-9 Detik`)
  }
  }
      break
    
    case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
      if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (args.length == 0) return reply(`Kirim/Reply Image Dengan Caption ${prefix + command} Text1|Text2`)
	        	if (!/image/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command} Text1|Text2`)
	if (/webp/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command} Text1|Text2`)
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
      bawah = text.split('|')[1] ? text.split('|')[1] : '-'
            hmmm = await './trash/setppgc-' + getRandom('')
            let mee = await ichi.downloadAndSaveMediaMessage(quoted, hmmm)
          let mem = await TelegraPh(mee)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
          let awikwok = await ichi.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
          await fs.unlinkSync(mee)
	        await fs.unlinkSync(awikwok)
            }
      break
    
    case 'nulis':
      if (isBanned) return reply(messs.banned);
      let txtnu = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolnu = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
      if (!isRegistered) return ichi.sendButtonText(m.chat, tombolnu, txtnu, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (args.length == 0) return reply(`Contoh: ${prefix + command} YaSya BOT`)
      nuliss = await getBuffer(`https://api.lolhuman.xyz/api/nulis?apikey=${lolapi}&text=${text}`)
      ichi.sendMessage(m.chat, { image: nuliss }, m)
      await isPremium ? isPremium : limitAdd(m.sender)
      break
 
    case 'stikertele': case 'stickertele': case 'telestiker': case 'telesticker': case 'stele':
      if (isBanned) return reply(messs.banned);
      let txttel = `*EN : Register first*\n*ID : Daftar dulu*`
    let tomboltel = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
      if (!isRegistered) return ichi.sendButtonText(m.chat, tomboltel, txttel, 'YaSya Bot', m)
      if (args.length == 0) return reply(`Contoh: ${prefix + command} https://t.me/addstickers/a2010825200_by_tedeubot_2_video_by_v1tedeubot`)
      if (isLimit(m.sender)) return;
      xa.downloader.telesticker(text).then(result => {
        for (let i = 0; i < result.length; i++) {
          ichi.sendMessage(m.chat, { sticker: { url: result[i].url } })
        }
      })
      await isPremium ? isPremium : limitAdd(m.sender)
      break
    
//removebg
    case 'imagenobg': case 'removebg': case 'remove-bg': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
      if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
	if (!quoted) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (!/image/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	if (/webp/.test(mime)) throw m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	let apirnobg = ['qiVzyubVfosyG1U99BJHPcst', 'yXzqtQccRB9PXEMM1UQoYjzi', 'rwxyTJCwU9AFS7ENjBUdTiLA', 'gK6fQwrMzwTK5hD8wjWGHufC', '2gPwfkpngPJkLBJVCdi9R117', '2nsgsXT8XtDeyqUWcK7Rhk8C', 'pJydoNBW28u7B6NgKKzb9QK3', 'Lfpo6YQ75dDXAEPG7eMH9a6h', 'n1TeYjxUqx3Yxhw3LNCEuiGF', 'eskaSfAQABPMnfo8ye9XvcbY']
	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	hmm = await './trash/remobg-' + getRandom('')
	localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmm)
	outputFile = await './trash/hremo-' + getRandom('.png')
	m.reply(mess.wait)
	try {
		remobg.removeBackgroundFromImageFile({
			path: localFile,
			apiKey: apinobg,
			size: "regular",
			type: "auto",
			scale: "original",
			outputFile
		}).then(async (result) => {
			//    console.log(result)
			console.log(`File saved to ${outputFile}`);
			await ichi.sendMessage(from, {
				image: fs.readFileSync(outputFile),
				caption: "success"
			}, {
				quoted: m
			})
			const base64img = result.base64img;
			await fs.unlinkSync(localFile)
			await fs.unlinkSync(outputFile)
		}).catch((errors) => {
			console.log(JSON.stringify(errors));
		});
  } catch (err) {
    ichi.sendMessage(gruplog, { text: `*[ ERROR LOG ]*\n\n${moment().tz('Asia/Jakarta').format("HH:mm:ss DD/MM/YYYY")}\nError di bagian ${__filename}\n${budy || m.mtype}\n` + util.format(err) })
		m.reply(util.format(err))
		await fs.unlinkSync(localFile)
	}
    }
      await isPremium ? isPremium : limitAdd(m.sender)
break

		            /*case 'estetik': {
		            	if (!quoted) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
		            	if (!/image/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
		            	if (/webp/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
	                let apirnobg = ['qiVzyubVfosyG1U99BJHPcst']
		            	let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]

		            	hmm = await './trash/remobg-' + getRandom('')
		            	localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmm)
		            	outputFile = './trash/hremo-' + getRandom('.png')
		            	m.reply(mess.wait)
		            	try {
		            		remobg.removeBackgroundFromImageFile({
		            			path: localFile,
		            			apiKey: apinobg,
		            			size: "regular",
		            			type: "auto",
		            			scale: "100%",
		            			outputFile
		            		}).then(async result => {
		            			console.log(outputFile)
                      let tes = await fs.readFileSync(outputFile)
                      let mee = await ichi.downloadAndSaveMediaMessage(quoted)
                      let mem = await TelegraPh(mee)
		            			let hsil = await getBuffer(`https://oni-chan.my.id/api/Fmake/estetik?picturl=${mem}&apikey=`)
		            			await sleep(900)
		            			await ichi.sendMessage(from, {
		            				image: hsil,
		            				caption: "success"
		            			}, {
		            				quoted: m
		            			})
		            			await fs.unlinkSync(localFile)
		            			await fs.unlinkSync(outputFile)
		            		})
		            	} catch (err) {
		            		m.reply(util.format(err))
		            		await fs.unlinkSync(localFile)
		            	}
		            }
		            break*/

		case 'ktpmaker': {
			if (args.length == 0) return m.reply(`*Pengunaan :*\n${prefix+command} Nik|Provinsi|Kabupaten|Nama|TempatTanggalLahir|JenisKel|Alamat|RtRw|KelDesa|Kecamatan|Agama|Statu|Pekerjaan|Region|Berlaku|golongan darah|LinkGambar\n\n${prefix+command} 35567778995|Provinsi Jawa Barat|Kabupaten Bekasi|jebeh Store|Bekasi |Laki-Laki|Bintara Jaya|02/05|Karang Indah|Bekasi Barat|Islam|Jomblo|anakjebeh|Indonesia|2021-2080|abc|https://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\n\n\n*[warning]*\nsetiap input query setelah garis tengah | di larang penggunaan spasi\n*「 INFO IMAGE 」*\nUntuk Gambar Profil KTP\nUpload Dari Web Berikut Ini\n\nhttps://i.waifu.pics\nhttps://c.top4top.io\n\nCONTOH HASIL NYA\nhttps://i.ibb.co/qrQX5DC/IMG-20220401-WA0084.jpg\nhttps://k.top4top.io/p_2208264hn0.jpg`)
			get_args = args.join(" ").split("|")
			nik = get_args[0]
			if (!nik) return m.reply('nomor induk keluaga kak pastikan jangan mirip NIK yang asli ya')
			prov = get_args[1]
			if (!prov) return m.reply('probinsi mana kak')
			kabu = get_args[2]
			if (!kabu) return m.reply('kabupaten mana kak')
			name = get_args[3]
			if (!name) return m.reply('nama nya siapa kak')
			ttl = get_args[4]
			if (!ttl) return m.reply('tempat tanggal lahir nya kak')
			jk = get_args[5]
			if (!jk) return m.reply('jenis kelamin pria atau wanita kak')
			jl = get_args[6]
			if (!jl) return m.reply('alamat rumah nya mana kak')
			rtrw = get_args[7]
			if (!rtrw) return m.reply('RT / RW berapa kak')
			lurah = get_args[8]
			if (!lurah) return m.reply('kelurahan mana kak')
			camat = get_args[9]
			if (!camat) return m.reply('kecamatan mana kak')
			agama = get_args[10]
			if (!agama) return m.reply('agama nya apa kak')
			nikah = get_args[11]
			if (!nikah) return m.reply('status belum ada')
			kerja = get_args[12]
			if (!kerja) return m.reply('pekerjaan belum ada')
			warga = get_args[13]
			if (!warga) return m.reply('region belum ada')
			until = get_args[14]
			if (!until) return m.reply('waktu berlaku belum ada')
			gd = get_args[15]
			if (!gd) return m.reply('golongan darah belum ada')
			img = get_args[16]
			if (!img) return m.reply('url image belum ada')
      m.reply(mess.wait)
			bikin = (`https://oni-chan.my.id/api/Fmake/ktpmaker?nik=${nik}&nama=${name}&ttl=${ttl}&jk=${jk}&gd=${gd}&almt=${jl}&rtw=${rtrw}&kel=${lurah}&kc=${camat}&agm=${agama}&st=${nikah}&krj=${kerja}&ngr=${warga}&blk=${until}&prv=${prov}&kab=${kabu}&picturl=${img}`)
			console.log(bikin)
			ardaktp = await getBuffer(bikin)
		  await sleep(8000)
			await ichi.sendMessage(from, { image: ardaktp, caption: `done kak` }, { quoted: m })
		//	await sleep(5000)
		}
			break;

      case 'imagetoanime':
    case 'toanime':
      if (isBanned) return reply(messs.banned);
          let txtani = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolani = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolani, txtani, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (!/image/.test(mime)) throw m.reply(`Kirim/Reply image dengan caption ${prefix + command}`)
	if (/webp/.test(mime)) throw m.reply(`Kirim/Reply image dengan caption ${prefix + command}`)
      m.reply(mess.wait)
        hmmmm = await './trash/anime-' + getRandom('')
      localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmmmm)
        let mem = await TelegraPh(localFile)
        hasila = await getBuffer(`https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolapi}&img=${mem}`)
      ichi.sendMessage(m.chat, { image: hasila, caption: 'Success' }, { quoted: m })
      await fs.unlinkSync(localFile)
       await isPremium ? isPremium : limitAdd(m.sender)
        break


    case 'toimage': case 'toimg': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!quoted) throw m.reply('Reply Image')
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
      m.reply(mess.wait)
      hmmm = await './trash/toimg-' + getRandom('')
  let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  if (err) throw err
  let buffer = fs.readFileSync(ran)
    ichi.sendMessage(from, { image: buffer }, { quoted: m })
    fs.unlinkSync(media)
  fs.unlinkSync(ran)
  })
    }
      await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'tomp4': case 'tovideo': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!quoted) throw m.reply('Reply Image')
  if (!/webp/.test(mime)) throw m.reply(`balas stiker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
      hmmm = await './trash/tomp4-' + getRandom('')
  let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
      await fs.unlinkSync(media)
    }
      await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'toaud': case 'toaudio': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!/video/.test(mime) && !/audio/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
  if (!quoted) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(from, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
    }
      await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'tomp3': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (/document/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  if (!quoted) throw m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(from, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ichi.user.name}.mp3`}, { quoted : m })
    }
    await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'tovn': case 'toptt': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
  if (!quoted) return reply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  let media = await quoted.download()
  let audio = await toPTT(media, 'mp4')
  ichi.sendMessage(from, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
    }
     await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'togif': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
      hmmm = await './trash/togif-' + getRandom('')
  let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(from, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
      await fs.unlinkSync(media)
    }
      await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'tourl': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      m.reply(mess.wait)
      if (/image/.test(mime)) {
    hmm = await './trash/tourlimg-' + getRandom('')
  let media = await ichi.downloadAndSaveMediaMessage(quoted, hmm)
    let anu = await TelegraPh(media)
    m.reply(util.format(anu))
    await fs.unlinkSync(media)
  } else if (/video/.test(mime)) {
    hmmm = await './trash/tourlvid-' + getRandom('')
  let mediaa = await ichi.downloadAndSaveMediaMessage(quoted, hmmm)
    let anu = await TelegraPh(mediaa)
    m.reply(util.format(anu))
      fs.unlinkSync(mediaa)
  }
  }
      await isPremium ? isPremium : limitAdd(m.sender)
  break

//Random Menu
    case 'pinterest': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
      let anu = await pinterest(text)
      console.log(anu.length)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(from, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
    }
      await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'wallpaper': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(from, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
    }
      await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'quotesanime': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  m.reply(mess.wait)
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendButtonText(from, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, global.ownerName, m)
    }
     await isPremium ? isPremium : limitAdd(m.sender)
  break
    case 'wikimedia': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!text) return reply('Masukkan Query Title') 
  let wiki = await wikimedia(text)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `📄 Title : ${result.title}
📬 Source : ${result.source}
🔗 Media Url : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(from, buttonMessage, { quoted: m })
    }
    await isPremium ? isPremium : limitAdd(m.sender)
  break

//Downloader
    case 'play':
      if (isBanned) return reply(messs.banned);
      let pesan = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolanu = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolanu, pesan, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (args.length == 0) return reply(`*Example:* .play Waiting for love`)
      reply(mess.wait)
  await yts(text)
    .then(yut => {
  let buttons = [{buttonId: `ytmp3 ${yut.all[0].url}`, buttonText: {displayText: 'Audio 🎵'}, type: 1}, {buttonId: `ytmp4 ${yut.all[0].url}`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: yut.all[0].thumbnail },
  caption: `*----- DATA DITEMUKAN -----*
  
*Title :* ${yut.all[0].title}
*Duration :* ${yut.all[0].timestamp}
*Viewers :* ${yut.all[0].views}
*Upload :* ${yut.all[0].ago}
*Channel :* ${yut.all[0].author.name}
*Url :* ${yut.videos[0].url}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
    ichi.sendMessage(from, buttonMessage, { quoted: m })
  })
  break
    case 'ytmp3': case 'ytaudio': case 'yta': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  let quality = '128kbps'
      let media = await yta(text, quality)
  //if (media.filesize >= 50000) return m.reply(`File Melebihi Batas Dari 50MB Silahkan Download Sendiri :\n\nSize  File: ${media.filesizeF}\n`+media.dl_link)
  var caption = `Title : ${media.title}
Format : MP3
Resolusi : 128kbps
Url : ${isUrl(text)}`
  ichi.sendImage(m.chat, media.thumb, caption, m)
      ichi.sendMessage(from, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` })
      }
      await isPremium ? isPremium : limitAdd(m.sender)
    break
    /*if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
   await m.reply(mess.wait)
    let media = await getAudioWithTubeMp3(text)
    await yts(text)
      .then(yut => {
        capt = `Title : ${yut.all[0].title}
Format : Mp3
Duration : ${yut.all[0].timestamp}`
       ichi.sendImage(m.chat, yut.all[0].thumbnail, capt)        
  ichi.sendMessage(from, { document: { url: media[3].url }, mimetype: 'audio/mpeg', fileName: `${yut.all[0].title}.mp3` }, { quoted: m })
})*/
    case 'ytmp4': case 'ytvideo': case 'ytv': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
      let tombol = [
        { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
        { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
      ]
      if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
      if (!isUrl(q)) return m.reply('Link Invalid ❎')
      if (!q.includes('youtube') / ('youtu.be')) return m.reply('Link Invalid ❎')
      await m.reply(mess.wait)
  let quality = '360p'
      let media = await ytv(text, quality)
  //if (media.filesize >= 50000) return m.reply(`File Melebihi Batas Dari 50MB Silahkan Download Sendiri :\n\nSize  File: ${media.filesizeF}\n`+media.dl_link)
  var caption = `Judul : ${media.title}
Format : Mp4
Resolusi : 360p
Url : ${isUrl(text)}`
  ichi.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: caption }, { quoted: m })
    }
  await isPremium ? isPremium : limitAdd(m.sender)
  break

    case 'yts': case 'ytsearch': {
      if (isBanned) return reply(messs.banned);
      let txt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombol = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombol, txt, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
  if (args.length == 0) return reply(`*Example:* .yts Waiting for love`)
  m.reply(mess.wait)
  if (!text) return reply(`Example : ${prefix + command} story wa anime`)
  let search = await yts(text)
  let teks = '*---- Data Ditemukan ----*\n\n Keywords : '+text+'\n\n'
  let no = 1
  for (let i of search.all) {
  teks += `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}\n\n─────────────────\n\n`
  }
  ichi.sendMessage(from, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
    }
    await isPremium ? isPremium : limitAdd(m.sender)
      break
    
    case 'spotify':
      if (isBanned) return reply(messs.banned);
            let txtspo = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolspo = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
      if (!isRegistered) return ichi.sendButtonText(m.chat, tombolspo, txtspo, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (args.length == 0) return reply(`*Example:* .spotify https://open.spotify.com/track/4pV6Kx1T9L49PBFwH1g8ca`)
      if (!q.includes('spotify')) return m.reply('Link Invalid')
      spodown = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolapi}&url=${text}`)
      ini_txt = `Title : ${spodown.result.title}\n`
      ini_txt += `Artis : ${spodown.result.artists}\n`
      thumb = await getBuffer(spodown.result.thumbnail)
      ichi.sendMessage(m.chat, { image: thumb,  caption: ini_txt }, { quoted: m })
      ichi.sendMessage(m.chat, { document: { url: spodown.result.link }, mimetype: 'audio/mpeg', fileName: spodown.result.title + ' - ' + spodown.result.artists + '.mp3' }, { quoted: m })
    await isPremium ? isPremium : limitAdd(m.sender)
      break

  case 'instagram':
    case 'ig':
      if (isBanned) return reply(messs.banned);
      let txt1 = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolan = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolan, txt1, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
    if (args.length == 0) return reply(`*Example:* .instagram https://www.instagram.com/p/CYIjdyPvkpe/?igshid=YmMyMTA2M2Y= `)
    if (!q.includes('instagram')) return m.reply('Link Invalid')
      m.reply(mess.wait)
      instagramdlv2(text).then(result => {
        ichi.sendMessage(from,{ video: { url: `${result[0].url}` }, mimetype: 'video/mp4',quoted: m})
      }
        )
     //for (let i of ig3) {
      //if (i.type.includes("mp4")) {
        //ichi.sendMessage(from,{ video: { url: `${i.url}` }, mimetype: 'video/mp4',quoted: m})
      //} else {
        //ichi.sendMessage(from, {image: { url: `${i.url}` }}, {quoted: m });
        //}
     //}
   await isPremium ? isPremium : limitAdd(m.sender)
        break
    case 'instagramstory':
    case 'igstory':
      if (isBanned) return reply(messs.banned);
      let psan1 = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombola = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombola, psan1, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
        if (args.length == 0) return reply(`*Example:* .instagramstory alvianto.17`)
        ig1 = await fetchJson(`https://sanuw-api.herokuapp.com/docs/download/igstory?username=${text}&apikey=sanuwa`)
        for (let i of ig1.result) {
          if (i.fileType.includes("mp4")) {
            ichi.sendMessage(from,{ video: { url: `${i.url}` }, mimetype: 'video/mp4',quoted: m})
          } else {
            ichi.sendMessage(from, {image: { url: `${i.url}` }}, {quoted: m });
          }
        }
     await isPremium ? isPremium : limitAdd(m.sender)
            break
            
    case 'tiktokdl': case 'ttdl': case 'tiktokmp4': case 'tiktok': case 't': case 'tt':
      if (isBanned) return reply(messs.banned);
      let txtt = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolt = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
      if (!isRegistered) return ichi.sendButtonText(m.chat, tombolt, txtt, 'YaSya Bot', m)
      if (args.length == 0) return reply(`*Example:* ${prefix + command} https://vt.tiktok.com/ZS8U4ELY6/`)
      if (isLimit(m.sender)) return;
              if (!q.includes('tiktok')) return m.reply('Link Invalid')
              m.reply(mess.wait)
              snaptik(text)
                      .then(result => {
                        ichi.sendMessage(from,{ video: { url: `${result.video.no_watermark}` }, mimetype: 'video/mp4', caption:`*Nickname:* ${result.author.nickname}
*Caption:* ${result.description}` ,quoted: m})
                      })
     await isPremium ? isPremium : limitAdd(m.sender)
                  break
    case 'tiktokmp3': case 'tiktokaudio': case 'tiktokmusik': case 'tiktokmusic': case 'ta':
      if (isBanned) return reply(messs.banned);
      let txtta = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolta = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
      if (!isRegistered) return ichi.sendButtonText(m.chat, tombolta, txtta, 'YaSya Bot', m)
      if (args.length == 0) return reply(`*Example:* ${prefix + command} https://vt.tiktok.com/ZS8U4ELY6/`)
      if (isLimit(m.sender)) return;
                    if (!q.includes('tiktok')) return m.reply('Link Invalid')
              m.reply(mess.wait)
              snaptik(text)
                      .then(result => {
                        ichi.sendMessage(from, {document: { url: `${result.video.no_watermark}` }, mimetype: 'audio/mpeg', fileName: `${result.author.nickname}.mp3`}, { quoted : m })
                    })
     await isPremium ? isPremium : limitAdd(m.sender)
                      break
                  case 'twit':
                    case 'twitdl':
    case 'twitter':
      if (isBanned) return reply(messs.banned);
      let txttw = `*EN : Register first*\n*ID : Daftar dulu*`
    let tomboltw = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tomboltw, txttw, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
                        if (args.length == 0) return reply(`*Example:* .twitter https://twitter.com/dekai23/status/1488600754256551941`)
                        if (!q.includes('twitter')) return m.reply('Link Invalid')
                        m.reply(mess.wait)
                        hx.twitter(text)
                        .then(result => {
                        reply(mess.wait)
                        ichi.sendMessage(from,{ video: { url: `${result.HD}` }, mimetype: 'video/mp4',quoted: m})
                        })
     await isPremium ? isPremium : limitAdd(m.sender)
                        break
    case 'fb':
      case 'fbdl':
    case 'facebook':
      if (isBanned) return reply(messs.banned);
      let txtfb = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolfb = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolfb, txtfb, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (args.length == 0) return reply(`*Example:* .fb https://www.facebook.com/groups/526925218448628/permalink/591475845326898/`)
      if (!q.includes('f')) return m.reply('Link Invalid')
                        m.reply(mess.wait)
      await bocil.savefrom(text).then(result => {
      ichi.sendMessage(from, { video: { url: result[0].hd.url || result[0].sd.url }, mimetype: 'video/mp4', quoted: m })})
    await isPremium ? isPremium : limitAdd(m.sender)
     break
    case 'mediafire':
      if (isBanned) return reply(messs.banned);
      let txtmd = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolmd = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolmd, txtmd, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (args.length == 0) return reply(`*Exampleh:* .mediafire https://www.mediafire.com/file/t2hxyuz7vbwima1/example.txt/file`)
      if (!q.includes('mediafire')) return m.reply('Link Invalid')
      await mediafireDl(text).then(mediafire => {
        reply(mess.wait)
        if (mediafire.mime.includes("mp4")) {
          ichi.sendMessage(from, { video: { url: `${mediafire.link}` }, mimetype: 'video/mp4', quoted: m })
        } else if (mediafire.mime.includes("jpg")) {
          ichi.sendMessage(from, { image: { url: `${mediafire.link}` }, mimetype: 'image/jpeg', quoted: m })
        } else if (mediafire.mime.includes("png")) {
          ichi.sendMessage(from, { image: { url: `${mediafire.link}` }, mimetype: 'image/jpeg', quoted: m })
        } else if (mediafire.mime.includes("mp3")) {
          ichi.sendMessage(from, { document: { url: `${mediafire.link}` }, fileName: mediafire.title, mimetype: 'audio/mpeg' }, { quoted: m })
        } else if (mediafire.mime.includes("m4a")) {
          ichi.sendMessage(from, { document: { url: `${mediafire.link}` }, fileName: mediafire.title, mimetype: 'audio/mpeg' }, { quoted: m })
        } else if (mediafire.mime.includes("txt")) {
          ichi.sendMessage(from, { document: { url: `${mediafire.link}` }, fileName: mediafire.title, mimetype: 'text/plain' }, { quoted: m })
        } else if (mediafire.mime.includes("xml")) {
          ichi.sendMessage(from, { document: { url: `${mediafire.link}` }, fileName: mediafire.title, mimetype: 'application/xml' }, { quoted: m })
        } else if (mediafire.mime.includes("zip")) {
          ichi.sendMessage(from, { document: { url: `${mediafire.link}` }, fileName: mediafire.title, mimetype: 'application/zip' }, { quoted: m })
        } else if (mediafire.mime.includes("rar")) {
          ichi.sendMessage(from, { document: { url: `${mediafire.link}` }, fileName: mediafire.title, mimetype: 'application/rar' }, { quoted: m })
        } else if (mediafire.mime.includes("7z")) {
          ichi.sendMessage(from, { document: { url: `${mediafire.link}` }, fileName: mediafire.title, mimetype: 'application/7z' }, { quoted: m })
        } else if (mediafire.mime.includes("apk")) {
          ichi.sendMessage(from, { document: { url: `${mediafire.link}` }, fileName: mediafire.title, mimetype: 'application/apk' }, { quoted: m })
        }
      })
     await isPremium ? isPremium : limitAdd(m.sender)
                break
                  case 'gdrive':
    case 'googledrive':
      if (isBanned) return reply(messs.banned);
      let txtgd = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolgd = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolgd, txtgd, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
                    if (args.length == 0) return reply(`*Example:* .gdrive https://drive.google.com/file/d/xxxxxxxxxxxxxxxxxxxxxxxxx`)
                    if (!q.includes('drive')) return m.reply('Link Invalid')
                    m.reply(mess.wait)
                    gd1 = await fetchJson(`https://malesin.xyz/gdrive?url=${text}`)
                    if (gd1.fileName.endsWith('mp4')) {
                      ichi.sendMessage(from,{ video: { url: `${gd1.downloadUrl}` }, mimetype: 'video/mp4', caption: gd1.fileName, quoted: m})
                    } else if (gd1.fileName.endsWith('jpg')) {
                      ichi.sendMessage(from, {image: { url: `${gd1.downloadUrl}` }, mimetype: 'image/jpeg', quoted: m })
                    } else if (gd1.fileName.endsWith('JPG')) {
                      ichi.sendMessage(from, {image: { url: `${gd1.downloadUrl}` }, mimetype: 'image/jpeg', quoted: m })
                    } else if (gd1.fileName.endsWith('jpeg')) {
                      ichi.sendMessage(from, {image: { url: `${gd1.downloadUrl}` }, mimetype: 'image/jpeg', quoted: m })
                    } else if (gd1.fileName.endsWith('png')) {
                      ichi.sendMessage(from, {image: { url: `${gd1.downloadUrl}` }, mimetype: 'image/jpeg', quoted: m })
                    } else if (gd1.fileName.endsWith('mp3')){
                      ichi.sendMessage(from, {document: { url: `${gd1.downloadUrl}` }, fileName: `${gd1.fileName.split('.')[0]}.mp3` }, {quoted: m })
                    } else if (gd1.fileName.endsWith('zip')){
                      ichi.sendMessage(from, {document: { url: `${gd1.downloadUrl}` }, fileName: `${gd1.fileName.split('.')[0]}.zip` }, {quoted: m })
                    } else if (gd1.fileName.endsWith('rar')){
                      ichi.sendMessage(from, {document: { url: `${gd1.downloadUrl}` }, fileName: `${gd1.fileName.split('.')[0]}.rar` }, {quoted: m })
                    } else if (gd1.fileName.endsWith('7z')){
                      ichi.sendMessage(from, {document: { url: `${gd1.downloadUrl}` }, fileName: `${gd1.fileName.split('.')[0]}.7z` }, {quoted: m })
                    } else if (gd1.fileName.endsWith('exe')){
                      ichi.sendMessage(from, {document: { url: `${gd1.downloadUrl}` }, fileName: `${gd1.fileName.split('.')[0]}.exe` }, {quoted: m })
                    } else if (gd1.fileName.endsWith('txt')){
                      ichi.sendMessage(from, {document: { url: `${gd1.downloadUrl}` }, fileName: `${gd1.fileName.split('.')[0]}.txt` }, {quoted: m })
                    } else if (gd1.fileName.endsWith('apk')){
                      ichi.sendMessage(from, {document: { url: `${gd1.downloadUrl}` }, fileName: `${gd1.fileName.split('.')[0]}.apk` }, {quoted: m })
                    } else if (gd1.fileName){
                      ichi.sendMessage(from, {document: { url: `${gd1.downloadUrl}` }, fileName: `${gd1.fileName}` }, {quoted: m })
                    }
    await isPremium ? isPremium : limitAdd(m.sender)
                    break
                    

//INFORMASI
  
    case 'totalpengguna':
      case 'totaluser':
    if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
    let anu1 = JSON.parse(fs.readFileSync('./database/userlimit.json'))
    reply(`Total pengguna YaSya BOT : ${anu1.length} Pengguna`)
      break
     case 'totalpenggunaterbaru':
    if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      let anu12 = await store.chats.all().map(v => v.id)
    reply(`Total pengguna terbaru YaSya BOT : ${anu12.length} Pengguna`)
      break
    case 'listpengguna':
      case 'listuser':
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      let pengguna = JSON.parse(fs.readFileSync('./database/userlimit.json'))
          ini_txt = `List pengguna Y-BOT : ${pengguna.length}\n\n`
      for (let x of pengguna) {
          ini_txt += `Nama : ${x.username}\n`
        ini_txt += `Nomor : wa.me/${x.id.split('@')[0]}\n`
        ini_txt += `Limit : ${limitawal.free - x.limit}\n`
          ini_txt += `Terdaftar pada : ${x.time}\n\n`
        }
      ichi.sendMessage(m.chat, { text: ini_txt.trim() }, { quoted: m })
      break
    case 'listbanned':
      case 'listban':
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
      let banned = JSON.parse(fs.readFileSync('./database/userbanned.json'))
          ini_txt = `List pengguna Y-BOT : ${banned.length}\n\n`
      for (let x of banned) {
        ini_txt += `Nomor : wa.me/${x.id.split('@')[0]}\n`
        ini_txt += `Alasan Banned : ${x.alasanban}\n\n`
        }
      ichi.sendMessage(m.chat, { text: ini_txt.trim() }, { quoted: m })
      break
    case 'chatuser':
      case 'pesanuser':
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
        nomeruser = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        textuser = text.replace(/[^a-z A-Z]/g, '')
      ichi.sendMessage(nomeruser, { text: '*[Pesan dari Onwer]*\n\n' + textuser })
      ichi.sendMessage(m.chat, { text: `Pesan telah dikirimkan kepada wa.me/${args[0].replace(/[^0-9]/g, '')}` })
      break
    case 'listpremium':
      case 'listprem':
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
          ini_txt = `List pengguna Y-BOT : ${premium.length}\n\n`
      for (let x of premium) {
        let cekvip = parseMillisecondss(x.expired - Date.now())
        ini_txt += `Nomor : wa.me/${x.id.split('@')[0]}\n`
        ini_txt += `Expired : ${cekvip.days} days ${cekvip.hours} hours ${cekvip.minutes} minutes\n\n`
        }
      ichi.sendMessage(m.chat, { text: ini_txt.trim() }, { quoted: m })
      break
        case 'speedtest': {
          if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
            m.reply('Testing Speed...')
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
      break
    case 'listgrupbot':
      if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
const anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
        let teks = `📫 LIST GROUP CHAT\n\nTotal Group : ${anu.length} Group\n\n`
		for (let i of anu) {
      let metadata = await ichi.groupMetadata(i).catch((e) => console.log(e))
			teks += `Nama : ${metadata.subject}\n`
      teks += `ID : ${metadata.id}\n`
			teks += `Dibuat : ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('HH:mm:ss DD/MM/YYYY GMT')}\n`
      teks += `Member : ${metadata.participants.length}\n\n`
    }
      reply(teks)
      break
    case 'hooh':
      break
    
                  case 'gempa':
                    bmkg1 = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`)
                    bmkg1 = bmkg1.Infogempa
                    bmkg = bmkg1.gempa
                    bmk = `https://data.bmkg.go.id/DataMKG/TEWS/${bmkg.Shakemap}`
                    ini_txt = `Tanggal : ${bmkg.Tanggal}\n`
                    ini_txt += `Jam : ${bmkg.Jam}\n`
                    ini_txt += `Magnitudo : ${bmkg.Magnitude}\n`
                    ini_txt += `Kedalaman : ${bmkg.Kedalaman}\n`
                    ini_txt += `Koordinat : ${bmkg.Coordinates}\n`
                    ini_txt += `Lintang : ${bmkg.Lintang}\n`
                    ini_txt += `Bujur : ${bmkg.Bujur}\n`
                    ini_txt += `Lokasi Gempa : ${bmkg.Wilayah}\n`
                    ini_txt += `Dirasakan : ${bmkg.Dirasakan}\n\n`
                    ini_txt += `Data ini diambil dari *https://www.bmkg.go.id/gempabumi-dirasakan.html*`
                    senddatagempa = await getBuffer(bmk)
                    ichi.sendMessage(from, {image: senddatagempa, caption: ini_txt}, {quoted: m })
                    break
                    case 'gempadirasakan':
                    bmkg1 = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json`)
                    bmkg2 = bmkg1.Infogempa
                    bmkg3 = bmkg2.gempa
                    ini_txt = ""
                    ini_txt +=`*MENAMPILKAN 15 DATA GEMPA DIRASAKAN TERBARU*\n\n`
                    ini_txt +=`Data ini diambil dari *https://www.bmkg.go.id/gempabumi-dirasakan.html*\n\n`
              for (var x of bmkg3) {
                    ini_txt += `Tanggal : ${x.Tanggal}\n`
                    ini_txt += `Jam : ${x.Jam}\n`
                    ini_txt += `Magnitudo : ${x.Magnitude}\n`
                    ini_txt += `Kedalaman : ${x.Kedalaman}\n`
                    ini_txt += `Koordinat : ${x.Coordinates}\n`
                    ini_txt += `Lintang : ${x.Lintang}\n`
                    ini_txt += `Bujur : ${x.Bujur}\n`
                    ini_txt += `Lokasi Gempa : ${x.Wilayah}\n`
                    ini_txt += `Potensi : ${x.Dirasakan}\n\n`}
              m.reply(ini_txt)
              break
                    case 'gempaterbaru':
                    bmkg1 = await fetchJson(`https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json`)
                  bmkg2 = bmkg1.Infogempa
                    bmkg3 = bmkg2.gempa
                    ini_txt = ""
                    ini_txt +=`*MENAMPILKAN 15 DATA GEMPA MAGNITUDO 5.0+ TERBARU*\n\n`
                    ini_txt +=`Data ini diambil dari *https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg*\n\n`
              for (var x of bmkg3) {
                    ini_txt += `Tanggal : ${x.Tanggal}\n`
                    ini_txt += `Jam : ${x.Jam}\n`
                    ini_txt += `Magnitudo : ${x.Magnitude}\n`
                    ini_txt += `Kedalaman : ${x.Kedalaman}\n`
                    ini_txt += `Koordinat : ${x.Coordinates}\n`
                    ini_txt += `Lintang : ${x.Lintang}\n`
                    ini_txt += `Bujur : ${x.Bujur}\n`
                    ini_txt += `Lokasi Gempa : ${x.Wilayah}\n`
                    ini_txt += `Potensi : ${x.Potensi}\n\n`}
              m.reply(ini_txt)
              break
                    case 'corona':
                    case 'covid':
                    get_result = await fetchJson(`https://restu-restapi.herokuapp.com/covid?country=indonesia`)
                    get_result = get_result.result
                    ini_txt = `Laporan COVID Update pada : *${get_result.diperbarui}*\n\n`
                    ini_txt += `Positif : ${get_result.positif}\n`
                    ini_txt += `Sembuh : ${get_result.sembuh}\n`
                    ini_txt += `Meninggal : ${get_result.meninggal}\n\n`
                    ini_txt += 'Data ini diambil dari *https://covid19.go.id/peta-sebaran*'
                    reply( ini_txt )
                    break
                    case 'cuaca':
                    if (args.length == 0) return reply(`*Example:* .cuaca Yogyakarta`)
                    kota = args.join(" ")
                    cuaca1 = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=${lolapi}`)
                    cuaca2 = cuaca1.result
                    initxt = `*Kota* : ${cuaca2.tempat}\n`
                    initxt += `*Tanggal* : ${moment().format(
            "DD/MM/YYYY")}\n`
                    initxt += `*Cuaca* : ${cuaca2.cuaca}\n`
                    initxt += `*Deskripsi* : ${cuaca2.description}\n`
                    initxt += `*Suhu* : ${cuaca2.suhu}\n`
                    initxt += `*Kelembapan* : ${cuaca2.kelembapan}\n`
                    initxt += `*Angin* : ${cuaca2.angin}\n`
                    initxt += `*Pressure* : ${cuaca2.permukaan_laut}`
                    m.reply( initxt )
                    break
                    case 'jadwalsholat':
                    if (args.length == 0) return reply(`*Example:* .jadwalsholat Yogyakarta`)
                    cari = args[0]
                    cariid = await fetchJson(`https://api.myquran.com/v1/sholat/kota/cari/${cari}`)
                    cariid = cariid.data[0]
                    ketemuid = await fetchJson(`https://api.myquran.com/v1/sholat/jadwal/${cariid.id}/${moment().tz('Asia/Jakarta').format('YYYY/MM/DD')}`)
                    ketemuid = ketemuid.data
                    ketemuid1 = ketemuid.jadwal
                    itxt = `Tanggal: *${ketemuid1.tanggal}*\n`
                    itxt += `Kota/Kab: ${ketemuid.lokasi}\n`
                    itxt += `Provinsi: ${ketemuid.daerah}\n\n`
                    itxt += `Imsak: *${ketemuid1.imsak}*\n`
                    itxt += `Subuh: *${ketemuid1.subuh}*\n`
                    itxt += `Dhuha: *${ketemuid1.dhuha}*\n`
                    itxt += `Dzuhur: *${ketemuid1.dzuhur}*\n`
                    itxt += `Ashar: *${ketemuid1.ashar}*\n`
                    itxt += `Maghrib: *${ketemuid1.maghrib}*\n`
                    itxt += `Isya: *${ketemuid1.isya}*\n\n`
                    itxt += `Data ini diambil dari: *https://www.kompas.com/jadwal-sholat/kab-${cari}*\n\n`
      itxt += `*List Kabupaten/Kota :*
Ambarawa, Ambon, Amlapura, Amuntai, Argamakmur, ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Atambua, Babo, Bagan Siapiapi, Bajawa, Balige, Balik Papan, Banda Aceh, Bandarlampung, Bandung, Bangkalan, Bangkinang, Bangko, Bangli, Banjar, Banjar Baru, Banjarmasin, Banjarnegara, Bantaeng, Banten, Bantul, Banyuwangi, Barabai, Barito, Barru, Batam, Batang, Batu, Baturaja, Batusangkar, Baubau, Bekasi, Bengkalis, Bengkulu, Benteng, Biak, Bima, Binjai, Bireuen, Bitung, Blitar, Blora, Bogor, Bojonegoro, Bondowoso, Bontang, Boyolali, Brebes, Bukit Tinggi, Bulukumba, Buntok, Cepu, Ciamis, Cianjur, Cibinong, Cilacap, Cilegon, Cimahi, Cirebon, Curup, Demak, Denpasar, Depok, Dili, Dompu, Donggala, Dumai, Ende, Enggano, Enrekang, Fakfak, Garut, Gianyar, Gombong, Gorontalo, Gresik, Gunung Sitoli, Indramayu, Jakarta, Jambi, Jayapura, Jember, Jeneponto, Jepara, Jombang, Kabanjahe, Kalabahi, Kalianda, Kandangan, Karanganyar, Karawang, Kasungan, Kayuagung, Kebumen, Kediri, Kefamenanu, Kendal, Kendari, Kertosono, Ketapang, Kisaran, Klaten, Kolaka, Kota Baru Pulau Laut, Kota Bumi, Kota Jantho, Kota Mobagu, Kuala Kapuas, Kuala Kurun, Kuala Pembuang, Kuala Tungkal, Kudus, Kuningan, Kupang, Kutacane, Kutoarjo, Labuhan, Lahat, Lamongan, Langsa, Larantuka, Lawang, Lhoseumawe, Limboto, Lubuk Basung, Lubuk Linggau, Lubuk Pakam, Lubuk Sikaping, Lumajang, Luwuk, Madiun, Magelang, Magetan, Majalengka, Majene, Makale, Makassar, Malang, Mamuju, Manna, Manokwari, Marabahan, Maros, Martapura, Masohi, Mataram, Maumere, Medan, Mempawah, Menado, Mentok, Merauke, Metro, Meulaboh, Mojokerto, Muara Bulian, Muara Bungo, Muara Enim, Muara Teweh, Muaro Sijunjung, Muntilan, Nabire, Negara, Nganjuk, Ngawi, Nunukan, Pacitan, Padang, Padang Panjang, Padang Sidempuan, Pagaralam, Painan, Palangkaraya, Palembang, Palopo, Palu, Pamekasan, Pandeglang, Pangkajene, Pangkajene Sidenreng, Pangkalanbun, Pangkalpinang, Panyabungan, Pare, Parepare, Pariaman, Pasuruan, Pati, Payakumbuh, Pekalongan, Pekan Baru, Pemalang, Pematangsiantar, Pendopo, Pinrang, Pleihari, Polewali, Pondok Gede, Ponorogo, Pontianak, Poso, Prabumulih, Praya, Probolinggo, Purbalingga, Purukcahu, Purwakarta, Purwodadigrobogan, Purwokerto, Purworejo, Putussibau, Raha, Rangkasbitung, Rantau, Rantauprapat, Rantepao, Rembang, Rengat, Ruteng, Sabang, Salatiga, Samarinda, Sampang, Sampit, Sanggau, Sawahlunto, Sekayu, Selong, Semarang, Sengkang, Serang, Serui, Sibolga, Sidikalang, Sidoarjo, Sigli, Singaparna, Singaraja, Singkawang, Sinjai, Sintang, Situbondo, Slawi, Sleman, Soasiu, Soe, Solo, Solok, Soreang, Sorong, Sragen, Stabat, Subang, Sukabumi, Sukoharjo, Sumbawa Besar, Sumedang, Sumenep, Sungai Liat, Sungai Penuh, Sungguminasa, Surabaya, Surakarta, Tabanan, Tahuna, Takalar, Takengon, Tamiang Layang, Tanah Grogot, Tangerang, Tanjung Balai, Tanjung Enim, Tanjung Pandan, Tanjung Pinang, Tanjung Redep, Tanjung Selor, Tapak Tuan, Tarakan, Tarutung, Tasikmalaya, Tebing Tinggi, Tegal, Temanggung, Tembilahan, Tenggarong, Ternate, Tolitoli, Tondano, Trenggalek, Tual, Tuban, Tulung Agung, Ujung Berung, Ungaran, Waikabubak, Waingapu, Wamena, Watampone, Watansoppeng, Wates, Wonogiri, Wonosari, Wonosobo, Yogyakarta`
                    m.reply( itxt )
                    break
    case 'ip':
      let txtip = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolip = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolip, txtip, 'YaSya Bot', m)
                      if (!isOwner) return m.reply(mess.botOwner)
                       if (args.length == 0) return reply(`*Example:* .ip 1.1.1.1`)
                       ip = args.join(" ")
                       bukawebip = await fetchJson(`http://ip-api.com/json/${ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`)
                       ini_txt = `Ip : ${ip}\n`
                       ini_txt += `Isp : ${bukawebip.isp}\n`
                       ini_txt += `City : ${bukawebip.city}\n`
                       ini_txt += `Region : ${bukawebip.regionName}\n`
                       ini_txt += `ZipCode : ${bukawebip.zip}\n`
                       ini_txt += `Country : ${bukawebip.country}\n`
                       ini_txt += `TimeZone : ${bukawebip.timezone}\n`
                       ini_txt += `Lat : ${bukawebip.lat}\n`
                       ini_txt += `Lon : ${bukawebip.lon}\n`
                       ini_txt += `ASN : ${bukawebip.as}\n`
                       ini_txt += `AsName : ${bukawebip.asname}\n`
                       ini_txt += `Org : ${bukawebip.org}`
                       m.reply( ini_txt )
                       break
    case 'spamtlp':
      let txttlp = `*EN : Register first*\n*ID : Daftar dulu*`
    let tomboltlp = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tomboltlp, txttlp, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
                        if (!isOwner) return m.reply(mess.botOwner)
                        if (args.length == 0) return reply(`*Example:* .spamtlp 89xxx`)
                        nomer = args.join(" ")
                        nomer1 = await fetchJson(`https://caliphapi.com/api/spamcall?no=${nomer}&apikey=DmmL8IQZ`)
      m.reply(nomer1.result)
    await isPremium ? isPremium : limitAdd(m.sender)
                        break
    case 'spamall':
      let txtspm = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolspm = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolspm, txtspm, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
                          if (!isOwner) return m.reply(mess.botOwner)
                     if (args.length == 0) return reply(`*Example:* .spamall 62xxxxxxxxxxx`)
                     nomer = args.join(" ")
                     spam = await fetchJson(`https://api.xteam.xyz/spammer/pizzahut?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam1 = await fetchJson(`https://api.xteam.xyz/spammer/olx?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam2 = await fetchJson(`https://api.xteam.xyz/spammer/jagreward?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam3 = await fetchJson(`https://api.xteam.xyz/spammer/danacita?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam4 = await fetchJson(`https://api.xteam.xyz/spammer/akademi?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
                     spam5 = await fetchJson(`https://api.xteam.xyz/spammer//icq?no=${nomer}&APIKEY=a781ec5cc8d2e966`)
      m.reply(`Sukses Spam Nomer wa.me/${nomer}`)
    await isPremium ? isPremium : limitAdd(m.sender)
                     break
    case 'cekresi':
      let txtcr = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolcr = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolcr, txtcr, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
                      if (!isOwner) return m.reply(mess.botOwner)
                      if (args.length == 0) return reply(`*Example:* .cekresi NamaEkspedisi NomorResi`)
            cari1 = args[0]
            cari2 = args[1]
      resi1 = await fetchJson(`https://api.binderbyte.com/v1/track?api_key=f5eda35eb6a58e3c2b59cefbb1dba5af722f360a9977d953a1fdc170e1c94147&courier=${cari1}&awb=${cari2}`)
      resi2 = resi1.data
      resi3 = resi2.summary
      resi4 = resi2.detail
      resi5 = resi2.history
      crtxt = `No Resi: ${cari2}\n`
      crtxt += `Kurir: ${resi3.courier}\n`
      crtxt += `Service: ${resi3.service}\n`
      crtxt += `Pengirim: ${resi4.shipper}\n`
      crtxt += `Penerima: ${resi4.receiver}\n`
      crtxt += `Status: ${resi3.status}\n`
      crtxt += `Dikirim Tanggal: ${resi3.date}\n`
      crtxt += `Jumlah: ${resi3.amount}\n`
      crtxt += `Berat: ${resi3.weight}`
      m.reply(crtxt)
      setTimeout( () => {
      tlhsmp = ""
      for (var x of resi5) {
            tlhsmp += `${x.date}      _${x.desc}_\n\n`
      }
        ichi.sendText(m.chat,tlhsmp)
      }, 1000)
   await isPremium ? isPremium : limitAdd(m.sender)
      break

    case 'igstalk':
      if (isBanned) return reply(messs.banned);
      let txtigs = `*EN : Register first*\n*ID : Daftar dulu*`
    let tomboligs = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tomboligs, txtigs, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (args.length == 0) return reply(`*Example:* .igstalk alvianto.17`)
      m.reply(mess.wait)
          igresult = await instagramstalk(text)
            igtxt = `Username: ${text}\n`
            igtxt += `Fullname: ${igresult.data.fullname}\n`
            igtxt += `Bio: ${igresult.data.bio}\n`
            igtxt += `Followers: ${igresult.data.follower}\n`
            igtxt += `Following: ${igresult.data.following}\n`
            igtxt += `Post: ${igresult.data.timeline}\n`
            igtxt += `Professional: ${igresult.data.professional}\n`
            igtxt += `Business: ${igresult.data.business}\n`
            igtxt += `Verified? ${igresult.data.verified ? 'Lah kok centang? Pasti akun artis😏': 'Ngimpi Awokawokawok'}\n\n`
            igtxt += `Link: https://www.instagram.com/${text}/?hl=id`
            imagestalk = await getBuffer(igresult.profile[0].url)
      ichi.sendMessage(from, { image: imagestalk, caption: igtxt }, { quoted: m })
    await isPremium ? isPremium : limitAdd(m.sender)
            break
    case 'tiktokstalk':
      if (isBanned) return reply(messs.banned);
      let txttts = `*EN : Register first*\n*ID : Daftar dulu*`
    let tomboltts = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tomboltts, txttts, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (args.length == 0) return reply(`*Example:* .tiktokstalk alvianto.17`)
              m.reply(mess.wait)
      ttresult = await tiktokstalk(text)
        tttxt = `Username: ${ttresult.username}\n`
        tttxt += `Nickname: ${ttresult.name}\n`
        tttxt += `Followers: ${ttresult.followers}\n`
        tttxt += `Following: ${ttresult.following}\n`
        tttxt += `Likes: ${ttresult.likes}\n`
        tttxt += `Bio: ${ttresult.description}`
        imagestalk = await getBuffer(ttresult.pp_user)
      ichi.sendMessage(from, { image: imagestalk, caption: tttxt }, { quoted: m })
     await isPremium ? isPremium : limitAdd(m.sender)
      break
    case 'githubstalk':
      if (isBanned) return reply(messs.banned);
      let txtgs = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolgs = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolgs, txtgs, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      if (args.length == 0) return reply(`*Example:* .githubstalk alvianto.17`)
              m.reply(mess.wait)
      username = args.join(" ")
      ghresult = await githubstalk(text)
      ghtxt = `Username: ${ghresult.username}\n`
      ghtxt += `Name: ${ghresult.nickname}\n`
      ghtxt += `Id: ${ghresult.id}\n`
      ghtxt += `Bio: ${ghresult.bio}\n`
      ghtxt += `Public Repo: ${ghresult.public_repo}\n`
      ghtxt += `Email: ${ghresult.email}\n`
      ghtxt += `Followers: ${ghresult.followers}\n`
      ghtxt += `Following: ${ghresult.following}\n`
      ghtxt += `Type: ${ghresult.type}\n`
      ghtxt += `Company: ${ghresult.company}\n`
      ghtxt += `Location: ${ghresult.location}\n`
      ghtxt += `Created at: ${ghresult.created_at}\n`
      ghtxt += `Update at: ${ghresult.update_at}\n`
      ghtxt += `Link: https://github.com/${username}`
      avatar = await getBuffer(ghresult.profile_pic)
      ichi.sendMessage(from, { image: avatar, caption: ghtxt }, { quoted: m })
    await isPremium ? isPremium : limitAdd(m.sender)
      break
    case 'ppcp':
      if (isBanned) return reply(messs.banned);
      let txtpp = `*EN : Register first*\n*ID : Daftar dulu*`
    let tombolpp = [
  { buttonId: `.donasi`, buttonText: { displayText: 'Donate' }, type: 1 },
  { buttonId: `.register`, buttonText: { displayText: 'Register' }, type: 1 }
  ]   
  if (!isRegistered) return ichi.sendButtonText(m.chat, tombolpp, txtpp, 'YaSya Bot', m)
      if (isLimit(m.sender)) return;
      ppcpweb = await fetchJson(
          `https://saipulanuar.ga/api/random/couple`
        );
        ppcpweb = ppcpweb.result;
        cwo = await getBuffer(ppcpweb.male);
        cwe = await getBuffer(ppcpweb.female);
        ichi.sendMessage(from, { image: cwo, caption: 'Cowo' }, { quoted: m })
       ichi.sendMessage(from, { image: cwe, caption: 'Cewe' }, { quoted: m })
      await isPremium ? isPremium : limitAdd(m.sender)
        break;
//Eval
default:
            if (budy == `Assalamualaikum`) {
                  reply(`Waalaikumsalam`)
                  }
                  if (budy == `assalamualaikum`) {
                        reply(`Waalaikumsalam`)
                        }
                        if (budy == `Assalamu'alaikum`) {
                            reply(`Waalaikumsalam`)
                            }
                            if (budy == `assalamu'alaikum`) {
                                reply(`Waalaikumsalam`)
                                }
                                if (budy == `Terima kasih`) {
                                    reply(`Sama samaaa`)
                                    }
                                    if (budy == `terima kasih`) {
                                        reply(`Sama samaaa`)
                                        }
                                if (budy.includes(`62895401223315`)) {
                                  reply(`Maaf *${pushname}*, Dia baru sibuk atau sedang tidak memegang HP.\n\nPesanmu akan dibalas secepatnya\nTerima Kasih`)
                                }
                        if (budy == `Bot`) {
                              reply(`Apa? mau pakai bot? caranya kirim .help`)
                              }
                              if (budy == `bot`) {
                                    reply(`Apa? mau pakai bot? caranya kirim .help`)
                                    }
                                    if (budy == `P`) {
                                          reply(`Kesopanan minus( - )\n\n.help untuk melihat semua command/fitur`)
                                          }
                                          if (budy == `p`) {
                                                reply(`Kesopanan minus( - )\n\n.help untuk melihat semua command/fitur`)
                                                }
                                                    if (budy == `Hai`) {
                                                       reply(`Hai juga kak, mau pakai bot? caranya kirim .help`)
                                                    }
                                                    if (budy == `hai`) {
                                                       reply(`Hai juga kak, mau pakai bot? caranya kirim .help`)
                                                   }
                                            if (budy == `Asu`) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.opus`)
                                                  ichi.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.opus`)
                                                  ichi.sendMessage(from, { audio: buffer2, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  },6000)
                                                  }
                                            if (budy == `asu`) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.opus`)
                                                  ichi.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.opus`)
                                                  ichi.sendMessage(from, { audio: buffer2, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  },6000)
                                                  }
                                            if (budy == `Jancok`) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.opus`)
                                                  ichi.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.opus`)
                                                  ichi.sendMessage(from, { audio: buffer2, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  },6000)
                                                  }
                                            if (budy == `jancok`) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.opus`)
                                                  ichi.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.opus`)
                                                  ichi.sendMessage(from, { audio: buffer2, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  },6000)
                                                  }
                                            if (budy == `Kontol`) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.opus`)
                                                  ichi.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.opus`)
                                                  ichi.sendMessage(from, { audio: buffer2, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  },6000)
                                                  }
                                            if (budy == `kontol`) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.opus`)
                                                  ichi.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.opus`)
                                                  ichi.sendMessage(from, { audio: buffer2, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  },6000)
                                                  }
                                            if (budy == `Memek`) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.opus`)
                                                  ichi.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.opus`)
                                                  ichi.sendMessage(from, { audio: buffer2, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  },6000)
                                                  }
                                            if (budy == `memek`) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.opus`)
                                                  ichi.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.opus`)
                                                  ichi.sendMessage(from, { audio: buffer2, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  },6000)
                                                  }
                                            if (budy == `ngontol`) {
                                                  buffer = fs.readFileSync(`./src/ngomongmoral.opus`)
                                                  ichi.sendMessage(from, { audio: buffer, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  setTimeout( () => {
                                                  buffer2 = fs.readFileSync(`./src/ngomongsopan.opus`)
                                                  ichi.sendMessage(from, { audio: buffer2, mimetype: 'audio/mpeg', ptt: true }, {quoted: m })
                                                  },6000)
                                                  }

if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
         ichi.sendMessage(gruplog, { text: `*[ ERROR LOG ]*\n\n${moment().tz('Asia/Jakarta').format("HH:mm:ss DD/MM/YYYY")}\nError di bagian ${__filename}\n${budy || m.mtype}\n` + util.format(err) })
  m = String(err)
  await m.reply(m)
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
        ichi.sendMessage(gruplog, { text: `*[ ERROR LOG ]*\n\n${moment().tz('Asia/Jakarta').format("HH:mm:ss DD/MM/YYYY")}\nError di bagian ${__filename}\n${budy || m.mtype}\n` + util.format(err) })
  if(err) return reply(err)
  if (stdout) return m.reply(stdout)
  })
  }

  }
  } catch (err) {
    ichi.sendMessage(gruplog, { text: `*[ ERROR LOG ]*\n\n${moment().tz('Asia/Jakarta').format("HH:mm:ss DD/MM/YYYY")}\nError di bagian ${__filename}\n${budy || m.mtype}\n` + util.format(err) })
//  m.reply(util.format(err))
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
