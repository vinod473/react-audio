import React from "react";
import LibrarySong from "./librarySong";

const Library = ({allSongs}) => {
    return (
        <div className="library">
            <p>Library</p>
            <div className="library-songs">
                {
                    allSongs.map((song) => (
                        <LibrarySong song={song} />
                    ))
                }
            </div>
        </div>
    );
};

export default Library;