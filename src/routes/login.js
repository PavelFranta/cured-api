import express from 'express';
import { loginPage } from '../controllers/';
const loginRouter = express.Router();

loginRouter.post('/', loginPage);

export default loginRouter;