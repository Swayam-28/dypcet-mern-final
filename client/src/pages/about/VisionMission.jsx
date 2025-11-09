import SideMenu from "../../components/SideMenu";

const menu = [
  ["/about", "About Us"],
  ["/about/vision-mission", "Vision & Mission"],
  ["/about/principal-message", "Principal’s Message"],
];

export default function VisionMission() {
  return (
    <div className="container page">
      <SideMenu title="About Us" items={menu} />

      <div className="content">
        <h1>Vision & Mission</h1>

        <h3>Vision</h3>
        <p>To develop globally competent engineering professionals.</p>

        <h3>Mission</h3>
        <ul>
          <li>Deliver high quality technical education.</li>
          <li>Promote research and innovation.</li>
          <li>Develop leadership and entrepreneurship values.</li>
          <li>Serve society with responsibility and ethics.</li>
        </ul>
      </div>
    </div>
  );
}
