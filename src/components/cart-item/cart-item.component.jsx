import React from "react";
import { connect } from "react-redux";

import "./cart-item.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser, // user.currentUser Comes from the root reducer
});

const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser: (user) => dispatch(setCurrentUser(user)), // user is what we receive from the setCurrentUser prop call
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
