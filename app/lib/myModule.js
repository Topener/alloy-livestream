function createProfilePicture(args) {
    return Alloy.createController('/profilePicture').getView()
}

module.exports = {
    createView: createProfilePicture
};