'use strict';
const client = require('./seneca-connection').client
const logger = require('./logger').logger
const path = require('path')
class Seneca {

    async push(data, event) {
        try {
            client.act(`cmd:api,level:${event}`, data, (err, res) => {
                // Handle error in some way
                if (err) {
                    logger.error({
                        error: err,
                        methodName: 'Seneca push',
                        fileName: path.basename(__filename)
                    });
                }

                // Print out the response
                return {}

            });
        } catch (error) {
            logger.error({
                error: error.message,
                stack: error.stack,
                methodName: 'seneca push',
                fileName: path.basename(__filename)
            });
            return {}
        }
    }

}

module.exports = new Seneca();


if (require.main === module) {
    (function () {
        setTimeout(function () {
            let userId = 142146
            for (let i = 0; i < 1; i++) {
                userId++
                console.log("userId::::::::", userId)
                client.act('cmd:api,level:addMoney', {
                    userId: 1131343,
                    clientName: 'web',
                    source: 'web',
                    userName: 'test-web-enagge',
                    ip: '172.105.43.57',

                }, (err, res) => {
                    if (err) {
                        // Handle error in some way
                        console.log("errrrrrrrrrrrrrr", err, res);
                    }
                    // Print out the response
                    console.log("hehehhehe", err, res);

                });
            }

        }, 3000)

    })()
}