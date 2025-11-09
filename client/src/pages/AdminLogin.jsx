import { useState } from 'react'
import { login, setToken } from '../services/auth'
import { useNavigate } from 'react-router-dom'
export default function AdminLogin(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const [err,setErr]=useState('')
  const nav=useNavigate()
  const submit=async(e)=>{ e.preventDefault(); try{ const {token}=await login(email,password); setToken(token); nav('/admin/dashboard') }catch{ setErr('Invalid credentials') } }
  return (<div className='container section'><h1>Admin Login</h1><form onSubmit={submit}>
    <label>Email</label><input value={email} onChange={e=>setEmail(e.target.value)} type='email' required/>
    <label>Password</label><input value={password} onChange={e=>setPassword(e.target.value)} type='password' required/>
    {err && <p style={{color:'crimson'}}>{err}</p>}
    <button className='btn primary'>Login</button>
  </form></div>)
}
