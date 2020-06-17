'use strict';
const format = require('util').format;
const mongoPokerDatadb = {
    useAuth: (process.env.MONGODB_USE_AUTH == 'YES') || false,
    withAuthDbDetails: {
        username: process.env.MONGO_USERNAME || "username",
        password: process.env.MONGO_PASSWORD || "password",
        authDb: "admin",
        host: process.env.MONGO_HOST || "192.168.0.163",
        port: 27017,
        authMechanism: "SCRAM-SHA-1",
        database: 'user_details',
        connectionLimit: 100,
        debug: false
    },
    WithOutAuthDbDetails: {
        username: "",
        password: "",
        authDb: "",
        host: process.env.MONGO_HOST || "192.168.0.163",
        port: 27017,
        authMechanism: "SCRAM-SHA-1",
        database: 'user_details',
        connectionLimit: 100,
        debug: false
    }
};

function createMongoUrl(mconf) {
    var mWithoutAuth = mconf.WithOutAuthDbDetails;
    var url = process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || mWithoutAuth.host + ':' + mWithoutAuth.port) + '/' + mWithoutAuth.database;
    if (mconf.useAuth) {
        var mWithAuth = mconf.withAuthDbDetails;
        //format mongodb://%username:password@hostname:port_no/database_access?authMechanish=%auth_mechanism&authSource=dbToAuth
        url = format("mongodb://%s:%s@%s:%s/%s?authMechanish=%s&authSource=%s", mWithAuth.username, mWithAuth.password, mWithAuth.host, mWithAuth.port, mWithAuth.database, mWithAuth.authMechanism, mWithAuth.authDb);
    }
    return url;
}

module.exports = {
    PORT: 3001,
    //mysql connection settings
    cardplayDb: {
        host: process.env.MYSQL_HOST || '192.168.0.164',
        user: process.env.MYSQL_USERNAME || 'root',
        password: process.env.MYSQL_PASSWORD || 'adda52#123',
        database: 'cardplay',
        connectionLimit: 100, //important
        logging: (process.env.MYSQL_LOGGING == 'YES') || false,
        debug: (process.env.MYSQL_DEBUG == 'YES') || false
    },
    session: {
        maxAge: 1200000,
        tokenValidaty: 86400, // 1 day
        tokenAuthPrefix: 'u:',
        SECRET: 'notify',
        sfsTokenAuthPrefix: 'st_'
    },
    redis: {
        host: process.env.REDIS_HOST || '192.168.0.164',
        port: '6379'
    },
    apiRedis: {
        host: process.env.API_REDIS_HOST || '192.168.0.164',
        port: '6379'
    },
    mongoUrl: createMongoUrl(mongoPokerDatadb),
    segmentation_api: process.env.API_HOST || `http://192.168.0.154:3101`,
    user_api: process.env.API_HOST || 'http://localhost:3006',
    transaction_api: process.env.API_HOST || 'http://localhost:3005',
    credit_bonus_api: process.env.API_HOST || 'http://localhost:3005',
    email_communication_api: process.env.API_HOST || 'http://localhost:3002',
    purchase_history_api: process.env.API_HOST || 'http://localhost:3010',
    segmentationApiTimeout: 3000,
    amountOptions: [100, 500, 1000, 2000, 5000, 10000],
    serverAuth: {
        accessKey: process.env.ACCESS_KEY || '1f7cc6648f5dbb59fdfb60048fa7097cdcbf1350d449a7da89c7d84ee7949322',
    },
    signupBonusAmount: {
        ibAmt: 100,
        bbAmt: 400,
        ticketData: [{
            "ticketName": "BYTEQTKT",
            "count": 2
        }],
        isOrganicApplicable: true
    },
    ticketOfferMaxUsageAdminEmail: ['vishal.pradhan@gaussnetworks.com'],
    rabbitmqStatus: 1,
    rabbitmq: {
        username: process.env.RABBITMQ_USERNAME || 'admin',
        password: process.env.RABBITMQ_PASSWORD || 'admin',
        hostname: process.env.RABBITMQ_HOST || '192.168.0.164',
        port: '5672'
    },
    promocodeArray: [
        'MOVIE', 'MXPLAYER', 'ZEE5', 'SONY', 'HOTSTAR', 'VOOT', 'GAYLE', 'GAME', 'POKER', 'QUINT', 'SCOOPWHOOP', 'VOOT',
        'FLUSH', 'ACE', 'ALLIN', 'POT', 'TURN', 'BUBBLE', 'KING', 'QUEEN', 'SHAREIT', 'GHANTAA', 'TOI', 'STOCKS', 'IXIGO',
        'PVR', 'DATE', 'CRUSH', 'COLORS', 'COSMICEGG', 'FUN', 'NAUGHTY', 'DEKHBHAI', 'FRIENDS', 'BOLLY', 'FACTS', 'DESI',
        'PICS', 'CUTE', 'SWAG', 'YOBRO', 'AWE', 'GOT', 'IPL', 'VOTE', 'AVENGERS', 'FILMI', 'TAKKAR', 'TALKS', 'PRINCE',
        'JANNAT', 'SUNO', 'HINA', 'BHUVAN', 'KAPIL', 'DISHA', 'NEHA', 'MINISSHA', 'GAURAV', 'AADITYA', 'RANJIT', 'AVNEET',
        'DIVYANKA', 'PARTH', 'KANAN', 'KUNAL', 'JENNIFER', 'ARMAN', 'RASHID', 'PRAVAL', 'PRATIK', 'YUVIKA', 'RAFTAAR',
        'RADIO', 'GAYLE', 'AUTO', 'ADDA52', 'MXPLAYER', 'ZEE5', 'SONY', 'HOTSTAR', 'VOOT', 'CRICKET', 'GAME', 'POKER', 'TOI',
        'ONEINDIA', 'TINDER', 'MCONTROL', 'CARDEKHO', 'ZIGWHEELS', 'BIKEDEKHO', 'DELTIN', 'DRIVESPARK', 'FILMIBEAT', 'GIZBOT',
        'NEWSPOINT', 'IXIGO', 'SHAREIT', 'URVASHI', 'SHENAZ', 'BISWA', 'KANAN', 'NEHA', 'ARMAAN', 'KUNAL', 'BHARTI', 'EPIC',
        'ADULTING', 'INDIAN', 'LOVE', 'SCHOOL', 'TROLL', 'TLP', 'DOSE', 'DESI', 'FACTS', 'LOL', 'PAGLI', 'STUFF', 'BOLLY',
        'GAGS', 'FILMY', 'CUTE', 'BMS', 'DEAL', 'IXIGO', 'OPERA', 'SNAPDEAL', 'VIVEK', 'SIDDHARTH', 'PARTH', 'SAAHIL'

    ],
    bonusCodeOwner:['OTHER','CRM-REACTIVATION','CRM-SUPPORT','TOURNEY','CASH','ACQUSITION'],
    validateDuplicateCards: false,
    userJourneyDetails: {
        reportTypes: [{
            subject: 'journey',
            emailList: []
        }, {
            subject: 'journey',
            emailList: []
        }],
        bonusCodes: {
            WOW: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '150',
                        smsTemplateId: 11416,
                        emailTemplateId: 187,
                        emailTemplateName: 'WOWCODEDAY1BONUS',
                        smsTemplateName: 'WOWCODEDAY1BONUS',
                        text: '150 Instant Bonus (Play Real Cash Games) + 2 tickets of AOPS Main Event Qualifier'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 3,
                        smsTemplateId: 11417,
                        emailTemplateId: 191
                    },
                    '3': {
                        rewardsType: 'ib',
                        rewardAmt: '100',
                        smsTemplateId: 11418,
                        emailTemplateId: 188
                    },
                    '4': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 2,
                        smsTemplateId: 11419,
                        emailTemplateId: 189
                    },
                    '5': {
                        rewardsType: 'payoff_bonus',
                        rewardAmt: 500,
                        smsTemplateId: 11420,
                        emailTemplateId: 190
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 750 Bonus and Rs. 350 worth Tournament Tickets with this code over the next 5 days."
            },
            CKARO: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '150',
                        smsTemplateId: 11416,
                        emailTemplateId: 187,
                        emailTemplateName: 'WOWCODEDAY1BONUS',
                        smsTemplateName: 'WOWCODEDAY1BONUS'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 3,
                        smsTemplateId: 11417,
                        emailTemplateId: 191
                    },
                    '3': {
                        rewardsType: 'ib',
                        rewardAmt: '100',
                        smsTemplateId: 11418,
                        emailTemplateId: 188
                    },
                    '4': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 2,
                        smsTemplateId: 11419,
                        emailTemplateId: 189
                    },
                    '5': {
                        rewardsType: 'payoff_bonus',
                        rewardAmt: 500,
                        smsTemplateId: 11420,
                        emailTemplateId: 190
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 750 Bonus and Rs. 250 worth Tournament Tickets with this code over the next 5 days."
            },
            GBN: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '150',
                        smsTemplateId: 11416,
                        emailTemplateId: 187,
                        emailTemplateName: 'WOWCODEDAY1BONUS',
                        smsTemplateName: 'WOWCODEDAY1BONUS'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 3,
                        smsTemplateId: 11417,
                        emailTemplateId: 191
                    },
                    '3': {
                        rewardsType: 'ib',
                        rewardAmt: '100',
                        smsTemplateId: 11418,
                        emailTemplateId: 188
                    },
                    '4': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 2,
                        smsTemplateId: 11419,
                        emailTemplateId: 189
                    },
                    '5': {
                        rewardsType: 'payoff_bonus',
                        rewardAmt: 500,
                        smsTemplateId: 11420,
                        emailTemplateId: 190
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 750 Bonus and Rs. 250 worth Tournament Tickets with this code over the next 5 days."
            },
            CDUNIA: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '150',
                        smsTemplateId: 11416,
                        emailTemplateId: 187,
                        emailTemplateName: 'WOWCODEDAY1BONUS',
                        smsTemplateName: 'WOWCODEDAY1BONUS'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 3,
                        smsTemplateId: 11417,
                        emailTemplateId: 191
                    },
                    '3': {
                        rewardsType: 'ib',
                        rewardAmt: '100',
                        smsTemplateId: 11418,
                        emailTemplateId: 188
                    },
                    '4': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 2,
                        smsTemplateId: 11419,
                        emailTemplateId: 189
                    },
                    '5': {
                        rewardsType: 'payoff_bonus',
                        rewardAmt: 500,
                        smsTemplateId: 11420,
                        emailTemplateId: 190
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 750 Bonus and Rs. 250 worth Tournament Tickets with this code over the next 5 days."
            },
            GPAISA: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '150',
                        smsTemplateId: 11416,
                        emailTemplateId: 187,
                        emailTemplateName: 'WOWCODEDAY1BONUS',
                        smsTemplateName: 'WOWCODEDAY1BONUS'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 3,
                        smsTemplateId: 11417,
                        emailTemplateId: 191
                    },
                    '3': {
                        rewardsType: 'ib',
                        rewardAmt: '100',
                        smsTemplateId: 11418,
                        emailTemplateId: 188
                    },
                    '4': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 2,
                        smsTemplateId: 11419,
                        emailTemplateId: 189
                    },
                    '5': {
                        rewardsType: 'payoff_bonus',
                        rewardAmt: 500,
                        smsTemplateId: 11420,
                        emailTemplateId: 190
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 750 Bonus and Rs. 250 worth Tournament Tickets with this code over the next 5 days."
            },
            FKM: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '150',
                        smsTemplateId: 11416,
                        emailTemplateId: 187,
                        emailTemplateName: 'WOWCODEDAY1BONUS',
                        smsTemplateName: 'WOWCODEDAY1BONUS'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 3,
                        smsTemplateId: 11417,
                        emailTemplateId: 191
                    },
                    '3': {
                        rewardsType: 'ib',
                        rewardAmt: '100',
                        smsTemplateId: 11418,
                        emailTemplateId: 188
                    },
                    '4': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 2,
                        smsTemplateId: 11419,
                        emailTemplateId: 189
                    },
                    '5': {
                        rewardsType: 'payoff_bonus',
                        rewardAmt: 500,
                        smsTemplateId: 11420,
                        emailTemplateId: 190
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 750 Bonus and Rs. 250 worth Tournament Tickets with this code over the next 5 days."
            },
            TURN: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '150',
                        smsTemplateId: 11416,
                        emailTemplateId: 187,
                        emailTemplateName: 'WOWCODEDAY1BONUS',
                        smsTemplateName: 'WOWCODEDAY1BONUS'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 3,
                        smsTemplateId: 11417,
                        emailTemplateId: 191
                    },
                    '3': {
                        rewardsType: 'ib',
                        rewardAmt: '100',
                        smsTemplateId: 11418,
                        emailTemplateId: 188
                    },
                    '4': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 2,
                        smsTemplateId: 11419,
                        emailTemplateId: 189
                    },
                    '5': {
                        rewardsType: 'payoff_bonus',
                        rewardAmt: 500,
                        smsTemplateId: 11420,
                        emailTemplateId: 190
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 750 Bonus and Rs. 250 worth Tournament Tickets with this code over the next 5 days."
            },
            PLAY: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '150',
                        smsTemplateId: 11416,
                        emailTemplateId: 187,
                        emailTemplateName: 'WOWCODEDAY1BONUS',
                        smsTemplateName: 'WOWCODEDAY1BONUS'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 3,
                        smsTemplateId: 11417,
                        emailTemplateId: 191
                    },
                    '3': {
                        rewardsType: 'ib',
                        rewardAmt: '100',
                        smsTemplateId: 11418,
                        emailTemplateId: 188
                    },
                    '4': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 2,
                        smsTemplateId: 11419,
                        emailTemplateId: 189
                    },
                    '5': {
                        rewardsType: 'payoff_bonus',
                        rewardAmt: 500,
                        smsTemplateId: 11420,
                        emailTemplateId: 190
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 750 Bonus and Rs. 250 worth Tournament Tickets with this code over the next 5 days."
            },
            WOW2500: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '250',
                        smsTemplateId: 11472,
                        smsTemplateName: 'WOW2500CODEDAY1BONUS'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'PHOUSTICKET',
                        count: 2,
                        smsTemplateId: 11473
                    },
                    '3': {
                        rewardsType: 'payoff_bonus',
                        rewardAmt: '500',
                        smsTemplateId: 11474
                    },
                    '4': {
                        rewardsType: 'ticket',
                        rewardAmt: 'PHOUSTICKET',
                        count: 2,
                        smsTemplateId: 11475
                    },
                    '5': {
                        rewardsType: 'ib',
                        rewardAmt: 250,
                        smsTemplateId: 11476
                    },
                    '6': {
                        rewardsType: 'ticket',
                        rewardAmt: 'PHOUSTICKET',
                        count: 2,
                        smsTemplateId: 11477
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 1000 Bonus and Rs. 1500 worth Tournament Tickets with this code over the next 6 days."
            },
            WOW150: {
                depositorType: 1,
                benefits: {
                    '1': {
                        rewardsType: 'ib',
                        rewardAmt: '50',
                        smsTemplateId: 11469,
                        smsTemplateName: 'WOW150CODEDAY1BONUS'
                    },
                    '2': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 1,
                        smsTemplateId: 11470
                    },
                    '3': {
                        rewardsType: 'ticket',
                        rewardAmt: 'SUP50TICKET',
                        count: 1,
                        smsTemplateId: 11471
                    }
                },
                knowMoreLink: 'https://www.adda52.com/promotions/welcome-offer',
                'benefitText': "You will get Rs. 50 Bonus and Rs. 100 worth Tournament Tickets with this code over the next 3 days."
            }
        }
    },
    WebengageBenifitStatus: process.env.WEBENGAGE_BENIFIT_STATUS || true,
    WebengageMonthlyLimit: {
        ib: {
            hitwise: 10000,
            monthly: 20000
        },
        bb: 100000,
        crown: 100000,
        ticket_value: 11000
    },
    WebengageSchedulerTime: process.env.WEBENGAGE_SCHEDULER_TIME || 60
};