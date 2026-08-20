import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: #10251a;
          color: white;
          padding: 60px 7% 20px;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 45px;
          padding-bottom: 40px;
        }

        .footer-logo {
          font-size: 27px;
          font-weight: bold;
          color: #65c98a;
          margin-bottom: 15px;
        }

        .footer-about p {
          color: #b9c7be;
          line-height: 1.7;
          max-width: 350px;
        }

        .footer h3 {
          font-size: 17px;
          margin-bottom: 20px;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #b9c7be;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #65c98a;
          padding-left: 5px;
        }

        .footer-contact p {
          color: #b9c7be;
          line-height: 1.6;
          margin: 8px 0;
        }

        .social-links {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }

        .social-links a {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1c3928;
          color: white;
          text-decoration: none;
          border-radius: 50%;
          transition: 0.3s;
        }

        .social-links a:hover {
          background: #65c98a;
          color: #10251a;
        }

        .footer-bottom {
          border-top: 1px solid #294335;
          padding-top: 20px;
          text-align: center;
          color: #9eaea3;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .footer {
            padding: 45px 25px 20px;
          }
        }
      `}</style>

      <footer className="footer">

        <div className="footer-container">

          {/* About */}
          <div className="footer-about">
            <div className="footer-logo">
              HopeNGO
            </div>

            <p>
              Together, we can create positive change,
              support communities, and build a better future
              for everyone.
            </p>

            <div className="social-links">
              <a href="#">f</a>
              <a href="#">𝕏</a>
              <a href="#">in</a>
              <a href="#">◎</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3>Quick Links</h3>

            <div className="footer-links">
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/volunteer">Volunteer</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3>Support Us</h3>

            <div className="footer-links">
              <Link to="/donation">Donate</Link>
              <Link to="/volunteer">Join as Volunteer</Link>
              <Link to="/projects">Our Projects</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="footer-contact">
            <h3>Contact Us</h3>

            <p>📍 Hyderabad, India</p>
            <p>📞 +91 98765 43210</p>
            <p>✉️ info@hopengo.org</p>
          </div>

        </div>

        <div className="footer-bottom">
          © 2026 HopeNGO. All Rights Reserved.
        </div>

      </footer>
    </>
  );
}

export default Footer;