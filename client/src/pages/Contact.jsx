import { useState } from "react";
import { api } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/enquiries", form);
      setStatus("Message Sent ✅");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <div className="container section">
      <h1>Contact Us</h1>

      <p>You can contact us for admissions, campus tours, and general queries.</p>

      <div className="card" style={{ maxWidth: "600px" }}>
        <form onSubmit={submit}>
          <label>Name</label>
          <input className="input" required value={form.name}
            onChange={e=>setForm({...form,name:e.target.value})} />

          <label>Email</label>
          <input className="input" required value={form.email}
            onChange={e=>setForm({...form,email:e.target.value})} />

          <label>Message</label>
          <textarea className="input" required rows="4"
            value={form.message}
            onChange={e=>setForm({...form,message:e.target.value})}></textarea>

          <button className="btn primary" style={{ marginTop: "12px" }}>Send Message</button>
        </form>

        {status && <p style={{ marginTop: "10px" }}>{status}</p>}
      </div>
    </div>
  );
}
