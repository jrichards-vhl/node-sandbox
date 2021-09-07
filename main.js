const express = require('express');
const app = express();
const port = 3003;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile('./public/index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
