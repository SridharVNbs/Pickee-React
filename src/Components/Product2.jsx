import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import images from "./ImageProvider";
import { useCart } from "./CartContext";

const Product2 = () => {
  const { addToCart } = useCart();

  const products2 = [
    {
      id: 1,
      name: "Sunglasses",
      imgUrl: images.Sunglasses, 
      description: "Very Compact to use and Stylish to Wear.",
      category: "Accessories",
      price: 479,
      rating: 4.6,
    },
    {
      id: 2,
      name: "Cap ",
      imgUrl: images.Cap,
      description: "Used to cover the head from sun.",
      category: "Accessories",
      price: 259,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Belt",
      imgUrl: images.Belt,
      description: "TO Fit up for your Pants and Towsers.",
      category: "Accessories",
      price: 120,
      rating: 4.3,
    },
    {
      id: 4,
      name: "Wallet",
      imgUrl: images.Wallet,
      description: "Save to Cashes and Store Your Cards.",
      category: "Accessories",
      price: 130,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Handbag",
      imgUrl: images.Handbag,
      description: "Compact for the Women and Style them.",
      category: "Accessories",
      price: 1299,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Mackupkid",
      imgUrl: images.Mackupkid,
      description: "Make your face very cute and good look.",
      category: "Accessories",
      price: 317,
      rating: 4.2,
    },
    {
      id: 7,
      name: "Shoes ",
      imgUrl: images.Shoes,
      description: "It will cover your foot and show some fashion.",
      category: "Accessories",
      price: 350,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Shirts",
      imgUrl: images.Shirts,
      description: "Looks like Fashion and Massive looks for the men.",
      category: "Accessories",
      price: 899,
      rating: 4.6,
    },
    {
      id: 9,
      name: "Wallet",
      imgUrl: images.Wallet,
      description: "Save to Cashes and Store Your Cards.",
      category: "Accessories",
      price: 120,
      rating: 4.5,
    },
    {
      id: 10,
      name: "Belt",
      imgUrl: images.Belt,
      description: "TO Fit up for your Pants and Towsers.",
      category: "Accessories",
      price: 499,
      rating: 4.2,
    },
  ];

  return (
    <div className="container-fluid overflow-hidden my-3">
      <div className="row g-4 justify-content-center">
        {products2.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 d-flex justify-content-center mx-2 my-3 py-3"
          >
            <div className="products d-flex flex-column justify-content-between text-center rounded shadow p-4 larger-card w-100">
              
              {/* Image Section */}
              <div className="img-con mb-4">
                <img
                  src={product.imgUrl}
                  alt={product.name}
                  className="img-fluid rounded"
                />
              </div>

              {/* Product Info */}
              <div className="info-con">
                <h5>{product.name}</h5>
                <span className="fs-6 text-dark my-4">₹{product.price}</span>
                <br />

                {/* Rating and Cart Section */}
                <div className="mt-4 d-flex justify-content-around align-items-center star">
                  
                  {/* Rating */}
                  <span className="d-flex align-items-center text-dark">
                    <img
                      src={images.Star}
                      alt="Rating"
                      className="img-fluid rate-img me-1"
                    />
                    {product.rating}
                  </span>

                  {/* Heart Icon and Cart */}
                  <div className="d-flex align-items-center">
                    <button
                      className="border-0 bg-transparent"
                      title="Add to Cart"
                    >
                      <IoMdHeartEmpty className="fs-2 mx-1 text-danger" />
                    </button>

                    <button
                      onClick={() => addToCart(product)}
                      className="border-0 bg-transparent"
                      title="Add to Cart"
                    >
                      <img src={images.Cart} alt="Cart" className="cart mx-1" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product2;
