import React from "react";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();

  // let cart = {};
  // basket.map((item) => {
  //   cart[item.id]
  //     ? cart[item.id].quantity++
  //     : (cart[item.id] = {
  //         id: item.id,
  //         title: item.title,
  //         image: item.image,
  //         price: item.price,
  //         rating: item.rating,
  //         quantity: 1,
  //       });
  // });

  // console.log(cart);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="ad"
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no item in your basket. Click "Add to basket" to add item
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* List out all of the checkout products */}

            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                quantity={item.quantity}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
