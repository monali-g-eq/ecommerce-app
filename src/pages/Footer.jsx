import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-brand">
        <h2>SHOP.CO</h2>
        <p>We have clothes that suit your style and which you’re proud to wear. From women to men.</p>
      </div>
  
      <div className="footer-links">
        <div>
          <h4>COMPANY</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Works</a></li>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
        <div>
          <h4>HELP</h4>
          <ul>
            <li><a href="#">Customer Support</a></li>
            <li><a href="#">Delivery Details</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4>FAQ</h4>
          <ul>
            <li><a href="#">Account</a></li>
            <li><a href="#">Manage Deliveries</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Payments</a></li>
          </ul>
        </div>
        <div>
          <h4>RESOURCES</h4>
          <ul>
            <li><a href="#">Free eBooks</a></li>
            <li><a href="#">Development Tutorial</a></li>
            <li><a href="#">How-to Blog</a></li>
            <li><a href="#">Youtube Playlist</a></li>
          </ul>
        </div>
      </div>



       

      
      
    </div>


    <div className="footer-bottom">
    <p>Shop.co © 2000–2023, All Rights Reserved</p>
    <div className="payment-icons">
      <img src="/Visa.png" alt="Visa"/>
      <img src="/mastercard.png" alt="MasterCard"/>
      <img src="/paypal.png" alt="PayPal"/>
      <img src="/applepay.png" alt="Apple Pay"/>
      <img src="/googlepay.png" alt="Google Pay"/>
    </div>
  </div>
  
   
  </footer>
  
  )
}

export default Footer