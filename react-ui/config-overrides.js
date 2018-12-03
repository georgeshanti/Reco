/* config-overrides.js */
const path = require('path');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
    //do stuff with the webpack config...
    config = rewireCssModules(config, env);
    config.resolve = {
        alias: {
          'components': path.resolve(__dirname, 'src', 'components')
        }
    };
    return config;
  }