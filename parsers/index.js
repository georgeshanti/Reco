const testAddon = require('./build/Release/odt-parser.node');

console.log('addon',testAddon);
var document = new testAddon.ODTDocumentWrapper("styles", "contents", "metadata", "images");
console.log(document.display());

module.exports = testAddon;