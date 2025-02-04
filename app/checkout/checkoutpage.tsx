"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartDetails {
  cartItems: CartItem[];
}

interface ShippingDetails {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}

const CheckoutPage: React.FC = () => {
  const [cartDetails, setCartDetails] = useState<CartDetails>({ cartItems: [] });
  const [shippingDetails, setShippingDetails] = useState<ShippingDetails>({
    firstName: '',
    lastName: '',
    email: '',
    contactNumber: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [voucher, setVoucher] = useState<string>('');
  const [shippingCharge, setShippingCharge] = useState<number>(30);
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const cartData = query.get('cartData');
    if (cartData) {
      try {
        const parsedData = JSON.parse(cartData);
        setCartDetails(parsedData);
      } catch (error) {
        console.error('Invalid cart data:', error);
      }
    }
  }, []);

  const totalPrice = cartDetails.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = voucher === 'DISCOUNT10' ? 0.1 * totalPrice : 0;
  const finalPrice = totalPrice + shippingCharge - discount;

  const clearCart = () => {
    setCartDetails({ cartItems: [] });
  };

  const handleCheckout = () => {
    const isShippingDetailsComplete = Object.values(shippingDetails).every(detail => detail.trim() !== '');
    if (!isShippingDetailsComplete) {
      alert('Please fill in all shipping details before proceeding to checkout.');
      return;
    }
    const cartData = JSON.stringify(cartDetails);
    router.push(`/checkout?amount=${finalPrice}&cartData=${encodeURIComponent(cartData)}`);
  };

  const sanitizeInput = (input: string): string => {
    return input.replace(/[^a-zA-Z0-9\s@.-]/g, '');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(sanitizedValue)) {
      alert('Please enter a valid email address.');
      return;
    }
    if (name === 'contactNumber' && !/^\d+$/.test(sanitizedValue)) {
      alert('Please enter a valid contact number.');
      return;
    }
    setShippingDetails(prevDetails => ({
      ...prevDetails,
      [name]: sanitizedValue,
    }));
  };

  const handleVoucherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVoucher(e.target.value);
  };

  const removeItem = (id: string) => {
    setCartDetails(prevDetails => ({
      ...prevDetails,
      cartItems: prevDetails.cartItems.filter(item => item.id !== id),
    }));
  };

  return (
    <div className="bg-white font-sans min-h-screen flex flex-col">
      <main className="bg-white flex-grow py-12 px-4 sm:px-6 md:px-8 lg:px-28 xl:px-40">
        <div className="bg-white mb-6">
          <h2 className="bg-white text-lg font-semibold mb-4">Shipping Details</h2>
          <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={shippingDetails.firstName}
              onChange={handleInputChange}
              className="bg-white mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={shippingDetails.lastName}
              onChange={handleInputChange}
              className="bg-white mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={shippingDetails.email}
              onChange={handleInputChange}
              className="bg-white mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              name="contactNumber"
              placeholder="Contact Number"
              value={shippingDetails.contactNumber}
              onChange={handleInputChange}
              className="bg-white mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingDetails.address}
              onChange={handleInputChange}
              className="bg-white mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingDetails.city}
              onChange={handleInputChange}
              className="bg-white mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              name="postalCode"
              placeholder="Postal Code"
              value={shippingDetails.postalCode}
              onChange={handleInputChange}
              className="bg-white mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={shippingDetails.country}
              onChange={handleInputChange}
              className="bg-white mb-2 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>
        {cartDetails.cartItems.length > 0 && (
          <div className='bg-white'>
            <h2 className="bg-white text-lg font-semibold mb-4">Order Summary</h2>
            <div className="overflow-x-auto bg-white">
              <table className="bg-white mb-6 w-full border-collapse text-center">
                <thead className='bg-white'>
                  <tr className="bg-gray-200">
                    <th className="bg-white border p-2">Product</th>
                    <th className="bg-white border p-2">Name</th>
                    <th className="bg-white border p-2">Price</th>
                    <th className="bg-white border p-2">Quantity</th>
                    <th className="bg-white border p-2">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartDetails.cartItems.map(item => (
                    <tr key={item.id} className="bg-white">
                      <td className="bg-white border p-2 flex items-center justify-center">
                        <Image src={item.image} alt={item.name} height={64} width={64} className="bg-white w-16 h-16 object-cover" />
                      </td>
                      <td className="bg-white border p-2">{item.name}</td>
                      <td className="bg-white border p-2">${item.price.toFixed(2)}</td>
                      <td className="bg-white border p-2">{item.quantity}</td>
                      <td className="bg-white border p-2">${(item.price * item.quantity).toFixed(2)}</td>
                      <td className="bg-white border p-2"><button onClick={() => removeItem(item.id)} className="bg-white text-red-500 font-extrabold px-2 py-1 rounded">✕</button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-white mb-4">
              <input
                type="text"
                placeholder="Enter Voucher Code"
                value={voucher}
                onChange={handleVoucherChange}
                className="bg-white mb-2 p-2 border border-gray-300 rounded w-full"
              />
            </div>
            <div className="bg-white flex justify-between font-semibold text-lg mb-4">
              <span className='bg-white'>Subtotal</span>
              <span className='bg-white'>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="bg-white flex justify-between font-semibold text-lg mb-4">
              <span className='bg-white'>Shipping Charge</span>
              <span className='bg-white'>${shippingCharge.toFixed(2)}</span>
            </div>
            {discount > 0 && (
              <div className="bg-white flex justify-between font-semibold text-lg mb-4">
                <span className='bg-white'>Discount</span>
                <span className='bg-white'>-${discount.toFixed(2)}</span>
              </div>
            )}
            <div className="bg-white flex justify-between font-semibold text-lg mb-4">
              <span className='bg-white'>Total Amount</span>
              <span className='bg-white'>${finalPrice.toFixed(2)}</span>
            </div>
            <Button onClick={handleCheckout} className="w-full bg-orange-500 text-white mt-4 py-3 rounded font-semibold">
              Place Order
            </Button>
          </div>
        )}
      </main>
    </div>
  );
};

export default CheckoutPage;