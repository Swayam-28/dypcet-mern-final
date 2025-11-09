import SideMenu from "../components/SideMenu";
import { academicsMenu } from "./academics/AcademicsMenu";

export default function Academics() {
  return (
    <div className="container page">
      <SideMenu title="Academics" items={academicsMenu} />
      
      <div className="content">
        <h1>Academics</h1>

        <p>
          Our academic framework is designed to build strong technical fundamentals,
          problem-solving ability and ethical responsibility among students.
        </p>

        <p>
          The curriculum is structured based on Outcome Based Education (OBE) with
          continuous assessment, innovation and real-world application focus.
        </p>

        <h3>Includes:</h3>
        <ul>
          <li>Academic Rules & Regulations</li>
          <li>Branch-wise Syllabus</li>
          <li>Academic Calendar Schedule</li>
          <li>Teaching & Evaluation Framework</li>
        </ul>
      </div>
    </div>
  );
}
