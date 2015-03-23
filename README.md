file-str-replace [![Build Status](https://travis-ci.org/mrzmyr/file-str-replace.svg?branch=master)](https://travis-ci.org/mrzmyr/file-str-replace)
=========

> standalone module to replace a string in a file

## Install

```
$ npm install --save-dev file-str-replace
```

## Usage

```js

var fileStrReplace = require('file-str-replace')

fileStrReplace('example.txt', /[0-9]/g, '<3', function (newFileContent) {
  // console.log(newFileContent);
});

```
