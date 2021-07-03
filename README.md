# spotify-api

Spotify-api project was created to search an artist albums and top-tracks, also to get the user currently using the API.

## Installation
```bash
npm i
```
## Usage
.env file is required to declare ENVIRONMENT VARIABLES
```javascript
// .env
SPOTIFY_TOKEN='Bearer BQ...A' //Use the TOKEN received by the API
CLIENT='Basic NG...A=' //Use the ClientId:Clientpass given by spotify API
REFRESH_TOKEN='AQ...ok' // Use the REFRESH TOKEN received by the API
```
## Endpoints
```javascript
GET:
  /albums/:band     //Get Albums by Band Name
  /band/:band/top-tracks    //Get Band top-tracks by Band Name
  /user   //Retrieve current user profile information

PUT:
  /user/:userId   //Update data on user
```
## Author
Cesar IV
