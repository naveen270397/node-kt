'use strict';
const {
    segmentation_api,
    credit_bonus_api,
    user_api,
    transaction_api,
    purchase_history_api,
    email_communication_api
} = require('../../bin/config');

module.exports = {
    API_USER_SEGMENT: segmentation_api + "/api/v1/segmentation/user-segment/info?userId=%s",
    SCRATCH_CARD_EMAIL_TEMPLATE : "EMAIL_SCRATCH_CARD_PURCHASE",
    API_CREDIT_BONUS : credit_bonus_api + "/api/v1/transaction/credit-bonus",
    GET_USER_PROFILE : user_api + "/api/v1/user/profile/info/user",
    PROCESS_BONUS : transaction_api + "/api/v1/transaction/process-bonus",
    PROCESS_DISCOUNTED_TICKET : transaction_api + "/api/v1/transaction/discounted-ticket-credit",
    PURCHASE_HISTORY : purchase_history_api + "/api/v1/purchase/totalPurchase",
    EMAIL_COMMUNICATION_API : email_communication_api + "/api/v1/communication/sendEmail",
    REGISTRATION_BONUS_TYPE :'REGISTRATION',
    GAME_SITE: 'poker',
    PLATFORM_ARRAY: ['apps','ios','default','exe','poker','rummy','web','adda52RummyApp','dmg', 'deltin'],
    ANALYTIC_URL: 'http://adda52bonus.org/group/getUserEligibilityGroupInfo',
    SECURITY_CODE_INFO: 123456,
    BONUS_CODE_ERROR_MSG_KEY: 'bonus_code_error_msg_',
    BONUS_CODE_SITES: {
        FLASH_CSV: 'flash csv',
        USER_SPECIFIC_EXPIRY: 'user specific expiry'
    },
    BONUS_CODE_TYPE: {
        SEGMENTS: 'segments'
    },
    BONUS_CODE_USE_COUNT_TYPE: {
        BONUS_CODE_TYPE_0: '0',
        BONUS_CODE_TYPE_1: '1',
        BONUS_CODE_TYPE_DAILY: '2',
        BONUS_CODE_TYPE_WEEKLY: '3'
    },
    BONUS_CODE_DEPOSITOR_TYPE : {
        DEPOSITOR_TYPE_FIRST: '1',
        DEPOSITOR_TYPE_SECOND: '2',
        DEPOSITOR_TYPE_THIRD: '3',
    },
    BONUS_CODE_PLATFORM_TYPE: {
        DELTIN: 'deltin',
        RUMMY: 'rummy',
        POKER: 'poker',
        APPCODE: 'appCode',
        DEFAULT: 'default'
    },
    TIMEZONE: 'Asia/Kolkata',
    DATE_FORMAT_DATE: '',
    DATE_FORMAT_TIMESTAMP: 'YYYY-MM-DD HH:mm:ss',
    CHIP_TYPES: {
        PROMO: 'promo',
        PROMO_AWARDED: 'promo_awarded',
        PAYOFF_BONUS: 'payoff_bonus',
        OTPC: 'otpc',
        FREEROLL: 'freeroll'
    },
    OFFER_TYPE: {
        DISCOUNT: 'discount',
        FLAT: 'flat'
    },
    PAYMENT_MODES: {
        CREDIT_CARD: 'credit_card',
        DEBIT_CARD: 'debit_card',
        NET_BANKING: 'net_banking',
        COD: 'cod',
        WALLET: 'wallet',
        CITRUSWALLET: 'citruswallet',
        PAYU: 'payu',
        UPI: 'upi'
    },
    INVALID_PROMO_CODE_ATTEMPTS_LIMIT: 2,
    PROMOCODE_STATUS_APPROVE :'Approved',
    PROMOCODE_ACTION_DOWNLOAD :'Download',
    firstLevelUserId:[
        14,15,19
    ],
    secondLevelUserId:[
        20,21,18,19
    ]
}
