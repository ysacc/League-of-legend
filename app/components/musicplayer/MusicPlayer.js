// components/MusicPlayer.js
"use client";
import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [currentTrack, setTrackIndex] = useState(0)
  // Lista de canciones
  const playlist = [
    { name: 'GODS', src: '/music/GODS ft. NewJeans (뉴진스) (Official Music Video)  Worlds 2023 Anthem - League of Legends.mp3' },
    { name: 'THE BADDEST', src: '/music/KDA - THE BADDEST ft. (G)I-DLE, Bea Miller, Wolftyla (Official Lyric Video)  League of Legends.mp3' },
    { name: 'MORE', src: '/music/KDA - MORE ft. Madison Beer, (G)I-DLE, Lexie Liu, Jaira Burns, Seraphine (Official Music Video).mp3' },
    { name: 'Enemy', src: '/music/Imagine Dragons & JID - Enemy (from the series Arcane_ League of Legends)  Official Music Video.mp3' },
    { name: 'Warriors', src: '/music/Warriors (ft. Imagine Dragons)  Worlds 2014 - League of Legends.mp3' },
    { name: 'POPSTARS', src: '/music/KDA - POPSTARS (ft. Madison Beer, (G)I-DLE, Jaira Burns)  Music Video - League of Legends.mp3' },
    { name: 'Legends Never Die', src: '/music/Legends Never Die (ft. Against The Current)  Worlds 2017 - League of Legends.mp3' },
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
    className="react-h5-audio-player"
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

