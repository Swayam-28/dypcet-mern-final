import mongoose from 'mongoose'
export default mongoose.model('Placement', new mongoose.Schema({company:{type:String,required:true},year:Number,stats:String,link:String},{timestamps:true}))