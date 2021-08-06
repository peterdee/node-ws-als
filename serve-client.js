import express from 'express';

const app = express();

app.use(express.static('client'));

app.get('*', (_, res) => res.redirect('/'));

app.listen(
  2112,
  () => console.log('-- serving client application on port 2112'),
);
