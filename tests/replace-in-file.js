var fs = require('fs');
var assert = require('assert');
var fileStr = require('../index.js');

var resetValue = '9cdfb439c765e987e307864c9167a15';
var filename = __dirname + '/example.txt';

describe('file-str-replace module', function(){

  describe('replace', function () {

    it('should replace correctly', function(done){
      fileStr.replace(filename, /[0-9]{0,}e/g, '<3', function () {
        var assetContent = fs.readFileSync(filename, 'utf8');
        assert.equal('9cdfb439c<3<3307864c9167a15', assetContent);
        done();
      });
    });

    it('should call the callback with correct value', function(done){
      fileStr.replace(filename, /[0-9]{0,}e/g, '<3', function (value) {
        assert.equal('9cdfb439c<3<3307864c9167a15', value);
        done();
      });
    });

    afterEach(function () {
      fs.writeFile(filename, resetValue, 'utf8');
    });

  });

  describe('replaceSync', function () {

    it('should replace correctly', function() {
      fileStr.replaceSync(filename, /[0-9]{0,}e/g, '<3');
      var assetContent = fs.readFileSync(filename, 'utf8');
      assert.equal('9cdfb439c<3<3307864c9167a15', assetContent);
    });

    it('should call the callback with correct value', function() {
      var result = fileStr.replaceSync(filename, /[0-9]{0,}e/g, '<3');
      assert.equal('9cdfb439c<3<3307864c9167a15', result);
    });

    afterEach(function () {
      fs.writeFile(filename, resetValue, 'utf8');
    });
  })
})