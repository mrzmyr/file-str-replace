var fs = require("fs")
var assert = require("assert")
var fileStrReplace = require("../index.js")

var resetValue = '9cdfb439c765e987e307864c9167a15';
var filename = __dirname + '/example.txt';

describe('file-str-replace module', function(){

  var fileContent;

  beforeEach(function (done) {
    fs.readFile(filename, 'utf8', function (err, data) {
      fileContent = data;
      done();
    });
  });

  it('should replace correctly', function(done){

    fileStrReplace(filename, /[0-9]{0,}e/g, '<3', function () {
      fs.readFile(filename, 'utf8', function (err,data) {
        assert.equal('9cdfb439c<3<3307864c9167a15', data);
        done();
      });
    });
  });

  it('should call the callback with correct value', function(done){

    fileStrReplace(filename, /[0-9]{0,}e/g, '<3', function (value) {
      assert.equal('9cdfb439c<3<3307864c9167a15', value);
      done();
    });
  });

  afterEach(function () {
    fs.writeFile(filename, resetValue, 'utf8');
  });
})