module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: "./build/helloworld.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel']
    }]
  }
};
