const { sendSuccessResponse, sendErrorResponse } = require("../utils/response");
const PersonModel = require('../models/person.model')  
exports.getPerson = async (req, res) => {
    try {
        const { search } = req.body;
        let condition={};
        if(search && search!="" || search!==undefined){
            condition.name = new RegExp( search, "i")
        
        }
        const data =await PersonModel.find(condition);
         sendSuccessResponse(res, { data: data });
    } catch (error) {
        sendErrorResponse(res, error.message)
    }
}
 
 