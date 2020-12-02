import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faForward,faBackward,faPauseCircle} from "@fortawesome/free-solid-svg-icons";

const Player = ({audioRef, isPlaying, setIsPlaying,songInfo,setSongInfo}) => {
    
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
    return (
        <div className="player-container">
            <div className="time-control">
                <p>{formatTime(songInfo.currentTime)}</p>
                <input min="0" max={songInfo.duration} onChange={dragHandler} value={songInfo.currentTime} type="range"/>  
                <p>{formatTime(songInfo.duration||0)}</p> 
            </div> 
            <div className="player-control">
                <FontAwesomeIcon size="2x" icon={faForward} />
                <FontAwesomeIcon onClick={playSongHandler} size="3x" icon={isPlaying? faPauseCircle : faPlayCircle} />
                <FontAwesomeIcon size="2x" icon={faBackward} />
            </div>
        </div>
    )
};

export default Player;