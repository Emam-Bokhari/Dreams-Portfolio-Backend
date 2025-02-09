import express from 'express';
import cors from 'cors';
import router from './app/routes';
import { globalErrorHandler } from './app/middlewares/globalErrorHandler';
import notFound from './app/errors/notFound';

const app = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (req, res) => {
  res.json({
    server: 'Server is running...',
    time: new Date().toLocaleString('en-US', { timeZone: 'Asia/Dhaka' }),
  });
});

// global error handler
app.use(globalErrorHandler);

// not found handler
app.use(notFound);

export default app;
