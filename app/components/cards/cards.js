// components/ResultCard.js
"use client";
import React from 'react';
import styles from './cards.module.css'
import Image from 'next/image';


const ResultCard = ({ result, query }) => {
  const championData = result.data[query];

  return (
    <div className={styles.test}>
      <h3>NOMBRE: {championData.name}</h3>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${query}_0.jpg`}
        alt={result.data.name}
        width={200}
        height={400}
        />
      <h2>TITULO: {championData.title}</h2>
      <div>
        <p>Descripción: {championData.lore}</p>
      </div>
      <div>
        <h4>Consejos para aliados:</h4>
        <ul>
          {championData.allytips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Consejos para enemigos:</h4>
        <ul>
          {championData.enemytips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Tags:</h4>
        <ul>
          {championData.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4>Tipo de recurso: {championData.partype}</h4>
      </div>
      <div>
        <h4>Información general:</h4>
        <p>Ataque: {championData.info.attack}</p>
        <p>Defensa: {championData.info.defense}</p>
        <p>Magic: {championData.info.magic}</p>
        <p>Dificultad: {championData.info.difficulty}</p>
      </div>
      {/* Puedes mostrar más información según tus necesidades */}
    </div>
  );
};

export default ResultCard;