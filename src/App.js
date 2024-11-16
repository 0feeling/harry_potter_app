import './App.css';
import './index.css';
import { useState } from 'react';
import { Header } from './Header';
import Hero from './Hero';
import Characters from './Characters';
import Modale from './Modale';  // N'oublie pas d'importer la modale

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);  // Gérer l'état de la modale
  const [selectedCharacter, setSelectedCharacter] = useState(null);  // Gérer le personnage sélectionné

  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);  // Ouvre la modale
  };

  const closeModal = () => {
    setIsModalOpen(false);  // Ferme la modale
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      <Characters openModal={openModal} />  {/* Passe openModal à Characters */}
      
      {isModalOpen && selectedCharacter && (
        <Modale character={selectedCharacter} setIsOpen={closeModal} /> , {/* Affiche la modale si elle est ouverte */}
      )}
    </div>
  );
}

export default App;
