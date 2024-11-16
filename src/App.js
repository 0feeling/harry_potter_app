import './App.css';
import './index.css';
import { useState, useEffect } from 'react';
import { Header } from './Header';
import Hero from './Hero';
import Characters from './Characters';
import Modale from './Modale';
import SearchBar from './SearchBar';
import axios from 'axios';

function App() {
  const [characters, setCharacters] = useState([]); // Store character data
  const [filteredCharacters, setFilteredCharacters] = useState([]); // Handle filtered characters
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [error, setError] = useState(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://potterhead-api.vercel.app/api/characters'
        );
        const filteredData = response.data.filter(character =>
          character.name !== 'James Potter' && character.name !== 'Lily Potter'
        );
        setCharacters(filteredData);
        setFilteredCharacters(filteredData); // Initially, all characters are displayed except James and Lily
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Unable to fetch data, please try again.');
      }
    };
    fetchData();
  }, []);

  // Handle search filter
  const handleSearch = (searchText) => {
    if (!searchText.trim()) {
      setFilteredCharacters(characters);
      return;
    }

    const filtered = characters.filter((character) => {
      const searchLower = searchText.toLowerCase();
      const nameMatches = character.name.toLowerCase().includes(searchLower);
      const nicknameMatches =
        character.alternate_names &&
        character.alternate_names.some((name) =>
          name.toLowerCase().includes(searchLower)
        );
      return nameMatches || nicknameMatches;
    });

    const uniqueFiltered = [
      ...new Map(filtered.map((item) => [item.name + (item.nickname || ''), item])).values(),
    ];

    const sorted = uniqueFiltered.sort((a, b) => {
      const searchLower = searchText.toLowerCase();
      const aStartsWith = a.name.toLowerCase().startsWith(searchLower);
      const bStartsWith = b.name.toLowerCase().startsWith(searchLower);
      if (aStartsWith && !bStartsWith) return -1;
      if (!aStartsWith && bStartsWith) return 1;
      return 0;
    });

    setFilteredCharacters(sorted);
  };

  // Open modal with selected character
  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Header />
      <Hero />
      {error ? (
        <div className="error-message">{error}</div>
      ) : (
        <>
          <SearchBar onSearch={handleSearch} />
          <Characters characters={filteredCharacters} openModal={openModal} />
        </>
      )}
      {isModalOpen && selectedCharacter && (
        <Modale character={selectedCharacter} setIsOpen={closeModal} />
      )}
    </div>
  );
}

export default App;
