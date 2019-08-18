
const ErrorHandler = require('../handlers/error');
const SuccessHandler = require('../handlers/success');


let Index = {};

/**
 * function returns duration to process this request
 * @param {object} data - all response data
 * 
 */
Index.process = function(data){

    try{

        data['duration'] = Math.floor(Math.random() * (20-15) + 15);
        return {'type': SuccessHandler.messages.PROCESS, 'data': data};

    }
    catch(err){

        throw new Error(ErrorHandler.message.INTERNAL_SERVER_ERROR);
    }
};


/**
 * function stats returns all the stats of serverh
 * 1. No. of CRUD request
 * 2. average CRUD request response in past hour
 * 3. average CRUD response in past minute
 * 4. current CRUD request
 */
Index.stats = function(){


    try{




    }
    catch(err){

        throw new Error(ErrorHandler.message.INTERNAL_SERVER_ERROR);
    }
}
module.exports = Index;