export const initialState = {
  basket: [
    {
      id: "1234134186",
      title:
        "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, Sept. 13 2011",
      price: 42.96,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "1234134186",
      title:
        "The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, Sept. 13 2011",
      price: 42.96,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg",
    },
    {
      id: "12341341",
      title:
        "EKeurig K-Duo Essentials Single Serve and Carafe Coffee Maker, Black",
      price: 128.99,
      rating: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/61-KUPluVYL._AC_SL1500_.jpg",
    },
  ],
  user: null,
};

function reducer(state, action) {
  // To debug, the console.log is important
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      // Logic for removing item from basket...
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        // item exist in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in basket!`
        );
      }

      return { ...state, basket: newBasket };
    default:
      return state;
  }
}

export default reducer;
