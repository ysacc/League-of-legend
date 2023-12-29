"use client";
import React from 'react';
import styles from './cards.module.css'
import Image from 'next/image';


const ResultItems= ({ result, itemName }) => {
  console.log(itemName)
  const filteredItems = result;
  console.log(filteredItems)
  return (
    <div className={styles.test}>
       {filteredItems.map(item => (
        <div key={item.id} className={styles.card}>
          {/* Aquí puedes renderizar la información de cada ítem */}
          <h3>NOMBRE: {item.name}</h3>
          <p>Descripción: {item.plaintext}</p>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/13.24.1/img/item/${item.image.full}`}
            alt={item.name}
            width={60}
            height={120}
          />
          <h5>Oro:{item.gold.base}</h5>
          {/* Puedes agregar más información según las propiedades de tus objetos */}
        </div>
      ))}
    </div>
  );
};

export default ResultItems;