import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

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

const getAllProducts = (req, res) => {
  res.status(200).json({
    message: 'Get all products',
  });
};

// ROUTES
// =======

app.get('/api/v1/products', getAllProducts);

export default app;
