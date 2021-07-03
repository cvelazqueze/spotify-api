const log4js = require('log4js');
const { COUNTRY } = require('../../config');

log4js.configure({
  appenders: {
    console: { type: 'console', layout: { type: 'colored' } },
  },
  categories: {
    default: { appenders: ['console'], level: (COUNTRY === 'DEV' || COUNTRY === 'LOCAL' ? 'trace' : 'INFO') },
  },
  replaceConsole: true,
});

module.exports = log4js;
