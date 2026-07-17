import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import { ShoppingCart } from "lucide-react";
import RelatedProducts from "../components/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const fetchProductData = () => {
      // Replaced .map with .find for better performance and semantic correctness
      const product = products.find((item) => item._id === id);
      if (product) {
        setProductData(product);
        setImage(product.image[0]);
      }
    };
    fetchProductData();
  }, [id, products]);

  // WIP: Add Buy Now button taking to Razorpay.
  // WIP: Add add to cart functionality here

  return productData ? (
    <div className="my-10 border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 mt-10 px-4 md:px-10">
      {/* Responsive layout: 1 column on mobile, 2 columns on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Left Side: Images Section */}
        <div className="flex flex-col gap-4 w-full">
          {/* Main Big Image */}
          <div className="w-full aspect-square md:aspect-auto">
            <img
              src={image}
              alt={productData.name || "Product"}
              className="w-full h-auto max-h-[500px] rounded-2xl shadow-lg shadow-green-600/10 lg:object-cover sm:object-contain mx-auto"
            />
          </div>

          {/* Thumbnails Row */}
          <div className="flex flex-row gap-3 overflow-x-auto pb-2 justify-start w-full scrollbar-thin">
            {productData.image?.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className={`w-20 h-20 object-cover flex-shrink-0 cursor-pointer rounded-xl shadow transition-all duration-200 ${
                  image === item
                    ? "ring-2 ring-green-500 scale-95"
                    : "opacity-80 hover:opacity-100"
                }`}
                alt={`Product view ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right Side: Product Info Info Section */}
        <div className="flex flex-col justify-light">
          <h1 className="font-semibold text-2xl md:text-3xl text-gray-800">
            {productData.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3.5 h-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5 h-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5 h-3.5" />
            <img src={assets.star_icon} alt="" className="w-3.5 h-3.5" />
            <img src={assets.star_dull_icon} alt="" className="w-3.5 h-3.5" />
            <p className="pl-2 text-sm text-gray-500">(101)</p>
          </div>

          <p className="mt-5 text-3xl font-medium text-green-700">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-600 leading-relaxed text-sm md:text-base">
            {productData.description}
          </p>

          <div className="w-full h-px bg-gray-200 my-6 rounded-2xl"></div>

          {/* Sizes */}
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-gray-700">Available Sizes</p>
            <div className="flex gap-3">
              {productData.sizes?.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  key={index}
                  className={`flex h-10 w-10 border border-gray-300 items-center justify-center cursor-pointer font-medium text-sm transition-all rounded hover:bg-green-500/10 ${
                    size === item
                      ? "bg-green-600 text-white border-green-600"
                      : "text-gray-700"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <button onClick={()=>addToCart(productData._id,size)} className="sm:flex-1 flex items-center justify-center gap-2 border-2 border-green-600 text-green-700 font-medium h-12 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-200 ">
              Add to Collection <ShoppingCart size={18} />
            </button>

            <button className="sm:flex-1 flex items-center justify-center bg-green-600 text-white font-medium h-12 rounded-xl hover:bg-green-700 transition-all duration-200 shadow-lg shadow-green-600/20">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
              <div className="flex">
                <b className="border rounded px-5 py-3 text-sm">Description</b>
                <p className="border rounded px-5 py-3 text-sm">Reviews (122)</p>
              </div>
              <div className="flex flex-col gap-4 border rounded-2xl px-6 py-6 text-sm text-gray-500">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi temporibus, culpa, molestiae, dolorem debitis nesciunt laborum eaque mollitia pariatur maiores atque! Doloremque, quasi modi repudiandae molestiae eos architecto. Aliquid, enim!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam laborum non fuga adipisci repudiandae ad minima, sint nobis, aspernatur libero quasi enim. Quo, corrupti rem optio veritatis quod odit accusantium?</p>
              </div>
      </div>

      {/*-------------display related products---------------------*/}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} ></RelatedProducts>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-gray-400">Loading Product...</div>
    </div>
  );
};

export default ProductDetails;
