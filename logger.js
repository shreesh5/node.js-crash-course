const EventEmitter = require('events')
const uuid = require('uuid')

//console.log(uuid.v4())

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg}) // same as {id: uuid.v4(), msg: msg}
    }
}

//module.exports = Logger

const Logger = require('./logger')

const logger = new Logger()

logger.on('message', (data) => console.log('Called Listener', data))

logger.log('Hello World')


// Homework Assignment
// Bring in fs module and create a log file and write all the logged messages to that log file