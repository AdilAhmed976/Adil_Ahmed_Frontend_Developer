const {Router} = require("express")
const { CategoryModel } = require("../model/category.model")

const categoryController = Router()



categoryController.get("/capsules", async (req,res) => {
    const {page=1,limit,type,status} = req.query

    const query = { $or: [ { status: status }, { type: type } ]};
    const count = await CategoryModel.find(query).count();
  
    if (count==0) {
        const count = await CategoryModel.find().count();
        const category = await CategoryModel.find().limit(limit).skip((page-1)*limit)
        res.send({count:count,data:[...category]}) 
    }
    else {
        const count = await CategoryModel.find(query).count();
        const category = await CategoryModel.find(  
            query
        ).limit(limit).skip((page-1)*limit)
        res.send({count:count,data:[...category]}) 
    }
 
}) 



module.exports ={
    categoryController
}
