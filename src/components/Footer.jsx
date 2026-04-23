import React from "react";
import "./Footer.css";

function Footer() {
  const address = "Sint Annalaan 7, Maastricht, Netherlands, 6214AA";
  const mapQuery = encodeURIComponent(address);

  return (
    <footer className="footer" id="contact">
      <div className="container footer__content">
        <div className="footer__details">
          <h3>Visit O&apos;briens</h3>
          <p className="footer__schedule">19:00 - 3:00 everyday</p>
          <p>
            <a href="mailto:obriensmaastricht@gmail.com">obriensmaastricht@gmail.com</a>
          </p>
          <p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              {address}
            </a>
          </p>
          <div className="footer__socials" aria-label="Social media links">
            <a
              href="https://www.instagram.com/obriensmaastricht/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4c0 3.2-2.6 5.8-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8C2 4.6 4.6 2 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm9.65 1.5a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/p/OBriens-61585614837889/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.3-1.5 1.7-1.5h1.6V5c-.8-.1-1.6-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2V11H7.5v3h2.8v8h3.2Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer__map-wrap">
          <iframe
            title="O'briens Maastricht location map"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
