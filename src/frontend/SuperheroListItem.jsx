import React from "react";
import { Link } from "react-router-dom";

const SuperheroListItem = ({ superhero }) => {
  return (
    <li>
      <Link to={`/superheroes/${superhero._id}`}>
        <img src={superhero.images[0]} alt={superhero.nickname} />
        <p>{superhero.nickname}</p>
      </Link>
    </li>
  );
};

export default SuperheroListItem;
