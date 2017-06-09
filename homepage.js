// const $ = require('jquery');

const { getFile } = require('./utils');
const getUsers = require('./db-utils');
const { handleProfile } = require('./controllers.js');

const data = getFile('./users.txt')
    .then(getUsers)
    .then(function (users) {
        return users.reduce((acc, user) => {
            acc.push('<li><a href="/users/' + user.id + '">' + user.firstName + ' ' + user.lastName + '</a></li>');
            return acc;
        }, [])
    })
    .then((data) => {
        const index = './index.html';
        const match = index.match(/{{{[list]+}}}/g);
        return data.join(' ').replace(match, data).writeHead(200, { 'Content-Type': 'text/html' }).end(index);
    })
    .then(console.log);