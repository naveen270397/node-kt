"use strict";
/**
 * Created by lalit on 5/2/19.
 */

const config = require('../../bin/config').redis;
const redis = require('redis');
const chalk = require('chalk');
const bluebird = require('bluebird');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);


function RedisClient() {
    if(config && config.host && config.port)
        return redis.createClient(config.port, config.host);
    return redis.createClient();
}

var redisClient = new RedisClient();

redisClient.on('error', function (err) {
    console.log(chalk.red('REDIS: Error ' + err));
});

var t = setTimeout(function() {
    console.log('REDIS: Failed to connect to ' + config.host + ':' + config.port);
    throw new Error('REDIS: Connection Failure');
}, 5000);

redisClient.on('ready', function() {
    clearTimeout(t);
    console.log(chalk.green('REDIS is now connected'));
});

module.exports = redisClient;
