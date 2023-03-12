/**
 * Made By Fandyyy 🕴️
 * Subscribe FBOTZ YT
 * Follow https://instagram.com/_nzrlafndi
 * Follow https://github.com/FBOTZ-YT
 */

let axios = require("axios");
let cheerio = require("cheerio");

function pinterest(querry) {
  return new Promise(async (resolve, reject) => {
    axios
      .get("https://id.pinterest.com/search/pins/?autologin=true&q=" + querry, {
        headers: {
          cookie:
            '_auth=1; _b="AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg="; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0',
        },
      })
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const result = [];
        const hasil = [];
        $("div > a")
          .get()
          .map((b) => {
            const link = $(b).find("img").attr("src");
            result.push(link);
          });
        result.forEach((v) => {
          if (v == undefined) return;
          hasil.push(v.replace(/236/g, "736"));
        });
        hasil.shift();
        resolve(hasil);
      });
  });
}

function wallpaper(title, page = "1") {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://www.besthdwallpaper.com/search?CurrentPage=${page}&q=${title}`
      )
      .then(({ data }) => {
        let $ = cheerio.load(data);
        let hasil = [];
        $("div.grid-item").each(function (a, b) {
          hasil.push({
            title: $(b).find("div.info > a > h3").text(),
            type: $(b).find("div.info > a:nth-child(2)").text(),
            source:
              "https://www.besthdwallpaper.com/" +
              $(b).find("div > a:nth-child(3)").attr("href"),
            image: [
              $(b).find("picture > img").attr("data-src") ||
                $(b).find("picture > img").attr("src"),
              $(b).find("picture > source:nth-child(1)").attr("srcset"),
              $(b).find("picture > source:nth-child(2)").attr("srcset"),
            ],
          });
        });
        resolve(hasil);
      });
  });
}

function wikimedia(title) {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://commons.wikimedia.org/w/index.php?search=${title}&title=Special:MediaSearch&go=Go&type=image`
      )
      .then((res) => {
        let $ = cheerio.load(res.data);
        let hasil = [];
        $(".sdms-search-results__list-wrapper > div > a").each(function (a, b) {
          hasil.push({
            title: $(b).find("img").attr("alt"),
            source: $(b).attr("href"),
            image:
              $(b).find("img").attr("data-src") || $(b).find("img").attr("src"),
          });
        });
        resolve(hasil);
      });
  });
}

function quotesAnime() {
  return new Promise((resolve, reject) => {
    const page = Math.floor(Math.random() * 184);
    axios
      .get("https://otakotaku.com/quote/feed/" + page)
      .then(({ data }) => {
        const $ = cheerio.load(data);
        const hasil = [];
        $("div.kotodama-list").each(function (l, h) {
          hasil.push({
            link: $(h).find("a").attr("href"),
            gambar: $(h).find("img").attr("data-src"),
            karakter: $(h).find("div.char-name").text().trim(),
            anime: $(h).find("div.anime-title").text().trim(),
            episode: $(h).find("div.meta").text(),
            up_at: $(h).find("small.meta").text(),
            quotes: $(h).find("div.quote").text().trim(),
          });
        });
        resolve(hasil);
      })
      .catch(reject);
  });
}

function aiovideodl(link) {
  return new Promise((resolve, reject) => {
    axios({
      url: "https://aiovideodl.ml/",
      method: "GET",
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        cookie:
          "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653",
      },
    }).then((src) => {
      let a = cheerio.load(src.data);
      let token = a("#token").attr("value");
      axios({
        url: "https://aiovideodl.ml/wp-json/aio-dl/video-data/",
        method: "POST",
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
          cookie:
            "PHPSESSID=69ce1f8034b1567b99297eee2396c308; _ga=GA1.2.1360894709.1632723147; _gid=GA1.2.1782417082.1635161653",
        },
        data: new URLSearchParams(Object.entries({ url: link, token: token })),
      }).then(({ data }) => {
        resolve(data);
      });
    });
  });
}

function umma(url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      let $ = cheerio.load(res.data);
      let image = [];
      $("#article-content > div")
        .find("img")
        .each(function (a, b) {
          image.push($(b).attr("src"));
        });
      let hasil = {
        title: $("#wrap > div.content-container.font-6-16 > h1").text().trim(),
        author: {
          name: $(
            "#wrap > div.content-container.font-6-16 > div.content-top > div > div.user-ame.font-6-16.fw"
          )
            .text()
            .trim(),
          profilePic: $(
            "#wrap > div.content-container.font-6-16 > div.content-top > div > div.profile-photo > img.photo"
          ).attr("src"),
        },
        caption: $("#article-content > div > p").text().trim(),
        media: $("#article-content > div > iframe").attr("src")
          ? [$("#article-content > div > iframe").attr("src")]
          : image,
        type: $("#article-content > div > iframe").attr("src")
          ? "video"
          : "image",
        like: $(
          "#wrap > div.bottom-btns > div > button:nth-child(1) > div.text.font-6-12"
        ).text(),
      };
      resolve(hasil);
    });
  });
}

function ringtone(title) {
  return new Promise((resolve, reject) => {
    axios.get("https://meloboom.com/en/search/" + title).then((get) => {
      let $ = cheerio.load(get.data);
      let hasil = [];
      $(
        "#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li"
      ).each(function (a, b) {
        hasil.push({
          title: $(b).find("h4").text(),
          source: "https://meloboom.com/" + $(b).find("a").attr("href"),
          audio: $(b).find("audio").attr("src"),
        });
      });
      resolve(hasil);
    });
  });
}

function styletext(teks) {
  return new Promise((resolve, reject) => {
    axios.get("http://qaz.wtf/u/convert.cgi?text=" + teks).then(({ data }) => {
      let $ = cheerio.load(data);
      let hasil = [];
      $("table > tbody > tr").each(function (a, b) {
        hasil.push({
          name: $(b).find("td:nth-child(1) > span").text(),
          result: $(b).find("td:nth-child(2)").text().trim(),
        });
      });
      resolve(hasil);
    });
  });
}
async function decodeSnap(...args) {
  /*
   * referensi https://github.com/bochilteam
   */
  function _0xe78c(d, e, f) {
    var g =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/".split(
        ""
      );
    var h = g.slice(0, e);
    var i = g.slice(0, f);
    var j = d
      .split("")
      .reverse()
      .reduce(function (a, b, c) {
        if (h.indexOf(b) !== -1) return (a += h.indexOf(b) * Math.pow(e, c));
      }, 0);
    var k = "";
    while (j > 0) {
      k = i[j % f] + k;
      j = (j - (j % f)) / f;
    }
    return k || "0";
  }

  function _0xc60e(h, u, n, t, e, r) {
    r = "";
    for (var i = 0, len = h.length; i < len; i++) {
      var s = "";
      while (h[i] !== n[e]) {
        s += h[i];
        i++;
      }
      for (var j = 0; j < n.length; j++) {
        s = s.replace(new RegExp(n[j], "g"), j.toString());
      }
      r += String.fromCharCode(_0xe78c(s, e, 10) - t);
    }
    return decodeURIComponent(encodeURIComponent(r));
  }
  return _0xc60e(...args);
}
async function snaptik(yuerel) {
  return new Promise(async (resolve, reject) => {
    var a = await axios.request("https://snaptik.app/en", {
      method: "GET",
      headers: {
        "user-agent":
          "ozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
      },
    });
    var roti = a.headers["set-cookie"][0].split(";")[0];
    var token = cheerio.load(a.data)("input[name='token']").attr("value");
    var b = await axios.request("https://snaptik.app/en/abc.php", {
      method: "GET",
      headers: {
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36",
        cookie: roti,
        Host: "snaptik.app",
      },
      params: {
        url: yuerel,
        lang: "en",
        token: token,
      },
    });

    var decodeParams = b.data
      .split("))</script>")[0]
      .split("decodeURIComponent(escape(r))}(")[1]
      ?.split(",")
      ?.map((v) => v.replace(/^"/, "").replace(/"$/, "").trim());
    if (!Array.isArray(decodeParams) || decodeParams.length !== 6)
      return reject(`failed to parse decode params!\n${b.data}`);
    var decode = await decodeSnap(...decodeParams);
    var result = decode
      .split("; elem.innerHTML = \\'")?.[1]
      .split("\\'; parent.ga(")?.[0]
      ?.replace(/\\(\\)?/g, "");
    if (!result) return reject(`failed to parse html from decode!\n${decode}`);
    var $ = cheerio.load(result);
    var snaptik_middle = $(".snaptikvid > div.snaptik-middle");
    var d = $("#download-block > .abuttons").find("a");
    var no_watermark2 = d.eq(1).attr("href");
    var no_watermark_raw = d.eq(3).attr("href");
    if (!/https?:\/\//.test(no_watermark2))
      no_watermark2 = `https://snaptik.app${no_watermark2}`;
    if (!/https?:\/\//.test(no_watermark_raw))
      no_watermark_raw = `https://snaptik.app${no_watermark_raw}`;
    return resolve({
      author: {
        nickname: snaptik_middle.find("h3").text(),
      },
      description: snaptik_middle.find("span").text(),
      video: {
        no_watermark: d.eq(0).attr("href"),
        no_watermark2,
      },
    });
  });
}

function getAudioWithTubeMp3(Url) {
  return new Promise((resolve, reject) => {
    const ytIdRegex =
      /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:shorts\/)|(?:watch\?.*(?:|\&)v=|embed\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/i;
    if (ytIdRegex.test(Url)) {
      var VideoID = ytIdRegex.exec(Url);
    } else {
      throw reject("Please enter a valid youtube URL");
    }
    axios({
      method: "GET",
      url: `https://tubemp3.biz/api/mp3/${VideoID[1]}`,
      headers: {
        "Content-type": "text/html",
      },
    })
      .then(async ({ data }) => {
        const $ = cheerio.load(data);
        const downloads = [];
        $("a").each((index, elem) => {
          downloads.push({
            quality: $(elem.children[2]).text().trim(),
            size: $(elem.children[4]).text().trim(),
            url: /G3\('(.+?)'\)/.exec(elem.attribs.onclick)[1],
          });
        });
        resolve(downloads);
      })
      .catch((err) => {
        reject({
          status: 406,
          message: "Error",
        });
      });
  });
}

async function instagramstalk(username) {
  try {
    const { data } = await axios.get(
      "https://www.instagram.com/api/v1/users/web_profile_info/?username=" +
        username,
      {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Mobile Safari/537.36",
          "x-asbd-id": "198387",
          "x-csrftoken": "VXLPx1sgRb8OCHg9c2NKXbfDndz913Yp",
          "x-ig-app-id": "1217981644879628",
          "x-ig-www-claim":
            "hmac.AR3G5MVC6xbTnOrtU4lIvjrKBJQsM4XnMYrpZZilQJj3qUIu",
          "x-requested-with": "XMLHttpRequest",
          cookie:
            "fbsr_124024574287414=Fc10Nc4_7XfGZpykO96P7COeCvw86bBd27c2kKetOHE.eyJ1c2VyX2lkIjoiMTAwMDA1NDg4OTIzNjk1IiwiY29kZSI6IkFRQzl2bHI2dE1mVUk3ejBmenNrTEJOaWVaYVpmWnNISVZHU2toVFhURXI5cVE2ZFdrUVFMVFBUS0NvWGNxRkpYWHRCcWJnRGdndzVDN1ZwWjNibk5WSm5SU0JrbDgwelVqa0RYWXRGTG5hbXhZenBTc1NEb3NnQVFSRklJRGpXSThjLWRqT3hFck1oUHRjZUo1UWctaW9sYjAydGg1M3h4YTBRY1dFS3FGclV0Nnp3dXF3STJwVjY2bFEtbkpocXIzQngwRElTSTlidVhlZ19HbEdTNFB6RkU0T01tSzBfM0JKV3NraExuR29ZamFGVXpWMUxwR21OQkhRa3d6OU51SlFZQTBnbklHLUR6SVE2dHpMS1Y2eEd2UEwzVExvelRBLVBBelRWM2ZJWW9WQ2NJUFhiakhrS1c3d013V3dUQ29fWi1wV1NxYnptSUI2b05zbG83T096Iiwib2F1dGhfdG9rZW4iOiJFQUFCd3pMaXhuallCQUY0SEc3ZjBrc2YwcUhOR1A0dGJmdGtjWkJRWkNaQkpNRzlndEZzMWhaQTgzNEdTSUhoVG1tZlhrS0JjNWpuaHc5NXZ2WFBPSWc0NVdPbW5DVWZId1VtbHJIWkF4cFJrZDVZYkhQVUpxVWl4czNFZlV5ZTFaQWRPNmJBT0FxQk85WHZsREMxcW1mZUNzOGRIdWlMVWxHblpBZXk0R2luNWFoeVpBQjlQeHlaQUhDM1l0UElaQ0hWRmp0VjFkWHRIeFhId1pEWkQiLCJhbGdvcml0aG0iOiJITUFDLVNIQTI1NiIsImlzc3VlZF9hdCI6MTY3NDk5MDU4MX0; csrftoken=VXLPx1sgRb8OCHg9c2NKXbfDndz913Yp; datr=J4LTY7Q3HKxo7XJqmleiMQX2; ds_user_id=1920879042; fbm_124024574287414=base_domain=.instagram.com; ig_did=C5B25630-1CB4-48D6-9E99-F5D318C3196D; ig_nrcb=1; mid=Y9OCJwABAAGC-Z6oS5zODQPlWA9f; sessionid=1920879042:2HKle7tVe0H0ll:3:AYem2PT39dEMv5GJ2-HQIa_pf1QDFLjr9mrcxXoTbA",
        },
      }
    );
    return data.status == "ok"
      ? {
          status: true,
          profile: [
            {
              url: data.data.user.profile_pic_url_hd,
            },
            {
              url: data.data.user.profile_pic_url,
            },
          ],
          data: {
            url: `https://www.instagram.com/${data.data.user.username}?hl=id`,
            id: data.data.user.id,
            fullname: data.data.user.full_name,
            private: data.data.user.is_private,
            verified: data.data.user.is_verified,
            bio: data.data.user.biography,
            follower: data.data.user.edge_followed_by.count,
            following: data.data.user.edge_follow.count,
            business: data.data.user.is_business_account,
            professional: data.data.user.is_professional_account,
            videotimeline: data.data.user.edge_felix_video_timeline.count,
            timeline: data.data.user.edge_owner_to_timeline_media.count,
            savedmedia: data.data.user.edge_saved_media.count,
            collections: data.data.user.edge_media_collections.count,
            verified: data.data.user.is_verified,
          },
        }
      : { status: false, message: "user not found" };
  } catch {
    return {
      status: false,
      message: "user not found",
    };
  }
}

async function mediafireDl(url) {
  const res = await axios.get(url);
  const $ = cheerio.load(res.data);
  const link = $("a#downloadButton").attr("href");
  const size = $("a#downloadButton")
    .text()
    .replace("Download", "")
    .replace("(", "")
    .replace(")", "")
    .replace("\n", "")
    .replace("\n", "")
    .replace("", "");
  const seplit = link.split("/");
  const title = seplit[5];
  mime = title.split(".");
  mime = mime[1];
  hasil = { title, mime, size, link };
  return hasil;
}

async function tiktokstalk(username) {
  let res = await axios.get(`https://urlebird.com/user/${username}/`);
  let $ = cheerio.load(res.data),
    obj = {};
  obj.username = $("h1.user").text().trim();
  obj.name = $("div.content > h5").text().trim();
  obj.followers = $('div[class="col-7 col-md-auto text-truncate"]')
    .text()
    .trim()
    .split(" ")[1];
  obj.following = $('div[class="col-auto d-none d-sm-block text-truncate"]')
    .text()
    .trim()
    .split(" ")[1];
  obj.likes = $('div[class="col-auto"]').text().trim().split(" ")[1];
  obj.description = $("div.content > p").text().trim();
  obj.pp_user = $(
    'div[class="col-md-auto justify-content-center text-center"] > img'
  ).attr("src");
  return obj;
}

async function githubstalk(username) {
  return new Promise((resolve, reject) => {
    axios.get("https://api.github.com/users/" + username).then(({ data }) => {
      let hasil = {
        username: data.login,
        nickname: data.name,
        bio: data.bio,
        id: data.id,
        nodeId: data.node_id,
        profile_pic: data.avatar_url,
        url: data.html_url,
        type: data.type,
        admin: data.site_admin,
        company: data.company,
        blog: data.blog,
        location: data.location,
        email: data.email,
        public_repo: data.public_repos,
        public_gists: data.public_gists,
        followers: data.followers,
        following: data.following,
        ceated_at: data.created_at,
        updated_at: data.updated_at,
      };
      resolve(hasil);
    });
  });
}

function facebookDl(url) {
  return new Promise((resolve, reject) => {
    let config = {
      url: url,
    };
    axios("https://www.getfvid.com/downloader", {
      method: "POST",
      data: new URLSearchParams(Object.entries(config)),
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        cookie:
          "_ga=GA1.2.1310699039.1624884412; _pbjs_userid_consent_data=3524755945110770; cto_bidid=rQH5Tl9NNm5IWFZsem00SVVuZGpEd21sWnp0WmhUeTZpRXdkWlRUOSUyQkYlMkJQQnJRSHVPZ3Fhb1R2UUFiTWJuVGlhVkN1TGM2anhDT1M1Qk0ydHlBb21LJTJGNkdCOWtZalRtZFlxJTJGa3FVTG1TaHlzdDRvJTNE; cto_bundle=g1Ka319NaThuSmh6UklyWm5vV2pkb3NYaUZMeWlHVUtDbVBmeldhNm5qVGVwWnJzSUElMkJXVDdORmU5VElvV2pXUTJhQ3owVWI5enE1WjJ4ZHR5NDZqd1hCZnVHVGZmOEd0eURzcSUyQkNDcHZsR0xJcTZaRFZEMDkzUk1xSmhYMlY0TTdUY0hpZm9NTk5GYXVxWjBJZTR0dE9rQmZ3JTNEJTNE; _gid=GA1.2.908874955.1625126838; __gads=ID=5be9d413ff899546-22e04a9e18ca0046:T=1625126836:RT=1625126836:S=ALNI_Ma0axY94aSdwMIg95hxZVZ-JGNT2w; cookieconsent_status=dismiss",
      },
    })
      .then(async ({ data }) => {
        const $ = cheerio.load(data);
        resolve({
          video: $("div.col-md-4.btns-download > p:nth-child(1) > a").attr(
            "href"
          ),
          audio: $("div.col-md-4.btns-download > p:nth-child(3) > a").attr(
            "href"
          ),
        });
      })
      .catch(reject);
  });
}

module.exports = {
  snaptik,
  mediafireDl,
  instagramstalk,
  tiktokstalk,
  githubstalk,
  facebookDl,
  getAudioWithTubeMp3,
  pinterest,
  wallpaper,
  wikimedia,
  quotesAnime,
  aiovideodl,
  umma,
  ringtone,
  styletext,
};
