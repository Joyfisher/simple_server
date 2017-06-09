const _ = require('underscore');

const { getFile } = require('./utils');
const getUsers = require('./db-utils');

// console.log(getFile('./users.txt').then(console.log));

exports.handleProfile = function (userId, res) {
    Promise.all([getFile('./users.txt'), getFile('./template.html')])
        .then(([rawDb, template]) => {
            const user = _.find(getUsers(rawDb), (user) => {
                return user.id === userId;
            });
            var matches = template.match(/{{{[a-zA-Z]+}}}/g);
            matches.forEach((match) => {
                template = template.replace(match, user[match.slice(3, match.length - 3)]);
            });
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(template);
        })
        .catch(e => console.log(e));
};

exports.handleHome = function(res) {
    getFile('./users.txt')
    .then(getUsers)
    .then(function (users) {
        console.log(users);
        return users.reduce((acc, user) => {
            return acc + ('<li><a href="/users/' + user.id + '">' + user.firstName + ' ' + user.lastName + '</a></li>');
        }, '')
    })
    .then((data) => {
        getFile('./index.html').then((index) => {
            const match = index.match(/{{{[list]+}}}/g);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data.replace(match[0], data));
        });
    })
    .then(console.log);
};