# Node.js Utilities

Node.js development utilities for printing data to terminal.

## Install

```shell script
npm install @rahul171/utils
```

## Usage

#### Load the package
```javascript
const utils = require('@rahul171/utils');
```

#### Configure
```javascript
utils.configure([options]);
```
- `options`: `<Array>`
    - `showHidden`: `<boolean>` Default: `false`
    - `colors`: `<boolean>` Default: `false`
    - `depth`: `<integer>` Default: `null`
    - `compact`: `<boolean> | <integer>` Default: `3`
    - `breakLength`: `<integer>` Default: `67`
    - `lineChar`: `<char>` Default: `-`
    - `lineLength`: `<integer>` Default: `67`

#### Print a line
```javascript
utils.line([options]);
```
- `options`: `<Array>` These options override some option in provided `utils.configure(option)`
    - `char`: `<char>` Overrides: `lineChar`
    - `len`: `<integer>` Overrides: `lineLength`
    
#### Log
```javascript
utils.log(obj);
```

#### Log with lines
Log an object with lines wrapped around.

This function uses the `utils.line` function internally.
```javascript
utils.logC(obj[, options]);
```
- [`options`](#print-a-line)

#### Log using JSON method
This function uses `JSON.stringify` internally rather than the built in `util` module.

So, none of the options passed in `utils.configure` will be considered here.
```javascript
utils.prettyJson(obj);
```

#### Log with lines using JSON method
Log an object with lines wrapped around.

This function uses the `utils.prettyJson` and `utils.line` function internally.

Except `lineChar` and `lineLength`, None of the options passed in `utils.configure`
will be considered here.
```javascript
utils.prettyJsonC(obj[, options]);
```
- [`options`](https://github.com/rahul3883/utils#print-a-line)

## Samples

Sample files can be found in [`/samples`](https://github.com/rahul3883/utils/tree/master/samples) directory.

## Notes

- `utils.log` and `utils.logC` methods uses `util.inspect` method internally,
so all options passed in `utils.configure` will be considered.
- `utils.prettyJson` and `utils.prettyJsonC` uses `JSON.stringify` method internally,
so except `lineChar` and `lineLength`, none of the options will be considered.
