import React from "react";
import images from "./ImageProvider";

const Support = () => {
  return (
    <div className="container-fluid container-md text-secondary my-5">
      <div className="row g-4"> 
        
        <div className="col-12 col-md-6 col-lg-3">
          <div className="text-center border p-4 rounded shadow-sm h-100">
            <img src={images.Shipped} alt="Free Shipping" className="support-img mb-3" />
            <h3 className="fs-4">Free Shipping</h3>
            <p>Free Shipping on all US orders or orders above $200</p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="text-center border p-4 rounded shadow-sm h-100">
            <img src={images.Technical} alt="24/7 Support" className="support-img mb-3" />
            <h3 className="fs-4">24/7 Support</h3>
            <p>Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="text-center border p-4 rounded shadow-sm h-100">
            <img src={images.Delivery} alt="20 Days Return" className="support-img mb-3" />
            <h3 className="fs-4">20 Days Return</h3>
            <p>Simply return it within 30 days for an exchange</p>
          </div>
        </div>

        <div className="col-12 col-md-6 col-lg-3">
          <div className="text-center border p-4 rounded shadow-sm h-100">
            <img src={images.Payment} alt="Payment Secure" className="support-img mb-3" />
            <h3 className="fs-4">Payment Secure</h3>
            <p>Contact us 24 hours a day, 7 days a week</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Support;
