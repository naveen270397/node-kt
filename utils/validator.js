'use strict';
const responseMessage = require('./response-message');
module.exports = class validator {
    constructor() {}

    static isValidEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).trim().toLowerCase());
    }

    static isValidMobile(mobile) {
        var re = /^[0-9]{10}$/;
        return re.test(mobile);
    }

    static isEmpty(value) {
        try {
            if (value == null) {
                return true;
            }
            switch (typeof value) {
                case 'number':
                    return !(value > 0);
                case 'string':
                    return !(String(value).trim().length);
                case 'array':
                    value = value.map(x => { return !this.isEmpty(x) });
                    return !(value.length > 0);
                case 'object':
                    let x = [];
                    if (!Object.keys(value).length) {
                        return true;
                    }
                    for (var i in value) {
                        if (this.isEmpty(value[i])) {
                            return true;
                        }
                    }
                    return false;
                case 'undefined':
                    return true;
                default:
                    return true;
            }
        } catch (error) {
            throw new Error(error)
        }
    }
} 