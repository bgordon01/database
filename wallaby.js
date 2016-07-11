module.exports = function () {
  return {
    files: [
      'index.js',
      'lib/**/*.js'
    ],

    tests: [
      'test/server/**/*.test.js',
      'test/**/*.json'
    ],

    workers: {
      recycle: true
    },

    env: {
      type: 'node'
    },

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
