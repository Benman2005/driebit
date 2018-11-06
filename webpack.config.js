const path = require('path');

module.exports = {
  entry: {
      main: "./main.js",
      meetup: "./meetup.js",
      conversation: "./conversation.js"
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name]-bundle.js"
  }
};