/**
 * Services should contain the majority of your business logic: – logic that encapsulates your business requirements, 
 * calls your data access layer or models, calls API’s external to the Node application. And in general, contains most 
 * of your algorithmic code.
 */

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint add them to this service
*/

const {sampleDB} = require('../db')

const sampleServiceFunction = async()=>{
    try{
        const result = await sampleDB.sampleQuery();
        return result;
    }catch(error){
        throw new Error(error.message)
    }
}

module.exports={sampleServiceFunction}