const path = require('path');
const express = require('express');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// serve up all assets from the given directoy
app.use(express.static(publicPath));

app.get('*', (req, res) => {
  // serve index.html in place of 404 responses
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log('Server is up!')
});
