import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import "./styles/App.css";

const SuperheroDetails = () => {
  const { id } = useParams();
  const [superhero, setSuperhero] = useState(null);

  useEffect(() => {
    fetchSuperhero();
  });

  const fetchSuperhero = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/superheroes/${id}`
      );
      setSuperhero(response.data);
    } catch (error) {
      console.log("Error fetching superhero:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="heading">Superhero Details</h2>
      <div className="details-btn-container">
        <Link className="btn" to="/">
          Back to Superhero List
        </Link>
        <Link className="btn" to={`/superheroes/${id}/edit`}>
          Edit the Superhero
        </Link>
      </div>

      {superhero ? (
        <div>
          <h3>{superhero.nickname}</h3>
          <p>
            {" "}
            <span className="detail-title">Real Name:</span>{" "}
            {superhero.real_name}
          </p>
          <p>
            {" "}
            <span className="detail-title">Catch phrase:</span>{" "}
            {superhero.catch_phrase}
          </p>
          <p>
            {" "}
            <span className="detail-title">Description:</span>{" "}
            {superhero.origin_description}
          </p>
          <p>
            {" "}
            <span className="detail-title">Superpowers:</span>{" "}
            {superhero.superpowers.join(", ")}
          </p>
          <div className="pic-container">
            {superhero.images.map((el, idx) => (
              <img
                key={idx}
                src={el}
                alt="hero pic"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading superhero details...</p>
      )}
    </div>
  );
};

export default SuperheroDetails;
