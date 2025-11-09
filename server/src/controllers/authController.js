import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import AdminUser from '../models/AdminUser.js'

export const register = async (req,res)=>{
  const { name, email, password } = req.body
  const ex = await AdminUser.findOne({ email })
  if(ex) return res.status(400).json({ message:'Email already exists' })
  const passwordHash = await bcrypt.hash(password, 10)
  const u = await AdminUser.create({ name, email, passwordHash })
  res.status(201).json({ id:u._id, email:u.email })
}

export const login = async (req,res)=>{
  const { email, password } = req.body
  const u = await AdminUser.findOne({ email })
  if(!u) return res.status(400).json({ message:'Invalid credentials' })
  const ok = await bcrypt.compare(password, u.passwordHash)
  if(!ok) return res.status(400).json({ message:'Invalid credentials' })
  const token = jwt.sign({ sub:u._id, email:u.email }, process.env.JWT_SECRET, { expiresIn:'7d' })
  res.json({ token })
}
