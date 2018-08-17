require('dotenv').config();

const express = require('express');

const port = process.env.PORT || 4000;
const app = express();

app.use('/', (req, res) => {
  res.statusCode = 200;
  res.json({ status: 'success', message: 'Hello world!', data: {} });
});

app.listen(port, () => {
  console.log(`Server listing on ${port}`);
});
