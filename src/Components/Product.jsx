import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import images from "./ImageProvider";
import { useCart } from "./CartContext";

const Product = () => {
  const { addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: "Fresh Apples",
      imgUrl: images.Apple,
      description: "Crisp and juicy apples, rich in fiber and vitamins.",
      category: "Fruits",
      price: 120,
      rating: 4.6,
    },
    {
      id: 2,
      name: "Carrot ",
      imgUrl: images.Carrot,
      description: "Good for Skin and rich in Nutrients.",
      category: "Vegetables",
      price: 49,
      rating: 4.3,
    },
    {
      id: 3,
      name: "Green Spinach",
      imgUrl: images.Spinach,
      description: "Fresh and nutrient-rich spinach leaves.",
      category: "Vegetables",
      price: 35,
      rating: 4.3,
    },
    {
      id: 4,
      name: "Bananas",
      imgUrl: images.Banana,
      description: "Naturally sweet and potassium-rich bananas.",
      category: "Fruits",
      price: 60,
      rating: 4.8,
    },
    {
      id: 5,
      name: "BuleBerry",
      imgUrl: images.BuleBerry,
      description: "Rich in Nutrients and very healthy.",
      category: "Accessories",
      price: 50,
      rating: 4.7,
    },
    {
      id: 6,
      name: "Fresh Tomatoes",
      imgUrl: images.Tomato,
      description: "Ripe and juicy tomatoes for salads and cooking.",
      category: "Vegetables",
      price: 40,
      rating: 4.2,
    },
    {
      id: 7,
      name: "Juicy Oranges",
      imgUrl: images.Orange,
      description: "Sweet and tangy oranges, rich in vitamin C.",
      category: "Fruits",
      price:60,
      rating: 4.5,
    },
    {
      id: 8,
      name: "Pomogranate",
      imgUrl: images.Pomogranate,
      description: "It will increase the blood count and very Healthy.",
      category: "Fruits",
      price: 69,
      rating: 4.6,
    },
    {
      id: 9,
      name: "Organic Carrots",
      imgUrl: images.Carrot,
      description: "Crunchy and sweet carrots, rich in beta-carotene.",
      category: "Vegetables",
      price: 50,
      rating: 4.5,
    },
    {
      id: 10,
      name: "Lemon",
      imgUrl: images.Lemon,
      description: "Very Bitter and fresh for use.",
      category: "Vegetables",
      price: 27,
      rating: 4.2,
    },
  ];

  return (
    <div className="container-fluid overflow-hidden my-3">
      <div className="row g-4 justify-content-center">
        {products.map((product) => (
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

export default Product;
