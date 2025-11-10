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
import noti from './routes/noticeRoutes.js'
import upload from './routes/uploadRoutes.js'
import enquiry from './routes/enquiryRoutes.js'
import galleryRoutes from "./routes/galleryRoutes.js";
import facultyRoutes from "./routes/facultyRoutes.js";

dotenv.config()

const app = express()

app.use(cors({
  origin: ["https://aplproject.netlify.app"],  // your live frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://aplproject.netlify.app");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

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
app.use('/api/notices', noti)
app.use('/api/upload', upload)
app.use('/api/enquiry', enquiry)
app.use("/api/galleryitems", galleryRoutes);
app.use('/api/faculty', facultyRoutes);


const port = process.env.PORT || 5000
const uri = process.env.MONGO_URI
connectDB(uri).then(()=> app.listen(port, ()=> console.log('API running :' + port)))
