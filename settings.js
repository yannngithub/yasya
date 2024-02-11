/**
 * Made By Fandyyy 🕴️
 * Subscribe FBOTZ YT
 * Follow https://instagram.com/_nzrlafndi
 * Follow https://github.com/FBOTZ-YT
 */

const fs = require("fs");
const chalk = require("chalk");

//Ubah Disini
global.ownerNumber = ["62895401223315", "6289506269853"];
global.ownerName = "YaSya Bot";
global.packname = "YaSya Bot";
global.author = "+628971554717";
global.prefa = ["!", ".", "#", "/"]; //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = "session";
global.logbot = "120363049073329454@g.us";

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

//Sesuaikan
global.thumb = fs.readFileSync("./media/ichi.jpeg");
global.donasi = fs.readFileSync("./media/donasi.jpg");
global.thumbnail = fs.readFileSync("./media/ichi.mp4");

let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update'${__filename}'`));
  delete require.cache[file];
  require(file);
});
