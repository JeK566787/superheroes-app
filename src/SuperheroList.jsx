import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

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
              <img src={superhero.images[0]} alt={superhero.nickname} />
              <p>{superhero.nickname}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </button>
        <button onClick={handleNextPage}>Next Page</button>
      </div>
    </div>
  );
};

export default SuperheroList;
