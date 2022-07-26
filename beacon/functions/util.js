const functions = require("firebase-functions");
const admin = require("firebase-admin");
const axios = require('axios');

// 2. Fill in your CHANNEL ACCESS TOKEN
const CHANNEL_ACCESS_TOKEN = "";

const LINE_MESSAGING_API = "https://api.line.me/v2/bot";
const LINE_HEADER = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${CHANNEL_ACCESS_TOKEN}`
};

class Utils {
  async getUserProfile(userId) {
    try {
      const profile = await axios({
        method: 'get',
        url: `${LINE_MESSAGING_API}/profile/${userId}`,
        headers: LINE_HEADER
      })
      return profile.data
    } catch (error) {
      functions.logger.error('Utils-getUserProfile', error.message)
      return null
    }
  }

  async reply(token, payload) {
    try {
      await axios({
        method: 'post',
        url: `${LINE_MESSAGING_API}/message/reply`,
        headers: LINE_HEADER,
        data: {
          replyToken: token,
          messages: payload
        }
      })
      return true;
    } catch (error) {
      functions.logger.error('Utils-reply', error.message);
      return false;
    }
  }

  async richMenuLink(userId) {
    // 10. Fill in your RICH MENU ID
    const RICH_MENU_ID = "";
    try {
      await axios({
        method: "post",
        url: `${LINE_MESSAGING_API}/user/${userId}/richmenu/${RICH_MENU_ID}`,
        headers: LINE_HEADER
      });
      return true;
    } catch (error) {
      functions.logger.error('Utils-richMenuLink', error.message);
      return false;
    }
  }

  async addBeaconUser(profile) {
    const userRef = admin.firestore().collection('beacons').doc(`${profile.userId}`);
    try {
      const doc = await userRef.get();
      if (!doc.exists) {
        await userRef.set(profile)
      }
      return true;
    } catch (error) {
      functions.logger.error('Utils-addBeaconUser', error.message);
      return false;
    }
  }
}

module.exports = new Utils();