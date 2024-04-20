const http = require('http');
const admin = require('firebase-admin');
const fs = require('fs');
const csvParser = require('csv-parser');

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'gs://brocode-c596b.appspot.com'
});

const server = http.createServer(async (req, res) => {
  if (req.url === '/data' && req.method === 'GET') {
    try {
      // Reference to the CSV file in Firebase storage
      const bucket = admin.storage().bucket();
      const file = bucket.file('gs://brocode-c596b.appspot.com/BroCode/processed-sales-train.csv'); // Replace with the path to your CSV file

      // Download the CSV file
      const [data] = await file.download();
      const csvData = data.toString(); // Convert buffer to string

      // Parse the CSV data
      const results = [];
      fs.createReadStream(csvData)
        .pipe(csvParser())
        .on('data', (row) => {
          results.push(row);
        })
        .on('end', () => {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify(results)); // Send the parsed data as JSON response
        });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal server error' }));
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
