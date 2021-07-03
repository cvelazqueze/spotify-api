const UserController = module.exports;
const UserService = require('../services/UserService.js');

const logName = 'UserController: ';

UserController.getUser = async (req, res, next) => {
    const { options = {} } = req;
    try {
      console.log(logName, `..executing: getUser`);
  
      const response = await UserService.getUser();
  
      return res.send(response);
    } catch (e) {
      return next('ERROR: Could not getUser');
    }
};

UserController.updateUser = async (req, res, next) => {
    const { options = {} } = req;
    try {
      console.log(logName, `..executing: updateUser`);
      const { 
          params: { userId },
          body,
        } = req;

      const response = await UserService.updateUser(userId, body);
  
      return res.send(response);
    } catch (e) {
      return next('ERROR: Could not updateUser');
    }
};