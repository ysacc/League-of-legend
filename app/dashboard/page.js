"use client";
import Image from 'next/image'
import styles from './page.module.css'
import Navbar from '../components/navigation/Navbar'
import SearchBar from '../components/searchbar/SearchBar'
import { useEffect, useState } from 'react';
import ResultCard from '../components/cards/cards';

export default function Dashboard() {
  const [championsRotation, setChampionsRotation] = useState([]);

  return (
    <main className={styles.main}>
        <Navbar />
        <h1 className={styles.title}>BUSCADOR DE CAMPEONES</h1>
        <SearchBar/>
        <div>
        {championsRotation.map((result) => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
        <div>
            <video width="640" height="360" controls autoPlay loop>
            <source src="https://www.leagueoflegends.com/static/hero-c35bd03ceaa5f919e98b20c905044a3d.webm" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
            </video>
        </div>
    </main>
  )
}
