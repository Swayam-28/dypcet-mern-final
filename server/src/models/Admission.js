import mongoose from 'mongoose'
export default mongoose.model('Admission', new mongoose.Schema({year:{type:Number,required:true},details:String,pdfUrl:String},{timestamps:true}))