import react from "react";

const Header = () => {
    return(
        <>
        
      {/* HEADER SECTION START */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm">
        <div className="container main-contaier">

          <a className="navbar-brand" href="/">
            <img src="./images/web-logo.png" alt="Logo" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <i className="fas fa-bars" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#About-Main">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Accessibility-Statement">
                Accessibility Statement
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="d-flex">
              {/* <button className="btn me-3">
                <i className="fas fa-search" />
              </button> */}
              <button className="btn download-btn">Download</button>
            </div>
          </div>
        </div>
      </nav>
      {/* HEADER SECTION ENDS HERE */}
        </>
    );
};

export default Header;