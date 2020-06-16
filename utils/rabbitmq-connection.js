'use strict'
const amqp = require('amqplib');
const chalk = require('chalk');
const rabbitConfig = require('../bin/config').rabbitmq;

const connect = () => {
    return new Promise((resolve, reject) => {
        amqp.connect(rabbitConfig)
            .then(conn => {
                resolve(conn)
            })
            .catch(err => {
                reject(err)
            })
    })
}

const createChannel = conn => {
    return new Promise((resolve, reject) => {
        conn.createChannel()
            .then(channel => resolve(channel))
            .catch(err => reject(err))
    })
}

const channelAssertQueue = (channel, queueName) => {
    return new Promise((resolve, reject) => {
        channel.assertQueue(queueName)
            .then(asserted => resolve(channel))
            .catch(err => reject(err))
    })
}

const connection = async (queueName) => {
    try {
        if (!String(queueName).length) {
            throw new Error('Provide queue name');
        }
        let conn = await connect()
        let channel = await createChannel(conn);
        await channelAssertQueue(channel, queueName)
        console.log('Rabbit running (,,)');
        return channel 
    } catch (error) {
        console.log(chalk.red('Mongo Unable to connect to the database: ', error));
        throw new Error('Rabbit error: Connection Failure');
    }
   
}

module.exports = connection;