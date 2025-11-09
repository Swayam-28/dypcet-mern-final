import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Faculty() {
  const [faculty, setFaculty] = useState([]);

  useEffect(() => {
    api.get("/faculty").then((res) => setFaculty(res.data || []));
  }, []);

  return (
    <div className="container section">
      <h1>Faculty</h1>

      <table className="styled-table" style={{ marginTop: "24px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qualification</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
  {faculty.length > 0 ? (
    faculty.map((f) => (
      <tr key={f._id}>
        <td>{f.name || "-"}</td>
        <td>{f.qualification || "-"}</td>
        <td>{f.designation || "-"}</td>
        <td>
          {(f.department && typeof f.department === "string")
            ? f.department.toUpperCase()
            : (f.department?.name?.toUpperCase() || "NOT ASSIGNED")}
        </td>
        <td>{f.email || "-"}</td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="5" style={{ textAlign: "center", color: "#666" }}>
        No faculty data found.
      </td>
    </tr>
  )}
</tbody>


      </table>
    </div>
  );
}
