
const ErrorHandler = require('../handlers/error');


let Index = {};

/**
 * function returns duration to process this request
 * 
 */
Index.process = function(){

    try{

        

    }
    catch(err){

        throw new Error(ErrorHandler.message.INTERNAL_SERVER_ERROR);
    }
};


/**
 * function stats returns all the stats of server
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