import './Card.css';
import { useState } from "react";
import Modale from "./Modale.js";



const Card = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <div className="card">
        <img src={character.image} alt='character from Harry Potter' />
        <span className="legend"> {character.name} </span>
      </div>
      {isOpen && <Modale character={character} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Card;