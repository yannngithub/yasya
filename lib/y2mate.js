let fetch = require("node-fetch");
let { JSDOM } = require("jsdom");

function post(url, formdata) {
  return fetch(url, {
    method: "POST",
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: new URLSearchParams(Object.entries(formdata)),
  });
}
const ytIdRegex =
  /(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/;

/**
 * Download YouTube Video via y2mate
 * @param {String} url YouTube Video URL
 * @param {String} quality (avaiable: `144p`, `240p`, `360p`, `480p`, `720p`, `1080p`, `1440p`, `2160p`)
 * @param {String} type (avaiable: `mp3`, `mp4`)
 * @param {String} bitrate (avaiable for video: `144`, `240`, `360`, `480`, `720`, `1080`, `1440`, `2160`)
 * (avaiable for audio: `128`)
 * @param {String} server (avaiable: `id4`, `en60`, `en61`, `en68`)
 */
function ytv(url) {
  return new Promise((resolve, reject) => {
    if (ytIdRegex.test(url)) {
      let ytId = ytIdRegex.exec(url);
      url = "https://youtu.be/" + ytId[1];
      post("https://www.y2mate.com/mates/en60/analyze/ajax", {
        url,
        q_auto: 0,
        ajax: 1,
      })
        .then((res) => res.json())
        .then((res) => {
          document = new JSDOM(res.result).window.document;
          /*yaha = document.querySelectorAll("td");
          filesize =
            yaha[yaha.length - 17].innerHTML ||
            yaha[yaha.length - 20].innerHTML*/
          id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || ["", ""];
          thumb = document.querySelector("img").src;
          title = document.querySelector("b").innerHTML;
          post("https://www.y2mate.com/mates/en60/convert", {
            type: "youtube",
            _id: id[1],
            v_id: ytId[1],
            ajax: "1",
            token: "",
            ftype: "mp4",
            fquality: 360,
          })
            .then((res) => res.json())
            .then((res) => {
              /*let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))*/
              resolve({
                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                thumb,
                title,
              });
            })
            .catch(reject);
        })
        .catch(reject);
    } else reject("URL INVALID");
  });
}
function yta(url) {
  return new Promise((resolve, reject) => {
    if (ytIdRegex.test(url)) {
      let ytId = ytIdRegex.exec(url);
      url = "https://youtu.be/" + ytId[1];
      post("https://www.y2mate.com/mates/en60/analyze/ajax", {
        url,
        q_auto: 0,
        ajax: 1,
      })
        .then((res) => res.json())
        .then((res) => {
          let document = new JSDOM(res.result).window.document;
          /*let type = document.querySelectorAll("td");
          let filesize = type[type.length - 5].innerHTML*/
          let id = /var k__id = "(.*?)"/.exec(document.body.innerHTML) || [
            "",
            "",
          ];
          let thumb = document.querySelector("img").src;
          let title = document.querySelector("b").innerHTML;

          post("https://www.y2mate.com/mates/en60/convert", {
            type: "youtube",
            _id: id[1],
            v_id: ytId[1],
            ajax: "1",
            token: "",
            ftype: "mp3",
            fquality: 128,
          })
            .then((res) => res.json())
            .then((res) => {
              /*let KB = parseFloat(filesize) * (1000 * /MB$/.test(filesize))*/
              resolve({
                dl_link: /<a.+?href="(.+?)"/.exec(res.result)[1],
                thumb,
                title,
              });
            })
            .catch(reject);
        })
        .catch(reject);
    } else reject("URL INVALID");
  });
}

module.exports = {
  yta,
  ytv,
};
