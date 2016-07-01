'use strict';

var Download = require('download'),
    downloadStatus = require('download-status'),
    os = require('os');

function getGeckodriverUrl() {
  var urlBase = 'https://github.com/mozilla/geckodriver/releases/download/v0.9.0/';

  switch (os.platform()) {
    case 'darwin':
      return urlBase + 'geckodriver-v0.9.0-mac.tar.gz';
    case 'linux':
      return urlBase + 'geckodriver-v0.9.0-linux64.tar.gz';
    case 'win32':
      return urlBase + 'geckodriver-v0.9.0-win32.zip';
    default:
      throw new Error('Unsupported platform: ' + os.platform());
  }
}

new Download({mode: '755', extract: true})
    .get(getGeckodriverUrl())
    .dest('vendor')
    .use(downloadStatus())
    .run(function(err) {
      if (err) {
        throw err;
      }
    });
