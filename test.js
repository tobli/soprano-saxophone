var cp = require('child_process'),
    geckodriver = require('./').geckodriver,
    packageVersion = require('./package.json').version;

var expectedVersionPrefix = 'geckodriver ' + packageVersion;

var driverVersion = cp.execFileSync(geckodriver.binPath(), ['--version']).toString();

if (driverVersion.indexOf(expectedVersionPrefix) !== 0) {
  throw new Error('Expected driver version to be ' + expectedVersionPrefix + ' but it was ' + driverVersion);
}
