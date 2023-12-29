"use client";
import React, { useState, useEffect } from 'react';
import { fetchSearchResults } from '../../utils/api';
import ResultCard from '../cards/cards';
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [query, setQuery] = useState('');
  const [capitalizedQuery, setCapitalizedQuery] = useState('');

  const handleSearch = async () => {
    try {
      const capitalized = query.charAt(0).toUpperCase() + query.slice(1);
      setCapitalizedQuery(capitalized);
      const result = await fetchSearchResults(capitalized);
      setSearchResult(result);
    } catch (error) {
      console.error('Error handling search:', error);
      // Puedes manejar el error mostrando un mensaje al usuario, por ejemplo.
    }
  };

  const handleSearchClick = () => {
    if (query.trim() !== '') {
      handleSearch();
    }
  };

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log('Query actualizado:', event.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <button onClick={handleSearchClick} className={styles.searchButton}>
        Buscar
      </button>
      <div className={styles.resultContainer}>
        {searchResult && <ResultCard result={searchResult} query={capitalizedQuery} />}
      </div>
    </div>
  );
};

export default SearchBar;