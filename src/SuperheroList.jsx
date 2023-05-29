import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const SuperheroList = ({
  superheroes,
  handlePrevPage,
  handleNextPage,
  currentPage,
}) => {
  return (
    <div>
      <ul className="hero-list">
        {superheroes.map((superhero) => (
          <li key={superhero._id}>
            <Link to={`/superheroes/${superhero._id}`}>
              <div className="pic-container">
                <img
                  className="pic-container"
                  src={superhero.images[0]}
                  alt={superhero.nickname}
                />
              </div>
              <p>{superhero.nickname}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="pagination-controller">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default SuperheroList;
