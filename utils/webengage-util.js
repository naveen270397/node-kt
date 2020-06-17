'use strict';
const seneca = require('../utils/seneca');
const moment = require('moment-timezone');
class WebengageUtilDao {

    async sendWebengageEventGranting({
        ibAmt = 0,
        bbAmt = 0,
        crownAmt = 0,
        ticketRealValues = 0,
        ticket = '',
        eventName,
        journeyId,
        userId
    }) {
        try {
            let data = {
                userId: parseInt(userId),
                ib: ibAmt,
                bb: bbAmt,
                crown: crownAmt,
                tkt_name: ticket,
                tkt_value: ticketRealValues,
                source: eventName,
                journeyId: `${journeyId}`
            }
            seneca.push(data, 'apibenefits')
        } catch (error) {
            throw error;
        }
    }
}
module.exports = new WebengageUtilDao();
if (require.main == module) {
    let contestUtilDao = new WebengageUtilDao();
    contestUtilDao.sendWebengageEventGranting({
        userId: 14,
        journeyId: 146,
        eventName: "gamePlay1"
    });
}