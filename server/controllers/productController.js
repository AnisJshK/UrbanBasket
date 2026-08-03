import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js';

const addProduct = async(req,res)=>{
    
    try {
        const {name,description,price,category,subcategory,sizes,bestseller} = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 &&req.files.image2[0];
        const image3 =req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 &&req.files.image4[0];
    
        const images = [image1,image2,image3,image4].filter((item)=>item!==undefined)

        let imagesUrl = await Promise.all(
            images.map(async(item)=>{
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url;
            })
        )

        const productData = {
            name,
            description,
            category,
            price:Number(price),
            category,
            subcategory,
            bestseller:bestseller === "true"?true:false,
            sizes:typeof sizes==="string"?JSON.parse(sizes.replace(/'/g,'"')):sizes,
            image:imagesUrl,
            date:Date.now()
        }
        console.log(productData);

        const product = new productModel(productData);
        await product.save();

        res.json({
            success:true,
            message:"Product added successfully"
        })
    } catch (error) {
        
        console.log(error)
        res.json({
            success:false,
            message:error.message
        })
        
    }


}

const listProducts = async(req,res)=>{

    try {
        const products = await productModel.find({});
        res.json({success:true,products});
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,message:error.message
        })
    }

}

const removeProduct = async(req,res)=>{
    try {
        const {id} = req.body;
        const productexists = productModel.find(id);
        if(productexists){

            await productModel.findByIdAndDelete(req.body.id)
            res.json({success:true,message:"Product has been removed"})
        }else{
            return res.json({success:false,message:"Product not found"})
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            success:false,
            message:error.message
        })
    }


}

const singleProduct = async(req,res)=>{
    try {
        const {productId} = req.body;
        const product = await productModel.findById(productId);
        if(product){
            res.json({
                success:true,
                product
            })
        }else{
            return res.status(403).json({
                success:false,
                message:"product not found"
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

export {listProducts,addProduct,removeProduct,singleProduct}