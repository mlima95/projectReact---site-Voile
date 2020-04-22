'use strict';

module.exports = function(app){
    var usersController = require('../controllers/UsersController');

    app.route('/register')
    .post(usersController.create_a_account);

    app.route('/login')
    .post(usersController.login);
}