import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-section-wrapper">
        <div className="container">
          <div className="bg-light footer border-top">
            <div className="container">
              <div className="row">
                <div className="col-md-3 mb-4 footer-links">
                  <h4 className="fw-bold heading">SHOP.CO</h4>
                  <p className="text-muted">
                    We have clothes that suits your style and which you're proud
                    to wear. From women to men.
                  </p>
                  <div>
                    <a href="#" className="me-2 social-links text-dark">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="me-2 social-links text-dark">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="me-2 social-links text-dark">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-dark social-links">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </div>
                </div>
                <div className="col-md-2 mb-4 footer-links">
                  <h6 className="fw-bold">Company</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-muted">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Works
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Career
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 mb-4 footer-links">
                  <h6 className="fw-bold">Help</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-muted">
                        Customer Support
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Delivery Details
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2 mb-4 footer-links">
                  <h6 className="fw-bold">FAQ</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-muted">
                        Account
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Manage Deliveries
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Orders
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Payments
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3 mb-4 footer-links">
                  <h6 className="fw-bold">Resources</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#" className="text-muted">
                        Free eBooks
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Development Tutorial
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        How to - Blog
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted">
                        Youtube Playlist
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center pt-3 pb-4 border-top">
                <small className="text-muted">
                  Shop.co © 2000–2023. All Rights Reserved
                </small>
                <div>
                  <img
                    src="./img/footer/visa.png"
                    alt="Visa"
                    height="24"
                    className="img-fluid"
                  />
                  <img
                    src="./img/footer/master.png"
                    alt="MasterCard"
                    height="24"
                    className="img-fluid"
                  />
                  <img
                    src="./img/footer/paypal.png"
                    alt="PayPal"
                    height="24"
                    className="img-fluid"
                  />
                  <img
                    src="./img/footer/Ipay.png"
                    alt="Apple Pay"
                    height="24"
                    className="img-fluid"
                  />
                  <img
                    src="./img/footer/Gpay.png"
                    alt="Apple Pay"
                    height="24"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
