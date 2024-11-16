import './Characters.css';
import Card from "./Card.js";
import axios from "axios";
import { useState, useEffect } from "react";

const Characters = (props) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); // State pour gérer les erreurs

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.herokuapp.com/api/characters"
        );
        setData(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des données :", err);
        setError("Impossible de récupérer les données, veuillez réessayer.");
      }
    };
    fetchData();
  }, []);

  return (
    <div className="CharactersContainer">
      {error ? (
        <div className="error-message">{error}</div> // Affichage du message d'erreur
      ) : data ? (
        data.map((character) => (
          <Card key={character.name} character={character} />
        ))
      ) : (
        <div>En attente</div>
      )}
    </div>
  );
};

export default Characters;
