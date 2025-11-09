import SideMenu from "../../components/SideMenu";
import { academicsMenu } from "./AcademicsMenu";

export default function Syllabus() {
  const branches = [
    { name: "Computer Science & Engineering", link: "#" },
    { name: "CSE (Artificial Intelligence & Machine Learning)", link: "#" },
    { name: "CSE (Data Science)", link: "#" },
    { name: "Mechanical Engineering", link: "#" },
    { name: "Civil Engineering", link: "#" },
    { name: "Chemical Engineering", link: "#" },
    { name: "Electronics & Telecommunication Engineering", link: "#" },
  ];

  return (
    <div className="container page">
      <SideMenu title="Academics" items={academicsMenu} />

      <div className="content">
        <h1>Syllabus</h1>

        <p>Select your branch to view syllabus:</p>

        <ul>
          {branches.map((b, i) => (
            <li key={i}>
              <a href={b.link} target="_blank">{b.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

