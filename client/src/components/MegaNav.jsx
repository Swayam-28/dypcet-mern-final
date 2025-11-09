import { NavLink } from 'react-router-dom'
export default function MegaNav(){
  const items=[
    ['/', 'Home'], ['/about','About Us'], ['/academics','Academics'],
    ['/departments','Department'], ['/admissions','Admission'],
    ['/placements','Placement'], ['/faculty','Faculty'],
    ['/news','News & Events'], ['/notices','Notices'],  ['/contact','Contact']
  ]
  return (
    <div className="nav">
      <div className="container menu">
        {items.map(([to,label])=> <NavLink key={to} to={to} end={to==='/' ? true : undefined}>{label}</NavLink>)}
      </div>
    </div>
  )
}
