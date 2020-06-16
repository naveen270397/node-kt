'use strict';
const Rabbit = require('./rabbit')

class RabbitQueue extends Rabbit {
    constructor(queueName) {
        super(queueName);
    }
}

module.exports = new RabbitQueue('task_queues');