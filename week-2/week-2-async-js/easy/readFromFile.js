const fs = require('fs');
const path = './3-read-from-file.md';

fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);

    // Expensive operation
    let sum = 0;
    for (let i = 0; i < 1e9; i++) {
        sum += i;
    }
    console.log('Expensive operation result:', sum);
});