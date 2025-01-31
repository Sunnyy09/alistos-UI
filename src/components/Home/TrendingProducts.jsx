import React from "react";
import { FaEye, FaRegHeart, FaCartPlus } from "react-icons/fa";
import "./TrendingProduct.css";

function TrendingProducts({ src, alt, title, price }) {
  return (
    <div className="card border-0 product-card" style={{ width: "18rem" }}>
      <img src={src} className="card-img-top product-image" alt={alt} />
      <div className="card-body text-start">
        <h5
          className="card-title fs-6"
          style={{ color: "#292929", fontWeight: "normal" }}
        >
          {title}
        </h5>

        <div className="add-to-cart-container">
          <button className="add-to-cart-btn">Add to Cart</button>
        </div>

        <p className="card-text fs-5 w-100">{price}</p>
      </div>

      {/* Hover Icons */}
      <div className="card-icons">
        <FaRegHeart className="icon compare-icon" />
        <FaEye className="icon quickview-icon" />
        <FaCartPlus className="icon add-to-cart-icon" />
      </div>
    </div>
  );
}

export default TrendingProducts;
