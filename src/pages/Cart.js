import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

import "../Styles/Cart.css";

export default function Cart() {
  const {
    cartContent,
    removeAllElementsFromCart,
    nOfCartElements,
    totalPrice,
  } = useCartContext();

  return (
    <div id="cart-container">
      {nOfCartElements !== 0 ? (
        <>
          <ul id="cart-items-list">
            {cartContent.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
          <div id="cart-info">
            <div className="cart-info-section">
              <h2>Total: {totalPrice}$</h2>
              <h2>Items: {nOfCartElements}</h2>
            </div>
            <div className="cart-info-section">
              <button>Checkout</button>
              <button onClick={removeAllElementsFromCart}>Remove All</button>
            </div>
          </div>
        </>
      ) : (
        <h2 id="cart-empty-text">
          The Cart Is Empty!
          <hr /> Start Shopping {">>"}
          <Link to="/">Here</Link>
          {"<<"}
        </h2>
      )}
    </div>
  );
}

function CartItem({ item }) {
  const { removeElementFromCart } = useCartContext();
  return (
    <div className="cart-item">
      <Link to={`/item/${item.id}`}>
        <img className="cart-item-img" alt={item.name} src={item.imgUrl} />
      </Link>
      <div className="cart-item-info">
        <Link to={`/item/${item.id}`}>{item.name}</Link>
        <h4>Quantity: {item.quantity}</h4>
        <h4>Total Price: {item.price * item.quantity}$</h4>
      </div>
      <button
        id="cart-item-remove-button"
        onClick={() => removeElementFromCart(item.id)}
      >
        <i class="fas fa-trash" />
      </button>
    </div>
  );
}
