import SideMenu from "../../components/SideMenu";
import { academicsMenu } from "./AcademicsMenu";

export default function Calendar() {
  return (
    <div className="container page">
      <SideMenu title="Academics" items={academicsMenu} />

      <div className="content">
        <h1>Academic Calendar</h1>

        <p>The Academic Calendar outlines semester schedules, examinations and holidays.</p>

        <a
          href="#"
          target="_blank"
          style={{ background: "#0c3566", color: "white", padding: "8px 16px", borderRadius: "6px" }}
        >
          Download Academic Calendar (PDF)
        </a>
      </div>
    </div>
  );
}
