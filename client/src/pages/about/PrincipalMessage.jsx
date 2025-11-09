import SideMenu from "../../components/SideMenu";

const menu = [
  ["/about", "About Us"],
  ["/about/vision-mission", "Vision & Mission"],
  ["/about/principal-message", "Principal’s Message"],
];

export default function PrincipalMessage() {
  return (
    <div className="container page">
      <SideMenu title="About Us" items={menu} />

      <div className="content">
        <h1>Principal’s Message</h1>
        <p>
          Dear Students and Parents,
        </p>
        <p>
          Our institute is committed to providing academic excellence and a 
          vibrant learning environment to nurture innovation and leadership 
          among students.
        </p>
        <p><b>- Principal, DYPCET Kolhapur</b></p>
      </div>
    </div>
  );
}
