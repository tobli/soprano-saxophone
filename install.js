'use strict';

var Download = require('download'),
    downloadStatus = require('download-status'),
    os = require('os'),
    version = require('./package').version;

function getGeckodriverUrl() {
  var urlBase = `https://github.com/mozilla/geckodriver/releases/download/v${version}/`;

  switch (os.platform()) {
    case 'darwin':
      return `${urlBase}geckodriver-v${version}-macos.tar.gz`;
    case 'linux':
      return `${urlBase}geckodriver-v${version}-linux64.tar.gz`;
    // ooops there are no current win32 release of geckodriver
    // case 'win32':
    // return `${urlBase}geckodriver-v${version}-win32.zip`;
    case 'win64':
      return `${urlBase}geckodriver-v${version}-win64.zip`;
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
