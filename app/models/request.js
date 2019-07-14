const RequestSchema = require('../db/schemas/request');
const ErrorHandler = require('../handlers/error');



let Request = {};


/**
 * function saves the request in mongo to persist
 * @param obj - request object containing request parameters
 * 
 * @return undefined
 */
Request.saveRequest = async function(obj){

    try{

        let requestSchema = new RequestSchema(obj);
        await requestSchema.save();
    }
    catch(err){
        throw new Error(ErrorHandler.message.INTERNAL_SERVER_ERROR);
    }
};

module.exports = Request;