# Soprano Saxophone - Geckodriver install

This is a simple package that downloads [Geckodriver](https://github.com/mozilla/geckodriver) and 
provides a node api for accessing the path to the binary. There are other packages like this, but I wanted to make sure
I had an updated package to include in [Browsertime](http://www.browsertime.net).

Why the funny name you ask? Well, there are [countless](https://www.npmjs.com/search?q=selenium) Selenium modules in npm.
Keywords and the description for the module allows you to find it anyway, so might as well choose a unique name.

How to use?
```node
var driver = require('soprano-saxophone').geckodriver;

var p = driver.binPath();
// launch geckodriver from path
```

You can ovveride the download location by setting *process.env.GECKODRIVER_BASE_URL*.