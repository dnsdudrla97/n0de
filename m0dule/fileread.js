const fs = require('fs');

fs.readFile('/proc/cpuinfo', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});
