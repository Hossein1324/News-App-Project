import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const TopNews = ({ category, darkMode }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        ` https://gnews.io/api/v4/top-headlines?category=${category}&country=us&apikey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => {
        setNews(res.data.articles);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [category]);
  return (
    <>
      {darkMode ? (
        <h2 className="text-center text-dark mt-3">
          Latest <span className="badge bg-danger">News</span>
        </h2>
      ) : (
        <h2 className="text-center text-info mt-3">
          Latest <span className="badge bg-warning">News</span>
        </h2>
      )}
     

      <div className="container text-center ">
        <div className="row row-cols-3-sm">
          {error && <p className="fs-2">{error}</p>}
          {loading && (
            <div className="d-flex justify-content-center mt-3">
              <div
                className="spinner-grow mt-1"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {news.map((ne) => (
            <Cards
              image={ne.image}
              url={ne.url}
              title={ne.title}
              description={ne.description}
              publishedAt={ne.publishedAt}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopNews;
