import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NewSuperheroForm = ({ handleAddSuperhero }) => {
  const [nickname, setNickname] = useState("");
  const [real_name, setRealName] = useState("");
  const [origin_description, setOrigin_description] = useState("");
  const [catch_phrase, setCatch_phrase] = useState("");
  const [superpowers, setSuperpowers] = useState([]);
  const [images, setImages] = useState([]);

  // Add other necessary form fields and state variables

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make a POST request to your backend API to create a new superhero
      const response = await axios.post("http://localhost:3000/superheroes", {
        nickname,
        real_name,
        origin_description,
        superpowers: superpowers.split(",").map((power) => power.trim()),
        catch_phrase,
        images: images.split(",").map((image) => image.trim()),
        // Include other form field data
      });
      const newSuperhero = response.data;
      // Call the handleAddSuperhero function to update the superhero list with the newly created superhero

      handleAddSuperhero(newSuperhero);
      // Reset the form fields
      setNickname("");
      setRealName("");
      setOrigin_description("");
      setSuperpowers([]);
      setCatch_phrase("");
      setImages([]);
      // Reset other form fields
    } catch (error) {
      console.log("Error creating superhero:", error);
    }
  };

  return (
    <>
      {" "}
      <Link className="btn" to="/">
        Back to Superhero List
      </Link>
      <form onSubmit={handleSubmit}>
        <h2>Add a New Superhero</h2>
        <div>
          <label>Nickname:</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div>
          <label>Real Name:</label>
          <input
            type="text"
            value={real_name}
            onChange={(e) => setRealName(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={origin_description}
            onChange={(e) => setOrigin_description(e.target.value)}
          />
        </div>
        <div>
          <label>Superpowers:</label>
          <input
            required={true}
            type="text"
            value={superpowers}
            onChange={(e) => setSuperpowers(e.target.value)}
          />
        </div>
        <div>
          <label>Catch phrase:</label>
          <input
            required={true}
            type="text"
            value={catch_phrase}
            onChange={(e) => setCatch_phrase(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            required={true}
            type="text"
            value={images}
            onChange={(e) => setImages(e.target.value)}
          />
        </div>
        {/* Add other form fields */}
        <button className="btn" type="submit">
          Create Superhero
        </button>
      </form>
    </>
  );
};

export default NewSuperheroForm;
