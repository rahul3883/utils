const util = require('util');

let char, len, params, indent, replacer, removeQuotes, singleLineArray;

function configure(options = {}) {
    ({
        char = '-',
        len = 67,
        indent = 4,
        removeQuotes = true,
        singleLineArray = true,
        replacer = (key, value) => {
            if (singleLineArray && value instanceof Array && typeof value[0] !== 'object')
                return JSON.stringify(value);
            return value;
        },
        ...params
    } = options);
    params.breakLength = params.breakLength || len;
}

configure();

function getString(obj, options = {}) {
    return util.inspect(obj, {...params, ...options});
}

function log(obj, options) {
    console.log(getString(obj, options));
}

function logC(obj, options) {
    addLine(log, obj, options);
}

function getJsonString(obj, {
    replacer:localReplacer = replacer,
    indent:localIndent = indent,
    removeQuotes:localRemoveQuotes = removeQuotes,
    singleLineArray:localSingleLineArray = singleLineArray
} = {}) {
    singleLineArray = localSingleLineArray;
    let s = JSON.stringify(obj, localReplacer, localIndent);
    if (localRemoveQuotes) {
        s = s.replace(/"(\w+)"\s*:/g, '$1:');
    }
    return s;
}

function json(obj, options) {
    console.log(getJsonString(obj, options));
}

function jsonC(obj, options) {
    addLine(json, obj, options);
}

function addLine(fn, obj, options) {
    line(options);
    fn(obj, options);
    line(options);
}

function line(options) {
    console.log(getLine(options));
}

function getLine({ char:localChar = char, len:localLen = len } = {}) {
    let s = '';
    for (let i = 0; i < localLen; i++) {
        s += localChar;
    }
    return s;
}

module.exports = { configure, getLine, line, getString, log, logC, getJsonString, json, jsonC };
