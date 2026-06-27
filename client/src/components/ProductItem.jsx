import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, name, image, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      className="group text-gray-700 cursor-pointer rounded-2xl p-2 block
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-100
                 hover:bg-green-50/40"
      to={`/products/${id}`}
    >
      <div className="overflow-hidden rounded-xl bg-gray-50 relative">
        <img
          className="w-full transition-transform duration-500 ease-out
                     group-hover:scale-110"
          src={image[0]}
          alt={name}
        />
        {/* subtle green sheen on hover */}
        <div
          className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5
                         transition-colors duration-300"
        />
      </div>

      <p
        className="pt-3 pb-1 text-sm transition-colors duration-300
                     group-hover:text-green-700"
      >
        {name}
      </p>

      <p
        className="text-sm font-medium text-gray-900 transition-colors duration-300
                     group-hover:text-green-600"
      >
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
