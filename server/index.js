const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Put all API endpoints under '/api'
app.get('/api/hello', (req, res) => {
  res.json({body: 'Hello, world!'});
});

app.get('/api*', (req, res) => {
  res.json({body: 'Endpoint not found.'});
});

// The "catch all" handler: for any request that doesn't match one above, send
// back to the client's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

const HTTP_PORT = process.env.PORT || 5000;
app.listen(HTTP_PORT);

console.log(`Server listening on port ${HTTP_PORT}`);
