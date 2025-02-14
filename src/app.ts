import express from 'express';
import cors from 'cors';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import notFound from './app/errors/notFound';

const app = express();

// parser
app.use(express.json());
app.use(cors());

app.use(cors({ origin: ['https://dreams-portfolio-frontend.vercel.app'], credentials: true }));

// application routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.send('Server is running');
});

// global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);

export default app;
