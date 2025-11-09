export default function Admissions() {
  return (
    <div className="container section">
      <h1>Admissions</h1>

      <p>
        D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur,
        offers admissions to B.Tech and M.Tech programs. The admission process is
        conducted as per guidelines from AICTE, DTE Maharashtra & Shivaji University.
      </p>

      <h2 style={{ marginTop: "32px" }}>Programs & Intake</h2>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Program</th>
            <th>Intake</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>CSE (Computer Science & Engineering)</td><td>360</td></tr>
          <tr><td>CSE (Artificial Intelligence & Machine Learning)</td><td>180</td></tr>
          <tr><td>CSE (Data Science)</td><td>180</td></tr>
          <tr><td>Electronics & Telecommunication Engineering</td><td>120</td></tr>
          <tr><td>Mechanical Engineering</td><td>120</td></tr>
          <tr><td>Civil Engineering</td><td>120</td></tr>
          <tr><td>Chemical Engineering</td><td>60</td></tr>
        </tbody>
      </table>

      <h2 style={{ marginTop: "32px" }}>Documents Required</h2>
      <ul>
        <li>10th & 12th Marksheet</li>
        <li>JEE / CET Score Card</li>
        <li>School Leaving Certificate</li>
        <li>Nationality Certificate</li>
        <li>Passport size photographs</li>
      </ul>

      <div style={{ marginTop: "40px" }}>
        <a href="/apply" className="btn">Apply Online</a>
      </div>
    </div>
  );
}
