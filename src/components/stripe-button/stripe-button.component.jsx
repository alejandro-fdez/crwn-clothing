import React from "react";
import StripeCheckout from "react-stripe-checkout";

import CustomButton from "../custom-button/custom-button.component";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K4qIuADskMjDi3olOUwacxAHNsoocRWbGTqwstpN0hNC5nt1iebyG0dWu9iwDYppkPtmX4Ft7MFn5Kn6oFqeUdX00zk7vItBj";
  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    >
      <CustomButton>Pay Now</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;
