const fs = require('fs');
const path = './output.txt';

const content = 'This is the content to write into the file';

fs.writeFile(path, content, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File has been written');
});