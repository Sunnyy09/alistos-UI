import React, { useState, useEffect } from "react";

const Footer = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 400) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const socialMediaStyle = {
    textAlign: isSmallScreen ? "center" : "initial",
  };

  return (
    <footer
      className="pt-5 px-5"
      style={{ backgroundColor: "#f7f7f7", color: "#777777" }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3 text-dark">
              Subscribe Newsletter
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "2px", marginTop: "8px" }}
              >
                <div
                  className="progress-bar"
                  style={{ width: "15%", backgroundColor: "#bd9d88" }}
                ></div>
              </div>
            </h5>

            <p>
              Subscribe to our newsletters now and stay up to date with new
              collections and exclusive offers.
            </p>
            <form className="w-sm-100">
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  style={{ maxWidth: "100%" }}
                  placeholder="Enter e-mail here..."
                  required
                />
                <button className="btn" type="submit">
                  <i className="fa fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3 text-dark">
              My Account
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "2px", marginTop: "8px" }}
              >
                <div
                  className="progress-bar"
                  style={{ width: "15%", backgroundColor: "#bd9d88" }}
                ></div>
              </div>
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#777777", fontWeight: "500" }}
                  onMouseOver={(e) => (e.target.style.color = "#333333")}
                  onMouseOut={(e) => (e.target.style.color = "#777777")}
                >
                  My Account
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#777777", fontWeight: "500" }}
                  onMouseOver={(e) => (e.target.style.color = "#333333")}
                  onMouseOut={(e) => (e.target.style.color = "#777777")}
                >
                  Order History
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#777777", fontWeight: "500" }}
                  onMouseOver={(e) => (e.target.style.color = "#333333")}
                  onMouseOut={(e) => (e.target.style.color = "#777777")}
                >
                  Wishlist
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3 text-dark">
              Information
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ height: "2px", marginTop: "8px" }}
              >
                <div
                  className="progress-bar"
                  style={{ width: "15%", backgroundColor: "#bd9d88" }}
                ></div>
              </div>
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#777777", fontWeight: "500" }}
                  onMouseOver={(e) => (e.target.style.color = "#333333")}
                  onMouseOut={(e) => (e.target.style.color = "#777777")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#777777", fontWeight: "500" }}
                  onMouseOver={(e) => (e.target.style.color = "#333333")}
                  onMouseOut={(e) => (e.target.style.color = "#777777")}
                >
                  Shipping & Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#777777", fontWeight: "500" }}
                  onMouseOver={(e) => (e.target.style.color = "#333333")}
                  onMouseOut={(e) => (e.target.style.color = "#777777")}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#777777", fontWeight: "500" }}
                  onMouseOver={(e) => (e.target.style.color = "#333333")}
                  onMouseOut={(e) => (e.target.style.color = "#777777")}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-decoration-none"
                  style={{ color: "#777777", fontWeight: "500" }}
                  onMouseOver={(e) => (e.target.style.color = "#333333")}
                  onMouseOut={(e) => (e.target.style.color = "#777777")}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-3 mb-4 mb-md-0">
            <h5 className="text-uppercase mb-3 text-dark">
              Contact
              <div
                className="progress"
                role="progressbar"
                aria-label="Example 1px high"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{
                  height: "2px",
                  marginTop: "8px",
                }}
              >
                <div
                  className="progress-bar"
                  style={{ width: "15%", backgroundColor: "#bd9d88" }}
                ></div>
              </div>
            </h5>
            <p>
              Support:{" "}
              <a href="mailto:hello@alistos.in" className="text-primary">
                hello@alistos.in
              </a>
            </p>
            <p>Address: Chandigarh, India</p>
          </div>
        </div>

        <hr className="w-100" />

        <div className="row mt-4 w-100">
          <div className="col-12 col-md-6">
            <div className="social-media" style={socialMediaStyle}>
              <a href="#" className="me-3">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="text-light">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>

          <div
            className="col-12 col-md-6 text-md-right d-flex justify-content-between"
            style={socialMediaStyle}
          >
            <p>Alistos © 2025</p>
            <div className="payment-link justify-self-end">
              <img
                src="https://alistos.in/image/catalog/payment.png"
                alt="Payment Methods"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
