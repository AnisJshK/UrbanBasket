import CartTotal from "../components/CartTotal";
import Title from "../components/Title";

const PlaceOrder = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-20 min-h-[80vh] border-t ml-10 sm:ml-10 sm:pt-20">
      <div className="flex flex-col gap-4 w-full sm:max-w-120 pr-10">
        <div className="text-xl sm:text-2xl my-3 ">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="Last name"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="email"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="City"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="number"
            placeholder="Zip-code"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="text"
            placeholder="Country"
          />
        </div>
         <input
            className="border border-gray-300 rounded py-1.5 px-3.5"
            type="Number"
            placeholder="Phone"
          />
      </div>

    {/* {-----------------------Right Side ----------------} */}
      <div className="mt-8 min-w-120">
        <CartTotal/>
      </div>
    </div>
  );
};

export default PlaceOrder;
