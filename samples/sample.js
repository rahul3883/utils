var utils = require('../');

utils.configure({
    showHidden: true,
    colors: true,
    depth: null,
    breakLength: 50
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

utils.log(obj);
utils.logC(obj, { char: '+' });
utils.prettyJson(obj);
utils.prettyJsonC(obj, { char: '=', len: 10 });
utils.line({ char: '~' });
