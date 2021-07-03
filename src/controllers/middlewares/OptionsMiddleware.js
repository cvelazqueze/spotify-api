const log4j = require('../../utils/logger.js');

const setOptions = (req, res, next) => {
  const logger = log4j.getLogger(req.log.cuid);

  req.options = {
    logger: logger.info.bind(logger),
    traceLog: logger.trace.bind(logger),
    debugLog: logger.debug.bind(logger),
    infoLog: logger.info.bind(logger),
    warnLog: logger.warn.bind(logger),
    errorLog: logger.error.bind(logger),
    fatalLog: logger.fatal.bind(logger),
  };

  return next();
};

module.exports = {
  setOptions,
};
