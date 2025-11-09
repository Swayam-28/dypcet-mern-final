import axios from 'axios'
import { getToken } from './auth'
const baseURL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'
export const api = axios.create({ baseURL })
export const apiAuth = axios.create({ baseURL })
apiAuth.interceptors.request.use(cfg=>{ const t=getToken(); if(t) cfg.headers.Authorization=`Bearer ${t}`; return cfg })
export const uploadFile = async(file)=>{ const fd=new FormData(); fd.append('file', file); const r=await apiAuth.post('/upload', fd, { headers:{'Content-Type':'multipart/form-data'} }); return r.data }
