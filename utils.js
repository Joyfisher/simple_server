const fs = require('fs');

exports.getFile = function(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, buff) => {
            if (err) return reject(err);
            resolve(buff.toString());
        });
    });
};