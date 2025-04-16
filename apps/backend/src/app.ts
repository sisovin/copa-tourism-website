import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import authRoutes from './auth/auth.routes';
import { authMiddleware } from './auth/auth.middleware';
import blogRoutes from './blog/blog.routes';
import destinationRoutes from './destination/destination.routes';
import packageRoutes from './package/package.routes';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

app.use('/auth', authRoutes);
app.use(authMiddleware);
app.use('/blogs', blogRoutes);
app.use('/destinations', destinationRoutes);
app.use('/packages', packageRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

export default app;
