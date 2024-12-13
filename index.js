const express = require('express');
const app = express();
const port = 3000;

const audioLinks = [
 "https://drive.google.com/uc?export=download&id=1SDHfamOIXO4D50XZ-rzmzKUXYHRSutLq",
 "https://drive.google.com/uc?export=download&id=1SJEMd-7Yrc-yeMAy_6-E1OywsK8-PRna"
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
