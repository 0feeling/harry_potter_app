import './Characters.css';
import Card from './Card.js';

const Characters = ({ characters, openModal }) => {
  return (
    <div className="CharactersContainer">
      {characters.length > 0 ? (
        characters.map((character) => (
          <Card 
            key={character.name} 
            character={character} 
            openModal={openModal} // Pass the openModal function as a prop
          />
        ))
      ) : (
        <div>Aucun personnage trouvé.</div>
      )}
    </div>
  );
};

export default Characters;
