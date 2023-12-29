import axios from 'axios';
const BASE_URL = 'https://la1.api.riotgames.com';
const API_KEY = 'RGAPI-c81bfe61-62ea-48a6-94db-640412b4a74b'
const BASE_URL2 = 'https://ddragon.leagueoflegends.com/cdn/13.24.1/data/es_ES';

// let championJson = {};

// export const getLatestDDragon= async() =>{
//    if(Object.keys(championJson).length > 0) {return champinoJson;}
//    const versions = await fetch("https://ddragon.leagueoflegends.com/api/versions.json");
//    const latest = await versions.json()[0];

//    const ddragon = await fetch(`https://ddragon.leagueoflegends.com/cdn/${latest}/data/en_US/champion.json`);

//    const champions = await ddragon.json()["data"];
//    championJson = champions;
//    return champions;
// }

// async function getChampionByKey(key) {

//    const champions = await getLatestDDragon();

//    for (var championName in champions) {
//       if (!champions.hasOwnProperty(championName)) {continue;}

//       if(champions[championName]["key"] === key) {
//          return champions[championName]
//       }
//    }

//    return false;

// }

// console.log(await getChampionByKey(45));
export const fetchSearchResults = async (query) => {
    try {
      const response = await axios.get(`${BASE_URL2}/champion/${query}.json`);
      return response.data;
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error;
    }
  };
  export const fetchChampionsRotation = async () => {
    try {
      const rotation = await fetchChampionsRotation();

      // Ensure that the result is an array before updating the state
      if (Array.isArray(rotation)) {
        setChampionsRotation(rotation);
      } else {
        console.error('Error: Result is not an array');
      }

      // Log the results for debugging
      console.log(rotation);
    } catch (error) {
      console.error('Error fetching champions rotation:', error);
      // You can handle the error as needed, e.g., show an error message to the user
    }
  };

  export const fetchItems = async (itemName) => {
    try {
      const response = await axios.get(`${BASE_URL2}/item.json`);
      const items = response.data.data;
      const filteredItems = Object.values(items).filter(item => item.name.toLowerCase().includes(itemName.toLowerCase()));

      if (filteredItems.length > 0) {
        console.log('Ítems encontrados:', filteredItems);
        return filteredItems;
      } else {
        console.log('No se encontraron ítems con ese nombre.');
        return [];
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      throw error;
    }
  };