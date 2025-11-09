import { api } from './api'
const KEY='token'
export const login = async (email,password)=> (await api.post('/auth/login',{email,password})).data
export const setToken = (t)=> localStorage.setItem(KEY,t)
export const getToken = ()=> localStorage.getItem(KEY)
export const clearToken = ()=> localStorage.removeItem(KEY)
