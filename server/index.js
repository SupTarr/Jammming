require("dotenv").config({ path: "./.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const lyricsFinder = require("lyrics-finder");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: err,
      });
    });
});

app.post("/login", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      res.status(400).send({
        message: err,
      });
    });
});

app.get("/search", async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    accessToken: req.query.accessToken,
  });

  spotifyApi
    .searchTracks(req.query.term)
    .then((data) => {
      res.send(
        data.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0],
          );

          return {
            id: track.id,
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            album: track.album.name,
            albumUrl: smallestAlbumImage.url,
          };
        }),
      );
    })
    .catch((err) => {
      res.status(400).send({
        message: err,
      });
    });
});

app.post("/save", async (req, res) => {
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    accessToken: req.body.accessToken,
  });

  spotifyApi
    .createPlaylist(req.body.playlistName)
    .then((data) => {
      console.log(data.id)
      spotifyApi.addTracksToPlaylist(data.body.id, req.body.uris)
        .then(() => {
          res.json({
            message: "Playlist created successfully",
          });
        })
        .catch((err) => {
          res.status(400).send({
            message: err,
          });
        });
    })
    .catch((err) => {
      res.status(400).send({
        message: err,
      });
    });
});

app.get("/lyrics", async (req, res) => {
  const lyrics =
    (await lyricsFinder(req.query.artist, req.query.track)) ||
    "No Lyrics Found";
  res.json({ lyrics });
});

app.listen(3001);
