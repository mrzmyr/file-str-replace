var fs = require('fs');

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

function replaceSync(file, pattern, replacement) {
  var contents = fs.readFileSync(file, 'utf8')
  var result = contents.replace(pattern, replacement);
  fs.writeFileSync(file, result, 'utf8');
  return result;
}

module.exports = {
  replace: replace,
  replaceSync: replaceSync
};