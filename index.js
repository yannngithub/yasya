require("./settings.js");
const makeWASocket = require("@adiwajshing/baileys").default;
const {
  useMultiFileAuthState,
  DisconnectReason,
  MessageRetryMap,
  fetchLatestBaileysVersion,
  AnyMessageContent,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  makeCacheableSignalKeyStore,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
} = require("@adiwajshing/baileys");
const pino = require("pino");
const fs = require("fs");
const chalk = require("chalk");
const axios = require("axios");
const FileType = require("file-type");
const PhoneNumber = require("awesome-phonenumber");
const lolcatjs = require("lolcatjs");
const { Boom } = require("@hapi/boom");
const moment = require("moment-timezone");
const util = require("util");
const path = require("path");
var mysql = require("mysql");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require("./lib/exif.js");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep,
} = require("./lib/myfunc.js");
let { writeExif } = require("./lib/exif.js");

const store = makeInMemoryStore({
  logger: pino({ level: "fatal" }),
});

global.db = mysql.createPool({
  host: "mikrotik.alvianto.biz.id",
  port: "1707",
  user: "root",
  password: "alvianto17072003",
  database: "yasyabot",
});

const readfilelimit = fs.readFileSync("./database/userlimit.json");
global.readlimit = JSON.parse(readfilelimit);
const readfilebanned = fs.readFileSync("./database/userbanned.json");
global.readbanned = JSON.parse(readfilebanned);
const readfilegroup = fs.readFileSync("./database/group.json");
global.readgroup = JSON.parse(readfilegroup);
const readfilepremium = fs.readFileSync("./database/premium.json");
global.premium = JSON.parse(readfilepremium);

global.gruplog = "120363198930918529@g.us";
global.grupbot = "120363031779586280@g.us";

//Starting In Console
async function startIchigo() {
  const { state, saveCreds } = await useMultiFileAuthState("waweb-session");
  let ichi = await makeWASocket({
    logger: pino({ level: "fatal" }),
    printQRInTerminal: true,
    browser: ["Ubuntu", "Chrome", ""],
    syncFullHistory: true,
    auth: state,
    patchMessageBeforeSending: (message) => {
      const requiresPatch = !!(
        message.buttonsMessage ||
        message.templateMessage ||
        message.listMessage
      );
      if (requiresPatch) {
        message = {
          viewOnceMessage: {
            message: {
              messageContextInfo: {
                deviceListMetadataVersion: 2,
                deviceListMetadata: {},
              },
              ...message,
            },
          },
        };
      }
      return message;
    },
  });

  store.bind(ichi.ev);

  //Connect To Command
  ichi.ev.on("messages.upsert", async (chatUpdate) => {
    //console.log(JSON.stringify(chatUpdate, undefined, 2))
    try {
      mek = chatUpdate.messages[0];
      if (!mek.message) return;
      mek.message =
        Object.keys(mek.message)[0] === "ephemeralMessage"
          ? mek.message.ephemeralMessage.message
          : mek.message;
      if (mek.key && mek.key.remoteJid === "status@broadcast") return;
      if (!ichi.public && !mek.key.fromMe && chatUpdate.type === "notify")
        return;
      if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) return;
      m = smsg(ichi, mek, store);
      require("./yasya.js")(ichi, m, chatUpdate, store);
    } catch (err) {
      console.log(util.format(err));
    }
  });

  ichi.ev.on("messages.upsert", async (upsert) => {
    //console.log(JSON.stringify(upsert, '', 2))
    for (let msg of upsert.messages) {
      if (msg.key.remoteJid === "status@broadcast") {
        //console.log(JSON.stringify(upsert, '', 2))
        if (msg.message?.protocolMessage) return;
        console.log(
          `Lihat status ${msg.pushName} ${msg.key.participant.split("@")[0]}`
        );
        await ichi.readMessages([msg.key]);
        await sleep(100);
        return await ichi.readMessages([msg.key]);
      }
    }
  });

  ichi.ev.on("call", async (senku) => {
    for (let sen of senku) {
      if (sen.status == "offer") {
        const dataToInsert = {
          phone_number: sen.chatId,
          alasan_ban: "Telepon BOT",
        };
        // SQL query to insert data, excluding the 'id' field
        const insertQuery = "INSERT INTO tbl_banned SET ?";
        db.query(insertQuery, dataToInsert, (err, results) => {
          if (err) {
            console.error("Error inserting data:", err);
            return;
          }
        });
        teks = `Kamu terdeteksi menelepon BOT, Kamu akan di *Block dan masuk daftar Banned*, jika tidak sengaja silahkan gabung grup untuk melepas *Block dan Banned* kamu \n\nLink Grup: https://chat.whatsapp.com/I9t1FLgLJCJ64F2JxQbQpA`;
        ichi.sendMessage(sen.chatId, { text: teks });
        await sleep(5000);
        await ichi.updateBlockStatus(sen.chatId, "block");
        await ichi.sendMessage(gruplog, {
          text: `Ada yang telepon bot dengan nomer wa.me/${
            sen.chatId.split("@")[0]
          }`,
        });
      }
    }
    return;
  });

  ichi.ev.on("creds.update", saveCreds);

  ichi.decodeJid = (jid) => {
    if (!jid) return jid;
    if (/:\d+@/gi.test(jid)) {
      let decode = jidDecode(jid) || {};
      return (
        (decode.user && decode.server && decode.user + "@" + decode.server) ||
        jid
      );
    } else return jid;
  };

  ichi.ev.on("contacts.update", (update) => {
    for (let contact of update) {
      let id = ichi.decodeJid(contact.id);
      if (store && store.contacts)
        store.contacts[id] = { id, name: contact.notify };
    }
  });

  ichi.getName = (jid, withoutContact = false) => {
    id = ichi.decodeJid(jid);
    withoutContact = ichi.withoutContact || withoutContact;
    let v;
    if (id.endsWith("@g.us"))
      return new Promise(async (resolve) => {
        v = store.contacts[id] || {};
        if (!(v.name || v.subject)) v = ichi.groupMetadata(id) || {};
        resolve(
          v.name ||
            v.subject ||
            PhoneNumber("+" + id.replace("@s.whatsapp.net", "")).getNumber(
              "international"
            )
        );
      });
    else
      v =
        id === "0@s.whatsapp.net"
          ? {
              id,
              name: "WhatsApp",
            }
          : id === ichi.decodeJid(ichi.user.id)
          ? ichi.user
          : store.contacts[id] || {};
    return (
      (withoutContact ? "" : v.name) ||
      v.subject ||
      v.verifiedName ||
      PhoneNumber("+" + jid.replace("@s.whatsapp.net", "")).getNumber(
        "international"
      )
    );
  };

  ichi.setStatus = (status) => {
    ichi.query({
      tag: "iq",
      attrs: {
        to: "@s.whatsapp.net",
        type: "set",
        xmlns: "status",
      },
      content: [
        {
          tag: "status",
          attrs: {},
          content: Buffer.from(status, "utf-8"),
        },
      ],
    });
    return status;
  };

  /**
   *
   * @param {*} jid
   * @param {*} url
   * @param {*} caption
   * @param {*} quoted
   * @param {*} options
   */
  ichi.sendFile = async (jid, url, caption, quoted, options = {}) => {
    let mime = "";
    let res = await axios.head(url);
    mime = res.headers["content-type"];
    if (mime.split("/")[1] === "gif") {
      return ichi.sendMessage(
        jid,
        {
          video: await getBuffer(url),
          caption: caption,
          gifPlayback: true,
          ...options,
        },
        { quoted: quoted, ...options }
      );
    }
    let type = mime.split("/")[0] + "Message";
    if (mime === "application/pdf") {
      return ichi.sendMessage(
        jid,
        {
          document: await getBuffer(url),
          mimetype: "application/pdf",
          caption: caption,
          ...options,
        },
        { quoted: quoted, ...options }
      );
    }
    if (mime.split("/")[0] === "image") {
      return ichi.sendMessage(
        jid,
        { image: await getBuffer(url), caption: caption, ...options },
        { quoted: quoted, ...options }
      );
    }
    if (mime.split("/")[0] === "video") {
      return ichi.sendMessage(
        jid,
        {
          video: await getBuffer(url),
          caption: caption,
          mimetype: "video/mp4",
          ...options,
        },
        { quoted: quoted, ...options }
      );
    }
    if (mime.split("/")[0] === "audio") {
      return ichi.sendMessage(
        jid,
        {
          audio: await getBuffer(url),
          caption: caption,
          mimetype: "audio/mpeg",
          ...options,
        },
        { quoted: quoted, ...options }
      );
    }
  };

  /** Send List Messaage
   *
   *@param {*} jid
   *@param {*} text
   *@param {*} footer
   *@param {*} title
   *@param {*} butText
   *@param [*] sections
   *@param {*} quoted
   */
  ichi.sendList = (
    jid,
    text = "",
    footer = "",
    title = "",
    butText = "",
    sects = [],
    quoted
  ) => {
    let sections = sects;
    var listMes = {
      text: text,
      footer: footer,
      title: title,
      buttonText: butText,
      sections,
    };
    ichi.sendMessage(jid, listMes, { quoted: quoted });
  };

  /** Send Button 5 Message
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} button
   * @returns
   */
  ichi.sendButtonMsg = (jid, text = "", footer = "", but = []) => {
    let templateButtons = but;
    var templateMessage = {
      text: text,
      footer: footer,
      templateButtons: templateButtons,
    };
    ichi.sendMessage(jid, templateMessage);
  };

  /** Send Button 5 Image
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} image
   * @param [*] button
   * @param {*} options
   * @returns
   */
  ichi.sendButtonImg = async (
    jid,
    text = "",
    footer = "",
    img,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { image: img },
      { upload: ichi.waUploadToServer }
    );
    var template = generateWAMessageFromContent(
      jid,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            imageMessage: message.imageMessage,
            hydratedContentText: text,
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
    ichi.relayMessage(jid, template.message, { messageId: template.key.id });
  };

  /** Send Button 5 Video
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} Video
   * @param [*] button
   * @param {*} options
   * @returns
   */
  ichi.sendButtonVid = async (
    jid,
    text = "",
    footer = "",
    vid,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { video: vid },
      { upload: ichi.waUploadToServer }
    );
    var template = generateWAMessageFromContent(
      jid,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            videoMessage: message.videoMessage,
            hydratedContentText: text,
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
    ichi.relayMessage(jid, template.message, { messageId: template.key.id });
  };

  /** Send Button 5 Gif
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} footer
   * @param {*} Gif
   * @param [*] button
   * @param {*} options
   * @returns
   */
  ichi.sendButtonGif = async (
    jid,
    text = "",
    footer = "",
    gif,
    but = [],
    options = {}
  ) => {
    let message = await prepareWAMessageMedia(
      { video: gif, gifPlayback: true },
      { upload: ichi.waUploadToServer }
    );
    var template = generateWAMessageFromContent(
      jid,
      proto.Message.fromObject({
        templateMessage: {
          hydratedTemplate: {
            videoMessage: message.videoMessage,
            hydratedContentText: text,
            hydratedFooterText: footer,
            hydratedButtons: but,
          },
        },
      }),
      options
    );
    ichi.relayMessage(jid, template.message, { messageId: template.key.id });
  };

  /**
   *
   * @param {*} jid
   * @param {*} buttons
   * @param {*} caption
   * @param {*} footer
   * @param {*} quoted
   * @param {*} options
   */
  ichi.sendButtonText = (
    jid,
    buttons = [],
    text,
    footer,
    quoted = "",
    options = {}
  ) => {
    let buttonMessage = {
      text,
      footer,
      buttons,
      headerType: 2,
      ...options,
    };
    ichi.sendMessage(jid, buttonMessage, { quoted, ...options });
  };

  /**
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  ichi.sendText = (jid, text, quoted = "", options) =>
    ichi.sendMessage(jid, { text: text, ...options }, { quoted });

  /**
   *
   * @param {*} jid
   * @param {*} path
   * @param {*} caption
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  ichi.sendImage = async (jid, path, caption = "", quoted = "", options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await ichi.sendMessage(
      jid,
      { image: buffer, caption: caption, ...options },
      { quoted }
    );
  };

  /**
   *
   * @param {*} jid
   * @param {*} path
   * @param {*} caption
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  ichi.sendVideo = async (
    jid,
    path,
    caption = "",
    quoted = "",
    gif = false,
    options
  ) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await ichi.sendMessage(
      jid,
      { video: buffer, caption: caption, gifPlayback: gif, ...options },
      { quoted }
    );
  };

  /**
   *
   * @param {*} jid
   * @param {*} path
   * @param {*} quoted
   * @param {*} mime
   * @param {*} options
   * @returns
   */
  ichi.sendAudio = async (jid, path, quoted = "", ptt = false, options) => {
    let buffer = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    return await ichi.sendMessage(
      jid,
      { audio: buffer, ptt: ptt, ...options },
      { quoted }
    );
  };

  /**
   *
   * @param {*} jid
   * @param {*} text
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  ichi.sendTextWithMentions = async (jid, text, quoted, options = {}) =>
    ichi.sendMessage(
      jid,
      {
        text: text,
        contextInfo: {
          mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(
            (v) => v[1] + "@s.whatsapp.net"
          ),
        },
        ...options,
      },
      { quoted }
    );

  /**
   *
   * @param {*} jid
   * @param {*} path
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  ichi.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifImg(buff, options);
    } else {
      buffer = await imageToWebp(buff);
    }
    await ichi.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  /**
   *
   * @param {*} jid
   * @param {*} path
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  ichi.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
    let buff = Buffer.isBuffer(path)
      ? path
      : /^data:.*?\/.*?;base64,/i.test(path)
      ? Buffer.from(path.split`,`[1], "base64")
      : /^https?:\/\//.test(path)
      ? await await getBuffer(path)
      : fs.existsSync(path)
      ? fs.readFileSync(path)
      : Buffer.alloc(0);
    let buffer;
    if (options && (options.packname || options.author)) {
      buffer = await writeExifVid(buff, options);
    } else {
      buffer = await videoToWebp(buff);
    }
    await ichi.sendMessage(
      jid,
      { sticker: { url: buffer }, ...options },
      { quoted }
    );
    return buffer;
  };

  /**
   *
   * @param {*} message
   * @param {*} filename
   * @param {*} attachExtension
   * @returns
   */
  ichi.downloadAndSaveMediaMessage = async (
    message,
    filename,
    attachExtension = true
  ) => {
    let quoted = message.msg ? message.msg : message;
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(quoted, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    let type = await FileType.fromBuffer(buffer);
    trueFileName = attachExtension ? filename + "." + type.ext : filename;
    // save to file
    await fs.writeFileSync(trueFileName, buffer);
    return trueFileName;
  };
  ichi.downloadMediaMessage = async (message) => {
    let mime = (message.msg || message).mimetype || "";
    let messageType = message.mtype
      ? message.mtype.replace(/Message/gi, "")
      : mime.split("/")[0];
    const stream = await downloadContentFromMessage(message, messageType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };

  /**
   *
   * @param {*} jid
   * @param {*} path +
   * @param {*} filename
   * @param {*} caption
   * @param {*} quoted
   * @param {*} options
   * @returns
   */
  ichi.sendMedia = async (
    jid,
    path,
    fileName = "",
    caption = "",
    quoted = "",
    options = {}
  ) => {
    let types = await ichi.getFile(path, true);
    let { mime, ext, res, data, filename } = types;
    if ((res && res.status !== 200) || file.length <= 65536) {
      try {
        throw { json: JSON.parse(file.toString()) };
      } catch (e) {
        if (e.json) throw e.json;
      }
    }
    let type = "",
      mimetype = mime,
      pathFile = filename;
    if (options.asDocument) type = "document";
    if (options.asSticker || /webp/.test(mime)) {
      let media = { mimetype: mime, data };
      pathFile = await writeExif(media, {
        packname: options.packname ? options.packname : global.packname,
        author: options.author ? options.author : global.author,
        categories: options.categories ? options.categories : [],
      });
      await fs.promises.unlink(filename);
      type = "sticker";
      mimetype = "image/webp";
    } else if (/image/.test(mime)) type = "image";
    else if (/video/.test(mime)) type = "video";
    else if (/audio/.test(mime)) type = "audio";
    else type = "document";
    await ichi.sendMessage(
      jid,
      { [type]: { url: pathFile }, caption, mimetype, fileName, ...options },
      { quoted, ...options }
    );
    return fs.promises.unlink(pathFile);
  };

  /**
   *
   * @param {*} jid
   * @param {*} message
   * @param {*} forceForward
   * @param {*} options
   * @returns
   */
  ichi.copyNForward = async (
    jid,
    message,
    forceForward = false,
    options = {}
  ) => {
    let vtype;
    if (options.readViewOnce) {
      message.message =
        message.message &&
        message.message.ephemeralMessage &&
        message.message.ephemeralMessage.message
          ? message.message.ephemeralMessage.message
          : message.message || undefined;
      vtype = Object.keys(message.message.viewOnceMessageV2.message);
      delete (message.message && message.message.ignore
        ? message.message.ignore
        : message.message || undefined);
      delete message.message.viewOnceMessageV2.message[vtype].viewOnce;
      message.message = {
        ...message.message.viewOnceMessageV2.message,
      };
    }
    let mtype = Object.keys(message.message)[0];
    let content = await generateForwardMessageContent(message, forceForward);
    let ctype = Object.keys(content)[0];
    let context = {};
    if (mtype != "conversation") context = message.message[mtype].contextInfo;
    content[ctype].contextInfo = {
      ...context,
      ...content[ctype].contextInfo,
    };
    const waMessage = await generateWAMessageFromContent(
      jid,
      content,
      options
        ? {
            ...content[ctype],
            ...options,
            ...(options.contextInfo
              ? {
                  contextInfo: {
                    ...content[ctype].contextInfo,
                    ...options.contextInfo,
                  },
                }
              : {}),
          }
        : {}
    );
    await ichi.relayMessage(jid, waMessage.message, {
      messageId: waMessage.key.id,
    });
    return waMessage;
  };

  ichi.cMod = (jid, copy, text = "", sender = ichi.user.id, options = {}) => {
    //let copy = message.toJSON()
    let mtype = Object.keys(copy.message)[0];
    let isEphemeral = mtype === "ephemeralMessage";
    if (isEphemeral) {
      mtype = Object.keys(copy.message.ephemeralMessage.message)[0];
    }
    let msg = isEphemeral
      ? copy.message.ephemeralMessage.message
      : copy.message;
    let content = msg[mtype];
    if (typeof content === "string") msg[mtype] = text || content;
    else if (content.caption) content.caption = text || content.caption;
    else if (content.text) content.text = text || content.text;
    if (typeof content !== "string")
      msg[mtype] = {
        ...content,
        ...options,
      };
    if (copy.key.participant)
      sender = copy.key.participant = sender || copy.key.participant;
    else if (copy.key.participant)
      sender = copy.key.participant = sender || copy.key.participant;
    if (copy.key.remoteJid.includes("@s.whatsapp.net"))
      sender = sender || copy.key.remoteJid;
    else if (copy.key.remoteJid.includes("@broadcast"))
      sender = sender || copy.key.remoteJid;
    copy.key.remoteJid = jid;
    copy.key.fromMe = sender === ichi.user.id;
    return proto.WebMessageInfo.fromObject(copy);
  };

  /**
   *
   * @param {*} path
   * @returns
   */
  ichi.getFile = async (PATH, save) => {
    let res;
    let data = Buffer.isBuffer(PATH)
      ? PATH
      : /^data:.*?\/.*?;base64,/i.test(PATH)
      ? Buffer.from(PATH.split`,`[1], "base64")
      : /^https?:\/\//.test(PATH)
      ? await (res = await getBuffer(PATH))
      : fs.existsSync(PATH)
      ? ((filename = PATH), fs.readFileSync(PATH))
      : typeof PATH === "string"
      ? PATH
      : Buffer.alloc(0);
    //if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
    let type = (await FileType.fromBuffer(data)) || {
      mime: "application/octet-stream",
      ext: ".bin",
    };
    filename = path.join(
      __filename,
      "./src/" + new Date() * 1 + "." + type.ext
    );
    if (data && save) fs.promises.writeFile(filename, data);
    return {
      res,
      filename,
      size: await getSizeMedia(data),
      ...type,
      data,
    };
  };
  ichi.public = true;
  ichi.serializeM = (m) => smsg(ichi, m, store);

  //Connection Active
  ichi.ev.on("connection.update", async (update) => {
    const { connection, lastDisconnect } = update;
    try {
      if (
        update.connection == "connecting" ||
        update.receivedPendingNotifications == "false"
      ) {
        lolcatjs.fromString(`[Connecting]`);
      }
      if (
        update.connection == "open" ||
        update.receivedPendingNotifications == "true"
      ) {
        await db.getConnection((err, connection) => {
          if (err) {
            console.error("Error getting MySQL connection from pool:", err);
            return;
          }
          console.log(`    Connected to MySQL\n`);
          // Your MySQL queries or other database operations go here
          // Releasing the connection back to the pool
          connection.release();
        });
        lolcatjs.fromString(
          `[Connected]\n` +
            `  Username: ${ichi.user.name}\n   Id: ${ichi.user.id}`
        );
        ichi.sendMessage(gruplog, { text: "YaSya BOT telah aktif" });
      }
      if (connection === "close") {
        let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
        if (reason === DisconnectReason.badSession) {
          console.log(`Bad Session File, Please Delete Session and Scan Again`);
        } else if (reason === DisconnectReason.connectionClosed) {
          console.log("Connection closed, reconnecting....");
          startIchigo();
        } else if (reason === DisconnectReason.connectionLost) {
          console.log("Connection Lost from Server, reconnecting...");
          startIchigo();
        } else if (reason === DisconnectReason.restartRequired) {
          console.log("Restart Required, Restarting...");
          startIchigo();
        } else if (reason === DisconnectReason.loggedOut) {
          console.log(`Device Logged Out, Please Scan Again And Run.`);
        } else if (reason === DisconnectReason.timedOut) {
          console.log("Connection TimedOut, Reconnecting...");
          startIchigo();
        } else ichi.end(`Unknown DisconnectReason: ${reason}|${connection}`);
      }
    } catch (err) {
      console.log(util.format(err));
    }
  });

  return ichi;
}

startIchigo();

process.on("uncaughtException", function (err) {
  let e = String(err);
  if (e.includes("rate-overlimit")) return;
  console.log("Caught exception: ", err);
});

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});
