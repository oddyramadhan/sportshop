import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/product-card";

export default function Explore() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // mengambil data dari api
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const results = await axios(
          "https://wefootwear-api.vercel.app/api/items"
        );
        setData(results.data);
      } catch (err) {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error...</h3>;
  }

  return (
    <div className="container">
      <h2> All Products</h2>
      <div className="card-list">
        {/* data yang diambil akan di map lalu dikirim ke komponen productcard */}
        {data.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
