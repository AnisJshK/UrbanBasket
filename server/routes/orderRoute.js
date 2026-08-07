import express from 'express';
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders, verifyRazorpay, verifyStripe } from '../controllers/orderController.js';
import { protectAdmin, protectUser } from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/razorpay',protectUser,placeOrderRazorpay);
orderRouter.post('/stripe',protectUser,placeOrderStripe);
orderRouter.post('/placeOrder',protectUser,placeOrder);



orderRouter.get('/listOrders',protectAdmin,allOrders);
orderRouter.post('/status',protectAdmin,updateStatus);

orderRouter.post('/userorders',protectUser,userOrders);


orderRouter.post('/verifyStripe',protectUser,verifyStripe)
orderRouter.post('/verifyRazorpay',protectUser,verifyRazorpay)

export default orderRouter;
