import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditSuperheroForm = () => {
  const history = useNavigate();
  const { id } = useParams();

  const [nickname, setNickname] = useState("");
  const [real_name, setRealName] = useState("");
  const [origin_description, setOrigin_description] = useState("");
  const [superpowers, setSuperpowers] = useState([]);
  const [catch_phrase, setCatch_phrase] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchSuperhero();
  }, []);

  const fetchSuperhero = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/superheroes/${id}`
      );
      const superhero = response.data;
      setNickname(superhero.nickname);
      setRealName(superhero.real_name);
      setOrigin_description(superhero.origin_description);
      setSuperpowers(superhero.superpowers);
      setCatch_phrase(superhero.catch_phrase);
      setImages(superhero.images);
    } catch (error) {
      console.log("Error fetching superhero:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/superheroes/${id}`, {
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
        images,
      });
      history.push(`/superheroes/${id}`);
    } catch (error) {
      console.log("Error updating superhero:", error);
    }
  };

  return (
    <>
      <Link className="back-link" to={`/superheroes/${id}`}>
        Back to Superhero Details
      </Link>
      <form onSubmit={handleSubmit}>
        <h2>Edit Superhero</h2>
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
            onChange={(e) => setSuperpowers(e.target.value.split(","))}
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
          <label>Image:</label>
          <input
            required={true}
            type="text"
            value={images}
            onChange={(e) => setImages(e.target.value.split(","))}
          />
        </div>
        <button type="submit">Update Superhero</button>
      </form>
    </>
  );
};

export default EditSuperheroForm;
