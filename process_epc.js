const fs = require('fs');

// Replace 'data.json' with the actual filename of your JSON file
const jsonDataFile = 'data.json';

// Replace 'processed.txt' with the desired filename for the output
const processedFile = 'processed.txt';

function processEPCs(data) {
  const epcList = data.epcList;
  const processedData = epcList.join('\n');

  fs.writeFile(processedFile, processedData, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
      return;
    }
    console.log(`Successfully processed EPCs and saved to ${processedFile}`);
  });
}

fs.readFile(jsonDataFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading JSON file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);
    processEPCs(jsonData);
  } catch (error) {
    console.error('Error parsing JSON data:', error);
  }
});
