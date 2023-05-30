import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SuperheroList from "./SuperheroList";
import SuperheroDetails from "./SuperheroDetails";

import "./styles/App.css";
import NewSuperheroForm from "./NewSuperheroForm";
import EditSuperheroForm from "./EditSuperheroForm";

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchSuperheroes();
  });

  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/superheroes?page=${currentPage}`
      );
      setSuperheroes(response.data);
    } catch (error) {
      console.log("Error fetching superheroes:", error);
    }
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleAddSuperhero = (newSuperhero) => {
    setSuperheroes((prevSuperheroes) => [...prevSuperheroes, newSuperhero]);
  };

  const deleteSuperhero = (superheroId) => {
    setSuperheroes((prevSuperheroes) =>
      prevSuperheroes.filter((superhero) => superhero._id !== superheroId)
    );
  };

  return (
    <div className="container">
      <h1 className="first-title">Superheroes</h1>

      <Routes>
        <Route
          path="/"
          element={
            <SuperheroList
              superheroes={superheroes}
              handlePrevPage={handlePrevPage}
              handleNextPage={handleNextPage}
              currentPage={currentPage}
              deleteSuperhero={deleteSuperhero}
            />
          }
        />
        <Route path="/superheroes/:id" element={<SuperheroDetails />} />
        <Route path="/superheroes/:id/edit" element={<EditSuperheroForm />} />
        <Route
          path="/new"
          element={<NewSuperheroForm handleAddSuperhero={handleAddSuperhero} />}
        />
      </Routes>
    </div>
  );
};

export default App;
