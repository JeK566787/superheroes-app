import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import "./style.css";

const SuperheroDetails = () => {
  const { id } = useParams();
  const [superhero, setSuperhero] = useState(null);

  useEffect(() => {
    fetchSuperhero();
  }, []);

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
      <Link className="back-link" to="/">
        Back to Superhero List
      </Link>
      {superhero ? (
        <div>
          <h3>{superhero.nickname}</h3>
          <p>Real Name: {superhero.real_name}</p>
          <p>Catch phrase: {superhero.catch_phrase}</p>
          <p>Description: {superhero.origin_description}</p>
          <p>Superpowers: {superhero.superpowers.join(", ")}</p>
          <div className="pic-container">
            <img src={superhero.images[0]} alt="hero pic" />
          </div>
        </div>
      ) : (
        <p>Loading superhero details...</p>
      )}
    </div>
  );
};

export default SuperheroDetails;
