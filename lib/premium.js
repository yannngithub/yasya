let fs = require("fs");
let toMs = require("ms");

/**
 * Add premium user.
 * @param {String} userId
 * @param {String} expired
 * @param {Object} _dir
 */
const addPremiumUser = (userId, expired, _dir) => {
  if (expired === undefined) {
    expired = "PERMANENT";
  } else {
    expired = expired;
  }

  let expired_at = "PERMANENT";

  if (expired === "PERMANENT") {
    expired_at = "PERMANENT";
  } else {
    expired_at = Date.now() + toMs(expired);
  }

  const dataToInsert = {
    phone_number: userId,
    start_prem: Date.now(),
    expired_prem: expired_at,
  };

  // SQL query to insert data, excluding the 'id' field
  const insertQuery = "INSERT INTO tbl_premium SET ?";
  db.query(insertQuery, dataToInsert, (err, results) => {
    if (err) {
      console.error("Error inserting data:", err);
      return;
    }
  });
};

/**
 * Get premium user position.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Number}
 */
const getPremiumPosition = (userId, _dir) => {
  let position = null;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].phone_number === userId) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

/**
 * Get premium user expire.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Number}
 */
const getPremiumExpired = (userId, _dir) => {
  let position = null;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].phone_number === userId) {
      position = i;
    }
  });
  if (position !== null) {
    return _dir[position].expired_prem;
  }
};

/**
 * Check user is premium.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Boolean}
 */
const checkPremiumUser = (userId, _dir) => {
  let status = false;
  Object.keys(_dir).forEach((i) => {
    if (_dir[i].phone_number === userId) {
      status = true;
    }
  });
  return status;
};

/**
 * Constantly checking premium.
 * @param {Object} _dir
 */
const expiredCheck = (conn, _dir) => {
  let position = null;
  Object.keys(_dir).forEach((i) => {
    if (Date.now() >= _dir[i].expired_prem) {
      position = i;
    }
  });
  if (position !== null) {
    try {
      const query11 = `DELETE FROM tbl_premium WHERE phone_number = "${_dir[position].phone_number}"`;
      // Menjalankan query
      db.query(query11, (error, results) => {
        if (error) throw error;
      });
      let txt = `*Premium Expired, Terimakasih Sudah Berlangganan Premium di YaSya Bot*`;
      conn.sendMessage(_dir[position].phone_number, { text: txt });
      conn.sendMessage(gruplog, {
        text: `Premium expired: wa.me/${
          _dir[position].phone_number.split("@")[0]
        }`,
      });
    } catch (err) {
      conn.sendMessage(gruplog, { text: "error" });
    }
  }
};

/**
 * Get all premium user ID.
 * @param {Object} _dir
 * @returns {String[]}
 */
const getAllPremiumUser = (_dir) => {
  const array = [];
  Object.keys(_dir).forEach((i) => {
    array.push(_dir[i].phone_number);
  });
  return array;
};

module.exports = {
  addPremiumUser,
  getPremiumExpired,
  getPremiumPosition,
  expiredCheck,
  checkPremiumUser,
  getAllPremiumUser,
};
