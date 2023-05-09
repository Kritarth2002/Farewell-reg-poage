import "./form.css";
import axios from "axios";
import React, { useState } from "react";
function Form() {
  const [name, setName] = useState("");
  const [enroll, setEnroll] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, enroll, email, phone };

    const datasend = axios.post("http://localhost:5000/api/form", data);
  };

  return (
    <div className="Form">
      <h1>Join us for a Farewell to Remember!</h1>
      <h3>Please fill out the form below to confirm your attendance.</h3>
      <form onSubmit={handleSubmit} action="http://localhost:5000/api/form">
        <label>
          <span className="labels">Name:</span>
          <br></br>
          <br></br>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          <span className="labels">Enrollment Number:</span>
          <br></br>
          <br></br>
          <input
            type="text"
            value={enroll}
            onChange={(e) => setEnroll(e.target.value)}
          />
        </label>
        <br />
        <label>
          <span className="labels">Email:</span>
          <br></br>
          <br></br>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <span className="labels">Phone Number:</span>
          <br></br>
          <br></br>

          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Form;
