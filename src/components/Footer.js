import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_Container">
        <div className="footer_SubContainer">
          <h4>Get To Know Us</h4>
          <h5>About us</h5>
          <h5>Careers</h5>
          <h5>Press Releases</h5>
          <h5>Amazon Cares</h5>
          <h5>Gift a Smile</h5>
        </div>
        <div className="footer_SubContainer">
          <h4>Connect With Us</h4>
          <h5>Facebook</h5>
          <h5>Twitter</h5>
          <h5>Instagram</h5>
        </div>
        <div className="footer_SubContainer">
          <h4>Make Money With Us</h4>
          <h5>Sell on Amazon</h5>
          <h5>Sell under Amazon Accelerator</h5>
          <h5>Amazon Global Selling</h5>
          <h5>Become an Affiliate</h5>
          <h5>Fulfilment by Amazon</h5>
          <h5>Advertise Your Products</h5>
          <h5>Amazon Pay on Merchants</h5>
        </div>
        <div className="footer_SubContainer">
          <h4>Let Us Help You</h4>
          <h5>COVID-19 and Amazon</h5>
          <h5>Your Account</h5>
          <h5>Returns Centre</h5>
          <h5>100% Purchase Protection</h5>
          <h5>Amazon App Download</h5>
          <h5>Amazon Assistant Download</h5>
          <h5>Help</h5>
        </div>
      </div>
      <hr className="hr" />
      <div className="footer_lowerContainer">
        <img
          className="footer_lowerContainerLogo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
        <h6>
          Australia Brazil Canada France Germany Italy Japan Mexico Netherlands
          Poland Singapore Spain Turkey United Arab Emirates United Kingdom
          United States
        </h6>
      </div>
    </div>
  );
}

export default Footer;
