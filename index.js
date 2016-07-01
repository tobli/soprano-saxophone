'use strict';

var os = require('os'),
  path = require('path'),
  pkg = require('./package');

module.exports.geckodriver = {
  version: pkg.version,
  binPath: function() {
    var driverPath = path.resolve(__dirname, 'vendor', 'geckodriver');
    if (os.platform() === 'win32') {
      driverPath = driverPath + '.exe';
    }
    return driverPath;
  }
};
