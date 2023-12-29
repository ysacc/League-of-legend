// components/MusicPlayer.js
"use client";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const MusicPlayer = () => {
  const [currentTrack, setTrackIndex] = useState(0)
  // Lista de canciones
  const playlist = [
    { name: 'Drake Bell - Fuego Lento', src: '/music/Drake Bell - Fuego Lento (Official Video).mp3' },
    { name: 'Greeicy, Anitta - Jacuzzi', src: '/music/Greeicy, Anitta - Jacuzzi.mp3' },
    { name: 'La Player Bandolera Zion & Lennox', src: '/music/La Player Bandolera Zion & Lennox Letra.mp3' },
    { name: 'POR PERRO - SEBASTIAN YATRA', src: '/music/POR PERRO - SEBASTIAN YATRA _  FT. LUIS FIGUEROA x LARY OVER _   LETRA .mp3' },
    { name: 'You Salsa - Duro Y Suave', src: '/music/You Salsa - Duro Y Suave.mp3' },
    // Agrega más canciones según sea necesario
  ]
  const handleClickNext = () => {
    console.log('click next')
      setTrackIndex((currentTrack) =>
          currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
      );
  };

const handleEnd = () => {
  console.log('end')
  setTrackIndex((currentTrack) =>
          currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
      );
}
  return (
    <AudioPlayer
    autoPlay
    volume="0.5"
    src={playlist[currentTrack].src}
    onPlay={e => console.log("onPlay")}
    showSkipControls
    onClickNext={handleClickNext}
    onEnded={handleEnd}
    // other props here
  />
  );
};

export default MusicPlayer;

