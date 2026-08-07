import { useContext, useState, useEffect } from "react";
import { AuthContext, backendUrl } from "../context/AdminAuth";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../assets/admin_assets/assets";

const Orders = () => {
  const { getToken } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllOrders = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(`${backendUrl}/api/order/listOrders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        // newest orders first
        setOrders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const statusHandler = async (event, orderId) => {
    const newStatus = event.target.value;
    try {
      const token = await getToken();
      const response = await axios.post(
        `${backendUrl}/api/order/updateStatus`,
        { orderId, status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setOrders((prev) =>
          prev.map((order) =>
            order._id === orderId ? { ...order, status: newStatus } : order
          )
        );
        toast.success("Order status updated");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <p className="text-gray-500">Loading orders...</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-6">
        Order Page
      </h3>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {orders.map((order, index) => (
            <div
              key={index}
              className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr_1fr] gap-4 items-start border border-gray-200 rounded-lg p-4 bg-white shadow-sm text-sm text-gray-700"
            >
              <img
                src={assets.parcel_icon}
                alt="parcel"
                className="w-10 h-10"
              />

              <div>
                <div className="mb-2">
                  {order.items.map((item, idx) => {
                    const isLast = idx === order.items.length - 1;
                    return (
                      <p key={idx}>
                        {item.name} x {item.quantity}{" "}
                        <span className="text-gray-500">
                          {item.size}
                          {!isLast && ","}
                        </span>
                      </p>
                    );
                  })}
                </div>

                <p className="font-medium text-gray-900">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="text-gray-500">
                  <p>{order.address.street + ","}</p>
                  <p>
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p className="text-gray-500">{order.address.phone}</p>
              </div>

              <div>
                <p>Items: {order.items.length}</p>
                <p>Method: {order.paymentMethod}</p>
                <p>
                  Payment:{" "}
                  <span
                    className={
                      order.payment ? "text-green-600" : "text-orange-500"
                    }
                  >
                    {order.payment ? "Done" : "Pending"}
                  </span>
                </p>
                <p>Date: {new Date(order.date).toLocaleDateString()}</p>
              </div>

              <select
                value={order.status}
                onChange={(event) => statusHandler(event, order._id)}
                className="border border-gray-300 rounded px-2 py-1 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-300"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;