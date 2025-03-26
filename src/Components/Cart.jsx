import React from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useCart();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        <>
          <div className="row g-4">
            {cart.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                <div className="card shadow-sm">
                  <img
                    src={item.imgUrl}
                    alt={item.name}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text fw-bold">₹{item.price}</p>
                    <p className="card-text">Rating: ⭐ {item.rating}</p>

                    <div className="d-flex justify-content-center align-items-center my-2">
                      <button
                        className="btn btn-outline-danger mx-2"
                        onClick={() => decreaseQuantity(item.id)}
                        disabled={item.quantity === 1}
                      >
                        -
                      </button>
                      <span className="fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-outline-success mx-2"
                        onClick={() => increaseQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="mt-5 p-4 bg-light rounded shadow">
            <h4 className="text-center">Order Summary</h4>
            
            <ul className="list-group mb-3">
              {cart.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name} <span className="fw-bold">₹ {item.price} x {item.quantity}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <p className="fw-bold">Total Price: ₹{totalPrice.toFixed(2)}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
