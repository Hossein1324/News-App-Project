import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const TopNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2024-08-17&to=2024-08-17&sortBy=popularity&apiKey=${
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
  }, []);
  return (
    <>
      {/* {news.map((ne) => (
        <p>{ne.title}</p>
      ))} */}

      <div className="container text-center ">
        <div className="row row-cols-3-sm">
          {error && <p className="text-dark fs-2">{error}</p>}
          {loading && (
            <div className="d-flex justify-content-center mt-3">
              <div
                className="spinner-grow"
                style={{ width: "3rem", height: "3rem" }}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {news.map((ne) => (
            <Cards
              key={ne.id}
              urlToImage={ne.urlToImage}
              url={ne.url}
              title={ne.title}
              description={ne.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default TopNews;
