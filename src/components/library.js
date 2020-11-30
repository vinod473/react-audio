import React from "react";
import LibrarySong from "./librarySong";

const Library = ({allSongs,setCurrSong,setSongs,audioRef,isPlaying}) => {
    return (
        <div className="library">
            <p>Library</p>
            <div className="library-songs">
                {
                    allSongs.map((song) => (
                        <LibrarySong 
                            song={song} 
                            setCurrSong={setCurrSong} 
                            allSongs={allSongs} 
                            setSongs={setSongs}
                            audioRef={audioRef}
                            isPlaying={isPlaying}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Library;