const fs = require('fs');
const path = require('path');

// Function to clean file content
function cleanFile(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading the file:', err);
            return;
        }
        const cleanedData = data.replace(/\s+/g, ' ').trim();

        fs.writeFile(filePath, cleanedData, 'utf8', (err) => {
            if (err) {
                console.error('Error writing the file:', err);
                return;
            }
            console.log('File cleaned successfully.');
        });
    });
}

const filePath = path.join(__dirname, '1-file-cleaner.md');

// Clean the file
cleanFile(filePath);