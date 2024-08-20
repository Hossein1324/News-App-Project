import React from "react";
import image from "../assets/newss.jpeg";
const Cards = ({ urlToImage, title, url, description }) => {
  return (
    <>
      <div className="col-sm mt-4 ">
        <div
          className="card col my-3 mx-3 px-2 py-2 bg-dark text-light d-inline-block"
          style={{ width: "18rem" }}
        >
          <img
            style={{ height: "230xp" }}
            src={urlToImage ? urlToImage : image}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body ">
            <h5 className="card-title">{title.slice(0, 50)}</h5>
            <p className="card-text">
              {description
                ? description.slice(0, 90)
                : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dicta voluptatem eos, unde libero quia officia at."}
            </p>

            <a href={url} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
