import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length ? (
      cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    ) : (
      <span className="empty-message">Your cart is empty</span>
    )}
    <div className="total">TOTAL: ${total}</div>
    <div className="test-warning">
      <h3 className="test-title">
        *Please use the following test credit card for payments*:{" "}
      </h3>
      <ul>
        <li>
          <b>Email:</b> Any Email
        </li>
        <li>
          <b>Number:</b> 4242 4242 4242 4242
        </li>
        <li>
          <b>Date:</b> Any Date in the Future
        </li>
        <li>
          <b>CVC:</b> Any 3 Numbers
        </li>
      </ul>
      <div>
        <StripeCheckoutButton price={total} />
      </div>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
