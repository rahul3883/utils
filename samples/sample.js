var utils = require('@rahul171/utils');

utils.configure({
    showHidden: true,
    colors: true,
    depth: null,
    breakLength: 50
});

const obj = {
    a: 1,
    b: 'hello',
    c: [1,2,3,4],
    d: ['hi', 'there']
};

utils.logC(obj, { char: '+' });
