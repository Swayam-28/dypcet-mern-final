import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function Notices() {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    api.get("/notices").then((res) => setNotices(res.data || []));
  }, []);

  return (
    <div className="container section">
      <h1>Notices</h1>

      <div style={{ marginTop: "24px" }}>
        {notices.length > 0 ? (
          notices.map((n) => (
            <div
              key={n._id}
              style={{
                background: "#fff",
                padding: "16px",
                borderRadius: "10px",
                border: "1px solid #e5e7eb",
                marginBottom: "14px"
              }}
            >
              <h3>{n.title}</h3>
              <p style={{ color: "#555", marginBottom: "6px" }}>{n.date}</p>
              <p>{n.description}</p>
              {n.file && (
                <a
                  href={n.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn primary"
                  style={{ marginTop: "10px", display: "inline-block" }}
                >
                  View / Download
                </a>
              )}
            </div>
          ))
        ) : (
          <p style={{ color: "#666" }}>No notices found.</p>
        )}
      </div>
    </div>
  );
}
