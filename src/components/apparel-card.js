import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./product-card.css";

export default function ApparelCard(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // mengambil data dari api berdasarkan data yang dikirim dari category
    const fetchData = async () => {
      setError(false);
      setLoading(true);

      try {
        const results = await axios(
          `https://wefootwear-api.vercel.app/api/items/category/` + props.data
        );
        setData(results.data);
        console.log(results);
      } catch (err) {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
      setLoading(false);
    };
    fetchData();
  }, [props]);

  if (loading) {
    return <h3>Loading...</h3>;
  }
  if (error) {
    return <h3>Error...</h3>;
  }

  return (
    <div className="card-list-category">
      {/*jika data yang didapat lebih dari 0 maka akan ditampilkan, jika tidak maka tulisan not found */}
      {data.length > 0 ? (
        data.map((data, index) => (
          <Link to={`/item/${data.slug}`} key={index}>
            <div className="card">
              <img
                className="card-image"
                src={data.images[0]}
                alt={data.name}
              />
              <div className="card-content">
                <p className="card-title">{data.name}</p>
                <p className="card-color">{data.color}</p>
                <p className="card-price">Rp {data.price}</p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h3>Not Found</h3>
      )}
    </div>
  );
}
