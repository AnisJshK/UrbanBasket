import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cartController.js'
import { protectUser } from '../middleware/auth.js';
const cartRouter = express.Router()

cartRouter.get('/getCart',protectUser,getUserCart);
cartRouter.post('/addToCart',protectUser,addToCart);
cartRouter.post('/updateCart',protectUser,updateCart);

export default cartRouter;