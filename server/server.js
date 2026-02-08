import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello from server' });
});

app.listen(5000, () => {
  console.log('web server listening on port 5000');
});
