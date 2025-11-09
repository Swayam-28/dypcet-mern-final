import SideMenu from "../../components/SideMenu";
import { academicsMenu } from "./AcademicsMenu";

export default function Rules() {
  return (
    <div className="container page">
      <SideMenu title="Academics" items={academicsMenu} />

      <div className="content">
        <h1>Academic Rules & Regulations</h1>

        <p>
          The institute follows an outcome-based education framework with continuous
          assessment and transparent evaluation policies to ensure academic quality.
        </p>

        <ul>
          <li>80% minimum attendance requirement in theory & practical courses.</li>
          <li>Internal assessment contributes to final grade.</li>
          <li>Submission of laboratory journals is mandatory.</li>
          <li>Students must maintain discipline and academic integrity.</li>
        </ul>

        <p><b>Note:</b> Detailed regulations can be obtained from the Exam Cell Office.</p>
      </div>
    </div>
  );
}
