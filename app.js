import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';

dotenv.config({ path: './.env' });

const app = express();

// MIDDLEWARES
// ============

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// ROUTES HANDLERS
// ================

// Note: The routes are handled in the routes folder. The routes are then imported into the app.js file and used as middleware.

// ROUTES
// =======

app.use('/api/v1/products', productRouter);
app.use('/api/v1/users', userRouter);

export default app;
