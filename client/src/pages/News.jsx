import { useEffect, useState } from "react";
import { api } from "../services/api";

export default function News() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get("/news").then((res) => setItems(res.data || []));
  }, []);

  return (
    <div className="container section">
      <h1>News & Events</h1>

      <div className="grid">
        {items.length ? items.map((n) => (
          <div className="card" key={n._id}>
            <h3>{n.title}</h3>
            <p><b>{n.date}</b></p>
            <p>{n.description}</p>
          </div>
        )) : (
          <p style={{ color: "#666" }}>No news/events published yet.</p>
        )}
      </div>
    </div>
  );
}
