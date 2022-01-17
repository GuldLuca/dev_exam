const userController = require('../controllers/users');

module.exports = (app) => {
  app.get('/users', userController.getUsers);
};
