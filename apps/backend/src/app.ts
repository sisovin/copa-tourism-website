import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from './middleware/logger';
import authRoutes from './auth/auth.routes';
import blogRoutes from './blog/blog.routes';
import destinationRoutes from './destination/destination.routes';
import packageRoutes from './package/package.routes';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger);

app.use('/auth', authRoutes);
app.use('/blogs', blogRoutes);
app.use('/destinations', destinationRoutes);
app.use('/packages', packageRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use(errorHandler);

export default app;
