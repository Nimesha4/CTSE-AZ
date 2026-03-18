const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); 

app.get('/', (req, res) => {
  res.send('Gateway service running locally!');
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(port, () => {
  console.log(`Gateway running at http://localhost:${port}`);
});