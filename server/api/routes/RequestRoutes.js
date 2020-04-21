'use strict';

module.exports = function(app){
    var requestController = require('../controllers/RequestController');

    app.route('/request')
    .get(requestController.list_all_requests)
    .post(requestController.create_a_request);

    app.route('/request/:requestId')
    .get(requestController.read_a_request)
    .put(requestController.update_a_request)
    .delete(requestController.delete_a_request);
}