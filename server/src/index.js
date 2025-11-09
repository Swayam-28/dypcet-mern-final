import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectDB } from './config/db.js'

import auth from './routes/authRoutes.js'
import dep from './routes/departmentRoutes.js'
import news from './routes/newsRoutes.js'
import adm from './routes/admissionRoutes.js'
import plc from './routes/placementRoutes.js'
import fac from './routes/facultyRoutes.js'
import noti from './routes/noticeRoutes.js'
// import gal from './routes/galleryRoutes.js'
import upload from './routes/uploadRoutes.js'
import enquiry from './routes/enquiryRoutes.js';
import facultyRoutes from "./routes/facultyRoutes.js";
import newsRoutes from "./routes/newsRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";



dotenv.config()
const app = express()
app.use(cors({ origin: process.env.ORIGIN?.split(',') || '*', credentials: true }))
app.use(express.json({ limit:'5mb' }))
app.use(morgan('dev'))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use('/uploads', express.static(path.join(__dirname, '..', process.env.UPLOAD_DIR || 'uploads')))

app.get('/', (req,res)=> res.json({ ok:true, service:'DYP API' }))

app.use('/api/auth', auth)
app.use('/api/departments', dep)
app.use('/api/news', news)
app.use('/api/admissions', adm)
app.use('/api/placements', plc)
app.use('/api/faculty', fac)
app.use('/api/notices', noti)
// app.use('/api/gallery', gal)
app.use('/api/upload', upload)
app.use('/api/enquiry', enquiry);
app.use('/api/faculty', facultyRoutes);
app.use('/api/news', newsRoutes);
app.use("/api/galleryitems", galleryRoutes);
app.use("/api/enquiries", enquiryRoutes);

const port = process.env.PORT || 5000
const uri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/dypcet_clone'
connectDB(uri).then(()=> app.listen(port, ()=> console.log('API running :'+port)))
