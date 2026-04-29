import React from "react";
import "./Footer.css";

function Footer() {
  const address = "Sint Annalaan 7, Maastricht, Netherlands, 6214AA";
  const googleMapsUrl = "https://maps.app.goo.gl/zfnefJ2FE36X7YHm6";
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23589.65964279369!2d5.676566!3d50.849142!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0e966efa97923%3A0xbb6da247f9a6a1aa!2zT-KAmUJyaWVu4oCZcw!5e1!3m2!1sel!2sus!4v1777465248232!5m2!1sel!2sus";

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
              href={googleMapsUrl}
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
          <div className="footer__rating" aria-label="Rate us five stars">
            <p className="footer__rating-title">Rate us</p>
            <p className="footer__stars" aria-hidden="true">
              ★★★★★
            </p>
          </div>
          <iframe
            title="O'briens Maastricht location map"
            src={mapEmbedUrl}
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
