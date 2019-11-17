import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_l3ZpaOpnFvQdAzbZCfEASh3H00k8Tlx6hL";

    const onToken = token => {
        console.log("This is the token>>>>>>>>>>", token);
        alert("Payment successful");
    }

    return (
        <StripeCheckout
            label= "Pay Now"
            name= "CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel = "Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
