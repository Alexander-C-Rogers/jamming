import React from "react";

import './Playlist.css';

import TrackList from "../TrackLList/TrackList";

class Playlist extends React.Component {
    
    handleNameChange(event) {
        this.props.onNameChange(event.target.value);
    }
    
    render() {
        return (
            <div class="Playlist">
                <input defaultValue={"New Playlist"}  />
                <TrackList tracks={this.props.playlsistTracks} 
                    onRemove={this.props.onRemove}
                    isRemoval={true} />
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;