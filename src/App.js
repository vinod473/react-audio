import React, {useState,useRef} from "react";
import Library from "./components/library";
//import styles
import "./styles/app.scss";

//import components
import Song from "./components/song";
import Player from "./components/player";
import songData from "./utility";

const App = () =>{
    //Ref
    const audioRef = useRef(null);
    const [songs,setSongs] = useState(songData());
    const [currSong,setCurrSong] = useState(songs[0]);
    const [isPlaying,setIsPlaying] = useState(false);
    
    const [songInfo, setSongInfo] = useState({
      duration: 0,
      currentTime: 0
    });
    const timeUpdateHandler = (e) => {
      setSongInfo({duration: e.target.duration ,currentTime: e.target.currentTime});
    };
    return (
      <div className="music-player">
          <Library 
            allSongs={songs} 
            setCurrSong={setCurrSong} 
            setSongs={setSongs} 
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
          <Song 
            currentSong={currSong}
          />
          <Player 
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying} 
            currentSong={currSong} 
            audioRef={audioRef} 
            setSongInfo={setSongInfo} 
            songInfo={songInfo} 
          />
          <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currSong.audio}></audio>
      </div>
    )
};

export default App;