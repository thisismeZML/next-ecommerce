"use client";

import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className=" w-max absolute p-4 rounded-md top-12 right-0 text-sm shadow-lg flex flex-col gap-6 z-20 bg-white">
      {!cartItems ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          {/* HEADER */}
          <h2 className="text-xl">Shopping Cart</h2>
          {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/1510529/pexels-photo-1510529.jpeg?auto=compress&cs=tinysrgb&w=800"
                width={72}
                height={96}
                alt="cart"
                className="object-cover  rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-bold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500">avaiable</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty : 2</span>
                  <span className="text-blue-500 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/1510529/pexels-photo-1510529.jpeg?auto=compress&cs=tinysrgb&w=800"
                width={72}
                height={96}
                alt="cart"
                className="object-cover  rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div>
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-bold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">$49</div>
                  </div>
                  {/* DESCRIPTION */}
                  <div className="text-sm text-gray-500">avaiable</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty : 2</span>
                  <span className="text-blue-500 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className=" rounded-md ring-1 ring-gray-300 py-2 px-4">
                View Cart
              </button>
              <button className=" rounded-md bg-black text-white py-2 px-4">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
