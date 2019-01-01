const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Handle JSON requests
app.use(bodyParser.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Put all API endpoints under '/api'
app.route('/api/:room/messages')
  .post((req, res) => {
    console.log(req.body);
    if (typeof req.body !== 'object' || (!req.body.username || !req.body.body)) {
      return res.status(400).json({'error': 'Invalid request.'});
    }
    const now = new Date();
    const payload = {
      ...req.body,
      room: req.params.room,
      created_at: now.toJSON()
    };
    io.emit('message', JSON.stringify(payload));
    res.json({'success': 'Message received.'});
  });

app.get('/api*', (req, res) => {
  res.json({body: 'Endpoint not found.'});
});

// The "catch all" handler: for any request that doesn't match one above, send
// back to the client's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

io.on('connection', (socket) => {
  console.log('[socket.io] User connected');

  socket.on('disconnect', () => {
    console.log('[socket.io] User disconnected');
  });
});

const HTTP_PORT = process.env.PORT || 5000;
http.listen(HTTP_PORT, () => {
  console.log(`Server listening on port ${HTTP_PORT}`);
});

