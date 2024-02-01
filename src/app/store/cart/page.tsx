import OrderDetails from "@/app/ui/cart/OrderDetails";
import Payment from "@/app/ui/cart/Payment";
import React from "react";

const CartPage = () => {
  return (
    <div className="p-2 flex flex-col w-full ">
      <p className=" text-3xl  ">Welcome Mr. X</p>
      <p className=" text-xl text-zinc-600 pt-2 ">
        Thanks a lot for your purchase. Please complete the checkout.
      </p>
      <div className=" flex flex-wrap xs:flex-col sm:flex-col md:flex-row">
        <OrderDetails />
        <Payment />
      </div>
    </div>
  );
};

export default CartPage;
