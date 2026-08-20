import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          width: 100%;
          padding: 18px 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          position: sticky;
          top: 0;
          z-index: 1000;
        }

        .logo {
          font-size: 25px;
          font-weight: bold;
          color: #178447;
          text-decoration: none;
        }

        .logo span {
          color: #222;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-size: 15px;
          font-weight: 600;
          transition: 0.3s;
        }

        .nav-links a:hover {
          color: #178447;
        }

        .donate-btn {
          background: #178447;
          color: white !important;
          padding: 11px 20px;
          border-radius: 7px;
        }

        .donate-btn:hover {
          background: #116536;
        }

        @media (max-width: 700px) {
          .navbar {
            padding: 15px 20px;
            flex-direction: column;
            gap: 15px;
          }

          .nav-links {
            gap: 15px;
            flex-wrap: wrap;
            justify-content: center;
          }

          .nav-links a {
            font-size: 13px;
          }
        }
      `}</style>

      <nav className="navbar">

        <Link to="/" className="logo">
          Hope<span>NGO</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/volunteer">Volunteer</Link>
          <Link to="/contact">Contact</Link>

          <Link to="/donation" className="donate-btn">
            Donate
          </Link>
        </div>

      </nav>
    </>
  );
}

export default Navbar;