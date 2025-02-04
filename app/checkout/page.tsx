"use client";

import React, { useState, useEffect } from "react";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { createPaymentIntent } from "./action";
import { useSearchParams, useRouter } from "next/navigation";
import StripeHero from "./StripeHero";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

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

export default function StripePage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [cartDetails, setCartDetails] = useState<CartDetails>({ cartItems: [] });
  const searchParams = useSearchParams();
  const amount = searchParams.get("amount");
  const cartData = searchParams.get("cartData");

  useEffect(() => {
    if (amount) {
      const amountInCents = parseFloat(amount) * 100;
      createPaymentIntent(amountInCents)
        .then((res) => {
          setClientSecret(res.clientSecret);
        })
        .catch((error) => {
          console.error("Error creating PaymentIntent:", error);
        });
    }

    if (cartData) {
      setCartDetails(JSON.parse(decodeURIComponent(cartData)));
    }
  }, [amount, cartData]);

  if (!clientSecret) {
    return <div className="bg-white container mx-auto flex items-center justify-center">Loading...</div>;
  }

  return (
    <>
      <StripeHero />
      <div className="bg-white container mx-auto flex items-center justify-center p-16">
        <div className="bg-white" style={{ maxWidth: 800, width: "100%", padding: 20 }}>
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <PaymentForm totalAmount={amount} />
          </Elements>
        </div>
      </div>
    </>
  );
}

function PaymentForm({ totalAmount }: { totalAmount: string | null }) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      redirect: "if_required",
    });

    if (error) {
      setErrorMessage(error.message || "An unknown error occurred");
      setIsProcessing(false);
    } else {
      setErrorMessage(null);
      alert("Payment successful! Thank you for your purchase.");
      setIsProcessing(false);
      router.push("/checkout/thankyou");
    }
  };

  return (
    <form className="bg-white" onSubmit={handleSubmit}>
      <PaymentElement className="bg-white" />
      <button className="w-full bg-orange-500 text-white mt-4 py-3 rounded text-3xl font-bold" type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? "Processing..." : `Pay Now $${totalAmount}`}
      </button>
      {errorMessage && <div className="bg-white" style={{ color: "red", marginTop: 8 }}>{errorMessage}</div>}
    </form>
  );
}