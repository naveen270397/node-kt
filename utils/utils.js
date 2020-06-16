'use strict';
const responseMessage = require('./response-message');
const responseCode = require('./response-code');
const logger = require('./logger').logger;
const axios = require('axios');
const config = require('../bin/config');
const serverAuth = require('../bin/config').serverAuth;
const taskQueueRabbit = require('./task-queue-rabbit');
const csv = require('csvtojson');
module.exports = class utils {
    constructor() { }

    static response(code, data, message) {
        let returnObj = {
            code: code
        };
        if (message) {
            returnObj.message = message;
        } else {
            returnObj.message = responseMessage[code]
        }
        if (data) {
            returnObj.data = data;
        }
        return returnObj;
    }

    static responseFormat(code = 200, data = {}, message = "") {
        return {
            code: code,
            data: data,
            message: message
        };
    }

    static calcDateRange(dateRange) {
        /*  if (dateRange !== 'all') {
              dateRange = parseInt(dateRange);
          }*/
        let startDate = null;
        let endDate = null;
        let currentMonth = new Date().getMonth();
        let currentYearDate = new Date();
        currentYearDate = currentYearDate.setMonth(3); // January is 0 not 1 so april is 4
        currentYearDate = new Date(currentYearDate).setDate(1);
        if (dateRange === 'all') {
            startDate = 0;
        } else if (dateRange === 'cf') {
            if (currentMonth >= 0 && currentMonth < 3) {
                startDate = new Date(currentYearDate).setFullYear(new Date(currentYearDate).getFullYear() - 1);
            } else {
                startDate = currentYearDate;
            }
        } else if (dateRange === 'lf') {
            if (currentMonth >= 0 && currentMonth < 3) {
                startDate = new Date(currentYearDate).setFullYear(new Date(currentYearDate).getFullYear() - 2);
                endDate = new Date(currentYearDate).setFullYear(new Date(currentYearDate).getFullYear() - 1);
            } else {
                startDate = new Date(currentYearDate).setFullYear(new Date(currentYearDate).getFullYear() - 1);
                endDate = new Date(currentYearDate).setDate(new Date(currentYearDate).getDate() - 1)
            }
        } else {
            dateRange = parseInt(dateRange)
            startDate = new Date().setDate(new Date().getDate() - dateRange)
        }
        let returnObj = {
            startDate: new Date(startDate)
        };
        if (endDate !== null) returnObj.endDate = new Date(endDate);
        return returnObj;
    }


    static timestamp(manualDate, option) {
        var argc = arguments.length;
        if (argc === 0) {
            manualDate = new Date();
        }
        if (!String(manualDate).trim().length) {
            manualDate = new Date();
        }

        let d = new Date(manualDate);
        if (typeof option == 'object') {
            for (const i in option.add) {
                if (option.add.hasOwnProperty(i)) {
                    let value = option.add[i];
                    switch (i) {
                        case 'year':
                            d.setFullYear(d.getFullYear() + value);
                            break;
                        case 'month':
                            d.setMonth(d.getMonth() + value);
                            break;
                        case 'date':
                            d.setDate(d.getDate() + value);
                            break;
                        case 'hour':
                            d.setHours(d.getHours() + value);
                            break;
                        case 'minute':
                            d.setMinutes(d.getMinutes() + value);
                            break;
                        case 'second':
                            d.setSeconds(d.getSeconds() + value);
                            break;
                        default:
                            break;
                    }
                }
            }
            for (const i in option.minus) {
                if (option.minus.hasOwnProperty(i)) {
                    let value = option.minus[i];
                    switch (i) {
                        case 'year':
                            d.setFullYear(d.getFullYear() - value);
                            break;
                        case 'month':
                            d.setMonth(d.getMonth() - value);
                            break;
                        case 'date':
                            d.setDate(d.getDate() - value);
                            break;
                        case 'hour':
                            d.setHours(d.getHours() - value);
                            break;
                        case 'minute':
                            d.setMinutes(d.getMinutes() - value);
                            break;
                        case 'second':
                            d.setSeconds(d.getSeconds() - value);
                            break;
                        default:
                            break;
                    }
                }
            }
            for (const i in option.set) {
                if (option.set.hasOwnProperty(i)) {
                    let value = option.set[i];
                    switch (i) {
                        case 'year':
                            d.setFullYear(value);
                            break;
                        case 'month':
                            d.setMonth(value);
                            break;
                        case 'date':
                            d.setDate(value);
                            break;
                        case 'hour':
                            d.setHours(value);
                            break;
                        case 'minute':
                            d.setMinutes(value);
                            break;
                        case 'second':
                            d.setSeconds(value);
                            break;
                        default:
                            break;
                    }
                }
            }
        }
        return Math.floor(d.getTime() * 0.001);
    }

    static async post(url, data ,isInternal = true, contentType = 'application/json') {
        try {
            const payload = {
                url,
                data,
                method: 'post',
                headers: {
                    'content-type': contentType,
                    'Accept': 'application/json'
                }
            };
            if (isInternal) {
                payload.headers.accessKey =  serverAuth.accessKey
            }
            let result = await axios(payload);
            return result.data;
        }  catch (error) {
            if (error.response) {
                logger.error("error occured while making http get request", error.response);
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                throw new Error(error.response.data)
            } else if (error.request) {
                logger.error("error occured while making http get request", error.request);
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                throw new Error(error.request)
            } else {
                logger.error("error occured while making http get request", error.message);
                throw new Error(error.message)
            }

        }

    }

    static async get(url, params, isInternal = true) {
        try {
            const qs = (params != null || params != undefined) ? params : '';
            const payload = {
                params: qs,
                method: 'get',
                timeout : config.segmentationApiTimeout,
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                },
            };
            if (isInternal) {
                payload.headers.accessKey =  serverAuth.accessKey
            }
            let result = await axios.get(url,payload);
            return result.data;
        }  catch (error) {
            if (error.response) {
                logger.error("error occured while making http get request", error.response);
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                throw new Error(error.response.data)
            } else if (error.request) {
                logger.error("error occured while making http get request", error.request);
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                throw new Error(error.request)
            } else {
                logger.error("error occured while making http get request", error.message);
                throw new Error(error.message)
            }
        }
    }

    static errorMessage(details) {
        let res = this.responseFormat(responseCode.INVALID_REQUEST_PARAMS)
        res.message=responseMessage[res.code]
        if (details.type == "string.regex.base") {

            res.message = `${details.context.key} is invalid.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }
        }
        if (details.type == "any.required") {

            res.message = `${details.context.key} is required.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }
        }
        if (details.type == "number.base") {

            res.message = `${details.context.key} is invalid.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }
        }
        if (details.type == "string.base") {

            res.message = `${details.context.key} is invalid.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }
        }
        if (details.type == "any.allowOnly") {

            res.message = `${details.context.key} is invalid.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }
        }

        if (details.type == "string.regex.invert.base") {

            res.message = `${details.context.key} must match pattern.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }
        }

        if (details.type == "string.min") {

            res.message = `${details.context.key} length must be at least ${details.context.limit} characters long.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }

        }
        if (details.type == "string.max") {

            res.message = `${details.context.key} length must be less than or equal to ${details.context.limit} characters long.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }

        }

        if (details.type == "object.allowUnknown") {

            res.message = `${details.context.key} is not allowed.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }

        }

        if (details.type == "string.length") {

            res.message = `${details.context.key} length must be ${details.context.limit} characters long.`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }
        }
        if (details.type == "number.greater") {

            res.message = `${details.context.key} must be greater`;
            res.data = {
                isJoi: true,
                key: details.context.key
            }
        }
        return res
    }

    //method to check if first array is in second array
    static  checkIfArrayContainsFirst(arrayToCheck, arrayToCheckFrom) {
		let arrayToSearch = [];
		if(arrayToCheck instanceof Array) {
			arrayToSearch = arrayToCheck;
		} else {
			arrayToSearch = [arrayToCheck];
        }
        if(arrayToCheckFrom.length === 0) {
            return false;
        }
		return arrayToSearch.some(element => arrayToCheckFrom.indexOf(element) != -1);
	}

    //method to return the difference of two arrays. returns the values that are in first array and not in second
    static  getArrayDifference(arrayToCheck, mainArray) {
        return arrayToCheck.filter(element => mainArray.indexOf(element) == -1);
    }

    static sendGamoogaEvent(data) {
        try {
            taskQueueRabbit.push(JSON.stringify(data));
        } catch (error) {
            logger.error({
                error: error.stack,
                methodName: 'sendGamoogaClaimChipsEvent',
                fileName: path.basename(__filename)
            });
        }
    }
   static async getCsvData(req) {
        try {
            let csvData = [];
            if (typeof req.files != 'undefined' && typeof req.files.csvData != 'undefined' && req.files.csvData.path != '') {
                csvData = await csv().fromFile(req.files.csvData.path);
            }
            return csvData;
        } catch (error) {
            throw error;
        }
    }

    static generateRandomPromoNumber (totalCode = 1){
        const minimum = 100000;
        const maximun = 999999;
        
        let randomArray = [];
        for(let i =0 ; i < 1500000; i++){
            let randomNum = Math.floor(Math.random() * (maximun - minimum)) + minimum;

            if(!utils.checkIfArrayContainsFirst(randomNum ,randomArray)){
                randomArray.push(randomNum);
            }
            if(randomArray.length == totalCode ){
                break;
            }
        }

        return randomArray;
    }
}