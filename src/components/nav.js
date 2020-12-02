import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMusic} from "@fortawesome/free-solid-svg-icons";

const Nav = ({libraryStatus,setLibraryStatus}) =>{
    const libraryStatusHandler = () => {
        setLibraryStatus(!libraryStatus);
    }
    return (
        <div className="music-nav">
            <p><i>Music</i></p>
            <button onClick={libraryStatusHandler}>
                Library<FontAwesomeIcon icon={faMusic} />
            </button>
        </div>
    );
}

export default Nav;