const express = require('express');
const app = express();
const port = 3000;

// Sample data
const sampleData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

// Route to get data
app.get('/api/data', (req, res) => {
  res.json(sampleData);
});

// Default route
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
