const utils = require('@rahul171/utils');

utils.configure({
  showHidden: true,
  colors: true,
  breakLength: 50,
  char: '=',
  removeQuotes: false
});

const obj = {
  a: 1,
  b: 'hello',
  c: [1, 2, 3, 4],
  d: ['hi', 'there'],
  e: {
    f: [11, 22, 33, 44],
    g: 'inside'
  }
};

console.log(utils.getLine());

utils.line({char: '~'});

console.log(utils.getString(obj));

utils.log(obj, {colors: false});
utils.logC(obj, {char: '+'});

console.log(utils.getJsonString(obj, {indent: '--', removeQuotes: true}));

utils.json(obj);
utils.jsonC(obj, {singleLineArray: false});
