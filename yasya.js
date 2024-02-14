const {
  WA_DEFAULT_EPHEMERAL,
  // BufferJSON,
  // generateWAMessageFromContent,
  // downloadContentFromMessage,
  // downloadHistory,
  // proto,
  // getMessage,
  // generateWAMessageContent,
  // generateWAMessage,
  // prepareWAMessageMedia,
  // areJidsSameUser,
  // getContentType,
} = require("@adiwajshing/baileys");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment-timezone");
const util = require("util");
const os = require("os");
const speed = require("performance-now");
const { performance } = require("perf_hooks");
const hx = require("hxz-api");
const xa = require("xfarr-api");
let yts = require("yt-search");
let remobg = require("remove.bg");
let cron = require("node-cron");
const ig = require("ig-unduh");
const { youtubedl, youtubedlv2 } = require("@bochilteam/scraper-sosmed");
const { facebook, remini, toanime, openai } = require("betabotz-tools");
let cp = require("child_process");
let { promisify } = require("util");
let exec = promisify(cp.exec).bind(cp);

sender2 = m.sender;

//API WEBSITE
let lolhuman = ["AryaXyz"];
var lolapi = lolhuman[Math.floor(Math.random() * lolhuman.length)];

//Message Nya Ubah Disini
global.mess = {
  admin: "Kamu bukan Admin Grup!",
  botAdmin: "BOT bukan Admin!",
  botOwner: "Hanya untuk OWNER BOT!",
  group: "Hanya untuk Grup!",
  private: "Hanya untuk Private Chat",
  premium: "Hanya untuk Member Premium!",
  wait: "Loading...",
  done: "Done!",
};

//Waktu
// const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
// const wib = moment.tz("Asia/Jakarta").format("HH:mm:ss");
// const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
// const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
// const hour_now = moment().format("HH:mm:ss");

//Lib
let _prem = require("./lib/premium");
let {
  wikimedia,
  sfile,
  mediafireDl,
  whois,
  instagramstalk,
} = require("./lib/scraper");
let { TelegraPh, webp2mp4File } = require("./lib/uploader");
let {
  /*smsg,*/
  //getGroupAdmins,
  formatp,
  parseMillisecondss,
  //tanggal,
  //formatDate,
  //getTime,
  isUrl,
  //await,
  sleep,
  //clockString,
  //msToDate,
  //sort,
  //toNumber,
  //enumGetKey,
  runtime,
  fetchJson,
  getBuffer,
  jsonformat,
  //delay,
  //format,
  //logic,
  //generateProfilePicture,
  //parseMention,
  getRandom,
  //pickRandom,
} = require("./lib/myfunc");
let { toAudio, toPTT } = require("./lib/converter");
const { isFiltered, addFilter } = require("./lib/antispam");
let musical = require("./lib/musical");

global.limitawal = {
  premium: "Unlimited",
  free: 10,
};

global.data_registrasi = `SELECT * FROM tbl_registrasi`;
global.data_premium = `SELECT * FROM tbl_premium`;
global.data_banned = `SELECT * FROM tbl_banned`;
global.data_group = `SELECT * FROM tbl_group`;

const checkRegisteredUser = async (sender2) => {
  let status = false;
  const result = await new Promise((resolve, reject) => {
    db.query(data_registrasi, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  Object.keys(result).forEach((i) => {
    if (result[i].phone_number === sender2) {
      status = true;
    }
  });
  return status;
};

const checkBannedUser = async (sender2) => {
  let status = false;
  const result = await new Promise((resolve, reject) => {
    db.query(data_banned, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  Object.keys(result).forEach((i) => {
    if (result[i].phone_number === sender2) {
      status = true;
    }
  });
  return status;
};

const limitAdd = async (sender2) => {
  let position = false;
  const result = await new Promise((resolve, reject) => {
    db.query(data_registrasi, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
  Object.keys(result).forEach((i) => {
    if (result[i].phone_number === sender2) {
      position = i;
    }
  });
  if (position !== false) {
    const updateQuery = `UPDATE tbl_registrasi SET limit_user = ? WHERE phone_number = '${sender2}'`;
    db.query(
      updateQuery,
      (result[position].limit_user += 1),
      (error, results) => {
        if (error) throw error;
      }
    );
  }
};

//
//   let position = false;
//   Object.keys(readlimit).forEach((i) => {
//     if (readlimit[i].id == sender2) {
//       position = i;
//     }
//   });
//   if (position !== false) {
//     readlimit[position].limit += 1;
//     fs.writeFileSync(
//       "./database/userlimit.json",
//       JSON.stringify(readlimit, null, 1)
//     );
//   }
// };

autobio = true;

//Module Exports
module.exports = ichi = async (ichi, m, chatUpdate, store) => {
  try {
    const result_registrasi = await new Promise((resolve, reject) => {
      db.query(data_registrasi, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });

    const result_registrasi1 = await new Promise((resolve, reject) => {
      db.query(data_registrasi, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });

    const result_premium = await new Promise((resolve, reject) => {
      db.query(data_premium, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });

    const result_banned = await new Promise((resolve, reject) => {
      db.query(data_banned, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });

    const result_group = await new Promise((resolve, reject) => {
      db.query(data_group, (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });

    global.hasilquery_registrasi = await result_registrasi;
    global.hasilquery_premium = await result_premium;
    global.hasilquery_banned = await result_banned;
    global.hasilquery_group = await result_group;
    //console.log(m)
    var prefix = ".";
    //console.log(m)
    var body =
      m.mtype === "conversation" && m.message.conversation.startsWith(prefix)
        ? m.message.conversation
        : m.mtype == "imageMessage" &&
          m.message.imageMessage.caption.startsWith(prefix)
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage" &&
          m.message.videoMessage.caption.startsWith(prefix)
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage" &&
          m.message.extendedTextMessage.text.startsWith(prefix)
        ? m.message.extendedTextMessage.text
        : m.mtype == "viewOnceMessageV2" &&
          m.message.viewOnceMessageV2.message[
            Object.keys(m.message.viewOnceMessageV2.message)
          ].caption.startsWith(prefix)
        ? m.message.viewOnceMessageV2.message[
            Object.keys(m.message.viewOnceMessageV2.message)
          ].caption
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : /* m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId ||
          m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
          m.text
        :*/ "";
    //var prefix = /^[./!#]/.test(body) ? body.match(/^[./!#]/gi) : ".";
    var budy = typeof m.text == "string" ? m.text : "";
    const isCmd = body.startsWith(prefix);
    const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    // var body =
    //   m.mtype === "conversation"
    //     ? m.message.conversation
    //     : m.mtype == "imageMessage"
    //     ? m.message.imageMessage.caption
    //     : m.mtype == "videoMessage"
    //     ? m.message.videoMessage.caption
    //     : m.mtype == "extendedTextMessage"
    //     ? m.message.extendedTextMessage.text
    //     : m.mtype == "viewOnceMessageV2"
    //     ? m.message.viewOnceMessageV2.message[
    //         Object.keys(m.message.viewOnceMessageV2.message)
    //       ].caption
    //     : m.mtype == "buttonsResponseMessage"
    //     ? m.message.buttonsResponseMessage.selectedButtonId
    //     : m.mtype == "listResponseMessage"
    //     ? m.message.listResponseMessage.singleSenelectReply.selectedRowId
    //     : m.mtype == "templateButtonReplyMessage"
    //     ? m.message.templateButtonReplyMessage.selectedId
    //     : /* m.mtype === "messageContextInfo"
    //     ? m.message.buttonsResponseMessage?.selectedButtonId ||
    //       m.message.listResponseMessage?.singleSelectReply.selectedRowId ||
    //       m.text
    //     :*/ "";
    // var budy = typeof m.text == "string" ? m.text : "";
    // var prefix = prefa
    //   ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body)
    //     ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0]
    //     : ""
    //   : prefa;
    // const isCmd = body.startsWith(prefix);
    // const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = ichi.user.id
      ? ichi.user.id.split(":")[0] + "@s.whatsapp.net"
      : ichi.user.id;
    const isOwner = [ichi.user.id, ...global.ownerNumber]
      .map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
      .includes(m.sender);
    const itsMe = m.sender == ichi.user.id ? true : false;
    const text = (q = args.join(" "));
    const quoted = m.quoted ? m.quoted : m;
    const mime = (quoted.msg || quoted).mimetype || "";
    const isMedia = /image|video|sticker|audio/.test(mime);
    const from = m.key.remoteJid;
    const { type, quotedMsg, mentioned, now, fromMe } = m;
    const more = String.fromCharCode(8206);
    const readmore = more.repeat(4001);

    const isGroup = m.key.remoteJid.endsWith("@g.us");
    const groupMetadata = m.isGroup
      ? await ichi.groupMetadata(m.chat).catch((e) => {})
      : "";
    const groupName = m.isGroup ? groupMetadata.subject : "";
    const participants = m.isGroup ? await groupMetadata.participants : "";
    const groupAdmins = m.isGroup
      ? await participants.filter((v) => v.admin !== null).map((v) => v.id)
      : "";
    const groupOwner = m.isGroup ? groupMetadata.owner : "";
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
    const mentionUser = [
      ...new Set([
        ...(m.mentionedJid || []),
        ...(m.quoted ? [m.quoted.sender] : []),
      ]),
    ];
    const isNumber = (x) => typeof x === "number" && !isNaN(x);
    const isRegistered = await checkRegisteredUser(m.sender);
    const isBanned = await checkBannedUser(m.sender);
    const isPremium = isOwner
      ? true
      : _prem.checkPremiumUser(m.sender, hasilquery_premium);
    const isBaileys = quoted.isBaileys;

    const reply = (texto) => {
      ichi.sendMessage(
        from,
        { text: texto, mentions: [m.sender] },
        { quoted: m }
      );
    };

    try {
      let chats = readgroup[m.chat];
      if (typeof chats !== "object") readgroup[m.chat] = {};
      if (chats) {
        if (!("antilink" in chats)) chats.antilink = false;
      } else
        readgroup[m.chat] = {
          antilink: false,
        };
    } catch (err) {
      ichi.sendMessage(gruplog, {
        text:
          `*[ ERROR LOG ]*\n\n${moment()
            .tz("Asia/Jakarta")
            .format("HH:mm:ss DD/MM/YYYY")}\nError di bagian ${__filename}\n${
            budy || m.mtype
          }\n` + util.format(err),
      });
    }

    // Antilink
    try {
      Object.keys(hasilquery_group).forEach(async (i) => {
        if (hasilquery_group[i].group_id === m.chat) {
          if (hasilquery_group[i].antilink === 1) {
            // Fixed this line
            if (budy.match(`chat.whatsapp.com`)) {
              m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`);
              if (!isBotAdmins) return; //  buat ngediem in daripada nyepam m.reply(mess.botAdmin)
              var gclink =
                `https://chat.whatsapp.com/` +
                (await ichi.groupInviteCode(m.chat));
              var isLinkThisGc = new RegExp(gclink, "i");
              var isgclink = isLinkThisGc.test(m.text);
              if (isgclink)
                return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`);
              if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`);
              if (isOwner) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`);
              ichi.groupParticipantsUpdate(from, [m.sender], "remove");
            }
          }
        }
      });
    } catch (error) {
      console.log("Error:", error);
    }

    // Autotiktok
    try {
      Object.keys(hasilquery_group).forEach(async (i) => {
        if (hasilquery_group[i].group_id === m.chat) {
          if (hasilquery_group[i].autotiktok === 1) {
            if (budy.startsWith(prefix)) return;
            if (budy.match(`tiktok.com`)) {
              ichi.sendMessage(m.chat, {
                react: {
                  text: "⏳",
                  key: m.key,
                },
              });
              let musicaldown = await musical(budy);
              try {
                if (musicaldown.result.type === "image") {
                  for (let i of musicaldown.result.images) {
                    await ichi.sendMessage(
                      from,
                      { image: { url: `${i}` } },
                      { quoted: m }
                    );
                  }
                } else {
                  await ichi.sendMessage(
                    from,
                    {
                      video: {
                        url: `${
                          musicaldown.result.video2
                            ? musicaldown.result.video2
                            : musicaldown.result.video1
                        }`,
                      },
                    },
                    { quoted: m }
                  );
                }
                ichi.sendMessage(m.chat, {
                  react: {
                    text: "✅",
                    key: m.key,
                  },
                });
              } catch (err) {
                reply("Gagal saat mendownload video/foto");
              }
            }
          }
        }
      });
    } catch (error) {
      console.log("Error:", error);
    }

    // Autoinstagram
    try {
      Object.keys(hasilquery_group).forEach(async (i) => {
        if (hasilquery_group[i].group_id === m.chat) {
          if (hasilquery_group[i].autoinstagram === 1) {
            if (budy.startsWith(prefix)) return;
            if (budy.match(`instagram.com`)) {
              ichi.sendMessage(m.chat, {
                react: {
                  text: "⏳",
                  key: m.key,
                },
              });
              let res = await ig(budy);
              try {
                const ig = res.data;
                for (let i of ig) {
                  if (i.type.includes("video")) {
                    await ichi.sendMessage(
                      from,
                      {
                        video: { url: `${i.url}` },
                        mimetype: "video/mp4",
                      },
                      { quoted: m }
                    );
                  } else {
                    await ichi.sendMessage(
                      from,
                      { image: { url: `${i.url}` } },
                      { quoted: m }
                    );
                  }
                }
                await ichi.sendMessage(m.chat, {
                  react: {
                    text: "✅",
                    key: m.key,
                  },
                });
              } catch {
                reply("Gagal saat mendownload video/foto");
              }
            }
          }
        }
      });
    } catch (error) {
      console.log("Error:", error);
    }

    // Autofacebook
    try {
      Object.keys(hasilquery_group).forEach(async (i) => {
        if (hasilquery_group[i].group_id === m.chat) {
          if (hasilquery_group[i].autofacebook === 1) {
            if (budy.startsWith(prefix)) return;
            if (budy.match(`fb.watch` || `facebook.com`)) {
              ichi.sendMessage(m.chat, {
                react: {
                  text: "⏳",
                  key: m.key,
                },
              });
              let result = await facebook(budy);
              try {
                await ichi.sendMessage(from, {
                  video: {
                    url: result.result.hd_q
                      ? result.result.hd_q
                      : result.result.sd_q,
                  },
                  mimetype: "video/mp4",
                  quoted: m,
                });
                await ichi.sendMessage(m.chat, {
                  react: {
                    text: "✅",
                    key: m.key,
                  },
                });
              } catch (err) {
                m.reply("Tidak dapat mendownload video");
              }
            }
          }
        }
      });
    } catch (error) {
      console.log("Error:", error);
    }

    if (autobio) {
      if (autobio === false) return;
      let settingstatus = 0;
      if (new Date() * 1 - settingstatus > 1000) {
        ichi.setStatus(`MA x RJA | Runtime Bot : ${runtime(process.uptime())}`);
        settingstatus = new Date() * 1;
      }
    }

    if (m.mtype == "viewOnceMessageV2") {
      /*let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : @${m.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz("Asia/Jakarta").format("HH:mm:ss")} WIB
    
    💫 *MessageType* : ${m.mtype}`;
      reply(teks);
      await sleep(500);*/
      await m
        .copyNForward(
          "120363198930918529@g.us",
          true,
          {
            readViewOnce: true,
          },
          {
            quoted: mek,
          }
        )
        .catch((_) => m.reply("Mungkin dah pernah dibuka bot"));
    }

    //Self / Public
    if (!ichi.public) {
      if (!m.key.fromMe && !isOwner) return;
    }

    const checkLimit = (sender2, name) => {
      db.query(data_registrasi, (err, result) => {
        try {
          let found = false;
          for (let lmt of result) {
            if (lmt.phone_number === sender2) {
              let limitCounts = limitawal.free - lmt.limit_user;
              if (limitCounts <= 0)
                return reply(
                  `*Maaf ${lmt.user_name} limit anda telah habis*\n\n_Note : Limit reset setiap jam 00:00 WIB\nPengen limitnya unlimited?, Bisa kirim .buypremium, Bisa kirim .buypremium_`
                );
              reply(`*「 LIMIT COUNT 」*\n
Sisa limit anda : ${limitCounts}

NOTE :\n1. Untuk menggunakan bot kirim .help\n2. Untuk cek limit kirim .ceklimit\n3. Pengen limitnya unlimited?, Bisa kirim .buypremium`);
              found = true;
            }
          }
          if (found === false) {
            const dataToInsert = {
              phone_number: sender2,
              user_name: name,
              user_status: "Member",
              date_reg: moment()
                .tz("Asia/Jakarta")
                .format("HH:mm:ss DD/MM/YYYY"),
              limit_user: "0",
            };

            // SQL query to insert data, excluding the 'id' field
            const insertQuery = "INSERT INTO tbl_registrasi SET ?";
            db.query(insertQuery, dataToInsert, (err, results) => {
              if (err) {
                console.error("Error inserting data:", err);
                return;
              }
            });
            // let pushlimit = {
            //   id: m.sender,
            //   username: pushname,
            //   limit: 0,
            //   time: moment().tz("Asia/Jakarta").format("HH:mm:ss DD/MM/YYYY"),
            // };
            // readlimit.push(pushlimit);
            // fs.writeFileSync(
            //   "./database/userlimit.json",
            //   JSON.stringify(readlimit, null, 1)
            // );
          }
        } catch {
          console.log("Error saat mencari data...");
        }
      });
    };

    const isLimit = (sender2) => {
      let position = false;
      for (let i of hasilquery_registrasi) {
        if (i.phone_number === sender2) {
          let limits = i.limit_user;
          if (limits >= limitawal.free) {
            position = true;
            reply(
              `*Maaf ${i.user_name} limit anda telah habis*\n\n_Note : Limit reset setiap jam 00:00 WIB\nPengen limitnya unlimited?, Bisa kirim .buypremium_`
            );
            return true;
          } else {
            hasilquery_registrasi;
            position = true;
            return false;
          }
        }
      }
      if (position === false) {
        // const dataToInsert = {
        //   phone_number: sender2,
        //   user_name: nama,
        //   user_status: "Member",
        //   date_reg: moment().tz("Asia/Jakarta").format("HH:mm:ss DD/MM/YYYY"),
        //   limit_user: 0,
        // };
        // const insertQuery = "INSERT INTO tbl_registrasi SET ?";
        // db.query(insertQuery, dataToInsert, (err, results) => {
        //   if (err) {
        //     console.error("Error inserting data:", err);
        //     return;
        //   }
        // });
        reply(
          "Nomor kamu belum terdaftar ke Database BOT.\nSilahkan kirim pesan ke bot *.daftar namamu*\n\nContoh: .daftar YaSya"
        );
        return false;
      }
    };

    // const isLimit = (sender2) => {
    //   let position = false;
    //   for (let i of readlimit) {
    //     if (i.id === sender2) {
    //       let limits = i.limit;
    //       if (limits >= limitawal.free) {
    //         position = true;
    //         reply(
    //           `*Maaf ${pushname} limit anda telah habis*\n\n_Note : Limit reset setiap jam 00:00 WIB\nPengen limitnya unlimited?, Bisa kirim .buypremium_`
    //         );
    //         return true;
    //       } else {
    //         readlimit;
    //         position = true;
    //         return false;
    //       }
    //     }
    //   }
    //   if (position === false) {
    //     const limitpush = {
    //       id: m.sender,
    //       username: pushname,
    //       limit: 0,
    //       time: moment().tz("Asia/Jakarta").format("HH:mm:ss DD/MM/YYYY"),
    //     };
    //     readlimit.push(limitpush);
    //     fs.writeFileSync(
    //       "./database/userlimit.json",
    //       JSON.stringify(readlimit, null, 1)
    //     );
    //     return false;
    //   }
    // };

    //Masih tetap ngepush limit
    // const isLimit = (sender2) => {
    //   db.query(data_registrasi, (err, result) => {
    //     try {
    //       let position = false;
    //       for (let i of result) {
    //         if (i.phone_number === sender2) {
    //           let limits = i.limit_user;
    //           if (limits >= limitawal.free) {
    //             position = true;
    //             reply(
    //               `*Maaf ${pushname} limit anda telah habis*\n\n_Note : Limit reset setiap jam 00:00 WIB\nPengen limitnya unlimited?, Bisa kirim .buypremium_`
    //             );
    //             return true;
    //           } else {
    //             db.query(data_registrasi, (err, result) => {
    //               result;
    //               position = true;
    //               return false;
    //             });
    //           }
    //         }
    //       }
    //       if (position === false) {
    //         const dataToInsert = {
    //           phone_number: sender2,
    //           user_name: pushname,
    //           user_status: "User",
    //           date_reg: moment()
    //             .tz("Asia/Jakarta")
    //             .format("HH:mm:ss DD/MM/YYYY"),
    //           limit_user: 0,
    //         };
    //         const insertQuery = "INSERT INTO tbl_registrasi SET ?";
    //         db.query(insertQuery, dataToInsert, (err, results) => {
    //           if (err) {
    //             console.error("Error inserting data:", err);
    //             return;
    //           }
    //         });
    //         return false;
    //       }
    //     } catch {
    //       console.log("Error saat mencari data...");
    //     }
    //   });
    // };

    const bayarLimit = (sender2, amount) => {
      let position = false;
      Object.keys(readlimit).forEach((i) => {
        if (readlimit[i].id === sender2) {
          position = i;
        }
      });
      if (position !== false) {
        readlimit[position].limit -= amount;
        fs.writeFileSync(
          "./database/userlimit.json",
          JSON.stringify(readlimit, null, 1)
        );
      }
    };

    //Alasan Banned
    var found = false;
    Object.keys(hasilquery_banned).forEach((i) => {
      for (let cekban of hasilquery_banned) {
        if (cekban.phone_number === sender2) {
          found = i;
        }
        global.messs = {
          banned: `Kamu telah terbanned dengan alasan "${cekban.alasan_ban}"\n\nJika tidak sengaja silahkan join grup dibawah ini dan tag bot untuk melepas *Banned* mu\nLink Grup: https://chat.whatsapp.com/K3rILprlI0xHS1IxYQqwJo`,
        };
      }
    });

    //reply
    async function replygcxeon(teks) {
      if (typereply === "v1") {
        m.reply(teks);
      } else if (typereply === "v2") {
        ichi.sendMessage(
          m.chat,
          {
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "YaSya BOT",
                body: "YaSya BOT1",
                previewType: "PHOTO",
                thumbnail: fs.readFileSync("./media/blankpp.png"),
                sourceUrl: "https://chat.whatsapp.com/I9t1FLgLJCJ64F2JxQbQpA",
              },
            },
            text: teks,
          },
          {
            quoted: m,
          }
        );
      } else if (typereply === "v3") {
        ichi.sendMessage(
          m.chat,
          {
            text: teks,
            contextInfo: {
              externalAdReply: {
                showAdAttribution: true,
                title: "YaSya BOT",
                body: "YaSya BOT1",
                thumbnail: fs.readFileSync("./media/blankpp.png"),
                sourceUrl: websitex,
                mediaType: 1,
                renderLargerThumbnail: true,
              },
            },
          },
          { quoted: m }
        );
      }
    }

    //ANTI-SPAM BY ITALU
    // if (isCmd && isFiltered(from) && !isGroup) {
    //   const ff = ichi.sendMessage(from, {
    //     text: `Maaf @${
    //       m.sender.split("@")[0]
    //     } ...kamu hanya diijinkan mengirimkan perintah 3 detik sekali`,
    //     contextInfo: {
    //       mentionedJid: [m.sender],
    //     },
    //   });
    //   return reply(ff);
    // }

    // Premium Check
    _prem.expiredCheck(ichi, hasilquery_premium);

    //Reset Limit every 00:00 WIB
    cron.schedule(
      "0 0 * * *",
      function () {
        const updateQuery = "UPDATE tbl_registrasi SET limit_user = 0";
        db.query(updateQuery, (error, results, fields) => {
          if (error) throw error;
        });
        ichi.sendMessage(gruplog, { text: "Reset limit All Users" });
      },
      {
        scheduled: true,
        timezone: "Asia/Jakarta",
      }
    );

    // //Reset Limit every 00:00 WIB
    // cron.schedule(
    //   "0 0 * * *",
    //   function () {
    //     Object.keys(hasilquery_registrasi).forEach(async (user) => {
    //       const updateQuery = "UPDATE tbl_registrasi SET limit_user = ?";
    //       const values = [0];
    //       db.query(updateQuery, values, (error, results, fields) => {
    //         if (error) throw error;
    //         // Tampilkan hasil update
    //         //console.log("Jumlah baris yang terupdate:", results.affectedRows);
    //       });
    //     }),
    //       ichi.sendMessage(gruplog, { text: "Reset limit All Users" });
    //   },
    //   {
    //     scheduled: true,
    //     timezone: "Asia/Jakarta",
    //   }
    // );

    //Read Message
    if (m.message) {
      ichi.readMessages([m.key]);
    }

    //*EN : Register first*\nSend chat to bot .register YourName\n\n*ID : Daftar dulu*\n
    global.textRegister =
      "Nomor kamu belum terdaftar ke Database BOT.\nSilahkan kirim pesan ke bot *.daftar namamu*\n\nContoh: .daftar YaSya";

    //Push Message To Console
    if (m.message) {
      //if (m.isBaileys == true) return
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32m COMMAND \x1b[1;37m]",
        moment().tz("Asia/Jakarta").format("HH:mm:ss DD/MM/YYYY"),
        chalk.cyan(budy || m.mtype),
        "Dari",
        chalk.yellow(m.sender.split("@")[0]),
        chalk.yellow(pushname),
        "Di",
        chalk.red(groupName ? groupName : "Private Chat"),
        "args :",
        chalk.white(args.length)
      );
    }

    await ichi.sendPresenceUpdate("available", m.chat);
    //type WAPresence = 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'

    switch (command) {
      case "daftar":
      case "register":
        if (isRegistered)
          return reply(`Kamu telah terdaftar di Database YaSya BOT`);
        if (args.length == 0)
          return reply(
            "Namamu masih kosong, silahkan ulangi pendaftaran dengan kirim chat *.daftar namamu*\n\nContoh: .daftar YaSya"
          );
        if (isLimit(m.sender)) return;
        reply(`Kamu telah terdaftar di Database dengan Nama: ${text}`);
        setTimeout(() => {
          checkLimit(m.sender, text);
        }, 600);
        break;
      case "ban":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        if (!m.quoted && !text)
          return m.reply("Yang mau di Banned siapa? Setan??");
        let users = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        const obj = {
          phone_number: users,
          alasan_ban:
            text.replace(/[^a-z A-Z]/g, "") || "Yo Ndak Tau Kok Tanya Saya",
        };
        const insertQuery = "INSERT INTO tbl_banned SET ?";
        db.query(insertQuery, obj, (err, results) => {
          if (err) {
            console.error("Error inserting data:", err);
            return;
          }
        });
        reply(`Nomor wa.me/${users.split("@")[0]} telah di Banned.`);
        break;
      case "unban":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        if (!m.quoted && !text)
          return m.reply("Yang mau di UnBan siapa? Setan??");
        let userss = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        var found = false;
        Object.keys(hasilquery_banned).forEach((i) => {
          if (hasilquery_banned[i].phone_number === userss) {
            found = i;
          }
        });
        if (found !== false) {
          const banupdated = hasilquery_banned[found];
          const query11 = `DELETE FROM tbl_banned WHERE phone_number = "${banupdated.phone_number}"`;
          // Menjalankan query
          db.query(query11, (error, results) => {
            if (error) throw error;
          });
          reply(`Nomor wa.me/${userss.split("@")[0]} telah di unban!`);
        } else {
          reply(
            `Maaf, nomor ${userss.split("@")[0]} tidak terdaftar di database!`
          );
        }
        break;
      case "ceklimit":
      case "checklimit":
      case "sisalimitt":
        checkLimit(m.sender);
        break;
      case "bayarlimit":
      case "giftlimit":
      case "berilimit":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        if (args.length == 0) return reply(`*Contoh:* .giftlimit 628xxx 9999`);
        const nomerr = args[0].replace(/[^0-9]/g, "");
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
          const result = `*「 GIFT KUOTA LIMIT 」*\n\nGift kuota limit sukses pada ${moment()
            .tz("Asia/Jakarta")
            .format(
              "HH:mm:ss DD/MM/YYYY"
            )}\n• User : wa.me/${updated.id.replace(
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
      case "buylimit":
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
*_UNTUK YANG SUDAH TRANSFER HARAP LANGUSNG CHAT OWNER AGAR DAPAT SEGERA DIPROSES DAN SERTAKAN BUKTI TRANSFER_*`;
        qris = fs.readFileSync(`./media/qr.jpg`);
        ichi.sendMessage(from, { caption: donate, image: qris });
        break;

      //Premium
      case "prem":
      case "premium":
        if (!isOwner)
          return reply(
            "List Harga Premium\n\n1 Hari Rp.1000\n3 Hari Rp.3000\n7 Hari Rp.6000\n1 Bulan Rp.20000\n\n*Fitur Premium*\n1. Unlimited limit\n2. Bisa invite bot ke grup kalian dengan .join linkgrup\nBot akan keluar sendiri setelah anda mendapatkan notifikasi premium telah habis"
          );
        if (args.length < 1)
          return reply(
            `Penggunaan :\n*.prem* @tag waktu\n*.prem* nomor waktu\n\nContoh : ${command} @tag 30d`
          );
        let premm = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        if (!args[1]) return reply(`Mau yang berapa hari?`);
        _prem.addPremiumUser(premm, args[1], hasilquery_premium);
        ichi.sendMessage(premm, {
          text: `Selamat anda adalah member Premium YaSya Bot selama ${args[1].replace(
            /[^0-9]/g,
            ""
          )} Hari`,
        });
        ichi.sendMessage(from, {
          text: `Sukses menambahkan wa.me/${
            premm.split("@")[0]
          } kedalam member Premium selama ${args[1].replace(
            /[^0-9]/g,
            ""
          )} Hari`,
        });
        break;
      case "unprem":
      case "unpremium":
        if (!isOwner) return reply(mess.botOwner);
        let premmm = m.mentionedJid[0]
          ? m.mentionedJid[0]
          : m.quoted
          ? m.quoted.sender
          : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        var found = false;
        Object.keys(hasilquery_premium).forEach((i) => {
          if (hasilquery_premium[i].phone_number === premmm) {
            found = i;
          }
        });
        if (found !== false) {
          const premupdated = hasilquery_premium[found];
          premium.splice(premium.indexOf(premupdated), 1);
          fs.writeFileSync(
            "./database/premium.json",
            JSON.stringify(premium, null, 1)
          );
          reply(
            `Nomor wa.me/${
              premmm.split("@")[0]
            } telah di hapus dari daftar *Premium*!`
          );
        } else {
          reply(
            `Maaf, nomor ${
              premmm.split("@")[0]
            } tidak terdaftar di database *Premium*!`
          );
        }
        break;
      case "cekpremium":
      case "cekprem":
      case "checkpremium":
      case "checkprem":
        if (!isPremium)
          return reply(
            `Kamu bukan user premium, kirim perintah *.daftarprem* untuk membeli premium`
          );
        if (isOwner) return reply(`Kamu tu Owner,  buat apa check premium`);
        if (
          _prem.getPremiumExpired(m.sender, hasilquery_premium) == "PERMANENT"
        )
          return reply(`PERMANENT`);
        let cekvip = parseMillisecondss(
          _prem.getPremiumExpired(m.sender, hasilquery_premium) - Date.now()
        );
        let premiumnya = `*Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`;
        reply(premiumnya);
        break;
      case "buypremium":
      case "buyprem":
      case "belipremium":
      case "beliprem":
        reply(
          "List Harga Premium\n\n1 Hari Rp.1000\n3 Hari Rp.3000\n7 Hari Rp.6000\n1 Bulan Rp.20000\n\n*Fitur Premium*\n1. Unlimited limit\n2. Bisa invite bot ke grup kalian dengan .join linkgrup\nBot akan keluar sendiri setelah anda mendapatkan notifikasi premium telah habis"
        );
        break;
      case "resetlimit":
        if (!isOwner) return reply(mess.botOwner);
        const updateQuery = "UPDATE tbl_registrasi SET limit_user = 0";
        db.query(updateQuery, (error, results, fields) => {
          if (error) throw error;
        });
        ichi.sendMessage(gruplog, { text: "Reset limit All Users" });
        break;
      case "menu":
      case "help":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        Object.keys(hasilquery_registrasi).forEach((user) => {
          if (hasilquery_registrasi[user].phone_number === m.sender) {
            let limitCountss =
              limitawal.free - hasilquery_registrasi[user].limit_user;
            lzain = `╭──❲ INFO PENGGUNA ❳
│ Nama: *${hasilquery_registrasi[user].user_name}*
│ Type: ${hasilquery_registrasi[user].user_status}
│ Nomer: wa.me/${m.sender.split("@")[0]}
│ Limit : ${isPremium ? "Unlimited" : limitCountss}
╰───────────⊱
╭──❲ INFO BOT ❳
│  Nama BOT: YaSya BOT
│  Owner: YaSya
│  Server Region: Indonesia
│  OS: ${os.version()} ${os.arch()}
│  Uptime BOT: ${runtime(process.uptime())}
╰───────────⊱
╔════════
╠══ *MAIN MENU*
╠ .daftar
╠ .ceklimit
╠ .donasi
╠ .owner
╠ .ping
╠ .menu / .help
╚════════
╔════════
╠══ *DOWNLOAD MENU*
╠ .play
╠ .tiktok
╠ .tiktokmp3
╠ .ig
╠ .fb
╠ .twitter
╠ .mediafire
╠ .telesticker
╠ .yts
╠ .ytmp3
╠ .ytmp4
╚════════
╔════════
╠═ *INFORMATION MENU*
╠ .ai
╠ .jadwalsholat
╠ .gempa
╠ .gempadirasakan
╠ .gempaterbaru [Magnitudo 5.0+]
╠ .whois
╠ .cuaca
╠ .checklimit
╠ .buylimit
╚════════
╔════════
╠═ *STALKER MENU*
╠ .igstalk
╚════════
╔════════
╠══ *GROUP MENU*
╠ .antilink
╠ .linkgroup
╠ .grupid
╠ .revoke
╠ .delete
╠ .add
╠ .kick
╠ .promote
╠ .demote
╠ .setname
╠ .setdesk
╠ .setppgrup
╠ .tagall
╠ .hidetag
╚════════
╔════════
╠══ *MAKER MENU*
╠ .sticker
╠ .stickermeme
╠ .remini
╠ .toanime
╠ .toimg
╠ .tovideo
╠ .toaudio
╠ .tomp3
╠ .tovn
╠ .togif
╠ .tourl
╠ .removebg
╚════════
╔════════
╠══ *OWNER MENU*
╠ .chatuser
╠ .bc
╠ .bcgc
╠ .bcdonate
╠ .bcgcdonate
╠ .join
╠ .leave
╠ .block
╠ .unblock
╠ .blocklist
╠ .totalblock
╠ .ban
╠ .unban
╠ .listban
╠ .premium
╠ .unpremium
╠ .listpremium
╠ .listgrupbot
╠ .setppbot
╠ .self
╠ .public
╠ .resetlimit
╠ .restartbot
╠ .speedtest
╠ .listpengguna
╠ .listbanned
╠ .ip
╠ .cekresi
╚════════`;
            ichi.sendMessage(from, { text: lzain });
          }
        });
        break;
      case "donasi":
      case "donate":
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
*_Untuk pengguna GOPAY, DANA, OVO, SHOPEE, LINKAJA yang belum premium bisa men-scan kode QR_*`;
        qris = fs.readFileSync(`./media/qr.jpg`);
        ichi.sendMessage(
          from,
          { caption: donate, image: qris },
          { quoted: mek }
        );
        break;
      case "sewa":
      case "sewabot":
        m.reply(`Ingin memasukan BOT ke dalam grup kalian?
15 Hari Rp. 5500
1 Bulan Rp. 10000
2 Bulan Rp. 17000

Pembayaran via semua aplikasi kecuali *Pulsa*, Bayar? di .donate ya.\nJangan lupa kirimkan bukti transfer ke Owner`);
        break;
      case "sc":
      case "sourcecode":
      case "script":
        if (!isRegistered) return reply(textRegister);
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "owner":
        if (!isRegistered) return reply(textRegister);
        const vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          "N:Yannn Owner Bot\n" +
          "FN:Yannn Owner Bot\n" +
          "item1.TEL;waid=62895401223315:62895401223315\n" +
          "item1.X-ABLabel:Ponsel\n" +
          "item2.EMAIL;type=INTERNET:tuyulheroes11@gmail.com\n" +
          "item2.X-ABLabel:Email\n" +
          "item3.URL:https://instagram.com/alvianto.17\n" +
          "item3.X-ABLabel:Instagram\n" +
          "item4.ADR:;;Yogyakarta - Indonesia;;;;\n" +
          "item4.X-ABLabel:Region\n" +
          "END:VCARD";
        ichi.sendMessage(
          m.chat,
          { contacts: { displayName: "Jeff", contacts: [{ vcard }] } },
          { quoted: m }
        );
        break;
      case "ping":
      case "botstatus":
      case "statusbot":
      case "speed":
      case "tes":
        if (!isRegistered) return reply(textRegister);
        const used = process.memoryUsage();
        const cpus = os.cpus().map((cpu) => {
          cpu.total = Object.keys(cpu.times).reduce(
            (last, type) => last + cpu.times[type],
            0
          );
          return cpu;
        });
        const cpu = cpus.reduce(
          (last, cpu, _, { length }) => {
            last.total += cpu.total;
            last.speed += cpu.speed / length;
            last.times.user += cpu.times.user;
            last.times.nice += cpu.times.nice;
            last.times.sys += cpu.times.sys;
            last.times.idle += cpu.times.idle;
            last.times.irq += cpu.times.irq;
            return last;
          },
          {
            speed: 0,
            total: 0,
            times: {
              user: 0,
              nice: 0,
              sys: 0,
              idle: 0,
              irq: 0,
            },
          }
        );
        let timestamp = speed();
        let latensi = speed() - timestamp;
        neww = performance.now();
        oldd = performance.now();
        respon = `
🏎️ Ping: *${latensi.toFixed(4)} Second*\n\nRuntime BOT : ${runtime(
          process.uptime()
        )}\n\nRuntime Server : ${runtime(os.uptime())}

💻 Info Server

OS : ${os.version()} ${os.arch()}

RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

CPU: ${cpus[0].model}(${cpus[0].speed} MHZ) ${cpus.length} Core(s) CPU`.trim();
        m.reply(respon);
        break;

      //Owner Menu
      case "bcgc":
      case "bcgroup":
      case "broadcastgroup":
        {
          if (!isRegistered) return reply(textRegister);
          if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
          if (!text)
            return reply(
              `Text mana?\n\nExample : ${"." + command} ${global.ownerName}`
            );
          let getGroups = await ichi.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anuan = groups.map((v) => v.id);
          m.reply(mess.wait + "\nMohon Untuk Menunggu Sejenak");
          for (let yoi of anuan) {
            let txt = `*Broadcast YaSya Bot*\n\n${text}`;
            ichi.sendMessage(yoi, { text: txt });
          }
          m.reply(`Sukses Broadcast ke ${anuan.length} Grup`);
        }
        break;
      case "bc":
      case "broadcast":
      case "bcall":
        {
          if (!isRegistered) return reply(textRegister);
          if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
          if (!text)
            return reply(
              `Text mana?\n\nExample : ${"." + command} ${global.ownerName}`
            );
          let anu = await store.chats.all().map((v) => v.id);
          let getGroups = await ichi.groupFetchAllParticipating();
          let groups = Object.entries(getGroups)
            .slice(0)
            .map((entry) => entry[1]);
          let anuan = groups.map((v) => v.id);
          m.reply(mess.wait + "\nMohon Untuk Menunggu Sejenak");
          for (let yoi of anu) {
            let txt = `*Broadcast YaSya Bot*\n\n${text}`;
            ichi.sendMessage(yoi, { text: txt });
          }
          m.reply(`Sukses Broadcast ke ${anu.length} Chat`);
        }
        break;
      case "bcgcdonate":
      case "bcgroupdonate":
      case "bcgroupdonasi":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        let getGroups = await ichi.groupFetchAllParticipating();
        let groups = Object.entries(getGroups)
          .slice(0)
          .map((entry) => entry[1]);
        let bcdonategroup = groups.map((v) => v.id);
        donate = `*JIKA MERASA TERBANTU OLEH BOT BOLEH LAH DONASI KE BOT HEHE*\n\n
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
https://saweria.co/alvianto17\n`;
        qris = fs.readFileSync(`./media/qr.jpg`);
        for (let yoi of bcdonategroup) {
          await ichi.sendMessage(yoi, { caption: donate, image: qris });
        }
        m.reply(`Sukses Broadcast ke ${bcdonategroup.length} Chat`);
        break;
      case "bcdonate":
      case "bcdonasi":
      case "broadcastdonasi":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        let bcdonate = await store.chats.all().map((v) => v.id);
        donate = `*JIKA MERASA TERBANTU OLEH BOT BOLEH LAH DONASI KE BOT HEHE*\n\n
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
https://saweria.co/alvianto17\n`;
        qris = fs.readFileSync(`./media/qr.jpg`);
        for (let yoi of bcdonate) {
          await ichi.sendMessage(yoi, { caption: donate, image: qris });
        }
        m.reply(`Sukses Broadcast ke ${anu.length} Chat`);
        break;
      case "join":
        {
          if (!isRegistered) return reply(textRegister);
          /*if (!isOwner) return m.reply(mess.botOwner)*/
          if (!isPremium && !isOwner) return m.reply(mess.premium);
          if (!text) return m.reply("Masukkan Link Group!");
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply("Link Invalid!");
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          let result = args[0].split("https://chat.whatsapp.com/")[1];
          await ichi
            .groupAcceptInvite(result)
            .then((res) => m.reply(mess.done))
            .catch((err) => m.reply("Fitur Error ❎"));
          ichi.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key,
            },
          });
        }
        break;
      case "leave":
        {
          if (!isRegistered) return reply(textRegister);
          if (!isOwner) return m.reply(mess.botOwner);
          ichi.sendText(
            text ? text : m.chat,
            "Bot akan keluar dari grup ini, Untuk menggunakan BOT bisa kirim pesan Pribadi ke nomor BOT.\nTerima kasih telah menggunakan *YaSya BOT*\n\nLink Grup BOT: https://chat.whatsapp.com/I9t1FLgLJCJ64F2JxQbQpA"
          );
          await sleep(3000);
          await ichi.groupLeave(text ? text : m.chat);
        }
        break;
      case "block":
        {
          if (!isRegistered) return reply(textRegister);
          if (!isOwner) return m.reply(mess.botOwner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await ichi
            .updateBlockStatus(users, "block")
            .then((res) => m.reply(mess.done))
            .catch((err) => m.reply("Fitur Error ❎"));
        }
        break;
      case "unblock":
        {
          if (!isRegistered) return reply(textRegister);
          if (!isOwner) return m.reply(mess.botOwner);
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await ichi
            .updateBlockStatus(users, "unblock")
            .then((res) => m.reply(mess.done))
            .catch((err) => m.reply("Fitur Error ❎"));
        }
        break;
      case "totalblok":
      case "totalblock":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        listblok = await ichi.fetchBlocklist();
        ini_txt = `Total pengguna *Terblokir* YaSya BOT : ${listblok.length}`;
        ichi.sendMessage(from, { text: ini_txt });
        break;
      case "setppbot":
        {
          if (!isRegistered) return reply(textRegister);
          if (!isOwner) return m.reply(mess.botOwner);
          if (!quoted)
            throw m.reply(
              `Kirim/m.reply Image Dengan Caption ${"." + command}`
            );
          if (!/image/.test(mime))
            throw m.reply(
              `Kirim/m.reply Image Dengan Caption ${"." + command}`
            );
          if (/webp/.test(mime))
            throw m.reply(
              `Kirim/m.reply Image Dengan Caption ${"." + command}`
            );
          hmmm = (await "./trash/setppbot-") + getRandom("");
          let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm);
          await ichi
            .updateProfilePicture(botNumber, { url: media })
            .catch((err) => fs.unlinkSync(media));
          m.reply(mess.done);
          await fs.unlinkSync(media);
        }
        break;
      case "public":
        {
          if (!isRegistered) return reply(textRegister);
          if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
          ichi.public = true;
          m.reply("Sukses Mengubah Mode Bot Menjadi Publik");
        }
        break;
      case "self":
        {
          if (!isRegistered) return reply(textRegister);
          if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
          ichi.self = false;
          m.reply("Sukses Mengubah Mode Bot Menjadi Self");
        }
        break;
      case "eval":
        {
          if (!isRegistered) return reply(textRegister);
          if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return m.reply(bang);
          }
          try {
            m.reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
            );
          } catch (e) {
            m.reply(String(e));
          }
        }
        break;

      case "restart":
      case "restartbot":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        if (ichi.user.id.split(":")[0] + "@s.whatsapp.net") {
          await m.reply("RESTARTING BOT...");
          await process.exit(0);
        }
        break;

      //Group Menu
      case "antilink":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (!m.isGroup) return m.reply(mess.group);
        if (!isBotAdmins) return m.reply(mess.botAdmin);
        if (!isAdmins) return m.reply(mess.admin);
        if (args[0] === "on") {
          if (readgroup[m.chat].antilink)
            return m.reply(`Sudah Aktif Sebelumnya`);
          readgroup[m.chat].antilink = true;
          fs.writeFileSync(
            "./database/group.json",
            JSON.stringify(readgroup, null, 1)
          );
          m.reply(`Antilink Berhasil Di Aktifkan !`);
        } else if (args[0] === "off") {
          if (!readgroup[m.chat].antilink)
            return m.reply(`Sudah Nonaktif Sebelumnya`);
          readgroup[m.chat].antilink = false;
          fs.writeFileSync(
            "./database/group.json",
            JSON.stringify(readgroup, null, 1)
          );
          m.reply(`Antilink Berhasil Di Nonaktifkan !`);
        } else {
          let buttonsantilink = [
            {
              buttonId: `${command} on`,
              buttonText: { displayText: "Enable" },
              type: 1,
            },
            {
              buttonId: `${command} off`,
              buttonText: { displayText: "Disable" },
              type: 1,
            },
          ];
          await ichi.sendButtonText(
            m.chat,
            buttonsantilink,
            `Mode ${command} 🕊️`,
            `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`,
            m
          );
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "linkgc":
      case "linkgroup":
        {
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          let response = await ichi.groupInviteCode(m.chat);
          ichi.sendText(
            m.chat,
            `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`,
            m,
            { detectLink: true }
          );
        }
        break;
      case "revoke":
        {
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          await ichi.groupRevokeInvite(from);
          m.reply(mess.done);
        }
        break;
      case "kick":
        {
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          if (!m.quoted && !text) return m.reply("Yang mau di kick siapa??");
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await ichi
            .groupParticipantsUpdate(m.chat, [users], "remove")
            .then((res) => m.reply(mess.done))
            .catch((err) => m.reply(jsonformat(err)));
        }
        break;
      case "add":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          if (!m.quoted && !text)
            return m.reply("Yang mau di add siapa? Setan?");
          if (args[0].startsWith("08"))
            return m.reply("Gunakan kode negara 62 Gan");
          let users = m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await ichi
            .groupParticipantsUpdate(m.chat, [users], "add")
            .then((res) => m.reply(mess.done))
            .catch((err) => m.reply(jsonformat(err)));
        }
        break;
      case "promote":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          if (!m.quoted && !text) return m.reply("Yang mau di promote siapa??");
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await ichi
            .groupParticipantsUpdate(m.chat, [users], "promote")
            .then((res) => m.reply(mess.done))
            .catch((err) => m.reply(jsonformat(err)));
        }
        break;
      case "demote":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          if (!m.quoted && !text) return m.reply("Yang mau di demote siapa??");
          let users = m.mentionedJid[0]
            ? m.mentionedJid[0]
            : m.quoted
            ? m.quoted.sender
            : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
          await ichi
            .groupParticipantsUpdate(m.chat, [users], "demote")
            .then((res) => m.reply(mess.done))
            .catch((err) => m.reply(jsonformat(err)));
        }
        break;
      case "getgroupid":
      case "getgrupid":
      case "groupid":
      case "grupid":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isAdmins && !isOwner) return m.reply(mess.admin);
        reply(
          `ID Grup ${groupName} adalah: \n${m.chat}\n\nJangan lupa kirim ke Owner BOT ya:)`
        );
        break;
      case "setname":
      case "setsubject":
        {
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          if (!text) return reply(`Example: ${"." + command} Text ?`);
          await ichi
            .groupUpdateSubject(m.chat, text)
            .then((res) => m.reply(mess.done))
            .catch((err) => m.reply(jsonformat(err)));
        }
        break;
      case "setdesc":
      case "setdesk":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          if (!text) return reply(`Example: ${"." + command} Text ?`);
          await ichi
            .groupUpdateDescription(m.chat, text)
            .then((res) => m.reply(mess.done))
            .catch((err) => m.reply(jsonformat(err)));
        }
        break;
      case "setppgroup":
      case "setppgrup":
      case "setppgc":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isAdmins) return m.reply(mess.admin);
          if (!quoted)
            return m.reply(`Kirim/Reply Image Dengan Caption ${"." + command}`);
          if (!/image/.test(mime))
            return m.reply(`Kirim/Reply Image Dengan Caption ${"." + command}`);
          if (/webp/.test(mime))
            return m.reply(`Kirim/Reply Image Dengan Caption ${"." + command}`);
          hmmm = (await "./trash/setppgc-") + getRandom("");
          let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm);
          await ichi
            .updateProfilePicture(m.chat, { url: media })
            .catch((err) => fs.unlinkSync(media));
          m.reply(mess.done);
          await fs.unlinkSync(media);
        }
        break;
      case "tagall":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isAdmins) return m.reply(mess.admin);
          let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : "kosong"}*\n\n`;
          for (let mem of participants) {
            teks += `>> @${mem.id.split("@")[0]}\n`;
          }
          ichi.sendMessage(from, {
            text: teks,
            mentions: participants.map((a) => a.id),
          });
        }
        break;
      case "hidetag":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!m.isGroup) return m.reply(mess.group);
          if (!isAdmins) return m.reply(mess.admin);
          if (args.length == 0)
            return reply(`Contoh: ${"." + command} Pengumuman pengumuman`);
          ichi.sendMessage(from, {
            text: q ? q : "",
            mentions: participants.map((a) => a.id),
          });
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "delete":
      case "del":
        if (!m.isGroup) return m.reply(mess.group);
        if (!isBaileys)
          return reply("Hanya dapat menghapus pesan yang dikirimkan oleh bot");
        ichi.sendMessage(from, {
          delete: {
            remoteJid: m.key.remoteJid,
            id: m.key.id,
            fromMe: true,
            participant: m.key.participant,
          },
        });
        break;
      case "ephemeral":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          if (!text) return m.reply("Masukkan value enable/disable");
          if (args[0] === "enable") {
            await ichi
              .sendMessage(from, {
                disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL,
              })
              .then((res) => m.reply(mess.done))
              .catch((err) => m.reply(jsonformat(err)));
          } else if (args[0] === "disable") {
            await ichi
              .sendMessage(from, { disappearingMessagesInChat: false })
              .then((res) => m.reply(mess.done))
              .catch((err) => m.reply(jsonformat(err)));
          }
        }
        break;
      case "group":
      case "grup":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          if (args[0] === "close") {
            await ichi
              .groupSettingUpdate(from, "announcement")
              .then((res) => m.reply(`Sukses Menutup Group`))
              .catch((err) => m.reply(jsonformat(err)));
          } else if (args[0] === "open") {
            await ichi
              .groupSettingUpdate(from, "not_announcement")
              .then((res) => m.reply(`Sukses Membuka Group`))
              .catch((err) => m.reply(jsonformat(err)));
          } else if (args[0] === "tutup") {
            await ichi
              .groupSettingUpdate(from, "announcement")
              .then((res) => m.reply(`Sukses Menutup Group`))
              .catch((err) => m.reply(jsonformat(err)));
          } else if (args[0] === "buka") {
            await ichi
              .groupSettingUpdate(from, "not_announcement")
              .then((res) => m.reply(`Sukses Membuka Group`))
              .catch((err) => m.reply(jsonformat(err)));
          } else {
            replyan = `Grupnya mau dibuka atau ditutup?`;
            let buttonsgroup = [
              {
                buttonId: `${command} open`,
                buttonText: { displayText: "Open" },
                type: 1,
              },
              {
                buttonId: `${command} close`,
                buttonText: { displayText: "Close" },
                type: 1,
              },
            ];
            await ichi.sendButtonText(
              from,
              buttonsgroup,
              replyan,
              `Silahkan klik button dibawah, Jika button tidak muncul ketik ${command} open/close`
            );
          }
        }
        break;
      case "editinfo":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!m.isGroup) return m.reply(mess.group);
          if (!isBotAdmins) return m.reply(mess.botAdmin);
          if (!isAdmins) return m.reply(mess.admin);
          if (args[0] === "open") {
            await ichi
              .groupSettingUpdate(from, "unlocked")
              .then((res) => m.reply(`Sukses Membuka Edit Info Group`))
              .catch((err) => m.reply(jsonformat(err)));
          } else if (args[0] === "close") {
            await ichi
              .groupSettingUpdate(from, "locked")
              .then((res) => m.reply(`Sukses Menutup Edit Info Group`))
              .catch((err) => m.reply(jsonformat(err)));
          } else {
            let buttonsinfo = [
              {
                buttonId: `${command} open`,
                buttonText: { displayText: "Open" },
                type: 1,
              },
              {
                buttonId: `${command} close`,
                buttonText: { displayText: "Close" },
                type: 1,
              },
            ];
            await ichi.sendButtonText(
              from,
              buttonsinfo,
              `Mode Edit Info 🔥`,
              `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`,
              m
            );
          }
        }
        break;

      case "myip":
        {
          if (!isOwner && !m.key.fromMe) return;
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          var http = require("http");
          http.get(
            {
              host: "api.ipify.org",
              port: 80,
              path: "/",
            },
            function (resp) {
              resp.on("data", function (ip) {
                m.reply("🔎 My public IP address is: " + ip);
              });
            }
          );
          await sleep(3000);
          ichi.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key,
            },
          });
        }
        break;

      //Maker Menu
      case "sticker":
      case "s":
      case "stickergif":
      case "sgif":
      case "stiker":
      case "sg":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (!quoted)
            return m.reply(
              `Balas Video/Image Dengan Caption ${"." + command}`,
              m
            );
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          if (/image/.test(mime)) {
            let media = await quoted.download();
            let encmedia = await ichi.sendImageAsSticker(from, media, m, {
              packname: global.packname,
              author: global.author,
            });
            await fs.unlinkSync(encmedia);
            ichi.sendMessage(m.chat, {
              react: {
                text: "✅",
                key: m.key,
              },
            });
          } else if (/video/.test(mime)) {
            if ((quoted.msg || quoted).seconds > 10)
              return m.reply("Maksimal 10 detik!");
            let media = await quoted.download();
            let encmedia = await ichi.sendVideoAsSticker(from, media, m, {
              packname: global.packname,
              author: global.author,
            });
            await fs.unlinkSync(encmedia);
            ichi.sendMessage(m.chat, {
              react: {
                text: "✅",
                key: m.key,
              },
            });
          } else {
            m.reply(
              `Kirim Gambar/Video dengan caption .stiker\nDurasi Video 1-9 Detik`
            );
          }
        }
        break;

      case "smeme":
      case "stickmeme":
      case "stikmeme":
      case "stickermeme":
      case "stikermeme":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (args.length == 0)
            return reply(
              `Kirim/Reply Image Dengan Caption ${"." + command} Text1|Text2`
            );
          if (!/image/.test(mime))
            throw m.reply(
              `Kirim/Reply Image Dengan Caption ${"." + command} Text1|Text2`
            );
          if (/webp/.test(mime))
            throw m.reply(
              `Kirim/Reply Image Dengan Caption ${"." + command} Text1|Text2`
            );
          if (!/image/.test(mime)) throw respond;
          if (!text) throw respond;
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          atas = text.split("|")[0] ? text.split("|")[0] : "-";
          bawah = text.split("|")[1] ? text.split("|")[1] : "-";
          hmmm = (await "./trash/setppgc-") + getRandom("");
          let mee = await ichi.downloadAndSaveMediaMessage(quoted, hmmm);
          let mem = await TelegraPh(mee);
          let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(
            atas
          )}/${encodeURIComponent(bawah)}.png?background=${mem}`;
          let awikwok = await ichi.sendImageAsSticker(m.chat, smeme, m, {
            packname: global.packname,
            author: global.author,
          });
          await fs.unlinkSync(mee);
          await fs.unlinkSync(awikwok);
          /*addFilter(from)*/
          ichi.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key,
            },
          });
        }
        break;

      case "stikertele":
      case "stickertele":
      case "telestiker":
      case "telesticker":
      case "stele":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (args.length == 0)
          return reply(
            `Contoh: ${
              prefix + command
            } https://t.me/addstickers/a2010825200_by_tedeubot_2_video_by_v1tedeubot`
          );
        if (isLimit(m.sender)) return;
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        xa.downloader.telesticker(text).then(async (result) => {
          for (let i = 0; i < result.length; i++) {
            await ichi.sendMessage(m.chat, { sticker: { url: result[i].url } });
          }
        });
        ichi.sendMessage(m.chat, {
          react: {
            text: "✅",
            key: m.key,
          },
        });
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      //removebg
      case "imagenobg":
      case "removebg":
      case "remove-bg":
        {
          if (isBanned) return reply(messs.banned);
          let txt = `*EN : Register first*\n*ID : Daftar dulu*`;
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!quoted)
            throw m.reply(`Kirim/Reply Image Dengan Caption ${"." + command}`);
          if (!/image/.test(mime))
            throw m.reply(`Kirim/Reply Image Dengan Caption ${"." + command}`);
          if (/webp/.test(mime))
            throw m.reply(`Kirim/Reply Image Dengan Caption ${"." + command}`);
          let apirnobg = [
            "qiVzyubVfosyG1U99BJHPcst",
            "yXzqtQccRB9PXEMM1UQoYjzi",
            "rwxyTJCwU9AFS7ENjBUdTiLA",
            "gK6fQwrMzwTK5hD8wjWGHufC",
            "2gPwfkpngPJkLBJVCdi9R117",
            "2nsgsXT8XtDeyqUWcK7Rhk8C",
            "pJydoNBW28u7B6NgKKzb9QK3",
            "Lfpo6YQ75dDXAEPG7eMH9a6h",
            "n1TeYjxUqx3Yxhw3LNCEuiGF",
            "eskaSfAQABPMnfo8ye9XvcbY",
          ];
          let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)];
          hmm = (await "./trash/remobg-") + getRandom("");
          localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmm);
          outputFile = (await "./trash/hremo-") + getRandom(".png");
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          try {
            remobg
              .removeBackgroundFromImageFile({
                path: localFile,
                apiKey: apinobg,
                size: "regular",
                type: "auto",
                scale: "original",
                outputFile,
              })
              .then(async (result) => {
                //    console.log(result)
                await ichi.sendMessage(
                  from,
                  {
                    image: fs.readFileSync(outputFile),
                    caption: "success",
                  },
                  {
                    quoted: m,
                  }
                );
                const base64img = result.base64img;
                await fs.unlinkSync(localFile);
                await fs.unlinkSync(outputFile);
                ichi.sendMessage(m.chat, {
                  react: {
                    text: "✅",
                    key: m.key,
                  },
                });
              })
              .catch((errors) => {
                console.log(JSON.stringify(errors));
              });
          } catch (err) {
            ichi.sendMessage(gruplog, {
              text:
                `*[ ERROR LOG ]*\n\n${moment()
                  .tz("Asia/Jakarta")
                  .format(
                    "HH:mm:ss DD/MM/YYYY"
                  )}\nError di bagian ${__filename}\n${budy || m.mtype}\n` +
                util.format(err),
            });
            m.reply(util.format(err));
            await fs.unlinkSync(localFile);
            ichi.sendMessage(m.chat, {
              react: {
                text: "❌",
                key: m.key,
              },
            });
          }
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      /*case 'estetik': {
                  if (!quoted) throw reply(`Kirim/Reply Image Dengan Caption ${"." + command}`)
                  if (!/image/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${"." + command}`)
                  if (/webp/.test(mime)) throw reply(`Kirim/Reply Image Dengan Caption ${"." + command}`)
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

      case "imagetoanime":
      case "toanime":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (!/image/.test(mime))
          throw m.reply(`Kirim/Reply image dengan caption ${"." + command}`);
        if (/webp/.test(mime))
          throw m.reply(`Kirim/Reply image dengan caption ${"." + command}`);
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        hmmmm = (await "./trash/anime-") + getRandom("");
        localFile = await ichi.downloadAndSaveMediaMessage(quoted, hmmmm);
        let mem = await TelegraPh(localFile);
        hasila = await getBuffer(
          `https://api.lolhuman.xyz/api/imagetoanime?apikey=${lolapi}&img=${mem}`
        );
        ichi.sendMessage(
          m.chat,
          { image: hasila, caption: "Success" },
          { quoted: m }
        );
        await fs.unlinkSync(localFile);
        ichi.sendMessage(m.chat, {
          react: {
            text: "✅",
            key: m.key,
          },
        });
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      case "toimage":
      case "toimg":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!quoted) throw m.reply("Reply Image");
          if (!/webp/.test(mime))
            return m.reply(`Balas sticker dengan caption *${"." + command}*`);
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          hmmm = (await "./trash/toimg-") + getRandom("");
          let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm);
          let ran = await getRandom(".png");
          await exec(`ffmpeg -i ${media} ${ran}`, (err) => {
            if (err) throw err;
            let buffer = fs.readFileSync(ran);
            ichi.sendMessage(from, { image: buffer }, { quoted: m });
            fs.unlinkSync(media);
            fs.unlinkSync(ran);
          });
          await sleep(2000);
          ichi.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key,
            },
          });
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "tomp4":
      case "tovideo":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!quoted) throw m.reply("Reply Image");
          if (!/webp/.test(mime))
            throw m.reply(`balas stiker dengan caption *${"." + command}*`);
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          hmmm = (await "./trash/tomp4-") + getRandom("");
          let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm);
          let webpToMp4 = await webp2mp4File(media);
          await ichi.sendMessage(
            from,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
            },
            { quoted: m }
          );
          await fs.unlinkSync(media);
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "toaud":
      case "toaudio":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!/video/.test(mime) && !/audio/.test(mime))
            throw m.reply(
              `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
                prefix + command
              }`
            );
          if (!quoted)
            throw m.reply(
              `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${
                prefix + command
              }`
            );
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          let media = await quoted.download();
          let audio = await toAudio(media, "mp4");
          ichi.sendMessage(
            from,
            { audio: audio, mimetype: "audio/mpeg" },
            { quoted: m }
          );
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "tomp3":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (/document/.test(mime))
            throw m.reply(
              `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${
                prefix + command
              }`
            );
          if (!/video/.test(mime) && !/audio/.test(mime))
            throw m.reply(
              `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${
                prefix + command
              }`
            );
          if (!quoted)
            throw m.reply(
              `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${
                prefix + command
              }`
            );
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          let media = await quoted.download();
          let audio = await toAudio(media, "mp4");
          ichi.sendMessage(
            from,
            {
              document: audio,
              mimetype: "audio/mpeg",
              fileName: `Convert By ${ichi.user.name}.mp3`,
            },
            { quoted: m }
          );
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "tovn":
      case "toptt":
        {
          if (isBanned) return reply(messs.banned);
          let txt = `*EN : Register first*\n*ID : Daftar dulu*`;
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!/video/.test(mime) && !/audio/.test(mime))
            return reply(
              `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${
                prefix + command
              }`
            );
          if (!quoted)
            return reply(
              `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${
                prefix + command
              }`
            );
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          let media = await quoted.download();
          let audio = await toPTT(media, "mp4");
          ichi.sendMessage(
            from,
            { audio: audio, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "togif":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!/webp/.test(mime))
            return m.reply(`Balas sticker dengan caption *${"." + command}*`);
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          hmmm = (await "./trash/togif-") + getRandom("");
          let media = await ichi.downloadAndSaveMediaMessage(quoted, hmmm);
          let webpToMp4 = await webp2mp4File(media);
          await ichi.sendMessage(
            from,
            {
              video: {
                url: webpToMp4.result,
                caption: "Convert Webp To Video",
              },
              gifPlayback: true,
            },
            { quoted: m }
          );
          await fs.unlinkSync(media);
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "tourl":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          if (/image/.test(mime)) {
            hmm = (await "./trash/tourlimg-") + getRandom("");
            let media = await ichi.downloadAndSaveMediaMessage(quoted, hmm);
            let anu = await TelegraPh(media);
            m.reply(util.format(anu));
            await fs.unlinkSync(media);
          } else if (/video/.test(mime)) {
            hmmm = (await "./trash/tourlvid-") + getRandom("");
            let mediaa = await ichi.downloadAndSaveMediaMessage(quoted, hmmm);
            let anu = await TelegraPh(mediaa);
            m.reply(util.format(anu));
            fs.unlinkSync(mediaa);
          }
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      case "wikimedia":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!text) return reply("Masukkan Query Title");
          let wiki = await wikimedia(text);
          result = wiki[Math.floor(Math.random() * wiki.length)];
          let buttons = [
            {
              buttonId: `wikimedia ${text}`,
              buttonText: { displayText: "Next Result" },
              type: 1,
            },
          ];
          let buttonMessage = {
            image: { url: result.image },
            caption: `📄 Title : ${result.title}
📬 Source : ${result.source}
🔗 Media Url : ${result.image}`,
            footer: global.ownerName,
            buttons: buttons,
            headerType: 4,
          };
          ichi.sendMessage(from, buttonMessage, { quoted: m });
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      //Downloader
      case "play":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (args.length == 0) return reply(`*Example:* .play Waiting for love`);
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        try {
          const yt = await yts(text);
          const yt1 = await youtubedl(yt.all[0].url);
          const url = await yt1.audio["128kbps"].download();
          var caption = `Title : ${yt1.title}
Format : MP3
Resolusi : 128kbps`;
          ichi.sendImage(m.chat, yt1.thumbnail, caption);
          await ichi.sendMessage(from, {
            document: { url: url },
            mimetype: "audio/mpeg",
            fileName: `${yt1.title}.mp3`,
          });
          await ichi.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key,
            },
          });
        } catch (err) {
          reply(
            "Jika ingin mendownload melalui link, gunakan .ytmp3 atau .ytmp4\n\n.play hanya menyediakan download lagu via judul"
          );
        }
        (await isPremium) ? isPremium : await limitAdd(m.sender);
        break;
      case "ytmp3":
      case "ytaudio":
      case "yta":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!q) return m.reply(`Gunakan Format : ${command} linknya`);
          if (!isUrl(q)) return m.reply("Link Invalid ❎");
          if (!q.includes("youtube") / "youtu.be")
            return m.reply("Link Invalid ❎");
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          const yt1 = await youtubedl(text);
          const url = await yt1.audio["128kbps"].download();
          var caption = `Title : ${yt1.title}
Format : MP3
Resolusi : 128kbps`;
          ichi.sendImage(m.chat, yt1.thumbnail, caption);
          ichi.sendMessage(from, {
            document: { url: url },
            mimetype: "audio/mpeg",
            fileName: `${yt1.title}.mp3`,
          });
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "ytmp4":
      case "ytvideo":
      case "ytv":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (!q) return m.reply(`Gunakan Format : ${command} linknya`);
          if (!isUrl(q)) return m.reply("Link Invalid ❎");
          if (!q.includes("youtube") / "youtu.be")
            return m.reply("Link Invalid ❎");
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          const ytmp4 = await yts(text);
          const ytmp41 = await youtubedl(ytmp4.all[0].url);
          const urlmp4 = await ytmp41.video["360p"].download();
          var caption = `Judul : ${ytmp41.title}
Format : Mp4
Resolusi : 360p`;
          ichi.sendImage(m.chat, ytmp41.thumbnail, caption);
          ichi.sendMessage(
            m.chat,
            {
              video: { url: urlmp4 },
              mimetype: "video/mp4",
              caption: caption,
            },
            { quoted: m }
          );
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      case "yts":
      case "ytsearch":
        {
          if (isBanned) return reply(messs.banned);
          if (!isRegistered) return reply(textRegister);
          if (isLimit(m.sender)) return;
          if (args.length == 0)
            return reply(`*Example:* .yts Waiting for love`);
          ichi.sendMessage(m.chat, {
            react: {
              text: "⏳",
              key: m.key,
            },
          });
          if (!text) return reply(`Example : ${"." + command} story wa anime`);
          let search = await yts(text);
          let teks =
            "*---- Data Ditemukan ----*\n\n Keywords : " + text + "\n\n";
          let no = 1;
          for (let i of search.all) {
            teks += `🔢 No : ${no++}
🎞️ Type : ${i.type}
📀 Video ID : ${i.videoId}
📄 Title : ${i.title}
👁️ Views : ${i.views}
👁️ Duration : ${i.timestamp}
📤 Upload : ${i.ago}
👨‍🎤 Author : ${i.author.name}
🔗 Url : ${i.url}\n\n─────────────────\n\n`;
          }
          ichi.sendMessage(
            from,
            { image: { url: search.all[0].thumbnail }, caption: teks },
            { quoted: m }
          );
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      // case "spotify":
      //   if (isBanned) return reply(messs.banned);
      //   if (!isRegistered)
      //     return reply(
      //       textRegister
      //     );
      //   if (isLimit(m.sender)) return;
      //   if (args.length == 0)
      //     return reply(
      //       `*Example:* .spotify https://open.spotify.com/track/4pV6Kx1T9L49PBFwH1g8ca`
      //     );
      //   if (!q.includes("spotify")) return m.reply("Link Invalid");
      //   spodown = await fetchJson(
      //     `https://api.lolhuman.xyz/api/spotify?apikey=${lolapi}&url=${text}`
      //   );
      //   ini_txt = `Title : ${spodown.result.title}\n`;
      //   ini_txt += `Artis : ${spodown.result.artists}\n`;
      //   thumb = await getBuffer(spodown.result.thumbnail);
      //   ichi.sendMessage(
      //     m.chat,
      //     { image: thumb, caption: ini_txt },
      //     { quoted: m }
      //   );
      //   ichi.sendMessage(
      //     m.chat,
      //     {
      //       document: { url: spodown.result.link },
      //       mimetype: "audio/mpeg",
      //       fileName:
      //         spodown.result.title + " - " + spodown.result.artists + ".mp3",
      //     },
      //     { quoted: m }
      //   );
      //   (await isPremium) ? isPremium : limitAdd(m.sender);
      //   break;

      case "instagram":
      case "ig":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (args.length == 0)
          return reply(
            `*Example:* .instagram https://www.instagram.com/p/CYIjdyPvkpe/?igshid=YmMyMTA2M2Y= `
          );
        if (!q.includes("instagram")) return m.reply("Link Invalid");
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        ig(text).then((res) => {
          const ig = res.data;
          for (let i of ig) {
            if (i.type.includes("video")) {
              ichi.sendMessage(
                from,
                {
                  video: { url: `${i.url}` },
                  mimetype: "video/mp4",
                },
                { quoted: m }
              );
            } else {
              ichi.sendMessage(
                from,
                { image: { url: `${i.url}` } },
                { quoted: m }
              );
            }
          }
        });
        //for (let i of ig3) {
        //if (i.type.includes("mp4")) {
        //ichi.sendMessage(from,{ video: { url: `${i.url}` }, mimetype: 'video/mp4',quoted: m})
        //} else {
        //ichi.sendMessage(from, {image: { url: `${i.url}` }}, {quoted: m });
        //}
        //}
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "instagramstory":
      case "igstory":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (args.length == 0)
          return reply(`*Example:* .instagramstory alvianto.17`);
        ig1 = await fetchJson(
          `https://sanuw-api.herokuapp.com/docs/download/igstory?username=${text}&apikey=sanuwa`
        );
        for (let i of ig1.result) {
          if (i.fileType.includes("mp4")) {
            ichi.sendMessage(from, {
              video: { url: `${i.url}` },
              mimetype: "video/mp4",
              quoted: m,
            });
          } else {
            ichi.sendMessage(
              from,
              { image: { url: `${i.url}` } },
              { quoted: m }
            );
          }
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      case "tiktokdl":
      case "ttdl":
      case "tiktokmp4":
      case "tiktok":
      case "t":
      case "tt":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (args.length == 0)
          return reply(
            `*Example:* ${"." + command} https://vt.tiktok.com/ZS8U4ELY6/`
          );
        if (isLimit(m.sender)) return;
        if (!q.includes("tiktok")) return m.reply("Link Invalid");
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        let musicaldown = await musical(text);
        try {
          if (musicaldown.result.type === "image") {
            for (let i of musicaldown.result.images) {
              ichi.sendMessage(from, { image: { url: `${i}` } }, { quoted: m });
            }
          } else {
            ichi.sendMessage(
              from,
              {
                video: {
                  url: `${
                    musicaldown.result.video2
                      ? musicaldown.result.video2
                      : musicaldown.result.video1
                  }`,
                },
              },
              { quoted: m }
            );
          }
        } catch (err) {
          reply("Gagal saat mendownload video/foto");
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        // TiktokDL(text, {
        //   version: "v1", //  version: "v1" | "v2" | "v3"
        // }).then(async (result) => {
        //   console.log(result.result);
        //   try {
        //     ichi.sendMessage(from, {
        //       video: {
        //         url: `${result.result.video[0]}`,
        //       },
        //       mimetype: "video/mp4",
        //       quoted: m,
        //     });
        //   } catch (err) {
        //     for (let i of result.result.images) {
        //       ichi.sendMessage(m.chat, {
        //         image: await getBuffer(i),
        //         quoted: m,
        //       });
        //       // ichi.sendMessage(m.chat, { image: { url: i } }, { quoted: m });
        //     }
        //   }
        // })
        break;
      case "tiktokmp3":
      case "tiktokaudio":
      case "tiktokmusik":
      case "tiktokmusic":
      case "ta":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (args.length == 0)
          return reply(
            `*Example:* ${"." + command} https://vt.tiktok.com/ZS8U4ELY6/`
          );
        if (isLimit(m.sender)) return;
        if (!q.includes("tiktok")) return m.reply("Link Invalid");
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        let musicaldown1 = await musical(text);
        try {
          if (musicaldown1.result.type === "image") {
            ichi.sendMessage(
              from,
              {
                audio: { url: musicaldown1.result.music },
                mimetype: "audio/mpeg",
                ptt: true,
              },
              { quoted: m }
            );
            ichi.sendMessage(from, {
              document: { url: musicaldown1.result.music },
              mimetype: "audio/mpeg",
              fileName: `${musicaldown1.result.author.nickname}.mp3`,
            });
          } else {
            ichi.sendMessage(
              from,
              {
                audio: { url: musicaldown1.result.music },
                mimetype: "audio/mpeg",
                ptt: true,
              },
              { quoted: m }
            );
            ichi.sendMessage(from, {
              document: { url: musicaldown1.result.music },
              mimetype: "audio/mpeg",
              fileName: `${musicaldown1.result.author.nickname}.mp3`,
            });
            await sleep(4000);
            ichi.sendMessage(m.chat, {
              react: {
                text: "✅",
                key: m.key,
              },
            });
          }
        } catch (error) {
          m.reply(error);
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "twit":
      case "twitdl":
      case "twitter":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (args.length == 0)
          return reply(
            `*Example:* .twitter https://twitter.com/dekai23/status/1488600754256551941`
          );
        if (!q.includes("twitter")) return m.reply("Link Invalid");
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        hx.twitter(text).then((result) => {
          ichi.sendMessage(from, {
            video: { url: `${result.HD}` },
            mimetype: "video/mp4",
            quoted: m,
          });
        });
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "fb":
      case "fbdl":
      case "facebook":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (args.length == 0)
          return reply(
            `*Example:* .fb https://www.facebook.com/groups/526925218448628/permalink/591475845326898/`
          );
        if (!q.includes("f")) return m.reply("Link Invalid");
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        try {
          await facebook(text).then((result) => {
            ichi.sendMessage(from, {
              video: {
                url: result.result.hd_q
                  ? result.result.hd_q
                  : result.result.sd_q,
              },
              mimetype: "video/mp4",
              quoted: m,
            });
          });
        } catch (err) {
          m.reply("Tidak dapat mendownload video");
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "remini":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (!/image/.test(mime))
          throw m.reply(`Kirim/Reply Image Dengan Caption ${"." + command}`);
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        try {
          hmm = (await "./trash/remini-") + getRandom("");
          let mee = await ichi.downloadAndSaveMediaMessage(quoted, hmm);
          let mem = await TelegraPh(mee);
          await remini(mem).then((res) => {
            ichi.sendMessage(
              from,
              { image: { url: res.image_data } },
              { quoted: m }
            );
          });
          fs.unlinkSync(mee);
        } catch (err) {
          m.reply("Gagal dalam mengupload file");
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "mediafire":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (args.length == 0)
          return reply(
            `*Example:* .mediafire https://www.mediafire.com/file/t2hxyuz7vbwima1/example.txt/file`
          );
        if (!q.includes("mediafire")) return m.reply("Link Invalid");
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        await mediafireDl(text).then((mediafire) => {
          if (mediafire.mime.includes("mp4")) {
            ichi.sendMessage(from, {
              video: { url: `${mediafire.link}` },
              mimetype: "video/mp4",
              quoted: m,
            });
          } else if (mediafire.mime.includes("MP4")) {
            ichi.sendMessage(from, {
              video: { url: `${mediafire.link}` },
              mimetype: "video/mp4",
              quoted: m,
            });
          } else if (mediafire.mime.includes("jpg")) {
            ichi.sendMessage(from, {
              image: { url: `${mediafire.link}` },
              mimetype: "image/jpeg",
              quoted: m,
            });
          } else if (mediafire.mime.includes("png")) {
            ichi.sendMessage(from, {
              image: { url: `${mediafire.link}` },
              mimetype: "image/jpeg",
              quoted: m,
            });
          } else if (mediafire.mime.includes("mp3")) {
            ichi.sendMessage(
              from,
              {
                document: { url: `${mediafire.link}` },
                fileName: mediafire.title,
                mimetype: "audio/mpeg",
              },
              { quoted: m }
            );
          } else if (mediafire.mime.includes("m4a")) {
            ichi.sendMessage(
              from,
              {
                document: { url: `${mediafire.link}` },
                fileName: mediafire.title,
                mimetype: "audio/mpeg",
              },
              { quoted: m }
            );
          } else if (mediafire.mime.includes("txt")) {
            ichi.sendMessage(
              from,
              {
                document: { url: `${mediafire.link}` },
                fileName: mediafire.title,
                mimetype: "text/plain",
              },
              { quoted: m }
            );
          } else if (mediafire.mime.includes("xml")) {
            ichi.sendMessage(
              from,
              {
                document: { url: `${mediafire.link}` },
                fileName: mediafire.title,
                mimetype: "application/xml",
              },
              { quoted: m }
            );
          } else if (mediafire.mime.includes("zip")) {
            ichi.sendMessage(
              from,
              {
                document: { url: `${mediafire.link}` },
                fileName: mediafire.title,
                mimetype: "application/zip",
              },
              { quoted: m }
            );
          } else if (mediafire.mime.includes("rar")) {
            ichi.sendMessage(
              from,
              {
                document: { url: `${mediafire.link}` },
                fileName: mediafire.title,
                mimetype: "application/rar",
              },
              { quoted: m }
            );
          } else if (mediafire.mime.includes("7z")) {
            ichi.sendMessage(
              from,
              {
                document: { url: `${mediafire.link}` },
                fileName: mediafire.title,
                mimetype: "application/7z",
              },
              { quoted: m }
            );
          } else if (mediafire.mime.includes("apk")) {
            ichi.sendMessage(
              from,
              {
                document: { url: `${mediafire.link}` },
                fileName: mediafire.title,
                mimetype: "application/apk",
              },
              { quoted: m }
            );
          } else if (mediafire.mime.includes("pdf")) {
            ichi.sendMessage(
              from,
              {
                document: { url: `${mediafire.link}` },
                fileName: mediafire.title,
                mimetype: "application/pdf",
              },
              { quoted: m }
            );
          }
        });
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      case "sfile":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (args.length == 0)
          return reply(`*Example:* .sfile https://sfile.mobi/92vnBWC6bev`);
        if (!q.includes("sfile")) return m.reply("Link Invalid");
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        await sfile(text).then((sfile) => {
          ichi.sendMessage(from, {
            video: { url: sfile.link },
            mimetype: "video/mp4",
            quoted: m,
          });
        });
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;

      //INFORMASI
      case "listpengguna":
      case "listuser":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        let pengguna = hasilquery_registrasi;
        ini_txt = `List pengguna YaSya BOT : ${pengguna.length}\n\n`;
        for (let x of pengguna) {
          ini_txt += `Nama : ${x.user_name}\n`;
          ini_txt += `Nomor : wa.me/${x.phone_number.split("@")[0]}\n`;
          ini_txt += `Limit : ${limitawal.free - x.limit_user}\n`;
          ini_txt += `Terdaftar pada : ${x.date_reg}\n\n`;
        }
        ichi.sendMessage(m.chat, { text: ini_txt.trim() }, { quoted: m });
        break;
      case "listbanned":
      case "listban":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        let banned = hasilquery_banned;
        ini_txt = `List User Banned YaSya BOT : ${banned.length}\n\n`;
        for (let x of banned) {
          ini_txt += `Nomor : wa.me/${x.phone_number.split("@")[0]}\n`;
          ini_txt += `Alasan Banned : ${x.alasan_ban}\n\n`;
        }
        ichi.sendMessage(m.chat, { text: ini_txt.trim() }, { quoted: m });
        break;
      case "chatuser":
      case "pesanuser":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        nomeruser = args[0].replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        textuser = text.replace(/[^a-z A-Z]/g, "");
        ichi.sendMessage(nomeruser, {
          text: "*[Pesan dari Owner]*\n\n" + textuser,
        });
        ichi.sendMessage(m.chat, {
          text: `Pesan telah dikirimkan kepada wa.me/${args[0].replace(
            /[^0-9]/g,
            ""
          )}`,
        });
        break;
      case "listpremium":
      case "listprem":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        ini_txt = `List Premium YaSya BOT : ${hasilquery_premium.length}\n\n`;
        for (let x of hasilquery_premium) {
          let cekvip = parseMillisecondss(x.expired_prem - Date.now());
          ini_txt += `Nomor : wa.me/${x.phone_number.split("@")[0]}\n`;
          ini_txt += `Expired : ${cekvip.days} days ${cekvip.hours} hours ${cekvip.minutes} minutes\n\n`;
        }
        ichi.sendMessage(m.chat, { text: ini_txt.trim() }, { quoted: m });
        break;
      case "speedtest":
        {
          if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
          m.reply("Testing Speed...");
          let o;
          try {
            o = await exec("python speed.py");
          } catch (e) {
            o = e;
          } finally {
            let { stdout, stderr } = o;
            if (stdout.trim()) m.reply(stdout);
            if (stderr.trim()) m.reply(stderr);
          }
        }
        break;
      case "listgrupbot":
        if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner);
        const anu = await store.chats
          .all()
          .filter((v) => v.id.endsWith("@g.us"))
          .map((v) => v.id);
        let teks = `📫 LIST GROUP CHAT\n\nTotal Group : ${anu.length} Group\n\n`;
        for (let i of anu) {
          let metadata = await ichi
            .groupMetadata(i)
            .catch((e) => console.log(e));
          teks += `Nama : ${metadata.subject}\n`;
          teks += `ID : ${metadata.id}\n`;
          teks += `Dibuat : ${moment(metadata.creation * 1000)
            .tz("Asia/Jakarta")
            .format("HH:mm:ss DD/MM/YYYY GMT")}\n`;
          teks += `Member : ${metadata.participants.length}\n\n`;
        }
        reply(teks);
        break;

      case "gempa":
        bmkg1 = await fetchJson(
          `https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json`
        );
        bmkg1 = bmkg1.Infogempa;
        bmkg = bmkg1.gempa;
        bmk = `https://data.bmkg.go.id/DataMKG/TEWS/${bmkg.Shakemap}`;
        ini_txt = `Tanggal : ${bmkg.Tanggal}\n`;
        ini_txt += `Jam : ${bmkg.Jam}\n`;
        ini_txt += `Magnitudo : ${bmkg.Magnitude}\n`;
        ini_txt += `Kedalaman : ${bmkg.Kedalaman}\n`;
        ini_txt += `Koordinat : ${bmkg.Coordinates}\n`;
        ini_txt += `Lintang : ${bmkg.Lintang}\n`;
        ini_txt += `Bujur : ${bmkg.Bujur}\n`;
        ini_txt += `Lokasi Gempa : ${bmkg.Wilayah}\n`;
        ini_txt += `Dirasakan : ${bmkg.Dirasakan}\n\n`;
        ini_txt += `Data ini diambil dari *https://www.bmkg.go.id/gempabumi-dirasakan.html*`;
        senddatagempa = await getBuffer(bmk);
        ichi.sendMessage(
          from,
          { image: senddatagempa, caption: ini_txt },
          { quoted: m }
        );
        break;
      case "gempadirasakan":
        bmkg1 = await fetchJson(
          `https://data.bmkg.go.id/DataMKG/TEWS/gempadirasakan.json`
        );
        bmkg2 = bmkg1.Infogempa;
        bmkg3 = bmkg2.gempa;
        ini_txt = "";
        ini_txt += `*MENAMPILKAN 15 DATA GEMPA DIRASAKAN TERBARU*\n\n`;
        ini_txt += `Data ini diambil dari *https://www.bmkg.go.id/gempabumi-dirasakan.html*\n\n`;
        for (var x of bmkg3) {
          ini_txt += `Tanggal : ${x.Tanggal}\n`;
          ini_txt += `Jam : ${x.Jam}\n`;
          ini_txt += `Magnitudo : ${x.Magnitude}\n`;
          ini_txt += `Kedalaman : ${x.Kedalaman}\n`;
          ini_txt += `Koordinat : ${x.Coordinates}\n`;
          ini_txt += `Lintang : ${x.Lintang}\n`;
          ini_txt += `Bujur : ${x.Bujur}\n`;
          ini_txt += `Lokasi Gempa : ${x.Wilayah}\n`;
          ini_txt += `Potensi : ${x.Dirasakan}\n\n`;
        }
        m.reply(ini_txt);
        break;
      case "gempaterbaru":
        bmkg1 = await fetchJson(
          `https://data.bmkg.go.id/DataMKG/TEWS/gempaterkini.json`
        );
        bmkg2 = bmkg1.Infogempa;
        bmkg3 = bmkg2.gempa;
        ini_txt = "";
        ini_txt += `*MENAMPILKAN 15 DATA GEMPA MAGNITUDO 5.0+ TERBARU*\n\n`;
        ini_txt += `Data ini diambil dari *https://www.bmkg.go.id/gempabumi/gempabumi-terkini.bmkg*\n\n`;
        for (var x of bmkg3) {
          ini_txt += `Tanggal : ${x.Tanggal}\n`;
          ini_txt += `Jam : ${x.Jam}\n`;
          ini_txt += `Magnitudo : ${x.Magnitude}\n`;
          ini_txt += `Kedalaman : ${x.Kedalaman}\n`;
          ini_txt += `Koordinat : ${x.Coordinates}\n`;
          ini_txt += `Lintang : ${x.Lintang}\n`;
          ini_txt += `Bujur : ${x.Bujur}\n`;
          ini_txt += `Lokasi Gempa : ${x.Wilayah}\n`;
          ini_txt += `Potensi : ${x.Potensi}\n\n`;
        }
        m.reply(ini_txt);
        break;
      case "cuaca":
        if (args.length == 0) return reply(`*Example:* .cuaca Yogyakarta`);
        kota = args.join(" ");
        cuaca1 = await fetchJson(
          `https://api.lolhuman.xyz/api/cuaca/${text}?apikey=${lolapi}`
        );
        cuaca2 = cuaca1.result;
        initxt = `*Kota* : ${cuaca2.tempat}\n`;
        initxt += `*Tanggal* : ${moment().format("DD/MM/YYYY")}\n`;
        initxt += `*Cuaca* : ${cuaca2.cuaca}\n`;
        initxt += `*Deskripsi* : ${cuaca2.description}\n`;
        initxt += `*Suhu* : ${cuaca2.suhu}\n`;
        initxt += `*Kelembapan* : ${cuaca2.kelembapan}\n`;
        initxt += `*Angin* : ${cuaca2.angin}\n`;
        initxt += `*Pressure* : ${cuaca2.permukaan_laut}`;
        m.reply(initxt);
        break;
      case "jadwalsholat":
        if (args.length == 0)
          return reply(`*Example:* .jadwalsholat Yogyakarta`);
        cari = args[0];
        cariid = await fetchJson(
          `https://api.myquran.com/v2/sholat/kota/cari/${cari}`
        );
        cariid = cariid.data[0];
        ketemuid = await fetchJson(
          `https://api.myquran.com/v2/sholat/jadwal/${cariid.id}/${moment()
            .tz("Asia/Jakarta")
            .format("YYYY/MM/DD")}`
        );
        ketemuid = ketemuid.data;
        ketemuid1 = ketemuid.jadwal;
        itxt = `Tanggal: *${ketemuid1.tanggal}*\n`;
        itxt += `Kota/Kab: ${ketemuid.lokasi}\n`;
        itxt += `Provinsi: ${ketemuid.daerah}\n\n`;
        itxt += `Imsak: *${ketemuid1.imsak}*\n`;
        itxt += `Subuh: *${ketemuid1.subuh}*\n`;
        itxt += `Dhuha: *${ketemuid1.dhuha}*\n`;
        itxt += `Dzuhur: *${ketemuid1.dzuhur}*\n`;
        itxt += `Ashar: *${ketemuid1.ashar}*\n`;
        itxt += `Maghrib: *${ketemuid1.maghrib}*\n`;
        itxt += `Isya: *${ketemuid1.isya}*\n\n`;
        itxt += `Data ini diambil dari: *https://www.kompas.com/jadwal-sholat/kab-${cari}*\n\n`;
        itxt += `*List Kabupaten/Kota :*
Ambarawa, Ambon, Amlapura, Amuntai, Argamakmur, ͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏Atambua, Babo, Bagan Siapiapi, Bajawa, Balige, Balik Papan, Banda Aceh, Bandarlampung, Bandung, Bangkalan, Bangkinang, Bangko, Bangli, Banjar, Banjar Baru, Banjarmasin, Banjarnegara, Bantaeng, Banten, Bantul, Banyuwangi, Barabai, Barito, Barru, Batam, Batang, Batu, Baturaja, Batusangkar, Baubau, Bekasi, Bengkalis, Bengkulu, Benteng, Biak, Bima, Binjai, Bireuen, Bitung, Blitar, Blora, Bogor, Bojonegoro, Bondowoso, Bontang, Boyolali, Brebes, Bukit Tinggi, Bulukumba, Buntok, Cepu, Ciamis, Cianjur, Cibinong, Cilacap, Cilegon, Cimahi, Cirebon, Curup, Demak, Denpasar, Depok, Dili, Dompu, Donggala, Dumai, Ende, Enggano, Enrekang, Fakfak, Garut, Gianyar, Gombong, Gorontalo, Gresik, Gunung Sitoli, Indramayu, Jakarta, Jambi, Jayapura, Jember, Jeneponto, Jepara, Jombang, Kabanjahe, Kalabahi, Kalianda, Kandangan, Karanganyar, Karawang, Kasungan, Kayuagung, Kebumen, Kediri, Kefamenanu, Kendal, Kendari, Kertosono, Ketapang, Kisaran, Klaten, Kolaka, Kota Baru Pulau Laut, Kota Bumi, Kota Jantho, Kota Mobagu, Kuala Kapuas, Kuala Kurun, Kuala Pembuang, Kuala Tungkal, Kudus, Kuningan, Kupang, Kutacane, Kutoarjo, Labuhan, Lahat, Lamongan, Langsa, Larantuka, Lawang, Lhoseumawe, Limboto, Lubuk Basung, Lubuk Linggau, Lubuk Pakam, Lubuk Sikaping, Lumajang, Luwuk, Madiun, Magelang, Magetan, Majalengka, Majene, Makale, Makassar, Malang, Mamuju, Manna, Manokwari, Marabahan, Maros, Martapura, Masohi, Mataram, Maumere, Medan, Mempawah, Menado, Mentok, Merauke, Metro, Meulaboh, Mojokerto, Muara Bulian, Muara Bungo, Muara Enim, Muara Teweh, Muaro Sijunjung, Muntilan, Nabire, Negara, Nganjuk, Ngawi, Nunukan, Pacitan, Padang, Padang Panjang, Padang Sidempuan, Pagaralam, Painan, Palangkaraya, Palembang, Palopo, Palu, Pamekasan, Pandeglang, Pangkajene, Pangkajene Sidenreng, Pangkalanbun, Pangkalpinang, Panyabungan, Pare, Parepare, Pariaman, Pasuruan, Pati, Payakumbuh, Pekalongan, Pekan Baru, Pemalang, Pematangsiantar, Pendopo, Pinrang, Pleihari, Polewali, Pondok Gede, Ponorogo, Pontianak, Poso, Prabumulih, Praya, Probolinggo, Purbalingga, Purukcahu, Purwakarta, Purwodadigrobogan, Purwokerto, Purworejo, Putussibau, Raha, Rangkasbitung, Rantau, Rantauprapat, Rantepao, Rembang, Rengat, Ruteng, Sabang, Salatiga, Samarinda, Sampang, Sampit, Sanggau, Sawahlunto, Sekayu, Selong, Semarang, Sengkang, Serang, Serui, Sibolga, Sidikalang, Sidoarjo, Sigli, Singaparna, Singaraja, Singkawang, Sinjai, Sintang, Situbondo, Slawi, Sleman, Soasiu, Soe, Solo, Solok, Soreang, Sorong, Sragen, Stabat, Subang, Sukabumi, Sukoharjo, Sumbawa Besar, Sumedang, Sumenep, Sungai Liat, Sungai Penuh, Sungguminasa, Surabaya, Surakarta, Tabanan, Tahuna, Takalar, Takengon, Tamiang Layang, Tanah Grogot, Tangerang, Tanjung Balai, Tanjung Enim, Tanjung Pandan, Tanjung Pinang, Tanjung Redep, Tanjung Selor, Tapak Tuan, Tarakan, Tarutung, Tasikmalaya, Tebing Tinggi, Tegal, Temanggung, Tembilahan, Tenggarong, Ternate, Tolitoli, Tondano, Trenggalek, Tual, Tuban, Tulung Agung, Ujung Berung, Ungaran, Waikabubak, Waingapu, Wamena, Watampone, Watansoppeng, Wates, Wonogiri, Wonosari, Wonosobo, Yogyakarta`;
        m.reply(itxt);
        break;
      case "ip":
        let txtip = `*EN : Register first*\n*ID : Daftar dulu*`;
        let tombolip = [
          {
            buttonId: `.donasi`,
            buttonText: { displayText: "Donate" },
            type: 1,
          },
          {
            buttonId: `.register`,
            buttonText: { displayText: "Register" },
            type: 1,
          },
        ];
        if (!isRegistered)
          return ichi.sendButtonText(m.chat, tombolip, txtip, "YaSya Bot", m);
        if (!isOwner) return m.reply(mess.botOwner);
        if (args.length == 0) return reply(`*Example:* .ip 1.1.1.1`);
        ip = args.join(" ");
        bukawebip = await fetchJson(
          `http://ip-api.com/json/${ip}?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,offset,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query`
        );
        ini_txt = `Ip : ${ip}\n`;
        ini_txt += `Isp : ${bukawebip.isp}\n`;
        ini_txt += `City : ${bukawebip.city}\n`;
        ini_txt += `Region : ${bukawebip.regionName}\n`;
        ini_txt += `ZipCode : ${bukawebip.zip}\n`;
        ini_txt += `Country : ${bukawebip.country}\n`;
        ini_txt += `TimeZone : ${bukawebip.timezone}\n`;
        ini_txt += `Lat : ${bukawebip.lat}\n`;
        ini_txt += `Lon : ${bukawebip.lon}\n`;
        ini_txt += `ASN : ${bukawebip.as}\n`;
        ini_txt += `AsName : ${bukawebip.asname}\n`;
        ini_txt += `Org : ${bukawebip.org}\n`;
        ini_txt += `Hosting : ${bukawebip.org}\n`;
        ini_txt += `Mobile : ${bukawebip.mobile}\n`;
        ini_txt += `Hosting : ${bukawebip.hosting}\n`;
        ini_txt += `Proxy : ${bukawebip.proxy}`;
        m.reply(ini_txt);
        break;
      case "cekresi":
        let txtcr = `*EN : Register first*\n*ID : Daftar dulu*`;
        let tombolcr = [
          {
            buttonId: `.donasi`,
            buttonText: { displayText: "Donate" },
            type: 1,
          },
          {
            buttonId: `.register`,
            buttonText: { displayText: "Register" },
            type: 1,
          },
        ];
        if (!isRegistered)
          return ichi.sendButtonText(m.chat, tombolcr, txtcr, "YaSya Bot", m);
        if (isLimit(m.sender)) return;
        if (!isOwner) return m.reply(mess.botOwner);
        if (args.length == 0)
          return reply(`*Example:* .cekresi NamaEkspedisi NomorResi`);
        cari1 = args[0];
        cari2 = args[1];
        resi1 = await fetchJson(
          `https://api.binderbyte.com/v1/track?api_key=f5eda35eb6a58e3c2b59cefbb1dba5af722f360a9977d953a1fdc170e1c94147&courier=${cari1}&awb=${cari2}`
        );
        resi2 = resi1.data;
        resi3 = resi2.summary;
        resi4 = resi2.detail;
        resi5 = resi2.history;
        crtxt = `No Resi: ${cari2}\n`;
        crtxt += `Kurir: ${resi3.courier}\n`;
        crtxt += `Service: ${resi3.service}\n`;
        crtxt += `Pengirim: ${resi4.shipper}\n`;
        crtxt += `Penerima: ${resi4.receiver}\n`;
        crtxt += `Status: ${resi3.status}\n`;
        crtxt += `Dikirim Tanggal: ${resi3.date}\n`;
        crtxt += `Jumlah: ${resi3.amount}\n`;
        crtxt += `Berat: ${resi3.weight}`;
        m.reply(crtxt);
        setTimeout(() => {
          tlhsmp = "";
          for (var x of resi5) {
            tlhsmp += `${x.date}      _${x.desc}_\n\n`;
          }
          ichi.sendText(m.chat, tlhsmp);
        }, 1000);
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      case "whois":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (args.length == 0) return reply(`*Example:* .whois yasyabot.biz.id`);
        whois(text).then((whois_data) => {
          try {
            ini_txt = `DOMAIN:\n`;
            ini_txt += `Domain ID: ${whois_data.domain.id}\n`;
            ini_txt += `Domain: ${whois_data.domain.domain}\n`;
            ini_txt += `TLD: ${whois_data.domain.extension}\n`;
            ini_txt += `Status: ${whois_data.domain.status}\n`;
            ini_txt += `Name Server: ${whois_data.domain.name_servers}\n`;
            ini_txt += `Created On: ${whois_data.domain.created_date}\n`;
            ini_txt += `Last Updated On: ${
              whois_data.domain.updated_date
                ? whois_data.domain.updated_date
                : ""
            }\n`;
            ini_txt += `Expiration Date: ${whois_data.domain.expiration_date}\n`;
            ini_txt += `\n`;
            ini_txt += `\n`;
            ini_txt += `REGISTRAR:\n`;
            ini_txt += `Organization: ${
              whois_data.registrar.organization ||
              whois_data.registrant.organization
            }\n`;
            ini_txt += `Street: ${
              whois_data.registrar.street
                ? whois_data.registrar.street
                : whois_data.registrant.street
            }\n`;
            ini_txt += `City: ${
              whois_data.registrar.city
                ? whois_data.registrar.city
                : whois_data.registrant.city
            }\n`;
            ini_txt += `Province: ${
              whois_data.registrar.province
                ? whois_data.registrar.province
                : whois_data.registrant.province
            }\n`;
            ini_txt += `Postal Code: ${
              whois_data.registrar.postal_code
                ? whois_data.registrar.postal_code
                : whois_data.registrant.postal_code
            }\n`;
            ini_txt += `Country: ${
              whois_data.registrar.country
                ? whois_data.registrar.country
                : whois_data.registrant.country
            }\n`;
            ini_txt += `Phone: ${
              whois_data.registrar.phone
                ? whois_data.registrar.phone
                : whois_data.registrant.phone
            }\n`;
            ini_txt += `Email: ${
              whois_data.registrar.email
                ? whois_data.registrar.email
                : whois_data.registrant.email
            }\n`;
            ini_txt += `Refferal Url: ${
              whois_data.registrar.referral_url
                ? whois_data.registrar.referral_url
                : whois_data.registrant.referral_url
            }`;
            reply(ini_txt);
          } catch (err) {
            reply("Domain Tidak Ditemukan");
          }
        });
        break;
      case "ai":
        try {
          if (!text)
            return setReply(
              `Chat dengan AI.\n\nContoh:\n${command} Apa itu coding`
            );
          const results = await openai(text);
          reply(results.result);
          console.log(results);
        } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            reply("Maaf, sepertinya ada yang error :" + error.message);
          }
        }
        break;
      case "igstalk":
        if (isBanned) return reply(messs.banned);
        if (!isRegistered) return reply(textRegister);
        if (isLimit(m.sender)) return;
        if (args.length == 0) return reply(`*Example:* .igstalk alvianto.17`);
        ichi.sendMessage(m.chat, {
          react: {
            text: "⏳",
            key: m.key,
          },
        });
        try {
          igresult = await instagramstalk(text);
          igtxt = `Username: ${text}\n`;
          igtxt += `Fullname: ${igresult.data.fullname}\n`;
          igtxt += `Bio: ${igresult.data.bio}\n`;
          igtxt += `Followers: ${igresult.data.follower}\n`;
          igtxt += `Following: ${igresult.data.following}\n`;
          igtxt += `Post: ${igresult.data.timeline}\n`;
          igtxt += `Professional: ${igresult.data.professional}\n`;
          igtxt += `Business: ${igresult.data.business}\n`;
          igtxt += `Verified? ${
            igresult.data.verified
              ? "Lah kok centang? Pasti akun artis😏"
              : "Ngimpi Awokawokawok"
          }\n\n`;
          igtxt += `Link: https://www.instagram.com/${text}/?hl=id`;
          imagestalk = await getBuffer(
            igresult.profile_picture_hd
              ? igresult.profile_picture_hd
              : profile_picture_sd
          );
          await ichi.sendMessage(
            from,
            { image: imagestalk, caption: igtxt },
            { quoted: m }
          );
          await ichi.sendMessage(m.chat, {
            react: {
              text: "✅",
              key: m.key,
            },
          });
        } catch (err) {
          reply("Username tidak ditemukan");
        }
        (await isPremium) ? isPremium : limitAdd(m.sender);
        break;
      // case "tiktokstalk":
      //   if (isBanned) return reply(messs.banned);
      //   if (!isRegistered)
      //     return reply(
      //       textRegister
      //     );
      //   if (isLimit(m.sender)) return;
      //   if (args.length == 0)
      //     return reply(`*Example:* .tiktokstalk alvianto.17`);
      //   m.reply(mess.wait);
      //   ttresult = await tiktokstalk(text);
      //   tttxt = `Username: ${ttresult.username}\n`;
      //   tttxt += `Nickname: ${ttresult.name}\n`;
      //   tttxt += `Followers: ${ttresult.followers}\n`;
      //   tttxt += `Following: ${ttresult.following}\n`;
      //   tttxt += `Likes: ${ttresult.likes}\n`;
      //   tttxt += `Bio: ${ttresult.description}`;
      //   imagestalk = await getBuffer(ttresult.pp_user);
      //   ichi.sendMessage(
      //     from,t
      //     { image: imagestalk, caption: tttxt },
      //     { quoted: m }
      //   );
      //   (await isPremium) ? isPremium : limitAdd(m.sender);
      //   break;
      // case "githubstalk":
      //   if (isBanned) return reply(messs.banned);
      //   if (!isRegistered)
      //     return reply(
      //       textRegister
      //     );
      //   if (isLimit(m.sender)) return;
      //   if (args.length == 0)
      //     return reply(`*Example:* .githubstalk alvianto.17`);
      //   m.reply(mess.wait);
      //   username = args.join(" ");
      //   ghresult = await githubstalk(text);
      //   ghtxt = `Username: ${ghresult.username}\n`;
      //   ghtxt += `Name: ${ghresult.nickname}\n`;
      //   ghtxt += `Id: ${ghresult.id}\n`;
      //   ghtxt += `Bio: ${ghresult.bio}\n`;
      //   ghtxt += `Public Repo: ${ghresult.public_repo}\n`;
      //   ghtxt += `Email: ${ghresult.email}\n`;
      //   ghtxt += `Followers: ${ghresult.followers}\n`;
      //   ghtxt += `Following: ${ghresult.following}\n`;
      //   ghtxt += `Type: ${ghresult.type}\n`;
      //   ghtxt += `Company: ${ghresult.company}\n`;
      //   ghtxt += `Location: ${ghresult.location}\n`;
      //   ghtxt += `Created at: ${ghresult.created_at}\n`;
      //   ghtxt += `Update at: ${ghresult.update_at}\n`;
      //   ghtxt += `Link: https://github.com/${username}`;
      //   avatar = await getBuffer(ghresult.profile_pic);
      //   ichi.sendMessage(
      //     from,
      //     { image: avatar, caption: ghtxt },
      //     { quoted: m }
      //   );
      //   (await isPremium) ? isPremium : limitAdd(m.sender);
      //   break;
      case "hooh":
        replygcxeon("test");
        break;
      case "bot":
        reply("Apa? mau pakai bot? caranya kirim .help");
        break;
      //Eval
      default:
        if (budy.includes(`Assalamualaikum`)) {
          reply(`Waalaikumsalam`);
        }
        if (budy.includes(`assalamualaikum`)) {
          reply(`Waalaikumsalam`);
        }
        if (budy.includes(`Assalamu'alaikum`)) {
          reply(`Waalaikumsalam`);
        }
        if (budy.includes(`assalamu'alaikum`)) {
          reply(`Waalaikumsalam`);
        }
        if (budy.includes(`Terima kasih`)) {
          reply(`Sama samaaa`);
        }
        if (budy.includes(`terima kasih`)) {
          reply(`Sama samaaa`);
        }
        if (budy.includes(`62895401223315`)) {
          Object.keys(hasilquery_registrasi).forEach((user) => {
            if (hasilquery_registrasi[user].phone_number === m.sender) {
              reply(
                `Maaf *${hasilquery_registrasi[user].user_name}*, Dia baru sibuk atau sedang tidak memegang HP.\n\nPesanmu akan dibalas secepatnya\nTerima Kasih`
              );
            }
          });
        }
        if (budy == `Bot`) {
          reply(`Apa? mau pakai bot? caranya kirim .help`);
        }
        if (budy == `bot`) {
          reply(`Apa? mau pakai bot? caranya kirim .help`);
        }
        if (budy == `Halo`) {
          reply(`Apa? mau pakai bot? caranya kirim .help`);
        }
        if (budy == `halo`) {
          reply(`Apa? mau pakai bot? caranya kirim .help`);
        }
        if (budy == `P`) {
          reply(
            `Kesopanan minus( - )\n\n.help untuk melihat semua command/fitur`
          );
        }
        if (budy == `p`) {
          reply(
            `Kesopanan minus( - )\n\n.help untuk melihat semua command/fitur`
          );
        }
        if (budy == `Hai`) {
          reply(`Hai juga kak, mau pakai bot? caranya kirim .help`);
        }
        if (budy == `hai`) {
          reply(`Hai juga kak, mau pakai bot? caranya kirim .help`);
        }
        if (budy == `Asu`) {
          buffer = fs.readFileSync(`./media/ngomongmoral.opus`);
          ichi.sendMessage(
            from,
            { audio: buffer, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
          setTimeout(() => {
            buffer2 = fs.readFileSync(`./media/ngomongsopan.opus`);
            ichi.sendMessage(
              from,
              { audio: buffer2, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }, 6000);
        }
        if (budy == `asu`) {
          buffer = fs.readFileSync(`./media/ngomongmoral.opus`);
          ichi.sendMessage(
            from,
            { audio: buffer, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
          setTimeout(() => {
            buffer2 = fs.readFileSync(`./media/ngomongsopan.opus`);
            ichi.sendMessage(
              from,
              { audio: buffer2, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }, 6000);
        }
        if (budy == `Jancok`) {
          buffer = fs.readFileSync(`./media/ngomongmoral.opus`);
          ichi.sendMessage(
            from,
            { audio: buffer, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
          setTimeout(() => {
            buffer2 = fs.readFileSync(`./media/ngomongsopan.opus`);
            ichi.sendMessage(
              from,
              { audio: buffer2, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }, 6000);
        }
        if (budy == `jancok`) {
          buffer = fs.readFileSync(`./media/ngomongmoral.opus`);
          ichi.sendMessage(
            from,
            { audio: buffer, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
          setTimeout(() => {
            buffer2 = fs.readFileSync(`./media/ngomongsopan.opus`);
            ichi.sendMessage(
              from,
              { audio: buffer2, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }, 6000);
        }
        if (budy == `Kontol`) {
          buffer = fs.readFileSync(`./media/ngomongmoral.opus`);
          ichi.sendMessage(
            from,
            { audio: buffer, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
          setTimeout(() => {
            buffer2 = fs.readFileSync(`./media/ngomongsopan.opus`);
            ichi.sendMessage(
              from,
              { audio: buffer2, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }, 6000);
        }
        if (budy == `kontol`) {
          buffer = fs.readFileSync(`./media/ngomongmoral.opus`);
          ichi.sendMessage(
            from,
            { audio: buffer, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
          setTimeout(() => {
            buffer2 = fs.readFileSync(`./media/ngomongsopan.opus`);
            ichi.sendMessage(
              from,
              { audio: buffer2, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }, 6000);
        }
        if (budy == `Memek`) {
          buffer = fs.readFileSync(`./media/ngomongmoral.opus`);
          ichi.sendMessage(
            from,
            { audio: buffer, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
          setTimeout(() => {
            buffer2 = fs.readFileSync(`./media/ngomongsopan.opus`);
            ichi.sendMessage(
              from,
              { audio: buffer2, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }, 6000);
        }
        if (budy == `memek`) {
          buffer = fs.readFileSync(`./media/ngomongmoral.opus`);
          ichi.sendMessage(
            from,
            { audio: buffer, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
          setTimeout(() => {
            buffer2 = fs.readFileSync(`./media/ngomongsopan.opus`);
            ichi.sendMessage(
              from,
              { audio: buffer2, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }, 6000);
        }
        if (budy == `ngontol`) {
          buffer = fs.readFileSync(`./media/ngomongmoral.opus`);
          ichi.sendMessage(
            from,
            { audio: buffer, mimetype: "audio/mpeg", ptt: true },
            { quoted: m }
          );
          setTimeout(() => {
            buffer2 = fs.readFileSync(`./media/ngomongsopan.opus`);
            ichi.sendMessage(
              from,
              { audio: buffer2, mimetype: "audio/mpeg", ptt: true },
              { quoted: m }
            );
          }, 6000);
        }

        if (budy.startsWith("=>")) {
          if (!isOwner) return m.reply(mess.botOwner);
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return m.reply(bang);
          }
          try {
            m.reply(
              util.format(eval(`(async () => { return ${budy.slice(3)} })()`))
            );
          } catch (e) {
            m.reply(String(e));
          }
        }
        if (budy.startsWith(">")) {
          if (!isOwner) return m.reply(mess.botOwner);
          try {
            let evaled = await eval(budy.slice(2));
            if (typeof evaled !== "string")
              evaled = require("util").inspect(evaled);
            await m.reply(evaled);
          } catch (err) {
            ichi.sendMessage(gruplog, {
              text:
                `*[ ERROR LOG ]*\n\n${moment()
                  .tz("Asia/Jakarta")
                  .format(
                    "HH:mm:ss DD/MM/YYYY"
                  )}\nError di bagian ${__filename}\n${budy || m.mtype}\n` +
                util.format(err),
            });
            m = String(err);
            await m.reply(m);
          }
        }
        if (budy.startsWith("$")) {
          if (!isOwner) return m.reply(mess.botOwner);
          exec(budy.slice(2), (err, stdout) => {
            ichi.sendMessage(gruplog, {
              text:
                `*[ ERROR LOG ]*\n\n${moment()
                  .tz("Asia/Jakarta")
                  .format(
                    "HH:mm:ss DD/MM/YYYY"
                  )}\nError di bagian ${__filename}\n${budy || m.mtype}\n` +
                util.format(err),
            });
            if (err) return reply(err);
            if (stdout) return m.reply(stdout);
          });
        }
    }
  } catch (err) {
    ichi.sendMessage(gruplog, {
      text:
        `*[ ERROR LOG ]*\n\n${moment()
          .tz("Asia/Jakarta")
          .format("HH:mm:ss DD/MM/YYYY")}\nError di bagian ${__filename}\n${
          budy || m.mtype
        }\n` + util.format(err),
    });
    //  m.reply(util.format(err))
  }
};

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
