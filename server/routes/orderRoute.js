import express from 'express';
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders } from '../controllers/orderController.js';
import { protectAdmin, protectUser } from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/razorpay',protectUser,placeOrderRazorpay);
orderRouter.post('/stripe',protectUser,placeOrderStripe);
orderRouter.post('/placeOrder',protectUser,placeOrder);



orderRouter.post('/list',protectAdmin,allOrders);
orderRouter.post('/status',protectAdmin,updateStatus);

orderRouter.post('/userorders',userOrders);

export default orderRouter;
