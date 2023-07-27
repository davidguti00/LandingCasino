import React,{useState} from "react";
import Header from "./components/Header";
import FeaturedGames from "./components/FeaturedGames";
import GameGrid from "./components/GameGrid";
import FloatingWhatsappButton from "./components/FloatingWhatsappButton";
import SearchBar from "./components/SearchBar"
import "./App.css";
import gamesData from "./components/info";


function App() {
  const [filteredGames, setFilteredGames] = useState(gamesData);

  const handleFilter = (filterType) => {
    if (filterType === "todos") {
      setFilteredGames(gamesData); // Mostrar todos los juegos
    } else {
      // Filtrar los juegos según el tipo de filtro seleccionado
      const filtered = gamesData.filter((game) => game[filterType] === true);
      setFilteredGames(filtered);
    }
  };
  return (
    <div style={{ paddingBottom: "20px" }}>
      <Header />
      <FeaturedGames />
      <SearchBar onFilter={handleFilter} />
      <GameGrid games={filteredGames} />
      <FloatingWhatsappButton />
    </div>
  );
} 


export default App;


