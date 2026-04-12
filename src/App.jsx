import { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";



function App() {
    
  return (
    <div>
      <SearchBar />
      <Filters />
    </div>

  );
};

export default App;
