"use client";

import { useEffect, useState } from "react";
import Navbar from '../components/navigation/Navbar';
import styles from './page.module.css'
import { fetchChampionsRotation } from '../utils/api';
import ResultItems from "../components/cards/items";
import SearchBarItems from "../components/searchbar/SearchBarItems";

export default function Items(){
    const [itemSelect, setItemSelect] = useState([]);
    return(
        <div className={styles.main}>
            <Navbar />
            <h1 className={styles.title}>BUSCADOR DE ITEMS</h1>
            <SearchBarItems/>
            <div>
        {itemSelect.map((result) => (
          <ResultItems key={result.id} result={result} />
        ))}
      </div>
        </div>
    );
}