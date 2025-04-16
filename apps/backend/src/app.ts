import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import authRoutes from './auth/auth.routes';
import { authMiddleware } from './auth/auth.middleware';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

app.use('/auth', authRoutes);
app.use(authMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
