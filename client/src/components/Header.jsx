import logo from '../assets/logo.png';

export default function Header(){
  return (
    <div className="header">
      <div className="container wrap">

        {/* LEFT SIDE - LOGO + TEXT */}
        <div className="brand">
          <img 
            src={logo} 
            alt="College Logo" 
            style={{
              height: 85,
              objectFit: 'contain',
              marginRight: '12px'
            }}
          />
          <div style={{ lineHeight:'1.25' }}>
            <div style={{ fontSize:'22px', fontWeight:'700' }}>
              D Y PATIL COLLEGE OF ENGINEERING & TECHNOLOGY
            </div>
            <div style={{ fontSize:'14px', opacity:0.95 }}>
              KASABA BAWADA, KOLHAPUR
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (badges removed) */}
        
      </div>
    </div>
  )
}
