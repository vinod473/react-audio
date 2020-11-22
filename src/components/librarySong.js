import React from "react";

const LibrarySong = ({song}) => {
    const selectSongHandler = () => {
        
    }
    return (
        <div onClick={selectSongHandler} className="library-song">
            <img src={song.picture} alt=""/>
            <div className="song-info">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    );
};

export default LibrarySong;