const logger=require("../utils/logger")
const path=require("path")
module.exports= class MongoDao
{
    constructor(model)
    {
        this.model=model;
    }
    async find(criteria, projection="", options={lean:true}) {
        try {
            return await this.model.find(criteria, projection, options);
        } catch (error) {
            
            logger.error(
                {
                    error:error.message,
                    methodName:"find",
                    fileName:path.basename(__filename),
                }
            )
            throw err;
        }
    }

    async findOne(criteria, projection="", options={lean:true}) {
        try {
            return await this.model.findOne(criteria, projection, options);
        } catch (error) {
           
            logger.error(
                {
                    error:error.message,
                    methodName:"findOne",
                    fileName:path.basename(__filename),
                }
            )
            throw error;
        }
    }

    async update(criteria, dataToSet, options={lean:true}) {
        try {
            return await this.model.updateOne(criteria, dataToSet, options);
        } catch (error) {
            logger.error(
                {
                    error:error.message,
                    methodName:"update",
                    fileName:path.basename(__filename),
                }
            )
            throw error;
        }
    }

    async insert(objToSave) {
        try {
            return await this.model.create(objToSave);
        } catch (error) {
            logger.error(
                {
                    error:error.message,
                    methodName:"insert",
                    fileName:path.basename(__filename),
                }
            )
            throw error;
        }
    }
}