var wallabyWebpack = require('wallaby-webpack');
var webpackPostprocessor = wallabyWebpack({});

module.exports = function () {
  return {
    files: [
      'src/**/*.ts'
    ],

    tests: [
      'test/server/**/*.js'
    ],

    workers: {
      recycle: true
    },

    env: {
      type: 'node'
    },

    preprocessors: {
      '**/*.js': file => require('babel-core').transform(
        file.content,
        {
          sourceMap: true, 
          presets: ['es2015']
        })
    },

    compilers: {
      '**/*.ts': w.compilers.typeScript({
        typescript: require('typescript')
      })
    },

    postprocessor: webpackPostprocessor,

    testFramework: 'mocha',

    setup: function (wallaby) {
      wallaby.testFramework.ui('bdd');
    },

    workers: {
      initial: 1,
      regular: 1
    },

    debug: true

  };
};
