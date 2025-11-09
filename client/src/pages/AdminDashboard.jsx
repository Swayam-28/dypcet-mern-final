import { useEffect, useState } from 'react'
import { apiAuth, uploadFile } from '../services/api'
import { clearToken } from '../services/auth'
import { useNavigate } from 'react-router-dom'

export default function AdminDashboard(){
  const nav = useNavigate()
  const [dep,setDep]=useState({name:'',slug:'',description:''})
  const [news,setNews]=useState({title:'',slug:'',summary:'',content:''})
  const [ad,setAd]=useState({year:'',details:'',pdfUrl:''})
  const [pl,setPl]=useState({company:'',year:'',stats:'',link:''})
  const [fa,setFa]=useState({name:'',title:'',department:'',email:'',photoUrl:'',bio:''})
  const [no,setNo]=useState({title:'',body:'',attachmentUrl:''})
  const [ga,setGa]=useState({title:'',imageUrl:'',category:''})

  const [deps,setDeps]=useState([]); const [newsL,setNewsL]=useState([]); const [ads,setAds]=useState([]);
  const [pls,setPls]=useState([]); const [fas,setFas]=useState([]); const [nos,setNos]=useState([]); const [gas,setGas]=useState([]);

  const load = async()=>{
    const [d,n,a,p,f,ns,g] = await Promise.all([
      apiAuth.get('/departments'), apiAuth.get('/news'), apiAuth.get('/admissions'),
      apiAuth.get('/placements'), apiAuth.get('/faculty'), apiAuth.get('/notices'), apiAuth.get('/gallery')
    ])
    setDeps(d.data); setNewsL(n.data); setAds(a.data); setPls(p.data); setFas(f.data); setNos(ns.data); setGas(g.data)
  }
  useEffect(()=>{ load() },[])
  const add = (url, data, reset) => apiAuth.post(url, data).then(()=>{ reset&&reset(); load() })
  const del = (url, id) => apiAuth.delete(`${url}/${id}`).then(load)

  return (<div className='container section'>
    <h1>Admin Dashboard</h1>
    <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:12}}>
      <button className='btn' onClick={()=>{ clearToken(); nav('/admin') }}>Logout</button>
      <button className='btn' onClick={load}>Refresh</button>
    </div>

    <section className='card'><h2>Departments</h2>
      <form onSubmit={e=>{e.preventDefault(); add('/departments',dep,()=>setDep({name:'',slug:'',description:''}))}}>
        <label>Name</label><input value={dep.name} onChange={e=>setDep({...dep,name:e.target.value})} required/>
        <label>Slug</label><input value={dep.slug} onChange={e=>setDep({...dep,slug:e.target.value})} required/>
        <label>Description</label><textarea value={dep.description} onChange={e=>setDep({...dep,description:e.target.value})}/>
        <button className='btn primary'>Add</button>
      </form>
      <table className='table'><tbody>
        {deps.map(d=> <tr key={d._id}><td>{d.name}</td><td>{d.slug}</td><td><button className='btn' onClick={()=>del('/departments',d._id)}>Delete</button></td></tr>)}
        {deps.length===0 && <tr><td>No data</td></tr>}
      </tbody></table>
    </section>

    <section className='card'><h2>News</h2>
      <form onSubmit={e=>{e.preventDefault(); add('/news',news,()=>setNews({title:'',slug:'',summary:'',content:''}))}}>
        <label>Title</label><input value={news.title} onChange={e=>setNews({...news,title:e.target.value})} required/>
        <label>Slug</label><input value={news.slug} onChange={e=>setNews({...news,slug:e.target.value})} required/>
        <label>Summary</label><input value={news.summary} onChange={e=>setNews({...news,summary:e.target.value})}/>
        <label>Content</label><textarea rows='5' value={news.content} onChange={e=>setNews({...news,content:e.target.value})}/>
        <button className='btn primary'>Add</button>
      </form>
      <table className='table'><tbody>
        {newsL.map(n=> <tr key={n._id}><td>{n.title}</td><td>{new Date(n.date).toLocaleDateString()}</td><td><button className='btn' onClick={()=>del('/news',n._id)}>Delete</button></td></tr>)}
        {newsL.length===0 && <tr><td>No data</td></tr>}
      </tbody></table>
    </section>

    <section className='card'><h2>Admissions</h2>
      <form onSubmit={e=>{e.preventDefault(); add('/admissions',ad,()=>setAd({year:'',details:'',pdfUrl:''}))}}>
        <label>Year</label><input value={ad.year} onChange={e=>setAd({...ad,year:e.target.value})} required/>
        <label>Details</label><textarea rows='4' value={ad.details} onChange={e=>setAd({...ad,details:e.target.value})}/>
        <label>PDF Upload</label><input type='file' onChange={async e=>{const f=e.target.files?.[0]; if(!f) return; const {url}=await uploadFile(f); setAd({...ad,pdfUrl:url})}}/>
        {ad.pdfUrl && <a className='btn' href={ad.pdfUrl} target='_blank'>Open PDF</a>}
        <button className='btn primary'>Add</button>
      </form>
      <table className='table'><tbody>
        {ads.map(a=> <tr key={a._id}><td>{a.year}</td><td>{(a.details||'').slice(0,40)}...</td><td><button className='btn' onClick={()=>del('/admissions',a._id)}>Delete</button></td></tr>)}
        {ads.length===0 && <tr><td>No data</td></tr>}
      </tbody></table>
    </section>

    <section className='card'><h2>Placements</h2>
      <form onSubmit={e=>{e.preventDefault(); add('/placements',pl,()=>setPl({company:'',year:'',stats:'',link:''}))}}>
        <label>Company</label><input value={pl.company} onChange={e=>setPl({...pl,company:e.target.value})} required/>
        <label>Year</label><input value={pl.year} onChange={e=>setPl({...pl,year:e.target.value})}/>
        <label>Details</label><textarea rows='3' value={pl.stats} onChange={e=>setPl({...pl,stats:e.target.value})}/>
        <label>Link</label><input value={pl.link} onChange={e=>setPl({...pl,link:e.target.value})}/>
        <button className='btn primary'>Add</button>
      </form>
      <table className='table'><tbody>
        {pls.map(p=> <tr key={p._id}><td>{p.company}</td><td>{p.year}</td><td><button className='btn' onClick={()=>del('/placements',p._id)}>Delete</button></td></tr>)}
        {pls.length===0 && <tr><td>No data</td></tr>}
      </tbody></table>
    </section>

    <section className='card'><h2>Faculty</h2>
      <form onSubmit={e=>{e.preventDefault(); add('/faculty',fa,()=>setFa({name:'',title:'',department:'',email:'',photoUrl:'',bio:''}))}}>
        <label>Name</label><input value={fa.name} onChange={e=>setFa({...fa,name:e.target.value})} required/>
        <label>Title</label><input value={fa.title} onChange={e=>setFa({...fa,title:e.target.value})}/>
        <label>Department</label><input value={fa.department} onChange={e=>setFa({...fa,department:e.target.value})}/>
        <label>Email</label><input value={fa.email} onChange={e=>setFa({...fa,email:e.target.value})}/>
        <label>Photo Upload</label><input type='file' accept='image/*' onChange={async e=>{const f=e.target.files?.[0]; if(!f) return; const {url}=await uploadFile(f); setFa({...fa,photoUrl:url})}}/>
        {fa.photoUrl && <img src={fa.photoUrl} alt='preview' style={{width:120,marginTop:8,borderRadius:8}}/>}
        <label>Bio</label><textarea rows='3' value={fa.bio} onChange={e=>setFa({...fa,bio:e.target.value})}/>
        <button className='btn primary'>Add</button>
      </form>
      <table className='table'><tbody>
        {fas.map(f=> <tr key={f._id}><td>{f.name}</td><td>{f.department}</td><td><button className='btn' onClick={()=>del('/faculty',f._id)}>Delete</button></td></tr>)}
        {fas.length===0 && <tr><td>No data</td></tr>}
      </tbody></table>
    </section>

    <section className='card'><h2>Notices</h2>
      <form onSubmit={e=>{e.preventDefault(); add('/notices',no,()=>setNo({title:'',body:'',attachmentUrl:''}))}}>
        <label>Title</label><input value={no.title} onChange={e=>setNo({...no,title:e.target.value})} required/>
        <label>Body</label><textarea rows='3' value={no.body} onChange={e=>setNo({...no,body:e.target.value})}/>
        <label>Attachment Upload</label><input type='file' onChange={async e=>{const f=e.target.files?.[0]; if(!f) return; const {url}=await uploadFile(f); setNo({...no,attachmentUrl:url})}}/>
        {no.attachmentUrl && <a className='btn' href={no.attachmentUrl} target='_blank'>Open</a>}
        <button className='btn primary'>Add</button>
      </form>
      <table className='table'><tbody>
        {nos.map(n=> <tr key={n._id}><td>{n.title}</td><td>{new Date(n.date).toLocaleDateString()}</td><td><button className='btn' onClick={()=>del('/notices',n._id)}>Delete</button></td></tr>)}
        {nos.length===0 && <tr><td>No data</td></tr>}
      </tbody></table>
    </section>

    <section className='card'><h2>Gallery</h2>
      <form onSubmit={e=>{e.preventDefault(); add('/gallery',ga,()=>setGa({title:'',imageUrl:'',category:''}))}}>
        <label>Title</label><input value={ga.title} onChange={e=>setGa({...ga,title:e.target.value})}/>
        <label>Image Upload</label><input type='file' accept='image/*' onChange={async e=>{const f=e.target.files?.[0]; if(!f) return; const {url}=await uploadFile(f); setGa({...ga,imageUrl:url})}}/>
        {ga.imageUrl && <img src={ga.imageUrl} alt='preview' style={{width:140,marginTop:8,borderRadius:8}}/>}
        <label>Category</label><input value={ga.category} onChange={e=>setGa({...ga,category:e.target.value})}/>
        <button className='btn primary'>Add</button>
      </form>
      <table className='table'><tbody>
        {gas.map(g=> <tr key={g._id}><td>{g.title}</td><td>{g.category}</td><td><button className='btn' onClick={()=>del('/gallery',g._id)}>Delete</button></td></tr>)}
        {gas.length===0 && <tr><td>No data</td></tr>}
      </tbody></table>
    </section>
  </div>)
}
