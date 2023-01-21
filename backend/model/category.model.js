const mongoose =require("mongoose")

const categorySchema = mongoose.Schema({
    capsule_serial: {type :String ,required:true},
    capsule_id: {type :String ,required:true},
    status:{ type :String,required:true},
    original_launch:{ type :String,required:true},
    original_launch_unix:{ type :String, required:true},
    missions:{ type :Array, required:true},
    landings:{ type :Number, required:true},
    type:{ type :String, required:true},
    details:{ type :String, required:true},
    reuse_count:{ type :Number, required:true},
    image:{ type :String, required:true}
})  

const CategoryModel = mongoose.model("categories" , categorySchema)

module.exports = {
    CategoryModel
}