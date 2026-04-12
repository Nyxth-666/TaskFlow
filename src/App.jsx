import { useState } from 'react'
import './App.css'
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import ProgressBar from "./ProgressBar";



function App() {
    
  return (
    <div>
      <SearchBar />
      <Filters />
    </div>

  );
};

export default App;
