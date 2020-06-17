const EVentEmitter = require('events');
const { EventEmitter } = require('events');

// Create Emitter Class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter()

// Create an event listener
myEmitter.on('event', () => console.log('Event Fired!'))

// Init event
myEmitter.emit('event')