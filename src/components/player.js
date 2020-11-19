import React,{useRef, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faForward,faBackward,faPauseCircle} from "@fortawesome/free-solid-svg-icons";

const Player = ({currentSong, isPlaying, setIsPlaying}) => {
    const audioRef = useRef(null);
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

    const [songInfo, setSongInfo] = useState({
        duration: 0,
        currentTime: 0
    });
    const timeUpdateHandler = (e) => {
        setSongInfo({duration: e.target.duration ,currentTime: e.target.currentTime});
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
                <p>{formatTime(songInfo.duration)}</p> 
            </div> 
            <div className="player-control">
                <FontAwesomeIcon size="2x" icon={faForward} />
                <FontAwesomeIcon onClick={playSongHandler} size="3x" icon={isPlaying? faPauseCircle : faPlayCircle} />
                <FontAwesomeIcon size="2x" icon={faBackward} />
            </div>
            <audio onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    )
};

export default Player;