import { useState } from "react";
import Modale from "./Modale.js";
import './Card.css';

const Card = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Define the URL of the placeholder image
  const defaultImage = "https://img.freepik.com/photos-premium/chute-neige-fond-noir_34266-792.jpg?w=826"; 

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="card" onClick={handleClick}>
        {/* Use the placeholder image if character.image doesn't exist */}
        <img 
          src={character.image || defaultImage} 
          alt="character from Harry Potter" 
        />
        <span className="legend"> {character.name} </span>
      </div>
      
      {/* Open the modal if isOpen is true */}
      {isOpen && <Modale character={character} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Card;
