import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";

import "../Styles/ItemDetails.css";
import itemsList from "../itemsList.json";

export default function ItemDetails() {
  const { itemId } = useParams();
  const currentItem = itemsList.find((item) => item.id === parseInt(itemId));

  const [quantity, setQuantity] = useState(1);

  const { addElementToCart } = useCartContext();

  const divContainerRef = useRef();

  const zoomImg = () => {
    console.log(divContainerRef.current);
    divContainerRef.current.classList.toggle("modal");
    divContainerRef.current.firstElementChild.classList.toggle(
      "item-details-img"
    );
    divContainerRef.current.firstElementChild.classList.toggle(
      "modal-children"
    );
  };

  return (
    <div id="item-details-container">
      <div
        id="item-details-img-container"
        ref={divContainerRef}
        onClick={zoomImg}
      >
        <img
          className="item-details-img"
          alt={currentItem.name}
          src={currentItem.imgUrl}
        />
      </div>
      <div id="item-details-details-box">
        <h2 id="item-details-title">{currentItem.name}</h2>
        <h3 id="item-details-price">Price: {currentItem.price}$</h3>
        <div id="item-details-input-container">
          <h3 id="item-details-input-text">Select quantity:</h3>
          <input
            id="item-details-quantity-input"
            type="number"
            value={quantity}
            onChange={({ target }) => {
              if (target.value <= 10 && target.value >= 1) {
                setQuantity(target.value);
              } else alert("Insert a number between 1 and 10");
            }}
            min={1}
            max={10}
          />
          <br />
          <button
            id="item-details-add-to-cart-button"
            onClick={() => addElementToCart(currentItem, quantity)}
          >
            <i class="fas fa-cart-plus" /> Add to cart
          </button>
        </div>
        <p id="item-details-description">
          Description:
          <br />
          {currentItem.longDescription}
        </p>
      </div>
    </div>
  );
}
