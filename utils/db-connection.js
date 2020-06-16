'use strict';
const Sequelize = require('sequelize');
const config = require("../../bin/config");
const chalk = require('chalk');

const cardPlayPool = new Sequelize(config.cardplayDb.database, config.cardplayDb.user,
    config.cardplayDb.password, {
        timezone: 'Asia/Calcutta', //here you can pass timezone
        host: config.cardplayDb.host,
        dialect: 'mariadb',
        dialectOptions: {
            timezone: 'Asia/Calcutta',
        },
        logging: config.cardplayDb.logging,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    });

cardPlayPool.authenticate()
    .then(() => {
        console.log(chalk.green('Connection has been established successfully for cardPlayPool.'));
    })
    .catch(err => {
        console.log(chalk.red('Unable to connect to the cardPlayPool database: ', err));
        throw new Error('mysql error: Connection Failure');
    })




module.exports = {
	cardPlayPool ,

};
