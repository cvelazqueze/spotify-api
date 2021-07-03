const SpotifyResource = module.exports;
const fetch = require("node-fetch");

const logName = 'SpotifyResource: ';

const {
    SPOTIFY_BASE_URL,
    SPOTIFY_TOKEN,
    CLIENT,
    REFRESH_TOKEN,
  } = require('../../config');

const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

const tokenHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: CLIENT
}

SpotifyResource.getToken =async () => {

    var details = {
        grant_type: 'refresh_token',
        refresh_token: REFRESH_TOKEN
    };
    
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    try {
    console.log(`${logName}.getToken for client: ${process.env.CLIENT}`);

      const params = {
          method: 'POST',
          headers: tokenHeaders,
          body: formBody,
          json: true,
      }

      const response = await fetch(`https://accounts.spotify.com/api/token`, params)
      .then(res => res.json());

      return response && typeof response === 'string' ? JSON.parse(response.access_token) : response.access_token;
    } catch (e) {
        throw e + " ERROR: Invalid Request";
    }
}

SpotifyResource.getArtistId = async (artistName, token) => {

    try {
      console.log(`${logName}.getArtistId for Artist: ${artistName}`);

      const params = {
          method: 'GET',
          headers: {
              ...headers,
              Authorization: `Bearer ${token}`
          },
          json: true,
      }
      
      const response = await fetch(`${SPOTIFY_BASE_URL}/search?q=${artistName}&type=artist`, params)
      .then(res => res.json());

      return response && typeof response === 'string' ? JSON.parse(response) : response;
    } catch (e) {
      throw e + " ERROR: Cant get Artist Id";
    }
};

SpotifyResource.getBandAlbums = async (bandId, token) => {
  
    try {
      console.log(`${logName}.getBandAlbums with bandId: ${bandId}`);

      const params = {
        method: 'GET',
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`
        },
        json: true,
      }
      const response = await fetch(`${SPOTIFY_BASE_URL}/artists/${bandId}/albums?market=ES&limit=50`, params)
      .then(res => res.json());
  
      return response && typeof response === 'string' ? JSON.parse(response) : response;
    } catch (e) {
        throw e + " ERROR: Cant get Artist Albums";
    }
};

SpotifyResource.getBandTopTracks = async (bandId, token) => {
  
    try {
      console.log(`${logName}.getBandTopTracks with bandId: ${bandId}`);

      const params = {
        method: 'GET',
        headers: {
            ...headers,
            Authorization: `Bearer ${token}`
        },
        json: true,
      }
      const response = await fetch(`${SPOTIFY_BASE_URL}/artists/${bandId}/top-tracks?market=ES`, params)
      .then(res => res.json());
  
      return response && typeof response === 'string' ? JSON.parse(response) : response;
    } catch (e) {
        throw e + " ERROR: Cant get Artist Albums";
    }
};

SpotifyResource.getUser =async (token) => {

    try {
    console.log(`${logName}.getUser`);

      const params = {
          method: 'GET',
          headers: {
            ...headers,
            Authorization: `Bearer ${token}`
          },
          json: true,
      }

      const response = await fetch(`${SPOTIFY_BASE_URL}/me`, params)
      .then(res => res.json());
      console.log("\nresponse:\n" + JSON.stringify(response))
      return response && typeof response === 'string' ? JSON.parse(response) : response;
    } catch (e) {
        throw e + " ERROR: Invalid Request";
    }
}