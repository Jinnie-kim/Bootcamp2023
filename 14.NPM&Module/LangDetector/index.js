const franc = require('franc');
const langs = require('langs');
const color = require('colors');

const input = process.argv.slice(2)[0];
const langCode = franc(input);

if (langCode === 'und') {
  console.log("Sorry, Couldn't figure it out! Try with some more text".red);
} else {
  const language = langs.where('3', langCode);
  console.log(`Out best guess is...🤔: ${language.name}!!`.rainbow);
}
