
console.log(__filename);
console.log(__dirname);

var url = 'http://example.com/log'

function log(message) {
  // send an http request
  console.log(message)
}

module.exports = log
