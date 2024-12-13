const express = require('express');
const app = express();
const port = 3000;

const audioLinks = [
  "link",
  "https://drive.google.com/uc?export=download&id=1RukzVj3lvNHh9hyQkJdVlCXHafszCOhp"
];

app.get('/', (req, res) => {
  res.send("Welcome to the Random Music API! Use /random-link to get a random song.");
});

app.get('/random', (req, res) => {
  const randomLink = audioLinks[Math.floor(Math.random() * audioLinks.length)];
  res.json({ song_url: randomLink });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
