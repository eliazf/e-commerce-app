import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

import "../Styles/Cart.css";

export default function Cart() {
  const { cartContent } = useCartContext();

  return (
    <div>
      <ul id="cart-items-list">
        {cartContent.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ul>
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
      <Link to={`/item/${item.id}`}>{item.name}</Link>
      <h4>Quantity: {item.quantity}</h4>
      <h4>Total Price: {item.price * item.quantity}$</h4>
      <button onClick={() => removeElementFromCart(item.id)}>
        <i class="fas fa-trash" />
      </button>
    </div>
  );
}
