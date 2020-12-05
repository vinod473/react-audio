import React from "react";
import {playSong} from "../util";

const LibrarySong = ({songs,song,setCurrSong,setSongs,audioRef,isPlaying}) => {
    const selectSongHandler = () => {
        setCurrSong(song);
        //play selected song
        playSong(audioRef,isPlaying);

        // change Active value 
        const newSongs = songs.map( (eachSong) => {
            if(eachSong.id === song.id ){
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
    };
    return (
        <div onClick={selectSongHandler} 
            className={`library-song ${song.active===true ? 'selected' : "" }` }>
            <img src={song.picture} alt=""/>
            <div className="song-info">
                <h2>{song.name}</h2>
                <h3>{song.artist}</h3>
            </div>
        </div>
    );
};

export default LibrarySong;