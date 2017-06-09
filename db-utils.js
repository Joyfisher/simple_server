function getRawUsers(rawDb) {
    return rawDb.split('\n**********\n');
}

function getRawUserProps(rawUser) {
    return rawUser.split('\n');
}

function getUser(rawUserProps) {
    // rawUserProps [lines]
    return rawUserProps.reduce((user, rawUserProp) => {
        const keyVal = rawUserProp.split(': ');
        const key = keyVal[0];
        const value = keyVal[1];
        user[key] = value;
        return user;
    }, {});
}

module.exports = function getUsers(rawDb) {
    return getRawUsers(rawDb).map((rawUser) => {
        return getUser(getRawUserProps(rawUser));
    });
};