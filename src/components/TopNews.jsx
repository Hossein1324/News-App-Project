import axios from "axios";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const TopNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=apple&from=2024-08-17&to=2024-08-17&sortBy=popularity&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      )
      .then((res) => {
        setNews(res.data.articles);
      });
  }, []);
  return (
    <>
      {/* {news.map((ne) => (
        <p>{ne.title}</p>
      ))} */}

      <div className="container text-center ">
        <div className="row row-cols-3-sm">
          {/* {news.map((ne) => (
            <Cards
              key={ne.id}
              urlToImage={ne.urlToImage}
              url={ne.url}
              title={ne.title}
              description={ne.description}
            />
          ))} */}
        </div>
      </div>
    </>
  );
};

export default TopNews;
