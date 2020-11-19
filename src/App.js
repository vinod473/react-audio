import React, {useState} from "react";

//import styles
import "./styles/app.scss";

//import components
import Song from "./components/song";
import Player from "./components/player";
import songData from "./utility";

const App = () =>{
    const [songs,setSongs] = useState(songData());
    const [currSong,setCurrSong] = useState(songs[0]);
    const [isPlaying,setIsPlaying] = useState(false);
    return (
      <div className="music-player">
          <Song currentSong={currSong}/>
          <Player isPlaying={isPlaying} setIsPlaying={setIsPlaying} currentSong={currSong} />
      </div>
    )
};

export default App;