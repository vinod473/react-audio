import React, {useState,useRef} from "react";

//import styles
import "./styles/app.scss";

//import components
import Song from "./components/song";
import Player from "./components/player";
import songData from "./data";
import Library from "./components/library";
import Nav from "./components/nav"

const App = () =>{
    //Ref
    const audioRef = useRef(null);
    //states
    const [songs,setSongs] = useState(songData());
    const [currSong,setCurrSong] = useState(songs[0]);
    const [isPlaying,setIsPlaying] = useState(false);
    const [libraryStatus,setLibraryStatus] = useState(false);

    const [songInfo, setSongInfo] = useState({
      duration: 0,
      currentTime: 0
    });
    const timeUpdateHandler = (e) => {
      setSongInfo({duration: e.target.duration ,currentTime: e.target.currentTime});
    };
    return (
      <div className="music-player">
          <Nav 
            libraryStatus={libraryStatus}
            setLibraryStatus={setLibraryStatus}
          />
          <Library 
            songs={songs} 
            setCurrSong={setCurrSong} 
            setSongs={setSongs} 
            audioRef={audioRef}
            isPlaying={isPlaying}
            libraryStatus={libraryStatus}
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
            libraryStatus={libraryStatus}
            songs = {songs}
            setCurrSong = {setCurrSong}
            currSong = {currSong}
            setSongs = {setSongs}
          />
          <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currSong.audio}></audio>
      </div>
    )
};

export default App;