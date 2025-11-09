import mongoose from "mongoose";

const facultySchema = new mongoose.Schema({
  name: { type: String, required: true },
  qualification: { type: String, required: true },
  designation: { type: String, required: true },
  department: { type: String, required: true }, // match department slug (e.g. 'cse', 'mechanical')
  email: String,
  phone: String,
}, { timestamps: true });

export default mongoose.model("Faculty", facultySchema);
