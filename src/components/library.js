import React from "react";
import LibrarySong from "./librarySong";

const Library = ({songs,setCurrSong,setSongs,audioRef,isPlaying,libraryStatus}) => {
    return (
        <div className={`library ${libraryStatus?"active-status":""}`}>
            <div className="library-songs">
                {
                    songs.map((song) => (
                        <LibrarySong 
                            song={song} 
                            setCurrSong={setCurrSong} 
                            songs={songs} 
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