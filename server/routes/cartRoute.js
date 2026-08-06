import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cartController'
import { protectUser } from '../middleware/auth';
const cartRouter = express.Router()

cartRouter.get('/getCart',protectUser,getUserCart);
cartRouter.post('/addToCart',protectUser,addToCart);
cartRouter.put('/updateCart',protectUser,updateCart);

export default cartRouter;