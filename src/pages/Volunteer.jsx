import React from "react";

function Volunteer() {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .volunteer-page {
          font-family: Arial, sans-serif;
          background: #f6faf7;
          color: #1f2933;
        }

        /* Hero Section */
        .volunteer-hero {
          min-height: 650px;
          padding: 80px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 60px;
          background: linear-gradient(135deg, #e7f7ed, #ffffff);
        }

        .hero-content {
          max-width: 560px;
        }

        .hero-tag {
          color: #178447;
          font-size: 14px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        .hero-content h1 {
          font-size: 56px;
          line-height: 1.1;
          margin: 20px 0;
        }

        .hero-content h1 span {
          color: #178447;
        }

        .hero-content > p {
          font-size: 18px;
          line-height: 1.7;
          color: #667085;
        }

        /* Statistics */
        .impact-stats {
          display: flex;
          gap: 45px;
          margin-top: 45px;
        }

        .impact-stats h2 {
          margin: 0;
          color: #178447;
          font-size: 30px;
        }

        .impact-stats p {
          margin-top: 5px;
          color: #667085;
        }

        /* Form Card */
        .volunteer-form-card {
          width: 450px;
          padding: 35px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .volunteer-form-card h2 {
          margin-bottom: 8px;
          font-size: 28px;
        }

        .volunteer-form-card > p {
          color: #667085;
          margin-bottom: 25px;
        }

        .volunteer-form-card form {
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .input-row {
          display: flex;
          gap: 12px;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 14px;
          border: 1px solid #d6dce1;
          border-radius: 8px;
          font-size: 14px;
          outline: none;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: #178447;
        }

        textarea {
          resize: vertical;
        }

        .submit-btn {
          border: none;
          padding: 15px;
          border-radius: 8px;
          background: #178447;
          color: white;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
        }

        .submit-btn:hover {
          background: #116536;
        }

        /* Why Volunteer */
        .why-volunteer {
          padding: 80px 8%;
          text-align: center;
        }

        .section-heading {
          max-width: 650px;
          margin: auto;
        }

        .section-heading span {
          color: #178447;
          font-size: 13px;
          font-weight: bold;
          letter-spacing: 2px;
        }

        .section-heading h2 {
          font-size: 38px;
          margin: 15px 0;
        }

        .section-heading p {
          color: #667085;
          line-height: 1.7;
        }

        /* Benefits */
        .benefit-container {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .benefit-card {
          padding: 30px 20px;
          background: white;
          border-radius: 15px;
          border: 1px solid #e5e7eb;
          transition: 0.3s;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
        }

        .benefit-icon {
          font-size: 40px;
          margin-bottom: 15px;
        }

        .benefit-card h3 {
          margin-bottom: 10px;
        }

        .benefit-card p {
          color: #667085;
          line-height: 1.6;
        }

        /* CTA */
        .volunteer-cta {
          padding: 70px 20px;
          text-align: center;
          background: #178447;
          color: white;
        }

        .volunteer-cta h2 {
          font-size: 38px;
          margin-bottom: 10px;
        }

        .volunteer-cta p {
          margin-bottom: 25px;
          font-size: 17px;
        }

        .cta-btn {
          border: none;
          background: white;
          color: #178447;
          padding: 13px 30px;
          border-radius: 8px;
          font-weight: bold;
          cursor: pointer;
        }

        .cta-btn:hover {
          background: #eaf7ee;
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .volunteer-hero {
            flex-direction: column;
          }

          .hero-content {
            max-width: 700px;
            text-align: center;
          }

          .impact-stats {
            justify-content: center;
          }

          .benefit-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .volunteer-hero {
            padding: 50px 20px;
          }

          .hero-content h1 {
            font-size: 40px;
          }

          .volunteer-form-card {
            width: 100%;
            padding: 25px;
          }

          .input-row {
            flex-direction: column;
          }

          .impact-stats {
            gap: 20px;
          }

          .benefit-container {
            grid-template-columns: 1fr;
          }

          .section-heading h2 {
            font-size: 30px;
          }
        }
      `}</style>

      <div className="volunteer-page">

        {/* Hero */}
        <section className="volunteer-hero">

          <div className="hero-content">
            <span className="hero-tag">
              MAKE A DIFFERENCE
            </span>

            <h1>
              Your Time Can <span>Change Lives</span>
            </h1>

            <p>
              Join our volunteer community and help us create
              a better future for people, communities, and the environment.
            </p>

            <div className="impact-stats">
              <div>
                <h2>500+</h2>
                <p>Volunteers</p>
              </div>

              <div>
                <h2>25+</h2>
                <p>Projects</p>
              </div>

              <div>
                <h2>10K+</h2>
                <p>Lives Impacted</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="volunteer-form-card">

            <h2>Become a Volunteer</h2>

            <p>
              Fill in your details and join our mission.
            </p>

            <form>

              <div className="input-row">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <input
                type="tel"
                placeholder="Phone Number"
                required
              />

              <select required>
                <option value="">
                  Select Your Interest
                </option>
                <option>Education</option>
                <option>Healthcare</option>
                <option>Environment</option>
                <option>Community Service</option>
                <option>Women Empowerment</option>
              </select>

              <select required>
                <option value="">
                  Your Availability
                </option>
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Both</option>
              </select>

              <textarea
                rows="4"
                placeholder="Tell us why you want to volunteer..."
              ></textarea>

              <button
                type="submit"
                className="submit-btn"
              >
                Join Our Mission →
              </button>

            </form>
          </div>

        </section>

        {/* Why Volunteer */}
        <section className="why-volunteer">

          <div className="section-heading">

            <span>WHY VOLUNTEER?</span>

            <h2>
              Be Part of Something Bigger
            </h2>

            <p>
              Every small contribution can create a meaningful
              impact. Together, we can build stronger communities.
            </p>

          </div>

          <div className="benefit-container">

            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Help Communities</h3>
              <p>
                Support people and communities who need help the most.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Create Impact</h3>
              <p>
                Take part in meaningful projects that create positive change.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Learn & Grow</h3>
              <p>
                Develop new skills while working with passionate people.
              </p>
            </div>

            <div className="benefit-card">
              <div className="benefit-icon">❤️</div>
              <h3>Make Connections</h3>
              <p>
                Meet people who share your passion for helping others.
              </p>
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="volunteer-cta">

          <h2>
            Ready to Make a Difference?
          </h2>

          <p>
            Your time, skills and kindness can make someone's life better.
          </p>

          <button className="cta-btn">
            Become a Volunteer
          </button>

        </section>

      </div>
    </>
  );
}

export default Volunteer;