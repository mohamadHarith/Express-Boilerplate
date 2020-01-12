/**
 * “Data Access Layer” means the layer that contains your logic for accessing persistent data. 
 * This can be something like a database, a Redis server, Elasticsearch, etc. 
 * So whenever you need to access such data, put that logic here. “Models” is the same concept 
 * but used as part of an ORM. Even though both are different they contain the same type of logic, 
 * which is why I recommend putting either kind in a db folder so that its general enough. 
 * Whether you’re using models from an ORM or you’re using a query builder or raw SQL, you can put 
 * the logic there without changing the name of directory.
 */

 //sample query builder
 //const {db} = require('./config')

 const sampleQuery = async()=>{
   /*
    * put code to call database here
    * this can be either an ORM model or code to call the database through a driver or querybuilder
    * i.e.-
        return await db.select('*').from('sampleTable')
   */
   return ['Hello', 'World'] //just a dummy return as we aren't calling db right now
 }

 module.exports = {sampleQuery}
 