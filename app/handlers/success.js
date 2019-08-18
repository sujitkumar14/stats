


let Success = {};

/**
 * Constants representing type of success
 */
Success.messages = {

    STATS: { 'msg': 'stats', 'code': 200 },
    PROCESS: {'msg': 'processed', 'code': 200}
};

/**
 * function sends a response 
 * @param res  response object
 * @param type type of success based on Success.constants
 * @param data response data
 * 
 * @return undefined
 */
Success.sendResponse = (res,type, datas) => {

    successType = Success.messages[type];

    let successData = {

        'success': true,
        'message': successType.msg,
        'data': datas,
        'status': {
            'code': successType.code,
            'description': "" || description
        }
    };

    res.status(successType.code).send(successData);
};

module.exports = Success;