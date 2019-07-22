require ('dotenv').config ();
const path = require ('path');
const Dotenv = require ('dotenv-webpack');

module.exports = {
  webpack (config) {
    config.plugins = config.plugins || [];

    config.resolve.alias['actions'] = path.join (__dirname, 'actions');
    config.resolve.alias['components'] = path.join (__dirname, 'components');
    config.resolve.alias['containers'] = path.join (__dirname, 'containers');
    config.resolve.alias['lib'] = path.join (__dirname, 'lib');
    config.resolve.alias['reducers'] = path.join (__dirname, 'reducers');
    config.resolve.alias['typings'] = path.join (__dirname, 'typings');

    config.plugins = [
      ...config.plugins,

      // Read the .env file
      new Dotenv ({
        path: path.join (__dirname, '.env'),
        systemvars: true,
      }),
    ];

    return config;
  },
};
