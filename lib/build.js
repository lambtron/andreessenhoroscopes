
/**
 * Module dependencies.
 */

var yaml = require('yamljs');
var horoscopes = yaml.load('./horoscopes.yml');
var fs = require('fs');
var mkdirp = require('mkdirp');
var _ = require('lodash');

/**
 * Iterate through horoscopes and generate the proper files and subdirectories.
 */

for (var i = 0; i < horoscopes.length; i++) {
  var path = './horoscopes/' + generatePath(horoscopes[i].content);
  mkdirp.sync(path);
  horoscopes[i].next_path = '/' + generatePath(horoscopes[0].content);
  if (i < horoscopes.length - 1) horoscopes[i].next_path = '/' + generatePath(horoscopes[i + 1].content);
  fs.writeFileSync(path + '/index.html', generateFile(horoscopes[i]));
  if (i === 0) fs.writeFileSync('./horoscopes/index.html', generateFile(horoscopes[i]));
}

/**
 * Helper function to generate a path given a sentence.
 * Takes first five words, strips all punctuation, and replaces white space with dashes.
 */

function generatePath(content) {
  return content.replace(/\u2013|\u2014/g, "-").replace(/[^a-zA-Z0-9-_\s]/g, '').split(' ').slice(0, 8).join('-').toLowerCase();
}

/**
 * Helper function to return the template to write into files.
 */

function generateFile(horoscope) {
  return '---\n' +
         'tweet_id: \"' + horoscope.tweet_id + '\"\n' +
         'next_path: \"' + horoscope.next_path + '\"\n' +
         '---\n' +
         '\n' +
         htmlify(horoscope.content);
}

/**
 * HTML-ify text.
 */

function htmlify(text) {
  text = text.replace(/\’/g, "&rsquo;");
  text = text.replace(/\‘/g, "&rsquo;");
  text = text.replace(/\”/g, "&rdquo;");
  text = text.replace(/\“/g, "&ldquo;");
  text = text.replace(/\—/g, "&mdash;");
  return text;
}
