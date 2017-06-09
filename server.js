const fs = require('fs');
const http = require('http');


const router = require('./router');
const { handleProfile, handleHome } = require('./controllers');

const server = http.createServer((req, res) => {
    const path = req.url;
    const userId = path.split('/')[2];
    const handler = router(path);
    if (handler === 'profileHandler') {
        handleProfile(userId, res);
    } else if (handler === 'homeHandler') {
        handleHome(res);
    }
});

server.listen(3000);