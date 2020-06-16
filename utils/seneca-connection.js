'use strict';
const rabbitConfig = require('../../bin/config').rabbitmq;

var client = require('seneca')()
    .use('seneca-amqp-transport', {
        amqp: {
            client: {
                queues: {
                    options: {
                        durable: true
                    }
                }
            }
        }
    })
    .client({
        type: 'amqp',
        pin: 'cmd:api,level:*',
        hostname: rabbitConfig.hostname,
        port: rabbitConfig.port,
        username: rabbitConfig.username,
        password: rabbitConfig.password,
        publish: {
            persistent: true
        }
    });


module.exports = {
    client
}