import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className='container' style={{paddingTop:'20px'}}>
      <section className="hero">
  <div className="box">
    <h1>Welcome to D.Y. Patil College of Engineering & Technology</h1>
    <p>Kasaba Bawada, Kolhapur</p>

    <Link to="/apply" className="btn primary" style={{marginTop:'16px'}}>
      APPLY NOW
    </Link>
  </div>
</section>


      <div className='section'>
        <div className='grid'>
          <div className='card'><h2>News & Events</h2><p>Latest happenings on campus.</p><Link className='btn' to='/news'>See All</Link></div>
          <div className='card'><h2>Notices</h2><p>Important announcements.</p><Link className='btn' to='/notices'>Open</Link></div>
          <div className='card'><h2>Placements</h2><p>Company wise placement stats.</p><Link className='btn' to='/placements'>Explore</Link></div>
        </div>
      </div>
    </div>
  )
}
