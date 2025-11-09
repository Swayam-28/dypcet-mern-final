import mongoose from 'mongoose'
export default mongoose.model('AdminUser', new mongoose.Schema({name:String,email:{type:String,unique:true,lowercase:true},passwordHash:String},{timestamps:true}))