import React from "react";

const Newsletter = () => {
  return (
    <>
      <section className="newsletter-section">
        <div className="newsletter-wrapper">
          <div className="container">
            <div className="row  bg-dark text-white">
              <div className="col-7">
                <div className="heading">
                  <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                </div>
              </div>
              <div className="col-5">
                <div className="form">
                  <div className="search-container position-relative">
                    <i className="fas fa-search search-icon"></i>
                    <input
                      type="text"
                      className="form-control search-input"
                      placeholder="Enter your email addresss"
                    />
                  </div>
                  <div className="button">
                    <button className="position-relative bg-white text-dark w-100 mt-3 rounded-pill h-[48]">
                      Subscribe to Newsletter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
