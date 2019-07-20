const path = require ('path');

module.exports = {
  webpack (config) {
    config.resolve.alias['actions'] = path.join (__dirname, 'actions');
    config.resolve.alias['components'] = path.join (__dirname, 'components');
    config.resolve.alias['containers'] = path.join (__dirname, 'containers');
    config.resolve.alias['lib'] = path.join (__dirname, 'lib');
    config.resolve.alias['reducers'] = path.join (__dirname, 'reducers');
    return config;
  },
};
