module.exports = function (path) {
    if (path === '/') return 'homeHandler';
    const resource = path.split('/')[1];
    const userId = path.split('/')[2];
    if (resource === 'users' && userId) return 'profileHandler';
};