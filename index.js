const util = require('util');

let showHidden,
    depth,
    colors,
    lineChar,
    lineLength,
    breakLength,
    compact;

function configure(options = {}) {
    ({
        showHidden = false,
        depth = null,
        colors = true,
        lineChar = '-',
        lineLength = 67,
        breakLength = lineLength,
        compact = 3
    } = options);
}

configure();

function log(obj) {
    console.log(util.inspect(obj, {showHidden, depth, compact, breakLength, colors}));
}

function logC(obj, options) {
    addLine(log, obj, options);
}

function prettyJson(obj) {
    console.log(getPrettyJson(obj));
}

function prettyJsonC(obj, options) {
    addLine(prettyJson, obj, options);
}

function getPrettyJson(obj) {
    let s = JSON.stringify(obj, function(k, v) {
        if (v instanceof Array && typeof v[0] !== 'object')
            return JSON.stringify(v);
        return v;
    }, 4);
    s = s.replace(/"(\w+)"\s*:/g, '$1:');
    return s;
}

function addLine(fn, obj, options) {
    line(options);
    fn(obj);
    line(options);
}

function line({ char = lineChar, len = lineLength } = {}) {
    console.log(getLine(char, len));
}

function getLine(char, len) {
    let s = '';
    for (let i = 0; i < len; i++) {
        s += char;
    }
    return s;
}

module.exports = { configure, log, logC, prettyJson, prettyJsonC, line };
