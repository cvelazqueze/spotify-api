const UserService = module.exports;

const { response } = require('express');
const User = require('../../models/user.js')

//Resources
const SpotifyResource = require('../resources/SpotifyResource.js');

UserService.getUser = async () => {

    const token = await SpotifyResource.getToken();

    const userData = await SpotifyResource.getUser(token);

    let user = new User()
    user.country = userData.country
    user.display_name = userData.display_name
    user.followers = userData.followers.total
    user.user_type = userData.type

    user.save((err, userStored) =>{
        if (err) {
            return 'ERROR al guardar el usuario';
        }
        return userStored;
     }    
    )
    return{userData}
};

UserService.updateUser = async (userId, data) => {

    User.findByIdAndUpdate(userId, data, (err, userStored) =>{
        if (err) {
            return 'ERROR al actualizar el usuario';
        }
        return userStored;
     }    
    )
    return{userData}
};