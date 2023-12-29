"use client";
import React, { useState, useEffect } from 'react';
import { fetchItems, fetchSearchResults } from '../../utils/api';
import ResultCard from '../cards/cards';
import styles from './SearchBar.module.css'
import ResultItems from '../cards/items';

const SearchBarItems = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [itemName, setItemName] = useState('');
  const [capitalizedQuery, setCapitalizedQuery] = useState('');

  const handleSearch = async () => {
    try {
      const capitalized = itemName.charAt(0).toUpperCase() + itemName.slice(1);
      setCapitalizedQuery(capitalized);
      const result = await fetchItems(capitalized);
      setSearchResult(result);
    } catch (error) {
      console.error('Error handling search:', error);
      // Puedes manejar el error mostrando un mensaje al usuario, por ejemplo.
    }
  };

  const handleSearchClick = () => {
    if (itemName.trim() !== '') {
      handleSearch();
    }
  };

  const handleInputChange = (event) => {
    setItemName(event.target.value);
    console.log('Item actualizado:', event.target.value);
  };

  return (
    <div className={styles.searchBarContainer}>
      <input
        type="text"
        value={itemName}
        onChange={handleInputChange}
        className={styles.searchInput}
      />
      <button onClick={handleSearchClick} className={styles.searchButton}>
        Buscar
      </button>
      <div className={styles.resultContainer}>
        {searchResult && <ResultItems result={searchResult} itemName={capitalizedQuery} />}
      </div>
    </div>
  );
};

export default SearchBarItems;