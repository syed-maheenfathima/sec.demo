import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    branch: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Admission Form</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "500px",
          margin: "0 auto",
          gap: "15px",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <label>Qualification:</label>
        <select
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          required
        >
          <option value="">-- Select --</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Undergraduate">Undergraduate</option>
          <option value="Postgraduate">Postgraduate</option>
        </select>

        <label>Branch:</label>
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
          required
        >
          <option value="">-- Select Branch --</option>
          
          <option value="CSE">Computer Science Engineering</option>
          <option value="ECE">Electronics & Communication</option>
          <option value="EEE">Electrical Engineering</option>
          <option value="MECH">Mechanical Engineering</option>
          <option value="CIVIL">Civil Engineering</option>
          <option value="MBA">MBA</option>
        </select>

        <textarea
          name="message"
          placeholder="Why do you want to join our college?"
          value={formData.message}
          onChange={handleChange}
          rows="4"
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Submit Application
        </button>
      </form>
    </div>
  );
}

