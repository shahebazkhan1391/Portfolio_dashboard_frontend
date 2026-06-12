import { useState } from 'react'

function ContactForm() {
  // 1. Set up React state to track what the user types
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

// 2. This runs when the user clicks "Send Message"
const handleSubmit = async (e) => {
  e.preventDefault() 
  console.log("🚀 Form submit handler triggered successfully!");

  const formData = { name, email, message }
  
  // REPLACE THIS LINE WITH YOUR EXACT VERCEL BACKEND LINK
  const backendUrl = "https://portfolio-dashboard-backend-one.vercel.app/api/contact";
  
  try {
      const response = await fetch(backendUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      })

      const result = await response.json()
      console.log("📥 Server response received:", result);

      if (result.success) {
        setSubmitted(true) // Shows the success screen
      } else {
        alert("Server error: " + (result.error || "Something went wrong"))
      }
    } catch (error) {
      console.error("❌ Connection failed:", error)
      alert("Could not connect to your backend server. Is it running?")
    }
  }

  // 3. If the form was submitted successfully, show this thank you box
  if (submitted) {
    return (
      <div className="form-success">
        <h4> Message Sent!</h4>
        <p>Thanks for reaching out, {name}. I've received your message and will get back to you within 24 hours. Speak soon!</p>
        <button onClick={() => { setSubmitted(false); setName(''); setEmail(''); setMessage(''); }}>
          Send another message
        </button>
      </div>
    )
  }

  // 4. The actual HTML structure of the form
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h3>Get In Touch ✉️</h3>
      
      <div className="form-group">
        <label>Name</label>
        <input 
          type="text" 
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Updates state as you type
          required 
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input 
          type="email" 
          placeholder="your.email@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required 
        />
      </div>

      <div className="form-group">
        <label>Message</label>
        <textarea 
          placeholder="Hey Shahebaz, nice full-stack app!"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="4"
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">Send Message</button>
    </form>
  )
}

export default ContactForm