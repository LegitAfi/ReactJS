import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${name}! We received your message.`);
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        
        <label>Message:</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
