import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './middleware/logger';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
