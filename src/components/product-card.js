import React from "react";
import { Link } from "react-router-dom";
import "./product-card.css";

export default function ProductCard({ data }) {
  return (
    <Link to={`/item/${data.slug}`}>
      <div className="card">
        <img className="card-image" src={data.images[0]} alt={data.name} />
        <div className="card-content">
          <p className="card-title">{data.name}</p>
          <p className="card-color">{data.color}</p>
          <p className="card-price">Rp {data.price}</p>
        </div>
      </div>
    </Link>
  );
}
