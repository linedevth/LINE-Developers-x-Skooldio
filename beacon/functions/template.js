const enter1 = (profile) => ({
  type: "flex",
  altText: "Hello LINE Beacon!",
  contents: {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "image",
              "url": "https://store.ais.co.th/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beacon2-01.png",
              "size": "full",
              "aspectMode": "cover",
              "aspectRatio": "14:9"
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "image",
                  "url": `${profile.pictureUrl}`,
                  "aspectMode": "cover",
                  "size": "full"
                }
              ],
              "cornerRadius": "100px",
              "width": "72px",
              "height": "72px"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "contents": [],
                  "wrap": true,
                  "text": `Hello ${profile.displayName}!`,
                  "weight": "bold"
                },
                {
                  "type": "text",
                  "text": `${profile.statusMessage}`,
                  "size": "sm"
                }
              ],
              "justifyContent": "center"
            }
          ],
          "spacing": "xl",
          "paddingAll": "20px"
        }
      ],
      "paddingAll": "0px"
    }
  }
});

const enter2 = (profile) => ({
  type: "flex",
  altText: "Hello LINE Beacon!",
  contents: {
    "type": "bubble",
    "body": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "image",
              "url": "https://store.ais.co.th/media/catalog/product/cache/2/thumbnail/9df78eab33525d08d6e5fb8d27136e95/b/e/beacon6-01.png",
              "size": "full",
              "aspectMode": "cover",
              "aspectRatio": "10:9"
            }
          ]
        },
        {
          "type": "box",
          "layout": "horizontal",
          "contents": [
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "image",
                  "url": `${profile.pictureUrl}`,
                  "aspectMode": "cover",
                  "size": "full"
                }
              ],
              "cornerRadius": "100px",
              "width": "72px",
              "height": "72px"
            },
            {
              "type": "box",
              "layout": "vertical",
              "contents": [
                {
                  "type": "text",
                  "contents": [],
                  "wrap": true,
                  "text": `Hello ${profile.displayName}!`,
                  "weight": "bold"
                },
                {
                  "type": "text",
                  "text": `${profile.statusMessage}`,
                  "size": "sm"
                }
              ],
              "justifyContent": "center"
            }
          ],
          "spacing": "xl",
          "paddingAll": "20px"
        }
      ],
      "paddingAll": "0px"
    }
  }
});

module.exports = { enter1, enter2 };