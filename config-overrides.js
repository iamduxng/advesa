const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = function override(config, env) {
  // config.entry = config.entry.map(entry => {
  //   if (entry.slice(-8) === 'index.js') {
  //       return `${entry}`;
  //   }

  //   return entry;
  // });
  config.plugins = config.plugins.map(plugin => {
    if(plugin.constructor.name === 'GenerateSW') {
      return new WorkboxWebpackPlugin.InjectManifest({
        swSrc: './src/customSW.js',
        swDest: 'customSW.js'
      });
    }
    return plugin;
  });

  return config;
}