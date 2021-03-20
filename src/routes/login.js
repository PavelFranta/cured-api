import express from 'express';
import { loginPage, loginValidateToken } from '../controllers/';
const loginRouter = express.Router();

loginRouter.post('/', loginPage);
loginRouter.get('/:token', loginValidateToken);

export default loginRouter;