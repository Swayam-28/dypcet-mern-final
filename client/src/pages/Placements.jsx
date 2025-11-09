import tcs from "../assets/recruiters/tcs.png";
import wipro from "../assets/recruiters/wipro.png";
import cognizant from "../assets/recruiters/cognizant.png";
import infosys from "../assets/recruiters/infosys.png";
export default function Placements() {
  return (
    <div className="container section">
      <h1>Training & Placement Cell</h1>

      <p>
        The Training & Placement Cell of D. Y. Patil College of Engineering & Technology, 
        Kasaba Bawada, Kolhapur plays a crucial role in locating job opportunities for 
        students by keeping in touch with reputed firms and industrial establishments.
      </p>

      <h2 style={{ marginTop: "32px" }}>Objectives</h2>
      <ul>
        <li>Enhance employability skills of students.</li>
        <li>Organize training programs including Aptitude, Soft Skills & Technical Training.</li>
        <li>Invite companies for campus recruitment.</li>
        <li>Guide students toward higher education and competitive exams.</li>
      </ul>

      <h2 style={{ marginTop: "32px" }}>Placement Highlights</h2>
      <ul>
        <li>Strong network with reputed recruiters.</li>
        <li>Consistent placement record year after year.</li>
        <li>Mock interviews, industrial training & workshops conducted regularly.</li>
      </ul>

      <h2 style={{ marginTop: "32px" }}>Top Recruiters</h2>

      <div className="recruiter-grid">
  {[tcs, wipro, cognizant, infosys].map((logo, i) => (
    <div key={i} className="recruiter-card">
      <img
        src={logo}
        alt="Recruiter Logo"
        style={{ maxWidth: "100px", maxHeight: "60px", objectFit: "contain" }}
      />
    </div>
  ))}
</div>
    </div>
  );
}
