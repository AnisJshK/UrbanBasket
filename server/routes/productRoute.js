import express from 'express';
import { listProducts,addProduct,removeProduct,singleProduct } from '../controllers/productController.js';
import Upload from '../middleware/multer.js';
import { protectAdmin } from '../middleware/auth.js';

const productRouter = express.Router();

productRouter.post('/add',protectAdmin,Upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),addProduct);
productRouter.post('/remove',removeProduct);
productRouter.post('/single',singleProduct);
productRouter.get('/list',listProducts);


export default productRouter;