const clientId = import.meta.env.VITE_API_KEY;
const redirectUri = import.meta.env.VITE_URL;
const spotifyUrl = `https://accounts.spotify.com/authorize?response_type=token&scope=playlist-modify-public&client_id=${clientId}&redirect_uri=${redirectUri}&&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;
let accessToken = undefined;
let expiresIn = undefined;

const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    }
    const urlAccessToken = window.location.href.match(/access_token=([^&]*)/);
    const urlExpiresIn = window.location.href.match(/expires_in=([^&]*)/);
    if (urlAccessToken && urlExpiresIn) {
      accessToken = urlAccessToken[1];
      expiresIn = urlExpiresIn[1];
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      window.history.pushState("Access Token", null, "/");
    } else {
      window.location = spotifyUrl;
    }
  },

  async search(term) {
    const replaceEmptySpace = term.replace(" ", "%20");
    const searchUrl = `https://api.spotify.com/v1/search?type=track&q=${replaceEmptySpace}`;
    return fetch(searchUrl, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (!jsonResponse.tracks) return [];
        return jsonResponse.tracks.items.map((track) => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          };
        });
      });
  },

  async savePlaylist(name, trackIds) {
    if (Array.isArray(trackIds) && trackIds.length) {
      const createPlaylistUrl = `https://api.spotify.com/v1/me/playlists`;
      const response = await fetch(createPlaylistUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name: name,
          public: true,
        }),
      });
      const jsonResponse = await response.json();
      const playlistId = jsonResponse.id;
      if (playlistId) {
        const replacePlaylistTracksUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
        await fetch(replacePlaylistTracksUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            uris: trackIds,
          }),
        });
      }
    }
  },
};

export default Spotify;
