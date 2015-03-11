var fs = require('fs')

function replace(file, pattern, replacement, callback) {
  fs.readFile(file, 'utf8', function (err,data) {
    if (err) {
      throw err;
    }

    var result = data.replace(pattern, replacement);

    fs.writeFile(file, result, 'utf8', function (err) {
      if (err) {
      	throw err;
      }

      if(typeof(callback) == 'function') {
        callback(result);
      }
    });
  });
}

module.exports = replace;