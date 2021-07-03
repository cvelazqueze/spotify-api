const BandsService = module.exports;

//Resources
const SpotifyResource = require('../resources/SpotifyResource.js');

BandsService.getBandAlbums = async (artistName) => {
    const token = await SpotifyResource.getToken();

    const artistResponse = await SpotifyResource.getArtistId(artistName, token);

    const artistId = artistResponse.artists.items[0].id;
    
    const albums = await SpotifyResource.getBandAlbums(artistId, token);
    
    return albums.items.map((album) => ({
        name: album.name,
        released: album.release_date
    }));
};

BandsService.getBandTopTracks = async (artistName) => {
    const token = await SpotifyResource.getToken();

    const artistResponse = await SpotifyResource.getArtistId(artistName, token);

    const artistId = artistResponse.artists.items[0].id;
    
    const topTracks = await SpotifyResource.getBandTopTracks(artistId, token);
    
    return topTracks;
};