import React from "react";
import {playSong} from "../util";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faForward,faBackward,faPauseCircle} from "@fortawesome/free-solid-svg-icons";

const Player = ({audioRef, isPlaying, setIsPlaying,songInfo,songs,setSongInfo,setCurrSong,currSong,setSongs}) => {
    
    const playSongHandler = () => {
        if(isPlaying){
            audioRef.current.pause();
            setIsPlaying(false);
        }
        else{
            audioRef.current.play();
            setIsPlaying(true);
        }
    };
    const formatTime = (time) => {
        return(
            Math.floor(time/60) + ":" + Math.floor(time%60)
        );
    };
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime:e.target.value});
    };
    const changeSongHandler = (type) => {
        const index = songs.findIndex((song) => song.id === currSong.id );
        let currIndex = index;
        let currId = index.id;
        if(currIndex !== 0 && type === "backward"){
            currIndex = index-1;
            currId = songs[currIndex].id;
        }
        else if(type === "forward"){
            currIndex = index+1;
            currId = songs[(currIndex)%songs.length].id;
        }
        //play selected song
        playSong(audioRef,isPlaying);
        // change Active value 
        const newSongs = songs.map( (eachSong) => {
            if(eachSong.id === currId ){
                return {
                    ...eachSong,
                    active : true,
                }
            }
            else{
                return {
                    ...eachSong,
                    active : false,
                }
            }
        })
        setSongs(newSongs);
        setCurrSong(songs[currIndex]);
    }
    return (
        <div className="player-container">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input min="0" max={songInfo.duration} onChange={dragHandler} value={songInfo.currentTime} type="range"/>  
                <p>{formatTime(songInfo.duration||0)}</p> 
            </div> 
            <div className="player-control">
                <FontAwesomeIcon onClick={() => changeSongHandler("backward") }size="2x" icon={faBackward} />
                <FontAwesomeIcon onClick={playSongHandler} size="3x" icon={isPlaying? faPauseCircle : faPlayCircle} />
                <FontAwesomeIcon size="2x" onClick={() => changeSongHandler("forward")} icon={faForward} />
            </div>
        </div>
    )
};

export default Player;