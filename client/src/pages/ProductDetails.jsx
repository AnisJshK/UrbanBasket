import  { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";

const ProductDetails = () => {
  const { id } = useParams();
  const { products,currency } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState([" "]);

  useEffect(() => {
    const fetchProductData = () => {
      products.map((item) => {
        if (item._id === id) {
          setProductData(item);
          setImage(item.image[0]);
          return null;
        }
      });
    };
    fetchProductData();
  }, [id, products]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 mt-10 pl-5">
      {/* 1. Kept as a simple column layout so elements stay stacked vertically */}
      <div className=" grid grid-cols-2">
        <div className="flex flex-col gap-6 max-w-4xl mx-auto">
          {/* 2. Main Big Image sits on top now */}
          <div className="w-full">
            <img
              src={image}
              alt={productData.name || "Product"}
              className="w-full h-auto rounded-2xl shadow-lg shadow-green-600/30 object-cover"
            />
          </div>

          {/* 3. Thumbnails Row sits directly below the big image */}
          {/* Changed sm:flex-col back to flex-row and removed fixed sm:w-[18.7%] width */}
          <div className="flex flex-row gap-3 overflow-x-auto pb-2 justify-start w-full">
            {productData.image?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                // Adjusted widths so they look clean in a row across all screens
                className={`w-[22%] max-w-[100px] flex-shrink-0 cursor-pointer rounded-xl shadow transition-all duration-200 ${
                  image === item
                    ? "ring-2 ring-blue-500 scale-95"
                    : "opacity-80 hover:opacity-100"
                }`}
                alt={`Product view ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="flex-1 m-4  ">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(101)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">{currency}{productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">

          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default ProductDetails;
