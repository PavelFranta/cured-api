import express from 'express';
import indexRouter from './routes/index';
import loginRouter from './routes/login';
import cors from 'cors';

const app = express();

app.use(cors()),
app.use(express.urlencoded());
app.use(express.json()),
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use((err, req, res, next) => {
  res.status(400).json({ error: err.stack });
});

export default app;
