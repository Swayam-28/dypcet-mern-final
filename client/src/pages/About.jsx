import SideMenu from "../components/SideMenu";

const menu = [
  ["/about", "About Us"],
  ["/about/vision-mission", "Vision & Mission"],
  ["/about/principal-message", "Principal’s Message"],
];

export default function About() {
  return (
    <div className="container page">
      <SideMenu title="About Us" items={menu} />

      <div className="content">
        <h1>About the Institute</h1>
        <p>
          D. Y. Patil College of Engineering & Technology, Kasaba Bawada, Kolhapur 
          is a premier autonomous institution established in 1984. The institute is 
          approved by AICTE, New Delhi and permanently affiliated to Shivaji University, Kolhapur.
        </p>

        <p>
          The institution is accredited by NAAC with Grade ‘A’ and several UG programs 
          are accredited by NBA. The college aims to nurture skilled, ethical and socially responsible engineers.
        </p>

        <h3>Key Highlights</h3>
        <ul>
          <li>Wi-Fi enabled campus</li>
          <li>Modern laboratories & digital classrooms</li>
          <li>Strong industry collaborations & MoUs</li>
          <li>Excellent placement record</li>
          <li>Vibrant student activities and clubs</li>
        </ul>
      </div>
    </div>
  );
}
