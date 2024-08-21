import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const Cards = ({ image, title, url, description, publishedAt }) => {
  return (
    <>
      <div className="col-sm mt-4 ">
        <div
          className="card col my-3 mx-3 px-2 py-2 d-inline-block"
          style={{ width: "18rem" }}
        >
          <div>
            <img
              style={{ height: "230xp" }}
              src={image ? image : imagee}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body ">
            <h5 className="card-title">{title.slice(0, 50)}</h5>
            <p className="card-text">
              {description
                ? description.slice(0, 90)
                : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui dicta voluptatem eos, unde libero quia officia at."}
            </p>

            <a href={url} className="btn btn-primary">
              Read more <FaArrowRightLong />
            </a>
            <div className="d-grid gap-2">
              <button
                className=" fw-bold border border-0 rounded-3 mt-2"
                type="button"
              >
                {publishedAt}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
