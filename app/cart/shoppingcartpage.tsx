"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "../context/CartContext";
import { useRouter } from 'next/navigation';

const ShoppingCart: React.FC = () => {
  const { cartItems, removeItem, updateQuantity } = useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleApplyCoupon = () => {
    if (couponCode === "DISCOUNT10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const handleProceedToCheckout = () => {
    const cartData = {
      cartItems,
      cartSubtotal,
      discount,
      shippingCharges,
      totalAmount
    };

    const queryString = new URLSearchParams({
      cartData: JSON.stringify(cartData)
    }).toString();

    router.push(`/checkout?${queryString}`);
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 30.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-white font-sans">
      <div className="bg-white py-12 px-6 md:px-16 lg:px-28">
        {cartItems.length === 0 ? (
          <p className="bg-white">Your cart is empty.</p>
        ) : (
          <table className="bg-white w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="bg-gray-100 p-4 font-semibold">Product</th>
                <th className="bg-gray-100 p-4 font-semibold">Price</th>
                <th className="bg-gray-100 p-4 font-semibold">Quantity</th>
                <th className="bg-gray-100 p-4 font-semibold">Total</th>
                <th className="bg-gray-100 p-4 font-semibold">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="bg-white border-b">
                  <td className="bg-white p-4 flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="bg-white w-16 h-16 object-cover rounded mr-4"
                    />
                    <span className="bg-white">{item.name}</span>
                  </td>
                  <td className="bg-white p-4">${item.price.toFixed(2)}</td>
                  <td className="bg-white p-4">
                    <Input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 0)}
                      className="bg-white w-16 border rounded px-2 py-1 text-center"
                      min="0"
                    />
                  </td>
                  <td className="bg-white p-4">${(item.price * item.quantity).toFixed(2)}</td>
                  <td className="bg-white p-4 text-red-500 cursor-pointer" onClick={() => removeItem(item.id)}>
                    &times;
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        <div className="bg-white flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10">
          <div className="bg-white w-full lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="bg-white text-lg font-semibold mb-2">Coupon Code</h2>
            <div className="bg-white flex items-center">
              <input
                type="text"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                placeholder="Enter your code"
                className="bg-white flex-grow border rounded-l px-4 py-2"
              />
              <Button
                onClick={handleApplyCoupon}
                className="bg-orange-500 text-white px-6 py-2 rounded-r font-semibold"
              >
                Apply
              </Button>
            </div>
          </div>

          <div className="bg-white w-full lg:w-1/3">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="bg-white flex justify-between mb-4">
                <span className="bg-white">Cart Subtotal</span>
                <span className="bg-white">${cartSubtotal.toFixed(2)}</span>
              </div>
              <div className="bg-white flex justify-between mb-4">
                <span className="bg-white">Discount</span>
                <span className="bg-white">${(cartSubtotal * discount).toFixed(2)}</span>
              </div>
              <div className="bg-white flex justify-between mb-4">
                <span className="bg-white">Shipping Charges</span>
                <span className="bg-white">${shippingCharges.toFixed(2)}</span>
              </div>
              <div className="bg-white flex justify-between font-semibold text-lg">
                <span className="bg-white">Total Amount</span>
                <span className="bg-white">${totalAmount.toFixed(2)}</span>
              </div>
              <Button
                onClick={handleProceedToCheckout}
                className="w-full bg-orange-500 text-white mt-4 py-3 rounded font-semibold"
              >
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;