import { useState } from "react";
import { api } from "../services/api"; // you already have axios wrapper

export default function Apply(){
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    city: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  function update(e){
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function submit(e){
    e.preventDefault();
    setStatus("Submitting...");
    try{
      await api.post("/enquiry", form);
      setStatus("✅ Submitted! We will contact you shortly.");
      setForm({name:"",email:"",phone:"",course:"",city:"",message:""});
    }catch(err){
      console.error(err);
      setStatus("❌ Failed to submit. Please try again.");
    }
  }

  return (
    <div className="container section">
      <h1>Admission Enquiry</h1>
      <p>Please fill the form below. Our admission team will reach out to you.</p>

      <form onSubmit={submit} className="card" style={{maxWidth:640}}>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
          <input name="name" placeholder="Full Name" value={form.name} onChange={update} required />
          <input name="email" placeholder="Email" value={form.email} onChange={update} required />
          <input name="phone" placeholder="Phone Number" value={form.phone} onChange={update} required />
          <input name="city" placeholder="City" value={form.city} onChange={update} required />
          <select name="course" value={form.course} onChange={update} required style={{gridColumn:'1 / span 2'}}>
            <option value="">Select Department</option>
            <option>Chemical Engineering</option>
            <option>Civil Engineering</option>
            <option>Computer Science & Engineering</option>
            <option>CSE (AI & ML)</option>
            <option>CSE (Data Science)</option>
            <option>Electronics & Telecommunication Engineering</option>
            <option>Mechanical Engineering</option>
          </select>
        </div>

        <textarea name="message" placeholder="Message (optional)" value={form.message} onChange={update} rows={4} style={{marginTop:12}} />

        <button className="btn primary" type="submit" style={{marginTop:12}}>Submit</button>
        {status && <p style={{marginTop:10}}>{status}</p>}
      </form>
    </div>
  );
}
