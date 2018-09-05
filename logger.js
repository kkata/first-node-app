const EventEmitter = require('events');

var url = 'http://example.com/log'

class Logger extends EventEmitter {
  log(message) {
    // send an http request
    console.log(message)
    this.emit('messageLogged', { id: 1, url: 'http://' });
  }
}

module.exports = Logger
