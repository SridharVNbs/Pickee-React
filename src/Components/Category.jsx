import React from "react";
import Bun from "../assets/Category-img/bun.png";
import Candies from "../assets/Category-img/candy.png";
import Fruit from "../assets/Category-img/peaches.png";
import Milkbottle from "../assets/Category-img/milk-bottle.png";
import Poinsettia from "../assets/Category-img/poinsettia.png";
import Vegetable from "../assets/Category-img/vegetable.png";

const Category = () => {
  const Items = [
    { img: Fruit, i_info: { name: "Fruit", quantity: "400 items" }, boot_cls: "" },
    { img: Bun, i_info: { name: "Bun", quantity: "250 items" }, boot_cls: "" },
    { img: Vegetable, i_info: { name: "Vegetable", quantity: "300 items" }, boot_cls: "d-none d-md-grid" },
    { img: Milkbottle, i_info: { name: "Milk Bottle", quantity: "150 items" }, boot_cls: "d-none d-lg-grid" },
    { img: Candies, i_info: { name: "Candies", quantity: "500 items" }, boot_cls: "d-none d-xl-grid" },
    { img: Poinsettia, i_info: { name: "Poinsettia", quantity: "200 items" }, boot_cls: "d-none d-xxl-grid" },
  ];

  return (
    <div className="container my-5 overflow-hidden">
      <div className="row"> 
        {Items.map((element, index) => (
          <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 gap-1 my-4" key={index}>
            <a href="#" className="text-decoration-none">
              <div className={`card no-border shadow ${element.boot_cls}`}>
                <div className="inner-card">
                  <div className="card-container text-center">
                    <img src={element.img} alt={element.i_info.name} className="img-fluid" />
                    <div className="card-info">
                      <h5 className="text-secondary">{element.i_info.name}</h5>
                      <p className="text-secondary">{element.i_info.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
