import React, { useEffect } from "react";
import { gsap } from "gsap";
import images from "./ImageProvider";

const Banner = () => {

  useEffect(() => {
    gsap.fromTo(
      ".banner",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        stagger: 0.3,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div className="container-fluid container-md my-5">
      <div className="row g-4">
        <div className="banner col-12 col-md-6 position-relative overflow-hidden">
          <img 
            src={images.FooterBaner1} 
            alt="Banner" 
            className="img-fluid w-100 h-100 rounded" 
            style={{ objectFit: "cover", maxHeight: "400px" }}
          />
          <div className="position-absolute top-50 end-0 translate-middle-y text-end p-4">
            <h3 className="text-break text-secondary fs-1">Tasty Snack <span className="d-block">& Fastfood</span></h3>
            <p className="text-secondary">The Flavor Of Something Special</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>

        <div className="banner col-12 col-md-6 position-relative overflow-hidden">
          <img 
            src={images.FooterBaner2} 
            alt="Banner" 
            className="img-fluid w-100 h-100 rounded" 
            style={{ objectFit: "cover", maxHeight: "400px" }}
          />
          <div className="position-absolute top-50 end-0 translate-middle-y text-end p-4">
            <h3 className="text-break text-secondary fs-1">Tasty Snack <span className="d-block">& Fastfood</span></h3>
            <p className="text-secondary">The Flavor Of Something Special</p>
            <button className="btn btn-primary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
