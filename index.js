const express = require('express');
const app = express();
const port = 3000;

const audioLinks = [
 "https://drive.google.com/uc?export=download&id=1SDHfamOIXO4D50XZ-rzmzKUXYHRSutLq",
 "https://drive.google.com/uc?export=download&id=1SJEMd-7Yrc-yeMAy_6-E1OywsK8-PRna",
 "https://drive.google.com/uc?export=download&id=1SWFHlBTIqdFNqIfMy024k7wV8UJhB_I8",
 "https://drive.google.com/uc?export=download&id=1SXAmabubMVyljBsADd4SmSLih-UaYWCE",
 "https://drive.google.com/uc?export=download&id=1Sk74UJ-Fmp7b1y4zEtnX_XXYkmXQa4UI",
 "https://drive.google.com/uc?export=download&id=1S_OkNbDVVoTBfVlhAukuo18pTHWSKdAC",
 "https://drive.google.com/uc?export=download&id=1SnrA0TJlsOmYydzliaKJjvWJTWX8GBmE",
 "https://drive.google.com/uc?export=download&id=1SYQCPjPGdz7c1ZpMPamEajHa8jjH0rnC",
 "https://drive.google.com/uc?export=download&id=1SokDhxWjKSjTpEKSeUIHTBqU6PQUHr3u",
 "https://drive.google.com/uc?export=download&id=1SvBWf7oFVb4XKzsK1QEiDKsSJIvXN5xH",
 "https://drive.google.com/uc?export=download&id=1T5Dha-0b3u5Wbhj5Oh0J84039YhEWV8l",
 "https://drive.google.com/uc?export=download&id=1TDxxRcSTBcJ5IFb_YF1vxtczFSo-b57l",
 "https://drive.google.com/uc?export=download&id=1TFQnWOCuzrgfyiOTVfp9uyDnDpD95mkW",
 "https://drive.google.com/uc?export=download&id=1TLdYP6o4es-ycEmIDzjJu8GXGC_xmyUs",
 "https://drive.google.com/uc?export=download&id=1T5zVpkERmZTT2zHPWA2IdTwHy92d_ycq",
 "https://drive.google.com/uc?export=download&id=1T7tGKSBlP0zO0afd7slU_Ooa_oZaqJ2D",
 "https://drive.google.com/uc?export=download&id=1TFfqtFdcUYAtsJI_MlrD5-1QtBAV4yoW",
 "https://drive.google.com/uc?export=download&id=1T86A4Ni0GpzllgYpU1a_laptKNI7PAhf",
 "https://drive.google.com/uc?export=download&id=1TM6QsXKz9AfFQ77XVVZGAacoA8om9Ry3",
 "https://drive.google.com/uc?export=download&id=1TNq6bie2KysuivUNRzHd4p2XD1ZZWUN5",
 "https://drive.google.com/uc?export=download&id=1TUx6SMFeZcesFyxDxoVaKeeeUKAn7iCh",
 "https://drive.google.com/uc?export=download&id=1TQnbFrJ_kQtVF_hU7_H9FmOOfTUsZHj4",
 "https://drive.google.com/uc?export=download&id=1TSw9YgylXH9zWoZWklOd6PLWOJB663hY",
 "https://drive.google.com/uc?export=download&id=1TM_OeVmqnNg4KGiOMvTrSXpd83hGBJpP"
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
