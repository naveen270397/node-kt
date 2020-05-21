import mongoose from "mongoose";
export class MongoDao{
    model:any
    constructor(model:any){
        this.model=model;
    }
    async find(criteria:any)
    {
        try{
            return await this.model.find(criteria);
        }
        catch(error)
        {
          throw error;
        }
    }
    async findOne(criteria:any)
    {
        try{
            return await this.model.findOne(criteria)
        }
        catch(error)
        {
            throw error;
        }    
    }
    async add(objectToSave:any)
    {
        try{
            return await this.model.create(objectToSave);
        }
        catch(error)
        {
            throw error;
        }
    }
    async update (criteria:any,dataToSet:any)
    {
        try{
            return await this.model.findOneAndUpdate(criteria,dataToSet,{new:true});
        }
        catch(error)
        {
            throw error;
        }
    }
    async remove (criteria:any)
    {
        try{
            return await this.model.deleteOne(criteria);
        }
        catch(error)
        {
            throw error;
        }
    }
}