import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import ProductCard from "../components/product-card";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //memanggil data dari api
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const results = await axios(
          "https://wefootwear-api.vercel.app/api/items"
        );
        setData(results.data);
        console.log(results);
      } catch (err) {
        setError(true);
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
      <h2>SPORTSWEAR</h2>
      <div className="card-list">
        {/* data yang diambil akan di filter hanya menampilkan 8 data lalu dikirim ke komponen productcard */}
        {data
          .filter((_, i) => i < 8)
          .map((product) => (
            <ProductCard data={product} key={product.id} />
          ))}
      </div>
      <NavLink to="/explore" className="all">
        See All Products
      </NavLink>
    </div>
  );
}
