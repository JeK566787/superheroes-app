import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    const fetchSuperheroes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/superheroes");
        console.log(response.data);
        setSuperheroes(response.data);
      } catch (error) {
        console.log("Error fetching superheroes:", error);
      }
    };

    fetchSuperheroes();
  }, []);

  return (
    <div>
      <h1>Superheroes</h1>
      <ul>
        {superheroes.map((superhero) => (
          <li key={superhero._id}>
            <h2>Nickname: {superhero.nickname}</h2>
            <h3>Real name: {superhero.real_name}</h3>
            <em>Catch phrase: {superhero.catch_phrase}</em>
            <p>Description: {superhero.origin_description}</p>
            <i>Superpowers: {superhero.superpowers.join(", ")}</i>
            <div>
              {superhero.images.map((imageUrl, index) => (
                <img key={index} src={imageUrl} alt="superhero pic" />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
