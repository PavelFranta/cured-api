import express from 'express';
import { loginPage } from '../controllers/';
const loginRouter = express.Router();

loginRouter.get('/', loginPage);

export default loginRouter;