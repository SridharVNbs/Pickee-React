import React from "react";
import images from "./ImageProvider";
import Support from "./Support";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

const AboutUs = () => {
  return (
    <>
      <div className="container my-5 text-secondary">
        <div className="row g-4 align-items-center">
          <div className="col-12 col-lg-6">
            <h3 className="fw-bold">
              Our <span className="text-primary">Story</span>
            </h3>
            <p className="text-muted">
              We are a passionate team dedicated to delivering high-quality
              products and services. Our journey started with a mission to
              create innovative solutions that empower individuals and
              businesses alike.
            </p>
            <p>
              With years of experience, we continue to evolve and adapt to meet
              the ever-changing demands of the industry.
            </p>
            <button className="btn btn-primary mt-3">Learn More</button>
          </div>

          <div className="col-12 col-lg-6">
            <div className="row g-2">
              <div className="col-12">
                <img
                  src={images.Team}
                  alt="Our Team"
                  className="img-fluid rounded shadow-lg w-100"
                  style={{ height: "250px", objectFit: "cover" }}
                />
              </div>
              <div className="col-6">
                <img
                  src={images.Vision}
                  alt="Our Vision"
                  className="img-fluid rounded shadow-lg w-100"
                  style={{ height: "150px", objectFit: "cover" }}
                />
              </div>
              <div className="col-6">
                <img
                  src={images.Mission}
                  alt="Our Mission"
                  className="img-fluid rounded shadow-lg w-100"
                  style={{ height: "150px", objectFit: "cover" }}
                />
              </div>
              <div className="col-12">
                <img
                  src={images.Values}
                  alt="Our Values"
                  className="img-fluid rounded shadow-lg w-100"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>

        <Support />

        <div className="my-5">
          <h3 className="mb-4 fw-bold">
            What Our <span className="text-primary">Clients Say</span>
          </h3>
          <div className="row g-4">
            <div className="col-12 col-md-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <p className="fst-italic">
                  "Exceptional service and support. Highly recommended!"
                </p>
                <h5 className="text-primary">- John Doe</h5>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <p className="fst-italic">
                  "Their solutions transformed our business operations."
                </p>
                <h5 className="text-success">- Jane Smith</h5>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="p-4 border rounded shadow-sm h-100 bg-light">
                <p className="fst-italic">
                  "Reliable and innovative team. Excellent collaboration!"
                </p>
                <h5 className="text-danger">- Robert Johnson</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
