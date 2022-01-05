const clientId = ' 5c833c43016344dc98ad03a126b10388';
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }
    }
}

export default Spotify;