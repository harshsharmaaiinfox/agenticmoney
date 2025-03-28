import react from "react";

const Footer = () => { 
    return(
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
              <a href="/privacy-policy">Privacy Ploicy</a>
              <a href="/disclaimer">Disclaimer </a>
              <a href="/contact">Contact Us</a>
              <a href="/cookie-policy">Cookie Policy</a>
              <a href="/term-of-use">Term Of Use</a>
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
      <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      {/* FOOTER SECTION ENDS HERE */}
        </>
    );
};

export default Footer;