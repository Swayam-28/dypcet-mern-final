// client/src/pages/Departments.jsx
import { useEffect, useState } from 'react'
import { api } from '../services/api'
import { Link } from 'react-router-dom'
import { departments as localDepartments } from '../data/departments'

export default function Departments(){
  const [items,setItems]=useState([])

  // Try API first; if empty, fall back to local list
  useEffect(()=>{
    let isMounted = true
    api.get('/departments')
      .then(r=>{
        const data = r.data || []
        if(isMounted){
          setItems(data.length ? data : localDepartments.map(d=>({
            _id: d.slug, name: d.name, description: d.short, img: d.img, slug: d.slug
          })))
        }
      })
      .catch(()=>{
        // If API is not running or empty, use local
        if(isMounted){
          setItems(localDepartments.map(d=>({
            _id: d.slug, name: d.name, description: d.short, img: d.img, slug: d.slug
          })))
        }
      })
    return ()=>{ isMounted=false }
  },[])

  return (
    <div className='container section'>
      <h1>Departments</h1>

      {/* Quick tip bar */}
      <div className='card' style={{marginBottom:16}}>
        <b>Tip:</b> These cards are using local data by default. Once you add departments in the
        <Link to="/admin" style={{marginLeft:6}}>Admin Dashboard</Link>, they’ll auto-load from the database.
      </div>

      <div className='dept-grid'>
        {items.map(d=>
          <article key={d._id} className='dept-card'>
            {d.img && <div className='dept-thumb' style={{backgroundImage:`url(${d.img})`}} />}
            <div className='dept-body'>
              <h3 className='dept-title'>{d.name}</h3>
              <p className='dept-desc'>{d.description || ''}</p>
              <Link className='btn' to={`/departments/${d.slug || d._id}`}>View Details</Link>
            </div>
          </article>
        )}
      </div>

      {items.length===0 && <p>No departments found.</p>}
    </div>
  )
}
