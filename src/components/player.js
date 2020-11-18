import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlayCircle,faForward,faBackward} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
    return (
        <div className="player-container">
            <div className="time-control">
                <p>start time</p>
                <input type="range"/>  
                <p>end time</p> 
            </div> 
            <div className="player-control">
                <FontAwesomeIcon size="2x" icon={faForward} />
                <FontAwesomeIcon size="3x" icon={faPlayCircle} />
                <FontAwesomeIcon size="2x" icon={faBackward} />
            </div>
        </div>
    )
};

export default Player;