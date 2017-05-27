module.exports = function () {
  return {
    files: [
      'src/**/*.js'
    ],

    tests: [
      'spec/**/*.spec.js'
    ],

    env: {
      type: 'node'
    }
  };
};