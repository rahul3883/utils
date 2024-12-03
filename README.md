# Node.js Utilities

Node.js development utilities for printing data to terminal.

## Install

```shell script
npm install @rahul1711/utils
```

## Usage

### Load the package
```javascript
const utils = require('@rahul1711/utils');
```

### Configure
Configure the global options.
```javascript
utils.configure([options]);
```
- [options (1)](#get-a-line)
- [options (2)](#get-a-json-string)
- [options (3)](#get-a-string)


### Get a line
Create a line using the character provided.
```javascript
utils.getLine([options]);
```
- `options`: `<Array>` These options override the same options provided in [`utils.configure`](#configure)
    - `char`: `<char>` A character to use for printing the line. **Default**: `-`
    - `len`: `<integer>` Length of the line. **Default**: `67`

### Print a line
Print a line returned from [`utils.getLine`](#get-a-line).
```javascript
utils.line([options]);
```
- [options](#get-a-line)

### Get a string
Format the object using the built in [`util.inspect`](https://nodejs.org/api/util.html#util_util_inspect_object_options) method.
```javascript
utils.getString(obj[, option]);
```
- [options](https://nodejs.org/api/util.html#util_util_inspect_object_options)
(override options of the built in `util.inspect` method)
    
### Log
Print a string returned from [`utils.getString`](#get-a-string).
```javascript
utils.log(obj[, options]);
```
- [options](#get-a-string)

### Log with lines
Wrap [`utils.log`](#log) with lines.

[`utils.line`](#print-a-line) is used to print the lines.
```javascript
utils.logC(obj[, options]);
```
- [options (1)](#print-a-line)
- [options (2)](#get-a-string)

### Get a JSON string
Format the object using the built in [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) method.
```javascript
utils.getJsonString(obj[, options]);
```
- `options`: `<Array>` These options override the same options provided in [`utils.configure`](#configure)
    - `replacer`: `<function>` A map function for object properties. [**Default**](https://github.com/rahul3883/utils/blob/master/index.js#L12)
    - `indent`: `<integer> | <string>` A string or number used to add whitespace in the returned string. **Default**:`4`
    - `removeQuotes`: `<boolean>` Remove quotes from the keys. **Default**:`true`
    - `singleLineArray`: `<boolean>` Print an array in a single line. **Default**:`true`

### Log using JSON method
Print a string returned from [`utils.getJsonString`](#get-a-json-string).
```javascript
utils.json(obj[, options]);
```
- [options](#get-a-json-string)

### Log with lines using JSON method
Wrap [`utils.json`](#log-using-json-method) with lines.

[`utils.line`](#print-a-line) is used to print the lines.
```javascript
utils.jsonC(obj[, options]);
```
- [options (1)](#print-a-line)
- [options (2)](#get-a-json-string)

## Samples

Sample files can be found in [`/samples`](https://github.com/rahul3883/utils/tree/master/samples) directory.

## Notes

- Options passed in [`utils.configure`](#configure) are global, and will be used
whenever options are not passed to any methods.
- Passing options to any method other than [`utils.configure`](#configure) will
be valid for that function call only.
