import React from "react";

import './Playlist.css';

import TrackList from "../TrackLList/TrackList";

class Playlist extends React.Component {
    render() {
        return (
            <div class="Playlist">
                <input defaultValue={"New Playlist"}  />
                <TrackList tracks={this.props.playlsistTracks}  />
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;