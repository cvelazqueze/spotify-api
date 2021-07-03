const dotenv = require('dotenv')

dotenv.config();

const { env } = process;

const {
  CLIENT,
  SPOTIFY_BASE_URL = 'https://api.spotify.com/v1',
  SPOTIFY_TOKEN,
  REFRESH_TOKEN,
} = env;

module.exports = {
  CLIENT,
  SPOTIFY_BASE_URL,
  SPOTIFY_TOKEN,
  REFRESH_TOKEN,
};