
/**
 * Module dependencies.
 */

var layouts = require('metalsmith-layouts');

/**
 * Plugins list.
 */

var plugins = [];

/**
 * Export function to retrieve list.
 */

module.exports = function() {
  return plugins;
};

/**
 * Sets up handlebars layouts.
 */

plugins.push(layouts({
  engine: 'handlebars',
  directory: 'template',
  default: 'index.html'
}));
