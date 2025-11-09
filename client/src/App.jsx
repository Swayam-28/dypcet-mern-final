import { Routes, Route } from 'react-router-dom'
// import TopBar from './components/TopBar'
import Header from './components/Header'
import MegaNav from './components/MegaNav'

import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Exam from './pages/Exam'
import Research from './pages/Research'
import Departments from './pages/Departments'
import DepartmentDetail from './pages/DepartmentDetail'
import Admissions from './pages/Admissions'
import Campus from './pages/Campus'
import Facilities from './pages/Facilities'
import Placements from './pages/Placements'
import Eoffice from './pages/Eoffice'
import Career from './pages/Career'
import Faculty from './pages/Faculty'
import News from './pages/News'
import NewsDetail from './pages/NewsDetail'
import Notices from './pages/Notices'
import Contact from './pages/Contact'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from './pages/AdminDashboard'
import Apply from './pages/Apply';
import { Navigate } from 'react-router-dom';
import VisionMission from "./pages/about/VisionMission";
import PrincipalMessage from "./pages/about/PrincipalMessage";
import Rules from "./pages/academics/Rules";
import Syllabus from "./pages/academics/Syllabus";
import Calendar from "./pages/academics/Calendar";


export default function App(){
  return (
    <>
      {/* <TopBar/> */}
      <Header/>
      <MegaNav/>
      <main style={{minHeight:'70vh'}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/academics" element={<Academics/>} />
          <Route path="/exam" element={<Exam/>} />
          <Route path="/research" element={<Research/>} />
          <Route path="/departments" element={<Departments/>} />
          <Route path="/departments/:id" element={<DepartmentDetail/>} />
          <Route path="/admissions" element={<Admissions/>} />
          <Route path="/campus" element={<Campus/>} />
          <Route path="/facilities" element={<Facilities/>} />
          <Route path="/placements" element={<Placements/>} />
          <Route path="/eoffice" element={<Eoffice/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/faculty" element={<Faculty/>} />
          <Route path="/news" element={<News/>} />
          <Route path="/news/:id" element={<NewsDetail/>} />
          <Route path="/notices" element={<Notices/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admin" element={<AdminLogin/>} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>} />
          <Route path="/apply" element={<Apply/>} />
          <Route path="/admissions/apply" element={<Navigate to="/apply" replace />} />
          <Route path="/about/vision-mission" element={<VisionMission />} />
          <Route path="/about/principal-message" element={<PrincipalMessage />} />
          <Route path="/academics/rules" element={<Rules />} />
          <Route path="/academics/syllabus" element={<Syllabus />} />
          <Route path="/academics/calendar" element={<Calendar />} />
        </Routes>
      </main>
      <footer className="footer">© 2025 D.Y. Patil College of Engineering & Technology, Kolhapur</footer>
    </>
  )
}
