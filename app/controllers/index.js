
const SuccessHandler  = require('../handlers/success');
const ErrorHandler = require('../handlers/error');
const IndexModule = require('../modules/index');


let Index = {};

/**
 * function Handles all the process request 
 * Response ->
 * 1. time - time at which request recived
 * 2. method - POST, GET, PUT, DELETE
 * 3. header 
 * 4. path - request Path
 * 5. query - the parsed query
 * 6. body - if any body
 * 7. duration - duration to give back a response - randomly btw 15 to 30 sec
 * @param req - request Object
 * @param res - response Object
 * 
 * @return undefined
 */
Index.process = async function(req,res){

    try{

        let processResponse = await IndexModule.process();
        SuccessHandler.sendResponse(res,processResponse.type,processResponse.data);

    }   
    catch(err){

        ErrorHandler.sendResponse(res,err.message);
    }
}


/**
 * Function Handles all stats requesst
 * @param req = request object
 * @param res = response object
 * 
 * @return undefined
 */
Index.stats = async function(req,res){

    try{

        let statsResponse = await IndexModule.stats();
        SuccessHandler.sendResponse(res,statsResponse.type,statsResponse.data);

    }
    catch(err){

        ErrorHandler.sendResponse(res,err.message);
    }
}
module.exports = Index;