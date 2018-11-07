const path = require('path');

module.exports = {
  entry: {
      main: "./src/main.js",
      meetup: "./src/meetup.js",
      conversation: "./src/conversation.js"
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name]-bundle.js"
  },
  watch: true

};