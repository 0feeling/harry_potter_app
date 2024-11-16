import "./Modale.css";

const Modale = ({ character, setIsOpen }) => {
  const placeholderImage = "https://img.freepik.com/photos-premium/chute-neige-fond-noir_34266-792.jpg?w=826"; // Replace with the actual URL of your placeholder image

  return (
    <div
      className="modale"
      onClick={() => setIsOpen(false)} // Close the modal when clicking outside
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Prevents closing when clicking inside the modal */}
        <img
          src={character.image || placeholderImage} // If character.image is not available, use the placeholder image
          alt="character from Harry Potter"
        />
        <div>Nom : {character.name}</div>
        <div>Patronus : {character.patronus}</div>
        <div>Maison : {character.house}</div>
      </div>
    </div>
  );
};

export default Modale;

