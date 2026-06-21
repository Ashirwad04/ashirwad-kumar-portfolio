import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h1>Get In Touch</h1>
        <p>
          Have a project, collaboration opportunity, or just want to say hello?
          Feel free to reach out.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Contact Information</h2>

          <p>📧 ashirwdk04@gmail.com</p>
          <p>📱 +91 7869 825376</p>
          <p>📍 Bihar, India</p>

          <div className="social-links">
            <a href="https://github.com/Ashirwad04">GitHub</a>
            <a href="https://www.linkedin.com/in/ashirwad-kumar-06517b253/">LinkedIn</a>
            <a href="https://www.instagram.com/ashirwad_shandilya/">Instagram</a>
          </div>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </form>

      </div>
    </section>
  );
}

export default Contact;