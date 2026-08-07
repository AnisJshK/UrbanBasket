import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

const Verify = () => {
  const navigate = useNavigate();
  const { getToken, setCartItems, backendUrl } =
    useContext(ShopContext);
  const [searchParams, setSearchParams] = useSearchParams();

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  const verifyPayment = async () => {
    try {
      const token = await getToken();
      const response = await axios.post(
        `${backendUrl}/api/order/verifyStripe`,
        { success, orderId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data.success) {
        setCartItems({});
        navigate("/my-orders");
      } else {
        navigate("/my-cart");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return <div></div>;
};

export default Verify;
