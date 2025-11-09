import { Router } from 'express'
import multer from 'multer'
import { requireAuth } from '../middleware/auth.js'
import { uploaded } from '../controllers/uploadController.js'
const r=Router()
const storage=multer.diskStorage({
  destination:(req,file,cb)=>cb(null, process.env.UPLOAD_DIR || 'uploads'),
  filename:(req,file,cb)=>cb(null, Date.now()+'_'+file.originalname.replace(/\s+/g,'_'))
})
const allowed=['image/jpeg','image/png','image/webp','application/pdf']
const fileFilter=(req,file,cb)=> allowed.includes(file.mimetype) ? cb(null,true) : cb(new Error('Unsupported file type'), false)
const upload=multer({ storage, fileFilter, limits:{ fileSize:10*1024*1024 } })
r.post('/', requireAuth, upload.single('file'), uploaded)
export default r
