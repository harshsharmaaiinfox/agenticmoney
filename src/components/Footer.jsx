import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* FOOTER SECTION START */}
      <footer className="footer">
        <div className="container">
          <div className="row text-left">
            {/* Logo & Description */}
            <div className="col-md-3 mb-4 text-control">
              <div className="footer-logo">
                <a href="/"> <img src="./images/web-logo.png" alt="Logo" /></a>
              </div>
              <p className="mt-3">
                At AgenticMoney, we empower your financial journey with expert insights, cutting-edge tools, and strategic guidance. Your success is our priority.
              </p>
            </div>
            {/* Pages */}
            <div className="col-md-3 mb-4 text-control">
              <h6>Pages</h6>
              <a href="/">Home</a>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/disclaimer">Disclaimer</a>
              <a href="/contact">Contact Us</a>
              <a href="/cookie-policy">Cookie Policy</a>
              <a href="/term-of-use">Terms of Use</a>
              <a href="/Accessibility-Statement">Accessibility Statement</a>
            </div>
            {/* Contact Info */}
            <div className="col-md-3 mb-4 text-control">
              <h6>Contact</h6>
              <p>
                10 Downing Street,
                <br />
                London, SW1A 2AA,
                <br />
                United Kingdom
              </p>
              <p>
                <i className="fas fa-envelope me-2" /> Hello@gmail.com
              </p>
              <p>
                <i className="fas fa-phone me-2" /> + (62) 123 456 789
              </p>
            </div>
            {/* Social Icons */}
            <div className="col-md-3 mb-4 text-control">
              <h6>Follow Us</h6>
              <div className="social-icons mb-2">
                <a href="#">
                  <i className="fab fa-linkedin-in" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <p>Affiliate disclosure: We may earn commissions from partners. </p>
              <p>Registered in the UK</p>
            </div>
          </div>
          <hr />
          <div className="copyright">
            ©2025 Agenticmoney® Global Inc. All rights reserved. General information only — not financial advice
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {isVisible && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "80px",
            widows: "50px",
            height: "43px",
            right: "50px",
            padding: "10px 15px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
        <i class="fa-solid fa-arrow-up"></i>
        </button>
      )}
    </>
  );
};

export default Footer;
