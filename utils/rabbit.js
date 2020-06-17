'use strict';
const rabbitConnection = require('./rabbitmq-connection')
const logger = require('./logger').logger

module.exports = class Rabbit {

    constructor(queueName) {
        this.queueName = queueName;
        this.init();
    }
    async init() {
        this.channel = await rabbitConnection(this.queueName);
    }
    async push(data) {
        try {
            return await this.channel.sendToQueue(this.queueName, Buffer.from(data));
        } catch (error) {
            logger.error("RabbitMq Error: ",error)

        }
    }

}
