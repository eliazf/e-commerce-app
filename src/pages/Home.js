import React from "react";
import { Link } from "react-router-dom";
import itemsList from "../itemsList.json";
import "../Styles/Home.css";

export default function Home() {
  return (
    <div id="home-content">
      <div className="items-list">
        {itemsList.map((item) => (
          <div className="item-box" key={item.id}>
            <Link to={`/item/${item.id}`}>
              <div className="item-img-container">
                <img
                  className="item-img"
                  src={item.imgUrl}
                  alt="bike-img"
                ></img>
              </div>
              <h2 className="item-title">{item.name}</h2>
              <p className="item-description">{item.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
