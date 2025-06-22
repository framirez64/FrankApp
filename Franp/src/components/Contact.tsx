import './Contact.css';
import { useState } from 'react';

function Contact() {
  const [copied, setCopied] = useState<{ field: string | null }>({ field: null });


  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ field });
      setTimeout(() => setCopied({ field: null }), 2000);
    });
  };

  const email = "franciscojramirezreyna@gmail.com";
  const phone = "(402) 968-2801";

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>

      <div className="contact-card">
        <h2>Francisco Ramirez</h2>

        <div className="contact-field">
          <span><strong>Email:</strong> {email}</span>
          <button onClick={() => handleCopy(email, 'email')}>
            {copied.field === 'email' ? 'Copied!' : 'Copy'}
          </button>
        </div>

        <div className="contact-field">
          <span><strong>Phone:</strong> {phone}</span>
          <button onClick={() => handleCopy(phone, 'phone')}>
            {copied.field === 'phone' ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
