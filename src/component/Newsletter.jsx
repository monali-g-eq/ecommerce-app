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
// import React from "react";

// const Newsletter = () => {
//   return (
//     <section className="newsletter-section py-4">
//       <div className="container">
//         <div className="row bg-dark text-white align-items-center px-3 py-4 rounded">
//           <div className="col-12 col-md-7 mb-3 mb-md-0">
//             <h1 className="newsletter-heading m-0">
//               STAY UPTO DATE <br className="d-md-none" />
//               ABOUT OUR <br className="d-md-none" />
//               LATEST OFFERS
//             </h1>
//           </div>
//           <div className="col-12 col-md-5">
//             <div className="form">
//               <input
//                 type="email"
//                 className="form-control mb-2 w-100 rounded-pill"
//                 placeholder="Enter your email address"
//               />
//               <button className="btn btn-light text-dark w-100 rounded-pill">
//                 Subscribe to Newsletter
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Newsletter;
