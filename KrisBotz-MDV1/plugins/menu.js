//โซฐโซฏ ๐ต๐๐๐ : ๐ฒ๐๐๐๐ ๐ด๐๐ ๐ซ๐ ๐ฏ๐๐๐๐ ๐ด๐๐๐๐ ๐ซ๐๐๐ ๐ต๐๐๐ ๐บ๐๐๐๐ ๐๐๐๐ ๐ฉ๐๐๐๐ ๐บ๐๐๐๐๐ ๐ซ๐๐ ๐ด๐๐๐๐๐๐๐ ๐ต๐๐

//๐๐ฎ๐ญ๐ก๐จ๐ซ : ๐ฒ๐๐๐ ๐ฏ๐๐๐๐๐๐
//๐๐ : 085786211623 / 0882007324217
//๐๐๐ฌ๐ : ๐ฉ๐๐๐๐๐ ๐ฎ๐๐๐๐๐
//๐๐ฒ ๐๐ซ๐จ๐ฃ๐๐๐ญ : 10 ๐ถ๐๐๐๐๐๐ 2022

//โซนโฐโซบ ๐ต๐ผ๐บ ๐๐ป๐ด๐๐พ๐ ๐๐ โซนโฑโซบ
//โญ ๐จ๐๐๐๐ ๐๐๐๐ ๐ด๐๐๐ ๐ฌ๐๐
//โญ ๐ถ๐๐๐๐ ๐ป๐๐
//โญ ๐ป๐๐๐๐ ๐ฎ๐
//โญ ๐๐๐๐ ๐ผ๐๐๐ ๐บ๐๐๐๐๐๐ ๐ฎ๐๐

//โซนโซบ ๐๐๐ ๐๐๐๐ ๐๐๐๐ก ๐ป๐๐๐๐๐ ๐๐ โซนโซบ
//โธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธโธ
//โญ ๐จ๐๐๐๐๐๐๐๐๐๐๐
//โญ ๐น๐๐๐๐๐ฉ๐๐๐ ๐ถ๐๐๐
//โญ ๐ฑ๐๐๐๐ ๐ถ๐๐๐
//โญ ๐ช๐๐๐๐๐๐๐๐ ๐ฐ๐
//โญ ๐จ๐๐๐
//โญ ๐๐๐๐๐๐ ๐ถ๐๐
//โญ ๐ฒ๐๐๐ ๐ฏ๐๐๐๐๐๐//

import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
const { makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = (await import('@adiwajshing/baileys')).default

const defaultMenu = {
  before: `

โญโโโโโโ[ ๐๐๐๐ ๐๐๐ ]โโโโโโโ
โโญโโโโโโโโโโโโโโโโยทยทยท
โ  โฌก ๐๐๐ฆ๐ ๐๐จ๐ญ:* %me
โ  โฌก ๐๐จ๐๐:* %mode
โ  โฌก ๐๐ซ๐๐๐ข๐ฑ:* [ *%_p* ]
โ  โฌก ๐๐๐ข๐ฅ๐ฒ๐๐ฌ:* Multi Device
โ  โฌก ๐๐๐ญ๐ญ๐๐ซ๐ฒ:* ${conn.battery != undefined ? `$             {conn.battery.value}% ${conn.battery.live ? '๐ pengisian' : ''}` : 'tidak diketahui'}
โ  โฌก ๐๐ฅ๐๐ญ๐๐จ๐ซ๐ฆ: %platform
โ  โฌก ๐๐ฒ๐ฉ๐: Node.Js
โ  โฌก ๐๐ฉ๐ญ๐ข๐ฆ๐: %muptime
โ  โฌก ๐๐๐ญ๐๐๐๐ฌ๐: %rtotalreg dari %totalreg
โโฐโโโโโโโโโโโโโโโโยทยทยท
โ?โโโโโโโ[ ๐๐๐๐ ๐๐๐๐ ]โโโโโโโ
โโญโโโโโโโโโโโโโโโโยทยทยท
โ  โฌก ๐๐๐ฆ๐: %name
โ  โฌก ๐๐๐?๐ฌ: %tag
โ  โฌก ๐๐ซ๐๐ฆ๐ข๐ฎ๐ฆ: %prems
โ  โฌก ๐๐ข๐ฆ๐ข๐ญ: %limit
โ  โฌก ๐๐จ๐ง๐๐ฒ: %money   
โ  โฌก ๐๐จ๐ฅ๐: %role
โ  โฌก ๐๐๐ฏ๐๐ฅ: %level [ %xp4levelup Xp For Levelup] 
โ  โฌก ๐๐ฉ: %exp / %maxexp 
โ  โฌก ๐๐จ๐ญ๐๐ฅ ๐๐ฉ: %totalexp
โ โฐโโโโโโโโโโโโโโโโยทยทยท
โฐโโโโโโโโโโโโโโโโโโโโฌฃ
%readmore
`.trimStart(),
  header: 'โโฃโโใ %category ใโโโโฌฃ',
  body: 'โโ %cmd %isPremium %islimit',
  footer: 'โฃโโโโโโโโโโโโฌฃ\n',
  after: `%c4 %me`,
}
let handler = async (m, { conn, usedPrefix: _p, __dirname, args, command}) => {
	let tags
	let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'anime', 'update', 'maker', 'berita', 'edukasi', 'news', 'random', 'logo', 'menbalas', 'game', 'xp', 'islamic', 'stiker', 'rpg', 'kerangajaib', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database','quran', 'vote', 'nsfw', 'audio', 'jadibot', 'info', 'owner', 'nocategory']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
  'main': 'Main', 
  'game': 'Game',
  'rpg': 'RPG Games',
  'xp': 'Exp & Limit',
  'sticker': 'Sticker',
  'kerang': 'Kerang Ajaib',
  'quotes': 'Quotes',
  'fun': 'Fun',
  'anime': 'Anime',
  'admin': 'Admin',
  'group': 'Group',
  'vote': 'Voting',
  'absen': 'Absen',
  'premium': 'Premium',
  'anonymous': 'Anonymous Chat',
  'internet': 'Internet',
  'downloader': 'Downloader',
  'tools': 'Tools',
  'nulis': 'MagerNulis & Logo',
  'audio': 'Audio',
  'logo': 'Logo Menu',
  'maker': 'Maker',
  'berita': 'Berita',
  'database': 'Database',
  'quran': 'Al Qur\'an',
  'owner': 'Owner',
  'host': 'Host',
  'advanced': 'Advanced',
  'info': 'Info',
  '': 'No Category',
}
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'random') tags = {
    'random': 'Random'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'berita') tags = {
    'berita': 'Berita'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'group': 'Grup'
  }
  if (teks == 'group') tags = {
    'group': 'Group'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'Nulis',
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
if (teks == 'menbalas') tags = {
    'menbalas': 'Menfess'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
  }
  if (teks == 'logo') tags = {
    'logo': 'Logo Menu',
  }
  if (teks == 'absen') tags = {
    'absen': 'Absen'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Qur\'an',
    'islamic': 'Islamic'
  }
  if (teks == 'audio') tags = {
    'audio': 'Audio'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }
 if (teks == 'nsfw') tags = {
    'nsfw': 'Nsfw'
  }
  if (teks == 'nocategory') tags = {
    '': 'No Category'
  }
  try {
  	// DEFAULT MENU
      let dash = global.dashmenu
  	let m1 = global.dmenut
      let m2 = global.dmenub
      let m3 = global.dmenuf
      let m4 = global.dmenub2
      
      // COMMAND MENU
      let cc = global.cmenut
      let c1 = global.cmenuh
      let c2 = global.cmenub
      let c3 = global.cmenuf
      let c4 = global.cmenua
      
      // LOGO L P
      let lprem = global.lopr
      let llim = global.lolm
      let tag = `@${m.sender.split('@')[0]}`
    
    //-----------TIME---------
    let ucpn = `${ucapan()}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    let usrs = db.data.users[m.sender]
   
   const sections = [
   {
	title: `${htki} MAIN ${htka}`,
    rows: [
        {title: `โก ${pmenus}ใ SPEED BOT ใ`, rowId: ".speed", description: "Menampilkan kecepatan respon BOT"},
        {title: `๐ ${pmenus} ใ OWNER BOT ใ`, rowId: ".owner", description: "Menampilkan List owner BOT"},
        {title: `๐ ${pmenus} ใ OWNER ใ`, rowId: ".owner", description: "โง Ini Room Developer ku ^~^"},
        {title: `โฐ ${pmenus} ใ RUNTIME BOT ใ`, rowId: ".runtime", description: "๐ผ๐๐๐๐๐๐๐๐๐๐ Waktu Bot Berjalan"}, 
        {title: `๐ ${pmenus} ใ SCRIPT BOT ใ`, rowId: ".sc", description: `Source Code ${namebot}`},
    ]
      },{
        title: `${htki} SUPPORT ${htka}`,
        rows: [
            {title: `๐ ${pmenus} ใ SEWA ใ`, rowId: ".sewa", description: "Menampilkan list harga sewa BOT"},
            {title: `๐ ${pmenus}ใ  BUY PREMIUM ใ`, rowId: ".premium", description: "Menampilkan list harga premium"},
            {title: `๐น ${pmenus}ใ  DONASI ใ`, rowId: ".donasi", description: 'Support BOT agar lebih fast respon'},
        ]
        },{
          title: `${htki}ใ MENU MENFESS ${htka} ใ`,
          rows: [
            {title: `๐ฌ ${pmenus} Menfess Balas`, rowId: ".? menbalas", description: "Menampilkan Menu Manfess BOT"},
          ]},{
        title: `${htki} MENU ${htka}`,
        rows: [
            {title: `๐ฌ ${pmenus} ใ All ใ`, rowId: ".? all", description: "Menampilkan Semua command BOT"},
            {title: `๐ฑ ${pmenus} ใ Rpg ใ`, rowId: ".? rpg", description: "Game Epic Rpg!"},
        {title: `โจ ${pmenus} ใ Exp ใ`, rowId: ".? xp", description: "Ayo tingkatkan pangkat mu!"},
        {title: `๐ฎ ${pmenus} ใ Game ใ`, rowId: ".? game", description: "Gamenya seru seru lho >-<"},
        {title: `๐งฉ ${pmenus} ใ Fun ใ`, rowId: ".? fun", description: "Fitur yang aman untuk keluarga"},
        {title: `๐ ${pmenus} ใ Kerang ใ`, rowId: ".? kerangajaib", description: "Tanyakan pada ketua club"},
        {title: `๐ ${pmenus} ใ Quotes ใ`, rowId: ".? quotes", description: "Random Inspirasi"},
        {title: `โฉ๏ธ ${pmenus} ใ Anime ใ`, rowId: ".? anime", description: "Kamu wibu ya bang?"},
        {title: `๐ ${pmenus} ใ Nsfw ใ`, rowId: ".? nsfw", description: "Tch, dasar sagne"},
        {title: `๐ ${pmenus} ใ Premium ใ`, rowId: ".? premium", description: "Only premium Users"},
        {title: `๐ญ ${pmenus} ใ Anonymous Chats ใ`, rowId: ".? anonymous", description: "Bicara dengan orang tidak dikenal"},
        {title: `๐ ${pmenus} ใ Al-Quran ใ`, rowId: ".? quran", description: "Tobat yuk kak"},
        {title: `๐ ${pmenus} ใ Internet ใ`, rowId: ".? internet", description: "Cari sesuatu diBOT"},
        {title: `๐ ${pmenus} ใ Berita ใ`, rowId: ".? berita", description: "Cari berita terupdate"},
        {title: `๐ฉ ${pmenus} ใ Downloaders ใ`, rowId: ".? downloader", description: "Download sesuatu diBOT"},
        {title: `๐จ ${pmenus} ใ Stikers ใ`, rowId: ".? stiker", description: "Buat Sticker diBOT"},
        {title: `๐จ ${pmenus} ใ Logo ใ`, rowId: ".? logo", description: "Buat Logo Kamu diBOT"},
        {title: `โ๏ธ ${pmenus} ใ Nulis ใ`, rowId: ".? nulis", description: "Nulis kok males kak?"},
        {title: `๐ง ${pmenus} ใ Audio ใ`, rowId: ".? audio", description: "Ubah Audio dengan Filter"},
        {title: `๐ง ${pmenus} ใ Sound Menu ใ`, rowId: ".soundmenu", description: "Kumpulan 120 Sound"},
        {title: `๐ ${pmenus} ใ Store ใ-๐`, rowId: ".? store", description: "โฐโบ Anak jebeh ya kamu kak?"},
        {title: `๐ ${pmenus}  ใ Get Hadiah ใ`, rowId: ".daily", description: 'โง Mau hadiah nggak kak?... >.<'},
        {title: `๐ง ${pmenus} ใ Sound Kane Menu ใ`, rowId: ".soundkanemenu", description: "Kumpulan 24 Sound"},
        {title: `๐ข ${pmenus} ใ Group ใ`, rowId: ".? group", description: "Only Groups"},
        {title: `๐ ${pmenus} ใAdmin ใ`, rowId: ".? admin", description: "Only Admin Group"},
        {title: `๐๏ธ ${pmenus} ใ Database ใ`, rowId: ".? database", description: "Simpan sesuatu diBOT"},
        {title: `๐?๏ธ ${pmenus} ใ Tools ใ`, rowId: ".? tools", description: "Mungkin tools ini bisa membantu?"},
        {title: `โน๏ธ ${pmenus} ใ Info ใ`, rowId: ".? info", description: "Info info BOT"},
        {title: `๐ฉโ๐ป ${pmenus} ใ Owner ใ`, rowId: ".? owner", description: "Owner Only!"},
        {title: `โ ${pmenus} ใ No Category ใ`, rowId: ".? nocategory", description: "Fitur tanpa kategory!"},
        ]
        },
]

let tek = `๐ฏ๐๐ *${ucapan()} ${conn.getName(m.sender)}*

โญโโโโโโ[ ๐ผ๐บ๐ฌ๐น ๐ฐ๐ต๐ญ๐ถ ]โโโโโโโ
โโญโโโโโโโโโโโโโโโโยทยทยท
โ  *โข ๐ต๐๐๐:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
โ  *โข ๐ป๐๐๐:* @${m.sender.split`@`[0]}
โ  *โข ๐บ๐๐๐๐๐:* ${m.sender.split`@`[0] == nomorown ? 'Developer' : (usrs.premiumTime >= 1 ? 'Premium User' : 'Free User')}
โ  *โข ๐ณ๐๐๐๐:*  ${usrs.limit} โโฐโโโโโโโโโโโโโโโโยทยทยท
โ?โโโโโโโ๐ณ๐ฐ๐บ๐ป ๐ด๐ฌ๐ต๐ผโโโโโโ
โ ใท๏ธโ๏ธ ๐ฎ๐๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐ณ๐๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐ด๐๐๐๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐น๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐จ๐๐๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐บ๐๐๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐บ๐๐๐๐ ๐ฒ๐๐๐ ๐ด๐๐๐,
โ ใท๏ธโ๏ธ ๐บ๐๐๐๐๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐ฐ๐๐๐๐๐๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐ซ๐๐๐๐๐๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐ฉ๐๐๐๐๐ ๐ด๐๐๐
โ ใท๏ธโ๏ธ ๐ฎ๐๐๐๐ ๐ด๐๐๐
โ 
โ โช ๐ต๐๐๐ : ๐ฒ๐๐๐ ๐ฉ๐๐๐๐๐ ๐ซ๐ ๐ฉ๐๐๐๐ ๐ผ๐๐๐๐ ๐ด๐๐๐๐๐๐๐๐๐๐ ๐ด๐๐๐
โ โช ๐ต๐๐๐ ๐ฉ๐๐๐ : ${namebot}
โ โช ๐ถ๐๐๐๐ ๐ฉ๐๐๐ : ${nameown}
โฐโโโโโโโโโโโโโโโโโโโโฌฃ`
const listMessage = {
  text: tek,
  footer: wm2,
  mentions: await conn.parseMention(tek),
  title: ``,
  buttonText: `๐๐๐๐ ๐๐๐๐ โ`, 
  sections
}
  if (teks == '404') {
  	return conn.sendMessage(m.chat, listMessage, { quoted: fkontak, mentions: await conn.parseMention(tek), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
    }

 /**************************** TIME *********************/
 let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
    let wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
 
 let mode = global.opts['self'] ? 'Private' : 'Publik'
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { age, exp, limit, level, role, registered, money} = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Premium': 'Free'}`
    let platform = os.platform()
    
    //---------------------
    
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
          }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%_p' + help)
                .replace(/%islimit/g, menu.limit ? llim : '')
                .replace(/%isPremium/g, menu.premium ? lprem : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    let text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: uptime, muptime,
      me: conn.getName(conn.user.jid),
      npmname: _package.name,
      npmdesc: _package.description,
      version: _package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
      tag, dash,m1,m2,m3,m4,cc, c1, c2, c3, c4,lprem,llim,
      ucpn,platform, wib, mode, _p, money, age, tag, name, prems, level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    
    //----------------- FAKE
 let fvn = {quoted: { key: {participant : '0@s.whatsapp.net'},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds": "2022","ptt": "true"} } }}
 let floc = {quoted: { key: { participant : '0@s.whatsapp.net'}, message: { "liveLocationMessage": { "caption": `Menu`,"h": `${name}`, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg')}} }}
 let fdocs = {quoted: { key : { participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `Hai Kak ${name}!`,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }}}}
 let fgclink = {quoted: {key: {participant : '0@s.whatsapp.net'},message: {groupInviteMessage: {groupJid: "17608914335-1625305606@g.us",inviteCode: null,groupName: `Hai ${name}!`,  caption: wm,  jpegThumbnail: fs.readFileSync('./thumbnail.jpg') }} }}
 let fgif = {quoted: {key: { participant : '0@s.whatsapp.net'}, message: {  "videoMessage": {  "title": `Hai Kak ${name}!`, "h": `Hmm`, 'seconds': '999999999',  'gifPlayback': 'true',  'caption': wm, 'jpegThumbnail': fs.readFileSync('./thumbnail.jpg') } } } }
 let fkon = { key: { fromMe: false, participant: `${m.sender.split`@`[0]}@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}
 
    let ftoko = {
    key: {
    fromMe: false,
    participant: `${m.sender.split`@`[0]}` + '@s.whatsapp.net',
    remoteJid: 'status@broadcast',
  },
  message: {
  "productMessage": {
  "product": {
  "productImage":{
  "mimetype": "image/jpeg",
  "jpegThumbnail": fs.readFileSync('./thumbnail.jpg'),
    },
  "title": `${ucapan()}`,
  "description": '๐ง ๐ ๐? ๐ : ' + wktuwib,
  "currencyCode": "US",
  "priceAmount1000": "100",
  "retailerId": wm,
  "productImageCount": 999
        },
  "businessOwnerJid": `${m.sender.split`@`[0]}@s.whatsapp.net`
  }
  }
  }
  
    let urls = pickRandom(['https://telegra.ph/file/035e524939ab0294ba91f.jpg', 'https://telegra.ph/file/96b2275d3b14d071290bc.jpg', 'https://telegra.ph/file/2c6b7660bc6126404a9bb.jpg', 'https://telegra.ph/file/c635bf577bb9d59a3e00b.jpg', 'https://telegra.ph/file/be8dd52f6363f9e9f5a60.jpg', 'https://telegra.ph/file/02e53361b9dc946f63c8d.jpg', 'https://telegra.ph/file/298ed2f1bba17aeb64ca8.jpg', 'https://telegra.ph/file/be2a18221974147f66ea0.jpg'])
 
    const pp = await conn.profilePictureUrl(conn.user.jid).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
    
    //FAKE TROLI

    const ftrol = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: `Hai Kak ${name}!`, 

    orderTitle: `โฎMenu โธ`,

    thumbnail: await (await fetch(flaaa + 'Menu')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }
    
    const fload = {

    key : {

    remoteJid: 'status@broadcast',

    participant : '0@s.whatsapp.net'

    },

    message: {

    orderMessage: {

    itemCount : 2022,

    status: 1,

    surface : 1,

    message: '[โ] Memuat Menu ' + teks + '...\n Sabar Ya Kak ^ฯ^', 

    orderTitle: `โฎMenu โธ`,

    thumbnail: await (await fetch(flaaa + 'Loading')).buffer(), //Gambarnye

    sellerJid: '0@s.whatsapp.net' 

    }

    }

    }

    conn.reply(m.chat, '*โฐโฐโฐโฐโฐโฐโฑ Loading*', ftrol) 

    
    //------------------< MENU >----------------
    
    //------------------ SIMPLE
    /*conn.reply(m.chat, text, fkon, { contextInfo: { mentionedJid: [m.sender],
        externalAdReply: {
            title: `${htjava} ${namebot}`,
            body: titlebot,
            description: titlebot,
            mediaType: 2,
          thumbnail: await(await fetch(thumb2)).buffer(),
         mediaUrl: sig
        }
     }
    })*/
    
    //------------------ DOCUMENT
    let d1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
    let d2 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    let d3  = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    let d4 = 'application/pdf'
    let d5 = 'application/vnd.android.package-archive'
    let d6 = 'application/zip'
    let td = `${pickRandom([d1,d2,d3,d4,d5,d6])}`
    
    
    //------- MENU LOCATION
    const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage:{
  degreesLatitude: 34.672314,
  degreesLongitude: 135.484802,
  accuracyInMeters: 100,
  speedInMps: 999,
  degreesClockwiseFromMagneticNorth: 99,
  caption: text.trim(),
  sequenceNumber: 774236889,
  timeOffset: 8600,
  jpegThumbnail: await(await fetch(thumb)).buffer(),
  contextInfo: { mentionedJid: [m.sender] }
}}, { quoted: m
					})

//return conn.relayMessage(m.chat, pre.message, { messageId: pre.key.id })

//-------DOC TEMPLATE
    const message = { 
            document: { url: thumbdoc },
            jpegThumbnail: await (await fetch(urls)).buffer(),
            fileName: wm,
            mimetype: td,
            fileLength: fsizedoc,
            pageCount: fpagedoc,
            caption: text,
            footer: titlebot,
            templateButtons: [
                {
                    urlButton: {
                        displayText: `${namebot}`,
                        url: 'https://github.com/ImYanXiao/kris-MultiDevice'
                    }
                },
                {
                    urlButton: {
                        displayText: 'Instagram',
                        url: sig
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Owner๐',
                        id: '.owner'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Speedโก',
                        id: '.ping'
                    }
                },
                {
                    quickReplyButton: {
                        displayText: 'Donasi๐ต',
                        id: '.donasi'
                    }
                },
            ]
        }
       //await conn.sendMessage(m.chat, message, m, { mentionedJid: [m.sender] })
        
        //MAIN MENU
      /*conn.sendButton(m.chat, `*${ucapan()}, ${name} ๐*`, text.trim(), await genProfile(conn, m), [['Speedtest', _p + 'speedtest'], ['Owner', _p + 'owner']], false, { quoted: fkon, contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://Instagram.com/Xiao_yan_21",
    mediaType: "VIDEO",
    description: "https://Instagram.com/Xiao_yan_21", 
    title: wm,
    body: 'List Menu?',
    thumbnail: thumb,
    sourceUrl: sgc
}
} })*/

    //------------------- 2BUTTON VID
   // conn.sendMessage(m.chat, { video: { url: 'https://telegra.ph/file/c82d5c358495e8ef15916.mp4' }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text.trim(), footer: 'แดแดแดแด แดกษชแดส โค สส แดสษชs-สแดsแดษชษดษข', templateButtons: [{ quickReplyButton: { displayText: 'Speedtestโก', id: `${_p}speedtest` }}, { quickReplyButton: { displayText: 'Owner๐', id: `${_p}owner` }} ] })
    
    //------------------- Payment MENU
    /*await conn.relayMessage(m.chat,  {
    requestPaymentMessage: {
      currencyCodeIso4217: 'USD',
      amount1000: 50000000,
      requestFrom: m.sender,
      noteMessage: {
      extendedTextMessage: {
      text: text.trim(),
      contextInfo: {
      externalAdReply: {
      showAdAttribution: true
      }}}}}}, {})*/
      
    //------------------- 2BUTTON LOCATION
    conn.sendButton(m.chat, `${ucapan()}๏น`, text.trim(), `${timeimg()}`, [
      ['ใท ๐๐๐ง๐ฎ๏ธ ', `${_p}menu`],
      ['เฐ ๐๐ฉ๐๐๐๐ญ๐๐ฌ๐ญ๏ธ ', `${_p}speedtest`]
    ], m, {asLocation: true})
  } catch (e) {
    conn.reply(m.chat, 'Maaf, แดแดษดแด สแดษขษช แดสแดส', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i

handler.register = false
handler.exp = 3

export default handler

//----------- FUNCTION -------

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years ๐๏ธ*\n',  mo, ' *Month ๐*\n', d, ' *Days โ๏ธ*\n', h, ' *Hours ๐*\n', m, ' *Minute โฐ*\n', s, ' *Second โฑ๏ธ*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Kok Belum Tidur Kak? ๐ฅฑ"
  if (time >= 4) {
    res = "๐บ๐๐๐๐๐๐ ๐ท๐๐๐"
  }
  if (time >= 10) {
    res = "๐บ๐๐๐๐๐๐ ๐บ๐๐๐๐"
  }
  if (time >= 15) {
    res = "๐บ๐๐๐๐๐๐ ๐บ๐๐๐"
  }
  if (time >= 18) {
    res = "๐บ๐๐๐๐๐๐ ๐ด๐๐๐๐"
  }
  return res
}
function timeimg() {
    let imgloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  imgloc = ('./media/kris8.png')
  if (time >= 0) {
    imgloc = ('./media/kris.png')
  }
  if (time >= 4) {
    imgloc = ('./media/kris2.png')
  }
  if (time >= 8) {
    imgloc = ('./media/kris3.png')
  }
  if (time >= 12) {
    imgloc = ('./media/kris4.png')
  }
  if (time >= 16) {
    imgloc = ('./media/kris5.png')
  }
  if (time >= 20) {
    imgloc = ('./media/kris6.png')
  }
  if (time >= 24) {
    imgloc = ('./media/kris7.png')
  }
  return imgloc
}
