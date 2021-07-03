const BandController = module.exports;
const BandsService = require('../services/BandsService.js');

const logName = 'BandController: ';

BandController.getBandAlbums = async (req, res, next) => {
  const { options = {} } = req;
  try {
    const { params: { band } } = req;
    console.log(logName, `..executing: getBandAlbums for band: ${band}`);

    const response = await BandsService.getBandAlbums(band);

    return res.send(response);
  } catch (e) {
    return next('ERROR: Could not getBandAlbums');
  }
};

BandController.getBandTopTracks = async (req, res, next) => {
  const { options = {} } = req;
  try {
    const { params: { band } } = req;
    console.log(logName, `..executing: getBandTopTracks for band: ${band}`);

    const response = await BandsService.getBandTopTracks(band);

    return res.send(response);
  } catch (e) {
    return next('ERROR: Could not getBandAlbums');
  }
};