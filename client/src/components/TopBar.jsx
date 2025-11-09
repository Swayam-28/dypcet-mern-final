export default function TopBar(){
  const items=['DYPCET E-INVENTORY','CITIZEN\'S CHARTER','ONLINE STUDENT GRIEVANCE REDRESSAL','IQAC','NIRF','STAFF / STUDENT LOGIN','ALUMNI','आयटे सरकार','AICTE MANDATORY DISCLOSURE','OBE','CONTACT']
  return (<div className='topbar'><div className='container wrap'>
    {items.map((t,i)=><a key={i} href='#'>{t}</a>)}
  </div></div>)
}
