let ErrorHandler = {};


ErrorHandler.message = {

    "INTERNAL_SERVER_ERROR": JSON.stringify({ "code": 500, "message": "Internal Server Error" }),
}


/**
 * 
 * @param {object} res - Response Object
 * @param {String} type - Type of Error Message Based on above messages
 * @param {String} description - optional Paramater Description - Why this error occurs 
 */
ErrorHandler.sendResponse = function (res, type, description) {

    let errorType = JSON.parse(type);

    let errorResponse = {

        'success': false,
        'message': errorType.message,
        'status': {
            'code': errorType.code,
            'description': description || ""
        }
    };

    res.status(errorType.code).send(errorResponse);

}

module.exports = ErrorHandler;