import React from "react";
import "./Header.css";
import logoImage from "../assets/logo.png";
import walkerImage from "../assets/ob1.png";
import menuImageOne from "../assets/menu1.webp";
import menuImageTwo from "../assets/menu2.webp";

function openMenuInNewTab(event) {
  event.preventDefault();

  const menuTab = window.open("", "_blank");
  if (!menuTab) {
    return;
  }

  menuTab.document.write(`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>O'briens Menu</title>
        <style>
          body {
            margin: 0;
            font-family: Inter, system-ui, sans-serif;
            background: #121212;
            color: #f3e7d2;
            padding: 24px;
          }
          h1 {
            margin: 0 0 16px;
            color: #f4c88b;
          }
          .menu-grid {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 18px;
          }
          img {
            width: min(1100px, 96vw);
            border-radius: 12px;
            border: 1px solid rgba(244, 200, 139, 0.35);
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.35);
          }
        </style>
      </head>
      <body>
        <h1>O'briens Menu</h1>
        <div class="menu-grid">
          <img src="${menuImageOne}" alt="O'briens menu page one" />
          <img src="${menuImageTwo}" alt="O'briens menu page two" />
        </div>
      </body>
    </html>
  `);
  menuTab.document.close();
  menuTab.opener = null;
}

function Header() {
  return (
    <header className="header" id="home">
      <img src={walkerImage} alt="" className="header-walker" aria-hidden="true" />
      <div className="container header-inner">
        <a href="#home" className="brand">
          <img src={logoImage} alt="O'briens logo" className="brand-logo" />
          O&apos;briens
        </a>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            <li>
              <a href={menuImageOne} onClick={openMenuInNewTab}>
                Menu
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
