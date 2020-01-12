/**
 *  Controllers call the services, which contain more “pure” business logic. But by themselves,
 * controllers don’t really contain any logic other than handling the request and calling services. 
 * The services do most of the work, while the controllers orchestrate the service calls and 
 * decide what to do with the data returned.
 */

/*
 * call other imported services, or same service but different functions here if you need to
*/

const {sampleService} = require('../services')

const sampleControllerFunction = async(req, res)=>{
    try{
        const result = await sampleService.sampleServiceFunction();
        if(result.length>0){
            res.json(result);
        }
        else{
            throw new Error('Could not fetch data');
        }
    }catch(error){
        console.log(error.message);
        res.status(500).json(error.message);
        
    }
}


module.exports = {sampleControllerFunction}