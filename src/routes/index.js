import { Router } from 'express';
import userRoute from './userRoute';
import productRoute from './productRoute';

const route = new Router();

route.use(userRoute);
route.use(productRoute);

export default route;