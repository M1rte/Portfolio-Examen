import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if variables are loading correctly
    if (!process.env.REACT_APP_SERVICE_ID) {
      console.error("Environment variables not found! Check your .env file and restart your server.");
      setError(true);
      return;
    }

    setLoading(true);
    setError(false);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(() => {
        setSent(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setSent(false), 3000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setError(true);
        setLoading(false);
      });
  };

  return (
    <div className="contact">
      <section className="contact-form-section">
        <h2>Stuur een bericht</h2>

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            {/* Added id and htmlFor to fix accessibility error */}
            <input type="text" name="user_name" id="user_name" required />
            <label htmlFor="user_name">Naam</label>
          </div>

          <div className="input-group">
            <input type="email" name="user_email" id="user_email" required />
            <label htmlFor="user_email">Email</label>
          </div>

          <div className="input-group">
            <textarea name="message" id="message" rows="4" required></textarea>
            <label htmlFor="message">Bericht</label>
          </div>

          <button type="submit" className="header-button-home" disabled={loading}>
            {loading ? "Versturen..." : "Verstuur"}
          </button>

          {sent && <p className="success-msg">Bericht verzonden! 🎉</p>}
          {error && <p className="error-msg" style={{color: "#ff8a8a"}}>Er ging iets mis 😢</p>}
        </form>
      </section>
    </div>
  );
}