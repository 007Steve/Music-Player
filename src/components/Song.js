import React from 'react'
import '../styles/Song.css'
function Song({artist, song, image}) {
    return (
        <div className="song">
            <img className="song-image" src={image} />
            <h3 className="song-artist">{artist}</h3>
            <p className="song-title">{song}</p>
        </div>
    )
}

export default Song
