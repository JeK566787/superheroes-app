import React from "react";
import { Link } from "react-router-dom";
import "./styles/App.css";

import axios from "axios";

const SuperheroList = ({
  superheroes,
  handlePrevPage,
  handleNextPage,
  currentPage,
  deleteSuperhero,
}) => {
  const handleDelete = async (superheroId) => {
    try {
      // Make a DELETE request to the backend API to delete the superhero
      await axios.delete(`http://localhost:3000/superheroes/${superheroId}`);

      // Call the deleteSuperhero function passed as props to update the state
      deleteSuperhero(superheroId);
    } catch (error) {
      console.log("Error deleting superhero:", error);
    }
  };
  return (
    <div>
      <Link className="back-link" to="/new">
        Add Superhero
      </Link>
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
              <button className="button">See more details</button>
            </Link>
            <button
              className="button delete-button"
              onClick={() => handleDelete(superhero._id)}
            >
              Delete
            </button>
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
