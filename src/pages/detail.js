import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./detail.css";

export default function ProductDetail() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  // ambil variable slug yang ada di route dengan useParams
  const { slug } = useParams();

  useEffect(() => {
    // mengambil data dari api sesuai dengan slug
    const fetchData = async () => {
      setLoading(true);
      try {
        const results = await axios(
          "https://wefootwear-api.vercel.app/api/items/" + slug
        );
        setData(results.data);
      } catch (err) {}
      setLoading(false);
    };
    fetchData();
  }, [slug]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h2 className="product-title">Product Details</h2>
      {/* halaman baru akan muncul ketika data sudah tersedia */}
      {data && (
        <div className="detail">
          <img className="detail-image" src={data.images[0]} alt={data.name} />
          <div className="detail-content">
            <p className="detail-blur">
              {data.type} {">"} {data.category}
            </p>
            <h3 className="detail-name">{data.name}</h3>
            <p className="detail-blur">{data.color}</p>
            <p className="detail-price">Rp {data.price}</p>
          </div>
        </div>
      )}
    </>
  );
}
