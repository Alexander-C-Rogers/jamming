import React from "react";

class Playlist extends React.Component {
    render() {
        return (
            <div class="Playlist">
                <input defaultValue={"New Playlist"}/>
                {/* <TrackList />*/}
                <button class="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}

export default Playlist;