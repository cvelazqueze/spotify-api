
const router = require('express').Router();
const BandController = require('./controllers/BandController.js');
const UserController = require('./controllers/UserController.js')


router.use(function(req, res, next){
    console.log( req.method, req.url);
    next();
});

router.get(
    '/albums/:band',
    BandController.getBandAlbums,
);

router.get(
    '/band/:band/top-tracks',
    BandController.getBandTopTracks,
);

router.get(
    '/user',
    UserController.getUser,
);

router.put(
    '/user/:userId',
    UserController.updateUser,
);

module.exports = router;