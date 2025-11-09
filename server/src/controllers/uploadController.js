export const uploaded = (req,res)=>{
  if(!req.file) return res.status(400).json({ message:'No file' })
  const base = process.env.BASE_URL || `http://localhost:${process.env.PORT||5000}`
  res.json({ url:`${base}/uploads/${req.file.filename}`, filename:req.file.filename, size:req.file.size, mimetype:req.file.mimetype })
}
