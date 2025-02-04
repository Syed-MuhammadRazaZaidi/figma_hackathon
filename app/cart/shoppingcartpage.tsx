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
  const [error, setError] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [attempts, setAttempts] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleApplyCoupon = () => {
    if (attempts >= 3) {
      alert("Too many attempts. Please try again later.");
      return;
    }
    const sanitizedCode = couponCode.trim().toUpperCase();
    if (sanitizedCode === "DISCOUNT10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
      setAttempts(attempts + 1);
      alert("Invalid coupon code. Please try again.");
    }
  };

  const handleQuantityChange = (id: string, value: string) => {
    const quantity = parseInt(value);
    if (isNaN(quantity) || quantity < 0) {
      alert("Invalid quantity. Please enter a valid number.");
      return;
    }
    if (quantity > 10) {
      alert("Maximum quantity limit reached.");
      return;
    }
    updateQuantity(id, quantity);
  };

  const handleProceedToCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add items to proceed.");
      return;
    }
    const cartData = {
      cartItems,
      cartSubtotal,
      discount,
      shippingCharges,
      totalAmount
    };
    try {
      // Simulate a successful checkout process
      const queryString = new URLSearchParams({
        cartData: JSON.stringify(cartData)
      }).toString();
      router.push(`/checkout/checkout?${queryString}`);
    } catch (error) {
      console.error("Checkout error:", error);
      setCheckoutError("Checkout failed. Please try again.");
    }
  };

  const cartSubtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCharges = 30.0;
  const totalAmount = cartSubtotal - cartSubtotal * discount + shippingCharges;

  if (!isClient) {
    return null;
  }

  return (
    <div className="bg-white font-sans">
      <div className="bg-white py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-28">
        {cartItems.length === 0 ? (
          <p className="bg-white text-center text-gray-500">Your cart is empty. Start shopping now!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="bg-white w-full border-separate" style={{ borderSpacing: '0 10px' }}>
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="bg-gray-100 p-4 font-semibold border">Product</th>
                  <th className="bg-gray-100 p-4 font-semibold border">Price</th>
                  <th className="bg-gray-100 p-4 font-semibold border">Quantity</th>
                  <th className="bg-gray-100 p-4 font-semibold border">Total</th>
                  <th className="bg-gray-100 font-semibold border">Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="bg-white border-b">
                    <td className="bg-white p-4 flex items-center border">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={64}
                        height={64}
                        className="bg-white w-16 h-16 object-cover rounded mr-4"
                        loading="lazy"
                      />
                      <span className="bg-white mr-16 ">{item.name}</span>
                    </td>
                    <td className="bg-white p-4 border">${item.price.toFixed(2)}</td>
                    <td className="bg-white p-4 border">
                      <Input
                        type="number"
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                        className="bg-white w-16 border rounded px-2 py-1 text-center"
                        min="0"
                      />
                    </td>
                    <td className="bg-white p-4 border">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="bg-white p-4 text-center text-red-500 cursor-pointer border" onClick={() => removeItem(item.id)}>
                      &times;
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="bg-white flex flex-col lg:flex-row justify-between items-start lg:items-center mt-10 space-y-6 lg:space-y-0 lg:space-x-10">
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
            {discount === 0 && couponCode !== "" && (
              <p className="bg-white text-red-500 text-sm mt-2">Invalid coupon code.</p>
            )}
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
              {checkoutError && (
                <p className="bg-white text-red-500 text-sm mt-2">{checkoutError}</p>
              )}
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