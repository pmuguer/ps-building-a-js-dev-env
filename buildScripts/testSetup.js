// This file isn't transpiled, so must use CommonJS and ES5

// Register Babel to transpile before our tests run
require("babel-register")();

// Disable webpack specific features that Mocha doesn't understand
require.extensions[".css"] = function() {};
